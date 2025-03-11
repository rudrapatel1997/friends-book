 // Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8t_VufeGcTI1ik2ELxhhTdkAxCFHQ5xg",
  authDomain: "friends-book-b00ad.firebaseapp.com",
  projectId: "friends-book-b00ad",
  storageBucket: "friends-book-b00ad.firebasestorage.app",
  messagingSenderId: "97826768405",
  appId: "1:97826768405:web:02e88075ab9c8450c1b01c",
  measurementId: "G-M69FJLDZB8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to submit name
async function submitName() {
    const nameInput = document.getElementById('friendName');
    const messageDiv = document.getElementById('message');
    const name = nameInput.value.trim();

    if (name === '') {
        showMessage('Please enter your name!', 'error');
        return;
    }

    try {
        // Add name to Firebase with timestamp
        await db.collection('friends').add({
            name: name,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Show success message
        showMessage(`Thanks ${name}! You're now in my friends book! 🎉`, 'success');
        
        // Clear input
        nameInput.value = '';

        // Refresh the friends list
        await loadFriends();
    } catch (error) {
        console.error("Error adding friend: ", error);
        showMessage('Oops! Something went wrong. Please try again.', 'error');
    }
}

// Function to show messages
function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.style.display = 'block';
    
    if (type === 'error') {
        messageDiv.style.backgroundColor = '#ffebee';
        messageDiv.style.color = '#c62828';
    } else {
        messageDiv.style.backgroundColor = '#e8f5e9';
        messageDiv.style.color = '#2e7d32';
    }

    // Hide message after 5 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

// Function to load and display friends
async function loadFriends() {
    const friendsList = document.querySelector('.friends-list ul');
    const friendsCount = document.querySelector('.friends-count');
    
    try {
        const snapshot = await db.collection('friends')
            .orderBy('timestamp', 'desc')
            .get();

        friendsList.innerHTML = '';
        const count = snapshot.size;
        friendsCount.textContent = `${count} friend${count !== 1 ? 's' : ''} so far!`;

        snapshot.forEach((doc) => {
            const li = document.createElement('li');
            li.textContent = doc.data().name;
            friendsList.appendChild(li);
        });
    } catch (error) {
        console.error("Error loading friends: ", error);
        friendsCount.textContent = 'Error loading friends';
    }
}

// Add enter key support
document.getElementById('friendName').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        submitName();
    }
});

// Load friends when page loads
loadFriends();