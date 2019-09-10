import React, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { Country, Maybe } from "../generated/graphql";

const SearchBar = styled.input`
  border-radius: 10px;
  font-size: 24px;
  width: 70%;
  margin: 20px 15%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
`;

const CountrySearch: FC<Props> = ({ countries, setShownCountries }) => {
  const [input, setInput] = useState("");

  if (!countries) return null;

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    const shownCountries = countries.filter(country => {
      const input = e.target.value.toLowerCase();

      if (!country) return null;

      if (
        country.continent &&
        country.continent.name &&
        country.continent.name.toLowerCase().indexOf(input) !== -1
      ) {
        return true;
      }

      if (
        country.name &&
        country.native &&
        (country.name.toLowerCase().indexOf(input) !== -1 ||
          country.native.toLowerCase().indexOf(input) !== -1)
      ) {
        return true;
      }
      if (
        country.languages &&
        country.languages.some(language => {
          if (!language) return false;
          if (
            language.name &&
            language.native &&
            (language.name.toLowerCase().indexOf(input) !== -1 ||
              language.native.toLowerCase().indexOf(input) !== -1)
          ) {
            return true;
          }
          return false;
        })
      ) {
        return true;
      }
      return false;
    });
    setShownCountries(shownCountries);
  };

  return (
    <form>
      <SearchBar
        placeholder="Search for country, continent name or spoken language..."
        value={input}
        onChange={handleInput}
      />
    </form>
  );
};

export default CountrySearch;

interface Props {
  countries?: Maybe<Maybe<Country>[]>;
  setShownCountries: (countries: Maybe<Maybe<Country>[]>) => void;
}
