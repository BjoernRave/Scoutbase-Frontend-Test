import { History, Location } from "history";
import React, { FC } from "react";
import { Link, match, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Country } from "../generated/graphql";

const CountryItemWrapper = styled.div`
  border-radius: 10px;
  padding: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
`;

const TitleLink = styled(Link)`
  align-self: center;
  font-size: 24px;
  font-weight: bold;
`;

const CountryItem: FC<Props> = ({ country, history }) => {
  if (!country || !country.languages || !country.continent)
    return <h3>Loading...</h3>;

  const { name, native, emoji, code, languages, continent } = country;

  return (
    <CountryItemWrapper
      onClick={() => history && history.push(`/countries/${code}`)}
    >
      <TitleLink to={`/countries/${code}`}>
        {`${name} (${native}) ${emoji}`}
      </TitleLink>
      <p>Continent: {continent.name}</p>
      <div>
        Languages spoken:
        <ul>
          {languages.map(language => {
            if (!language || !language.name) return "Loading languages...";
            return (
              <li key={language.name}>
                {`${language.name} (${language.native})`}
              </li>
            );
          })}
        </ul>
      </div>
    </CountryItemWrapper>
  );
};

export default withRouter(CountryItem);

interface Props {
  country: Country;
  history: History;
  location: Location;
  match: match;
}
