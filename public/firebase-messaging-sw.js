importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");
firebase.initializeApp({
  apiKey: "AIzaSyAGNqyBDHsGb6-ic6F6I2cag4dKm717Gio",
  authDomain: "web-push-notification-de-2ce60.firebaseapp.com",
  projectId: "web-push-notification-de-2ce60",
  storageBucket: "web-push-notification-de-2ce60.appspot.com",
  messagingSenderId: "1028705538105",
  appId: "1:1028705538105:web:700fc3b863045f356a7de8",
  measurementId: "G-J8B4KZHFTG",
});

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
