import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "react-avatar";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import FavButton from "./favButton";
function Emailbody() {
  const [emailBody, setEmailBody] = useState({});
  const [display, setDisplay] = useState(false);
  const selectedEmail = useSelector((state) => state.selectedEemail);
  // const allEmails = useSelector((state) => state.allEmails.emails);
  const dispatch = useDispatch();
  console.log("**********");
  // console.log(selectedEmail);
  // console.log(allEmails);
  console.log("------>");
  useEffect(() => {
    const url = `https://flipkart-email-mock.now.sh/?id=${selectedEmail.id}`;
    setDisplay(false);
    console.log(url);
    const fetchData = async () => {
      await axios.get(url).then((res) => {
        console.log(res.data);
        setEmailBody(res.data);
        setDisplay(true);
      });
    };
    fetchData();
  }, [selectedEmail]);
  if (display == false)
    return (
      <>
        <div>Loading...</div>
      </>
    );
  return (
    <>
      {display && (
        <div
          style={{
            width: "800px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            border: "1px solid #cfd2dc",
            borderRadius: "10px",
          }}
        >
          {/* {emailBody.body} */}
          <div style={{ margin: "15px" }}>
            {" "}
            <Avatar name={selectedEmail.from.name} size="70" round="50%" />
          </div>
          <div style={{}}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <div>
                  <h2>{selectedEmail.subject}</h2>
                </div>
                <div>
                  {moment(selectedEmail.date).format("L")}
                  {"  "}
                  {moment(selectedEmail.date).format("LT")}
                </div>
              </div>
              <div style={{ padding: "20px" }}>
                <FavButton id={selectedEmail.id} />
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: emailBody.body }} />
          </div>
        </div>
      )}
    </>
  );
}
export default React.memo(Emailbody);
