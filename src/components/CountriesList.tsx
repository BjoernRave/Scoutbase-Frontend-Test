import React, { FC } from "react";
import styled from "styled-components";
import { Country, Maybe } from "../generated/graphql";
import CountryItem from "./CountryItem";

const CountriesListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1224px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  > div {
    background: #11998e;
    background: -webkit-linear-gradient(to bottom, #38ef7d, #11998e);
    background: linear-gradient(to bottom, #38ef7d, #11998e);
  }

  > div:nth-child(2n + 2) {
    background: #12c2e9;
    background: -webkit-linear-gradient(to top, #f64f59, #c471ed, #12c2e9);
    background: linear-gradient(to top, #f64f59, #c471ed, #12c2e9);
  }

  > div:nth-child(3n + 3) {
    background: #fdc830;
    background: -webkit-linear-gradient(to top, #f37335, #fdc830);
    background: linear-gradient(to top, #f37335, #fdc830);
  }
`;

const CountriesList: FC<Props> = ({ countries }) => {
  if (!countries) return <h1>Loading...</h1>;

  return (
    <CountriesListWrapper>
      {countries.map(country => {
        if (!country || !country.name) return "Loading Country";
        return <CountryItem key={country.name} country={country}></CountryItem>;
      })}
    </CountriesListWrapper>
  );
};

export default CountriesList;

interface Props {
  countries?: Maybe<Maybe<Country>[]>;
}
