import React from "react";

export const Navbar = () => {
  return (
    <div className="container nav">
      <div className="row">
       
        <div className="col-md-12">

        <div className="navbar navbar-light bg-light ">
          <h1>
            <span className="name">NISSI.</span>Verse
          </h1>
        </div>

        <div className=" navbar navbar-light bg-light center">
          <span class="navbar-brand mb-0 h1">About Us</span>

          <span class="navbar-brand mb-0 h1">Our Project</span>

          <span class="navbar-brand mb-0 h1">Community</span>

          <span class="navbar-brand mb-0 h1">Resources</span>
        </div>

        <div className=" ">
          <button>Sign up</button>
        </div>

        </div>
      </div>
    </div>
  );
};