import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <nav class="navbar top_bar_bg_color justify-content-center">
        <div class="container-fluid">
              
          <div class="navbar-header">
                  <a class="navbar-brand">Evaluat</a>     
          </div>
          <ul class="text-nowrap navbar-header text-white">
                  <a href="#Home">Home</a>
                  <a href="#Profile">Profile</a>
          </ul>
        </div>
      </nav>
    );
  }
}
