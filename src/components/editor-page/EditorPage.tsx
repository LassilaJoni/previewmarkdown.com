import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Mark from "./Markdown";
import { Link } from "react-router";
import Ad from "../ad";
import templates from "@/data/templates";

export default function EditorPage() {
  const defaultTemplate = templates[0];
  const [markdown, setMarkdown] = useState<string>(defaultTemplate.content);
  const [activeTemplate, setActiveTemplate] = useState<string>(
    defaultTemplate.id
  );

  const applyTemplate = (templateId: string) => {
    const currentTemplate = templates.find((t) => t.id === activeTemplate);

    if (currentTemplate && markdown !== currentTemplate.content) {
      const confirmed = window.confirm(
        "You have unsaved changes. Are you sure you want to switch templates? Download your current markdown before switching templates to avoid losing your changes."
      );
      if (!confirmed) {
        return;
      }
    }

    const template = templates.find((t) => t.id === templateId);
    if (template) {
      setMarkdown(template.content);
      setActiveTemplate(templateId);
    }
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([markdown], { type: "text/markdown" });
    element.href = URL.createObjectURL(file);
    element.download = "README.md";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navigation Bar */}
      <header className="border-b">
        <div className="container px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <span className="text-xl font-bold">PreviewMarkdown</span>
            </Link>
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
                  activeTemplate === template.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
                onClick={() => applyTemplate(template.id)}
              >
                <h3 className="font-medium">{template.name}</h3>
              </div>
            ))}
          </div>
        </aside>

        {/* Editor Area */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="p-4 flex justify-between items-center border-b">
            <Button
              onClick={handleDownload}
              className="flex items-center gap-2 hover:cursor-pointer"
            >
              <Download className="h-4 w-4" />
              Download Your Markdown
            </Button>
          </div>
          <div className="flex-1 overflow-auto p-4">
            {/* Pass current markdown and the updater function to the Mark component */}
            <Mark
              markdown={markdown}
              onChange={setMarkdown}
              activeTemplate={activeTemplate}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
