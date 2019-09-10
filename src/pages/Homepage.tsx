import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomepageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
`;

const CountriesDirectoryLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  font-size: 24px;
  border-radius: 10px;
  border: 2px solid black;
  color: black;
  transition: all linear 0.1s;

  :hover {
    background-color: black;
    color: white;
    transform: scale(0.95);
  }

  :active {
    transform: scale(0.9);
  }
`;

const HomePage: FC<Props> = () => {
  return (
    <HomepageWrapper>
      <Title>Countries Overview</Title>
      <p>
        On this page you can get information about the different countries on
        the planet earth in the milky way galaxy
      </p>
      <CountriesDirectoryLink to="/countries">
        Go to Countries Directory
      </CountriesDirectoryLink>
    </HomepageWrapper>
  );
};

export default HomePage;

interface Props {}
