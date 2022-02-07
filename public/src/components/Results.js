import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LoadingWrapper } from "./styled/loading.styled";
import { StyledResults } from "./styled/results.styled";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaExclamationCircle } from "react-icons/fa";

const Results = ({ url }) => {
  let [results, setResults] = useState(null);

  // Decode URL special chartacters back to normal characters
  const param = new URLSearchParams(url).get("url");

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`http://localhost:3000/api/test?url=${param}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => setResults({ data }))
      .catch(error => {
        console.error(`Error: ${error}`);
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [param]);

  if (results !== null) {
    const { documentTitle, pageUrl, issues } = results.data;

    const issueList = issues.map((issue, i) => {
      const { type, message, context } = issue;

      return (
        <div key={i}>
          <h3>
            <FaExclamationCircle color={"#cd3131"} />{" "}
            {type.charAt(0).toUpperCase() + type.substring(1)}: {message}
          </h3>
          <div>
            <code>{context}</code>
          </div>
        </div>
      );
    });

    return (
      <StyledResults>
        <h2>
          Results for {documentTitle} ({pageUrl})
        </h2>
        <div>There are currently {issues.length} errors detected.</div>
        {issueList}
      </StyledResults>
    );
  } else {
    return (
      <LoadingWrapper>
        <AiOutlineLoading3Quarters />
      </LoadingWrapper>
    );
  }
};

export default Results;
