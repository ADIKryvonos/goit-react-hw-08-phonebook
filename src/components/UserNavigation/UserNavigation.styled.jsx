import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrap = styled.header`
  padding: 10px;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
  display: flex;
  background-color: grey;
  align-items: center;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Nav = styled.nav`
  gap: 10px;
  display: flex;
`;

export const UserWrap = styled.div`
  gap: 10px;
  display: flex;
`;

export const P = styled.p`
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin: 0;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;

  color: white;
  font-size: 14px;
  background-color: orangered;
  border: none;

  &:hover {
    color: black;
  }
`;
