import React from "react";
import { Link } from "react-router";

const SocialCircle = ({ linkAddress, content }) => {
  return (
    <li className="h-9 w-9">
      <Link to={linkAddress} target="_blank" className={`h-full w-full`} >
        {content}
      </Link>
    </li>
  );
};

export default SocialCircle;
