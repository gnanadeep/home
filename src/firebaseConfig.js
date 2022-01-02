const firebaseConfig = {
    apiKey: process.env.REACT_APP_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_PUBLIC_STORAGE_BUCKET,
    appId: process.env.REACT_APP_PUBLIC_STORAGE_BUCKET,
    measurementId: process.env.REACT_APP_PUBLIC_STORAGE_BUCKET,
  };

export default firebaseConfig;