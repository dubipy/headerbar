import styled from "styled-components";
import React, { useState } from "react";

const StyledHeader = styled.header`
  background: #f8f9f9;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px;
  height: 85px;
  list-style: none;
  display: flex;
  padding-top: 15px;
  box-sizing: border-box;
`;
const LogoLink = styled.a`
  font-size: 30px;
  text-decoration: none;
  color: #222;
  margin: 0 1.5rem;
  display: flex;
  padding: 15px 20px;

  b {
    font-weight: bold;
  }

  .logoImage {
    height: 40px;
  }
`;

const MenuItem = styled.a`
  font-size: 22px;
  padding: 15px 20px;
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  padding: 10px;
`;

const SearchItem = styled.div`
  padding: 9px 20px;
  width: 43%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 6px;
`;

const MenuButton = styled.div`
  list-style: none;
  padding: 15px 10px;
`;
const MenuButtonA = styled.a`
  text-decoration: none;
  color: #39739c;
  background: #e1ecf4;
  border: 1px solid #39739c;
  padding: 15px;
`;
const MenuButtonB = styled.a`
  text-decoration: none;
  background: #0995fe;
  color: #fff;
  border: 1px solid #0995fe;
  padding: 15px;
  margin-left: 12px;
`;

const MenuIcon = styled.div`
  font-size: 25px;
  padding: 17px 20px;
  margin-left: 15px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  `
  const DropDownContainer = styled("div")`
`;

const DropDownHeader = styled("div")`
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 500;
  background: #F8F9F9;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #F8F9F9;
  box-sizing: border-box;
  color: rgba(0,0,0,0.5);
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = ["Questions"];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  return (
    <StyledHeader>
      <MenuIcon>

      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
        ☰
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      </MenuIcon>
      <LogoLink href="" className="logo">
        <img className="logoImage" src="./img/logo.png" />
        Stack<b>Overflow</b>
      </LogoLink>
      <MenuItem>
        <MenuLink href="" className="about">
          about
        </MenuLink>
        <MenuLink href="" className="product">
          product
        </MenuLink>
        <MenuLink href="" className="forTeams">
          forTeams
        </MenuLink>
      </MenuItem>
      <SearchItem>
        <form action="" className="search">
          <SearchInput type="text" placeholder="Search..." />
        </form>
      </SearchItem>
      <MenuButton>
        <MenuButtonA href="" className="login">
          Log in
        </MenuButtonA>
        <MenuButtonB href="" className="signup">
          Sign Up
        </MenuButtonB>
      </MenuButton>
    </StyledHeader>
  );
}

export default Header;
