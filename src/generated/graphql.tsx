import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Continent = {
   __typename?: 'Continent',
  code?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  countries?: Maybe<Array<Maybe<Country>>>,
};

export type Country = {
   __typename?: 'Country',
  code?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  native?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  continent?: Maybe<Continent>,
  currency?: Maybe<Scalars['String']>,
  languages?: Maybe<Array<Maybe<Language>>>,
  emoji?: Maybe<Scalars['String']>,
  emojiU?: Maybe<Scalars['String']>,
};

export type Language = {
   __typename?: 'Language',
  code?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  native?: Maybe<Scalars['String']>,
  rtl?: Maybe<Scalars['Int']>,
};

export type Query = {
   __typename?: 'Query',
  continents?: Maybe<Array<Maybe<Continent>>>,
  continent?: Maybe<Continent>,
  countries?: Maybe<Array<Maybe<Country>>>,
  country?: Maybe<Country>,
  languages?: Maybe<Array<Maybe<Language>>>,
  language?: Maybe<Language>,
};


export type QueryContinentArgs = {
  code?: Maybe<Scalars['String']>
};


export type QueryCountryArgs = {
  code?: Maybe<Scalars['String']>
};


export type QueryLanguageArgs = {
  code?: Maybe<Scalars['String']>
};

export type Get_CountriesQueryVariables = {};


export type Get_CountriesQuery = (
  { __typename?: 'Query' }
  & { countries: Maybe<Array<Maybe<(
    { __typename?: 'Country' }
    & Pick<Country, 'code' | 'name' | 'native' | 'emoji'>
    & { languages: Maybe<Array<Maybe<(
      { __typename?: 'Language' }
      & Pick<Language, 'name' | 'native'>
    )>>>, continent: Maybe<(
      { __typename?: 'Continent' }
      & Pick<Continent, 'name'>
    )> }
  )>>> }
);

export const Get_CountriesDocument = gql`
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
export type Get_CountriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Get_CountriesQuery, Get_CountriesQueryVariables>, 'query'>;

    export const Get_CountriesComponent = (props: Get_CountriesComponentProps) => (
      <ApolloReactComponents.Query<Get_CountriesQuery, Get_CountriesQueryVariables> query={Get_CountriesDocument} {...props} />
    );
    
export type Get_CountriesProps<TChildProps = {}> = ApolloReactHoc.DataProps<Get_CountriesQuery, Get_CountriesQueryVariables> & TChildProps;
export function withGet_Countries<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Get_CountriesQuery,
  Get_CountriesQueryVariables,
  Get_CountriesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, Get_CountriesQuery, Get_CountriesQueryVariables, Get_CountriesProps<TChildProps>>(Get_CountriesDocument, {
      alias: 'getCountries',
      ...operationOptions
    });
};

    export function useGet_CountriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Get_CountriesQuery, Get_CountriesQueryVariables>) {
      return ApolloReactHooks.useQuery<Get_CountriesQuery, Get_CountriesQueryVariables>(Get_CountriesDocument, baseOptions);
    }
      export function useGet_CountriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Get_CountriesQuery, Get_CountriesQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<Get_CountriesQuery, Get_CountriesQueryVariables>(Get_CountriesDocument, baseOptions);
      }
      
export type Get_CountriesQueryHookResult = ReturnType<typeof useGet_CountriesQuery>;
export type Get_CountriesQueryResult = ApolloReactCommon.QueryResult<Get_CountriesQuery, Get_CountriesQueryVariables>;