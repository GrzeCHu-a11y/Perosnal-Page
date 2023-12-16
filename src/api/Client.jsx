import { GraphQLClient } from "graphql-hooks";

export const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    Authorization: "Bearer 46fe382858fa893111979532f423b6",
  },
});

export const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
    allCards(first: $limit) {
      title
      description
      tech
      gitlink
      demolink
      projecttype
      image {
        id
        url
      }
    }
  }`;
