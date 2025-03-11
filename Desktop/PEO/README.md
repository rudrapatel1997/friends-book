 # My Friends Book

A simple and beautiful digital friendship book where friends can leave their names. Built with HTML, CSS, and JavaScript, using Firebase for data storage.

## Features

- Clean, modern UI
- Real-time updates
- Mobile-friendly design
- PWA support
- GitHub Pages ready

## Setup

1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Firestore Database in your Firebase project
3. Replace the Firebase configuration in `app.js` with your own
4. Deploy to GitHub Pages:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
5. Enable GitHub Pages in your repository settings (Settings > Pages)
   - Set branch to `main`
   - Set folder to `/ (root)`

## Firebase Configuration

Replace the following in `app.js`:
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

## Sharing with Friends

After deployment, share your GitHub Pages URL with friends!