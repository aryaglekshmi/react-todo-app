// function Header(data) {
//   return <h1>Hello Am the Header {data.childSurName}</h1>;
// }

import { Component } from "react";

class Header extends Component {
  render() {
    return <h1>Hello Am the Header {this.props.childSurName}</h1>;
  }
}

export default Header;
