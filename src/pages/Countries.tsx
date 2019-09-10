import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import CountriesList from "../components/CountriesList";
import { Country, Get_CountriesQuery, Maybe } from "../generated/graphql";

const GET_COUNTRIES = gql`
  query GET_COUNTRIES {
    countries {
      code
      name
      native
      emoji
      languages {
        name
        native
      }
      continent {
        name
      }
    }
  }
`;

const CountriesWrapper = styled.main`
  margin: 0 50px;
`;

const Title = styled.h1`
  margin: 20px auto 40px auto;
  display: table;
`;

const Countries: FC = () => {
  const { loading, error, data } = useQuery<Get_CountriesQuery>(GET_COUNTRIES);

  const [shownCountries, setShownCountries] = useState<
    Maybe<Maybe<Country>[]>
  >();

  useEffect(() => {
    if (data) setShownCountries(data.countries);
  }, [data]);

  if (error) return <h1>Something went wrong. Please try again later...</h1>;
  if (loading || !data) return <h1>Loading...</h1>;

  return (
    <CountriesWrapper>
      <Title>Here you see a list of all countries and their languages</Title>
      <CountriesList countries={shownCountries}></CountriesList>
    </CountriesWrapper>
  );
};

export default Countries;
