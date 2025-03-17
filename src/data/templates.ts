type Template = {
    id: string;
    name: string;
    content: string;
  }[]

const templates: Template = [
    {
      id: "basic",
      name: "Basic README",
      content: `# Project Title

## Description

`,
    },
    {
      id: "advanced",
      name: "Advanced README",
      content: `# Project Title

![Project Logo](/placeholder.svg?height=100&width=100)

## Description
A comprehensive description of what this project does and who it's for.

## Features
- Feature 1
- Feature 2
- Feature 3

## Installation
\`\`\`bash
npm install my-project
cd my-project
\`\`\`

## Usage
\`\`\`javascript
import { myFunction } from 'my-project';

// Example usage
myFunction();
\`\`\`

## API Reference
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Required**. Your API key |

## Contributing
Contributions are always welcome!

See \`contributing.md\` for ways to get started.

## License
[MIT](https://choosealicense.com/licenses/mit/)
`,
    },
    {
      id: "project",
      name: "Project README",
      content: `# Project Name

## Overview
Brief overview of the project.

## Problem Statement
Description of the problem this project aims to solve.

## Solution
How this project solves the problem.

## Technologies Used
- Tech 1
- Tech 2
- Tech 3

## Installation
\`\`\`bash
npm install my-project
\`\`\`

## Usage
How to use the project.

## Future Improvements
- Improvement 1
- Improvement 2

## Contributors
- Your Name
`,
    },
    {
      id: "documentation",
      name: "Documentation",
      content: `# Documentation

## Getting Started
Instructions on how to get started with the project.

## Prerequisites
What things you need to install the software and how to install them.

## Installing
A step by step series of examples that tell you how to get a development environment running.

## Running the tests
Explain how to run the automated tests for this system.

## Deployment
Add additional notes about how to deploy this on a live system.

## Built With
* [Tech 1](http://www.example.com) - Description
* [Tech 2](http://www.example.com) - Description

## Contributing
Please read [CONTRIBUTING.md](https://github.com/) for details on our code of conduct, and the process for submitting pull requests to us.


## Authors
* **Your Name** - *Initial work* - [YourUsername](https://github.com/yourusername)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* Hat tip to anyone whose code was used
`,
    },
  ]

  export default templates;