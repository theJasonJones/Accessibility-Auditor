# Accessibility-Auditor

Node/React application that scrapes a webpage and generates an accessibility report.

**To use:**

**Setup:** `npm i` in the both the main directory and the `public/` directory.

1. Start up node API

`npm run backend`

This will start the node server that holds the API, from there go to `localhose:3000/api/test`, use the `?url=` query string to test the API response. 

2. Start up the front end

`cd public/ && npm run start`

From there, you will be given a form to put your url into. Once you press submit the data should be returned in a few seconds. 

## Background

This tool was created using: 

1. [node](https://nodejs.org/en/)
2. [React.js](https://reactjs.org/)
3. [pa11y](https://github.com/pa11y/pa11y)
4. [styled-compnents](https://github.com/styled-components/styled-components)
5. [react-icons](https://github.com/react-icons/react-icons)
