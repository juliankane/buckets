import SimpleEditor, { DEFAULT_EDITOR_CONTENT } from "@features/tiptap/SimpleEditor";



export default function BucketLayout() {
  return (
    <>
      <div className="h-full w-full max-w-screen-lg mx-auto">
        <SimpleEditor initialContent={DEFAULT_EDITOR_CONTENT} bucketId="0"/>
      </div>
    </>
  );
}

