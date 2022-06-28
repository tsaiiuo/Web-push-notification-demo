import firebase from "firebase/compat/app";
import "firebase/compat/messaging";

const config = {
  apiKey: "AIzaSyAGNqyBDHsGb6-ic6F6I2cag4dKm717Gio",
  authDomain: "web-push-notification-de-2ce60.firebaseapp.com",
  projectId: "web-push-notification-de-2ce60",
  storageBucket: "web-push-notification-de-2ce60.appspot.com",
  messagingSenderId: "1028705538105",
  appId: "1:1028705538105:web:700fc3b863045f356a7de8",
  measurementId: "G-J8B4KZHFTG",
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

//generate publicKey
export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

//listen for nitification
export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      console.log("on Message is set up");
      resolve(payload);
    });
  });
