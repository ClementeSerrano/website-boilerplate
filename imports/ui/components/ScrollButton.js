import React, { Component } from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

class ScrollButton extends Component {
  render() {
    return (
      <div>
        <ButtonStyle
          href={this.props.linkto}
          backgroundcolor={this.props.backgroundcolor}
          color={this.props.color}
          hovercolor={this.props.hovercolor}
        >
          {this.props.content}
        </ButtonStyle>
      </div>
    );
  }
}

export default ScrollButton;

const ButtonStyle = styled(AnchorLink)`
  margin-top: 100px;
  margin-bottom: 50px;
  text-decoration: none;
  :focus,
  :hover {
    text-decoration: none;
    color: white;
  }
  display: inline-block;
  padding: 12px 24px;
  border: 1px solid #fff;
  border-radius: 4px;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.backgroundcolor};
  color: ${props => props.color};
  font-size: 15px;
  font-family: "Libre Franklin", sans-serif;
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: ${props => props.hovercolor};
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }
  &:hover {
    color: #ffffff;
    border: 1px solid ${props => props.hovercolor};
    z-index: 1;
    &:before {
      top: -35%;
      background-color: ${props => props.hovercolor};
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }
    &:after {
      top: -45%;
      background-color: ${props => props.hovercolor};
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }
  }
`;
