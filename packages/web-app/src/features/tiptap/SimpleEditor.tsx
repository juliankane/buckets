import { useEditor, EditorContent, JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";

import { useState } from "react";

type SimpleEditorProps = {
  initialContent: JSONContent;
  bucketId: string;
};

export default function SimpleEditor({ initialContent, bucketId }: SimpleEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: initialContent,
  });

  const saveContent = () => {
    if (!editor) return;
    const json = editor.getJSON();
    localStorage.setItem(`bucket-${bucketId}`, JSON.stringify(json)); // Replace with actual API call
    alert("Bucket saved!");
  };

  if (!editor) return null;

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 border-b pb-2 mb-4">
        <button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
        <button
          onClick={() =>
            editor.chain().focus().insertTable({ rows: 2, cols: 2, withHeaderRow: true }).run()
          }
        >
          Insert Table
        </button>
      </div>

      {/* Editor */}
      <div className="border rounded p-4">
        <EditorContent editor={editor} />
      </div>

      {/* Save Button */}
      <button
        onClick={saveContent}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Bucket
      </button>
    </div>
  );
}

export const DEFAULT_EDITOR_CONTENT: JSONContent = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "",
        },
      ],
    },
  ],
};