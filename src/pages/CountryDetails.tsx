import { gql } from "apollo-boost";
import React, { FC } from "react";
import { useQuery } from "react-apollo";
import { match } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Get_CountryQuery } from "../generated/graphql";

const GET_COUNTRY = gql`
  query GET_COUNTRY($code: String!) {
    country(code: $code) {
      phone
      currency
      name
      native
      continent {
        name
      }
      emoji
    }
  }
`;

const CountryDetailsWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const GoBackButton = styled(Link)`
  align-self: flex-start;
`;

const CountryDetails: FC<Props> = ({ match }) => {
  const { loading, error, data } = useQuery<Get_CountryQuery>(GET_COUNTRY, {
    variables: { code: match.params.code }
  });

  if (error)
    return (
      <h1>Something went wrong, Maybe check the country code you provided</h1>
    );

  if (loading || !data || !data.country || !data.country.continent)
    return <h1>Loading...</h1>;

  const { phone, currency, name, native, continent, emoji } = data.country;

  return (
    <CountryDetailsWrapper>
      <GoBackButton to="/countries">Go Back</GoBackButton>
      <h1>{`${name} (${native}) ${emoji}`}</h1>
      <p>Currency: {currency}</p>
      <p>Phone Area Code: {phone}</p>
      <p>Continent: {continent.name}</p>
    </CountryDetailsWrapper>
  );
};

export default CountryDetails;

interface Props {
  match: match<{ code: string }>;
}
