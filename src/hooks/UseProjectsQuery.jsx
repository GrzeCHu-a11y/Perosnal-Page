import { useState, useEffect } from "react";
import { useQuery } from "graphql-hooks";
import { HOMEPAGE_QUERY } from "../api/Client";

const UseProjectsQuery = (limit) => {
  const [projects, setProjects] = useState([]);

  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit,
    },
  });

  useEffect(() => {
    if (data && data.allCards) {
      setProjects(data.allCards);
      console.log(data);
    }
  }, [data]);

  return { loading, error, projects };
};

export default UseProjectsQuery;
