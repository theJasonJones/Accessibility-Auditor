# Accessibility-Auditor

Node/React application that scraps a webpage and generate an accessibility report.

**To use:**

**Setup:** `npm i` in the both the main directory and the `public/` directory.

1. Start up node API

`npm run backend`

This will start the node server that holds the API, from there go to `localhose:3000/api/test`, use the `?url=` query string to test the API response. 

2. Start up the front end

`cd public/ && npm run start`

From there, you will be given a form to put your url into. Once you press submit the data should be returned in a few seconds. 

## Background

This tool was created using node, React.js, pa11y, styled-compnents and react-icons. 
