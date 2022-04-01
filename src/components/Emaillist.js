import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/actions/emailActions";
import EmailElement from "./EmailElement";

export default function Emaillist({ showEmailBody }) {
  // const [emailLists, setEmailLists] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const url = "https://flipkart-email-mock.now.sh/?page=1";

    const fetchEmails = async () => {
      await axios.get(url).then((res) => {
        // setEmailLists(res.data["list"]);
        dispatch(setEmails(res.data["list"]));
      });
    };
    fetchEmails();
  }, []);

  // useEffect(() => {
  //   console.log(emailLists);
  // }, [emailLists]);
  return (
    <>
      <EmailElement showEmailBody={showEmailBody} />
    </>
  );
}
