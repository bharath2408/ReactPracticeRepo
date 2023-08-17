import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import GridContainer from "./GridContainer";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const acces_token = process.env.REACT_APP_TOKEN;

  const handleSearch = useCallback(async () => {
    if (query.trim() !== "") {
      try {
        const graphQLQuery = `
            {
              search(query: "topic:${query}", type: REPOSITORY, first: 100) {
                edges {
                  node {
                    ... on Repository {
                      id
                      name
                      nameWithOwner
                      description
                      createdAt
                      url
                      visibility
                      owner {
                        avatarUrl
                        login
                      }
                      stargazers {
                        totalCount
                      }
                    }
                  }
                }
              }
            }
          `;

        const response = await axios.post(
          "https://api.github.com/graphql", // Use POST request
          { query: graphQLQuery },
          {
            headers: {
              Authorization: `Bearer ${acces_token}`,
            },
          }
        );
        setSearchResults(
          response.data.data.search.edges.map((edge) => edge.node)
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }, [query, acces_token]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (query.trim() !== "") {
      handleSearch();
    }
  }, [query, handleSearch]);

  return (
    <>
      <div className="search-bar-container">
        <div className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="Enter the repo key"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="search-grid">
          {console.log(searchResults)}
          {query.trim() !== "" && (
            <GridContainer>
              {searchResults.map((result) => (
                <Card key={result.id} result={result} />
              ))}
            </GridContainer>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
