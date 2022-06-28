import "./App.css";
import Header from "./components/Fader/Header";

import React, { useState } from "react";
import { onMessageListener } from "./firebaseInit";
import Notifications from "./components/Notifications/Notifications";
import ReactNotificationComponent from "./components/Notifications/ReactNotification";
import Text from "../src/components/Text/Text";

function App() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  //check state
  console.log(show, notification);

  //call onMessaging
  onMessageListener()
    .then((payload) => {
      console.log(payload);
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
    })
    .catch((err) => console.log("failed: ", err));

  return (
    <div className="App">
      {show ? (
        <ReactNotificationComponent
          title={notification.title}
          body={notification.body}
        />
      ) : (
        <></>
      )}
      <Notifications />
      <Header text="Web push notification demo test @Firebase8.8"></Header>
      <Text text="Console Log has token" />
      <Text text="We can push notification to user via firebase platform with token" />
    </div>
  );
}

export default App;
