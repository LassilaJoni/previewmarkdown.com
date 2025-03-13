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
  DiffSourceToggleWrapper,
  diffSourcePlugin,
} from "@mdxeditor/editor";
import "@/index.css";
import "@mdxeditor/editor/style.css";
import React from "react";
import { Button } from "../ui/button";

export default function Markdown() {
const ref = React.useRef<MDXEditorMethods>(null)


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


  return (
    <>
    <MDXEditor
    ref={ref}
    markdown={""}
    contentEditableClassName="prose"
    plugins={[
      headingsPlugin(),
      listsPlugin(),
      quotePlugin(),
      thematicBreakPlugin(),
      diffSourcePlugin({ diffMarkdown: 'An older version', viewMode: 'rich-text' }),
      toolbarPlugin({
        toolbarClassName: 'my-classname',
        toolbarContents: () => (
          <>
            {' '}
            <UndoRedo />
            <BoldItalicUnderlineToggles />
            <BlockTypeSelect />
            <DiffSourceToggleWrapper>
          <UndoRedo />
        </DiffSourceToggleWrapper>
          </>
        )
      })
    ]}
  />
      
            <Button onClick={() => handleMarkdownDownload()}>Get markdown</Button>
      
   
    
        </>
  );
  
}
