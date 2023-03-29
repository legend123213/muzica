import React from "react";
import styled from "@emotion/styled";
import Home from "../home";
import My_music from "../my_music";
import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <React.Fragment>
      <StyledNav>
        <StyledList>
          <StyledItem>
            <Navspan>
              <Link to="/home">Home</Link>
            </Navspan>
          </StyledItem>
          <StyledItem>
            <Link to="/album">Album</Link>
          </StyledItem>
          <StyledItem>
            <Link to="/create">Music</Link>
          </StyledItem>
          <StyledItem>
            <Link to="/login">Login</Link>
          </StyledItem>
        </StyledList>
      </StyledNav>
    </React.Fragment>
  );
};
const Navspan = styled.span`
  background-color: #333333;
`;
const StyledNav = styled.nav`
  height: 5vh;
  background-color: #333333;
  padding: 20px;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  /* margin: 0; */
  padding: 0;
  width: 75%;
  margin: auto;
  background-color: #333333;
`;

const StyledItem = styled.li`
  margin: 0 10px;
  background-color: #333333;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Navbar;
