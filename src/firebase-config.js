/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyAJKVlQybQySvmv9EyduwscRyrbkjO4tUA",
  authDomain: "friendlychat-a740a.firebaseapp.com",
  projectId: "friendlychat-a740a",
  storageBucket: "friendlychat-a740a.appspot.com",
  messagingSenderId: "711245536639",
  appId: "1:711245536639:web:f012e7839363476a08ce4a",
  measurementId: "G-XM5T8E4XRR"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}