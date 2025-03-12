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

import "@mdxeditor/editor/style.css";
import React from "react";


export default function Markdown() {
const ref = React.useRef<MDXEditorMethods>(null)


const handleMarkdownDownload = () => {
    if (ref.current) {
        const markdown = ref.current.getMarkdown();
        const blob = new Blob([markdown], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = "test.md"
        link.click()
    }
}

  return (
    <div>
    <MDXEditor
      ref={ref}
      markdown="Hello world"
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
    <button onClick={() => handleMarkdownDownload()}>Get markdown</button>
    </div>
  );
  
}
