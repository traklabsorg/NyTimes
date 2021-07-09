import React from "react";
import Sticky from "react-stickynode";

const Navbar = (props) => {
  return (
    <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
      <nav
        className={`navbar navbar-expand-lg navbar-nav navbar-dark bg-light`}
      >
        <div className="container">
          <a href="/">
            <div>NY Times Most Popular Articles</div>
          </a>
        </div>
      </nav>
    </Sticky>
  );
};

export default Navbar;
