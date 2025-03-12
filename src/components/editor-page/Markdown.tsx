import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  MDXEditorMethods,
} from "@mdxeditor/editor";
import "@/index.css";
import "@mdxeditor/editor/style.css";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Editor from '@monaco-editor/react';

export default function Markdown() {
const ref = React.useRef<MDXEditorMethods>(null)

const [editor, setEditor] = useState(true)
const [editorValue, setEditorValue] = useState<string | null>(null)


const handleMarkdownDownload = () => {
    if (ref.current) {
        const markdown = ref.current.getMarkdown();
        const blob = new Blob([markdown], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = "README.md"
        link.click()
    }
}

const changeEditorView = () => {
    setEditor(!editor);
}

console.log("editorvalue", editorValue)
  return (
    <>
        <Button onClick={() => changeEditorView()}>Change editor</Button>
        {editor ? (
    <MDXEditor
    ref={ref}
    onChange={(markdown: string) => setEditorValue(markdown)}
    markdown={editorValue || ""}
    contentEditableClassName="prose"
    plugins={[
      headingsPlugin(),
      listsPlugin(),
      quotePlugin(),
      thematicBreakPlugin(),
      toolbarPlugin({
        toolbarClassName: 'my-classname',
        toolbarContents: () => (
          <>
            {' '}
            <UndoRedo />
            <BoldItalicUnderlineToggles />
            <BlockTypeSelect />
            
          </>
        )
      })
    ]}
  />
        ) : (
            <div>
            <Editor height="90vh" defaultLanguage="markdown" value={editorValue ?? undefined} onChange={(value) => setEditorValue(value ?? '')}  />
            <Button onClick={() => handleMarkdownDownload()}>Get markdown</Button>
            </div>
        )}
    
        </>
  );
  
}
