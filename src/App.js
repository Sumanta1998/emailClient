import "./App.css";
import Emaillist from "./components/Emaillist";
import Header from "./components/Header";
import Emailbody from "./components/emailbody";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // const [listWidth, setListWidth] = useState("100%");
  // const [displayBody, setDisplayBody] = useState("none");
  // const dispatch = useDispatch();
  const selectedEemail = useSelector((state) => state.selectedEemail);
  console.log("ok");
  console.log(selectedEemail.display);
  // if (selectedEemail.display) {
  //   setListWidth("30%");
  //   setDisplayBody("block");
  // }

  // const showEmailBody = () => {
  // console.log(email);
  // dispatch(selectedEmail(email));
  // setListWidth(listWidth == "30%" ? "100%" : "30%");
  // };
  return (
    <div className="App">
      <Header />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: selectedEemail.display == true ? "30%" : "100%" }}>
          <Emaillist />
        </div>
        {selectedEemail.display == true && (
          <div style={{ display: selectedEemail.display ? "block" : "none" }}>
            <Emailbody />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
