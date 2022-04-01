import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { markFavorite } from "../redux/actions/emailActions";

export default function FavButton({ id }) {
  const dispatch = useDispatch();
  const favMethod = () => {
    dispatch(markFavorite(id));
  };

  return <button onClick={favMethod}>Mark as favorite</button>;
}
