import CNotifySDK from '@eruka-tech/cnotify-sdk';

const firebaseCredentials = {
  apiKey: 'AIzaSyCFDNquwHoyWehLBXOAFOn0IXJuSw89Mic',
  authDomain: 'cnotify-react-example.firebaseapp.com',
  projectId: 'cnotify-react-example',
  storageBucket: 'cnotify-react-example.appspot.com',
  messagingSenderId: '524968841698',
  appId: '1:524968841698:web:5704bb0574c6fc7ef7e9bb',
  measurementId: 'G-74DFE2MTYE',
};

// Initialize CNotifySDK from configs
export const cnotify = CNotifySDK.getInstance(
  { apiKey: '66489452-6511-417f-9830-8126b829b90f' },
  {
    testing: true,
    firebaseConfig: firebaseCredentials,
  }
);
