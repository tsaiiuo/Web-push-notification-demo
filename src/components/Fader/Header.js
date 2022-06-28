import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../App.css";

const Header = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

Header.defaultProps = {
  text: "Hello World!",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
