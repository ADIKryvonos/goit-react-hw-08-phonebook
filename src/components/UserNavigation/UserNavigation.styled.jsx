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
  background-color: #007bff;
  border: none;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  &.active {
    background-color: #0056b3;
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

export const AuthWrap = styled.div`
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
  background-color: #007bff;
  border: none;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #0069d9;
  }
`;
