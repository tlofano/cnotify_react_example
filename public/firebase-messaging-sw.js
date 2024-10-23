// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseCredentials = {
  apiKey: 'AIzaSyCFDNquwHoyWehLBXOAFOn0IXJuSw89Mic',
  authDomain: 'cnotify-react-example.firebaseapp.com',
  projectId: 'cnotify-react-example',
  storageBucket: 'cnotify-react-example.appspot.com',
  messagingSenderId: '524968841698',
  appId: '1:524968841698:web:5704bb0574c6fc7ef7e9bb',
  measurementId: 'G-74DFE2MTYE',
};

firebase.initializeApp(firebaseCredentials);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);
});
