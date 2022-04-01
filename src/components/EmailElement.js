import React, { useState } from "react";
import moment from "moment";
import Avatar from "react-avatar";
import { useSelector, useDispatch } from "react-redux";
import { selectedEmail, markEmailRead } from "../redux/actions/emailActions";

export default function EmailElement({ showEmailBody }) {
  const emails = useSelector((state) => state.allEmails.emails);
  const filterBy = useSelector((state) => state.filterBy.filterBy);
  console.log("filterBy " + filterBy);
  const dispatch = useDispatch();

  const renderList = emails
    .filter((email) => {
      if (filterBy == "read") return email.markRead;
      else if (filterBy == "favorite") return email.favorite;
      else if (filterBy == "unread") return !email.markRead;
      else return email;
    })
    .map((email) => {
      const { id, from, date, subject, short_description } = email;
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
            border: "1px solid #cfd2dc",
            borderRadius: "10px",
            backgroundColor: email.markRead ? "white" : "#ebebe8",
            padding: "5px",
            color: "#636363",
          }}
          onClick={() => {
            // showEmailBody;
            dispatch(selectedEmail(email));
            dispatch(markEmailRead(id));
          }}
          key={id}
        >
          <div>
            <Avatar name={from.name} size="70" round="50%" />
          </div>
          <div style={{ paddingLeft: "5px" }}>
            <div style={{ fontWeight: "bold" }}>
              from: {from.name} {"<"}
              {from.email}
              {">"}
            </div>
            <div>Subject: {subject}</div>
            <div>{short_description}</div>
            <div>
              {moment(date).format("L")}
              {"  "}
              {moment(date).format("LT")}
            </div>
            {email.favorite && (
              <span
                style={{
                  backgroundColor: "pink",
                  color: "white",
                  borderRadius: "5px",
                  // padding: "5px",
                  // margin: "5px",
                }}
              >
                favorite
              </span>
            )}
          </div>
        </div>
      );
    });
  return <>{renderList}</>;
}
