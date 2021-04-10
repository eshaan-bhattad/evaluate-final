import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <nav class="navbar bg-primary justify-content-center">
        <div class="container-fluid">
          <div class="navbar-header text-white">
                  <a class="navbar-brand text-white">Evaluat</a>     
          </div>
          <ul class="text-nowrap navbar-header text-white">
                  
            <a href="#Home" class="text-white">
              Home
            </a>
                  
            <a href="#Profile" class="text-white">
              Profile
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}
