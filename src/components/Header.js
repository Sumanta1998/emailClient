import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { markFilterBy } from "../redux/actions/emailActions";

export default function Header() {
  const dispatch = useDispatch();
  const setRead = () => {
    dispatch(markFilterBy("read"));
  };
  const setUnread = () => {
    dispatch(markFilterBy("unread"));
  };
  const setFav = () => {
    dispatch(markFilterBy("favorite"));
  };
  return (
    <>
      <div style={{ margin: "5px" }}>
        filter by : <button onClick={setUnread}>Unread</button>{" "}
        <button onClick={setRead}>Read</button>{" "}
        <button onClick={setFav}>favorites</button>
      </div>
    </>
  );
}
