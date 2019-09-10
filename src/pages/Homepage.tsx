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

const Description = styled.p`
  font-size: 24px;
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
      <Description>
        On this page you can get information about the different countries on
        the planet earth in the milky way galaxy
      </Description>
      <CountriesDirectoryLink to="/countries">
        Go to Countries Directory
      </CountriesDirectoryLink>

      <h3>
        I was not sure about the amount of work I should put into this, but
        since I am not even 100% sure if you are still looking for someone I
        submit it like this. If you want to see any other features, just tell me
      </h3>

      <p>
        Psst... For a better overview of my skills, have a look at the project I
        planned and built completely on my own:{" "}
        <a target="_blank" rel="noreferrer" href="https://www.plezzles.com">
          Plezzles
        </a>{" "}
        and the tools I used{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.notion.so/zarazas/Libraries-I-am-using-for-Plezzles-2ed06c73dd3e4ca9886f3201d9bd7434"
        >
          here.
        </a>{" "}
        or my Portfolio Page:{" "}
        <a target="_blank" rel="noreferrer" href="https://www.rahwn.com">
          Rahwn Websites
        </a>
        . If you want I can also give you access to the repo of that project.
      </p>
    </HomepageWrapper>
  );
};

export default HomePage;

interface Props {}
