import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Такої сторінки не істнує.</h1>
      <Link to='/'> На головну </Link>
    </div>
  );
};
export default Error;
