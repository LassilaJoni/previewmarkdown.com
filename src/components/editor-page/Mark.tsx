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
  import React, { useState } from "react";
  import { Button } from "../ui/button";
  import Editor from '@monaco-editor/react';
  
  export default function Mark() {
const markdown = "> This is a quote"
    return (
        <div>
            <MDXEditor markdown={markdown} plugins={[quotePlugin()]} />
        </div>
    );
    
  }
  