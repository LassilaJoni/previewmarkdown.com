import "@mdxeditor/editor/style.css"
import {
  MDXEditor,
  MDXEditorMethods,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  headingsPlugin,
  quotePlugin,
  linkDialogPlugin,
  listsPlugin,
  thematicBreakPlugin,
  BlockTypeSelect,
  CodeToggle,
  CreateLink,
  InsertCodeBlock,
  InsertTable,
  InsertImage,
  InsertThematicBreak,
  InsertFrontmatter,
  ListsToggle,
  ConditionalContents,
  ChangeCodeMirrorLanguage,
  frontmatterPlugin,
  imagePlugin,
  markdownShortcutPlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  DiffSourceToggleWrapper,
  linkPlugin
} from "@mdxeditor/editor"
import { useRef } from "react"

interface MarkProps {
  markdown: string
  onChange: (value: string) => void
  activeTemplate: string
}

function Mark({ markdown, onChange, activeTemplate }: MarkProps) {
  const ref = useRef<MDXEditorMethods>(null)

  return (
    <div className="h-full">
      {/* The key prop forces the editor to remount when markdown changes */}
      <MDXEditor
        key={activeTemplate}
        ref={ref}
        markdown={markdown}
        onChange={onChange}
        contentEditableClassName="prose"
        plugins={[
          quotePlugin(),
          headingsPlugin(),
          listsPlugin(),
          thematicBreakPlugin(),
          linkDialogPlugin(),
          frontmatterPlugin(),
          imagePlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          codeBlockPlugin(),
          markdownShortcutPlugin(),
          codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
          codeMirrorPlugin({
            codeBlockLanguages: { jsx: 'JavaScript (react)', js: 'JavaScript', javascript: "JavaScript", css: 'CSS', tsx: 'TypeScript (react)', bash: "bash", java: "Java" }
          }),
          diffSourcePlugin({ viewMode: 'rich-text' }),
          toolbarPlugin({
            toolbarContents: () => (
              <DiffSourceToggleWrapper>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <BlockTypeSelect />
                <CreateLink />
                <InsertCodeBlock />
                <InsertTable />
                <InsertImage />
                <InsertThematicBreak />
                <InsertFrontmatter />
                <ListsToggle />

                <CodeToggle />
                <ConditionalContents
                  options={[
                    {
                      when: (editor) => editor?.editorType === "codeblock",
                      contents: () => <ChangeCodeMirrorLanguage />,
                    },
                    {
                      fallback: () => (
                        <>
                          <InsertCodeBlock />
                        </>
                      ),
                    },
                  ]}
                />
              </DiffSourceToggleWrapper>
              
            ),
          }),

        ]}
      />
    </div>
  )
}

export default Mark
