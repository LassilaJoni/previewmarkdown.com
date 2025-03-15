import { useState } from "react"
import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Mark from "./Mark"

export default function Mar() {

  const templates = [
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
* [Framework](https://framework.com) - The web framework used
* [Package Manager](https://packagemanager.com) - Dependency Management

## Contributing
Please read [CONTRIBUTING.md](https://gist.github.com/) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
We use [SemVer](http://semver.org/) for versioning.

## Authors
* **Your Name** - *Initial work* - [YourUsername](https://github.com/yourusername)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* Hat tip to anyone whose code was used
* Inspiration
* etc
`,
    },
  ]

  const defaultTemplate = templates[0]
  const [markdown, setMarkdown] = useState<string>(defaultTemplate.content)
  const [activeTemplate, setActiveTemplate] = useState<string>(defaultTemplate.id)

  const applyTemplate = (templateId: string) => {
    const template = templates.find((t) => t.id === templateId)
    if (template) {
      setMarkdown(template.content)
      setActiveTemplate(templateId)
    }
  }

  const handleDownload = () => {
    const element = document.createElement("a")
    const file = new Blob([markdown], { type: "text/markdown" })
    element.href = URL.createObjectURL(file)
    element.download = "README.md"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Navigation Bar */}
      <header className="border-b">
        <div className="container px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-6 w-6" />
            <span className="text-xl font-bold">Markdown Editor</span>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Template Sidebar */}
        <aside className="w-64 border-r bg-muted/40 p-4 overflow-y-auto hidden md:block">
          <h2 className="text-lg font-semibold mb-4">Templates</h2>

          <div className="space-y-2">
            {templates.map((template) => (
              <div
                key={template.id}
                className={`p-3 rounded-md cursor-pointer transition-colors ${
                  activeTemplate === template.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
                onClick={() => applyTemplate(template.id)}
              >
                <h3 className="font-medium">{template.name}</h3>
              </div>
            ))}
          </div>
        </aside>

{ /* 
        
        <div className="md:hidden p-4 border-b w-full">
          <select
            className="w-full p-2 border rounded-md"
            onChange={(e) => applyTemplate(e.target.value)}
            value={activeTemplate || ""}
          >
            <option value="" disabled>
              Select a template
            </option>
            {templates.map((template) => (
              <option key={template.id} value={template.id}>
                {template.name}
              </option>
            ))}
          </select>
        </div>
        */}
        {/* Editor Area */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="p-4 flex justify-between items-center border-b">
            <Button onClick={handleDownload} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>
          <div className="flex-1 overflow-auto p-4">
            {/* Pass current markdown and the updater function to the Mark component */}
            <Mark markdown={markdown} onChange={setMarkdown} />
          </div>
        </main>
      </div>
    </div>
  )
}
