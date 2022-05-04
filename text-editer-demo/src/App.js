import "./App.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { convertToRaw, convertFromRaw } from "draft-js";

import { useEffect, useState } from "react";
import { convertFromHTML,convertToHTML } from 'draft-convert';
function App() {
  const [editorState, setEditorState] = useState();

  const onEditorStateChange = (data) => {
    setEditorState(data);
  const dd = convertToHTML(data.getCurrentContent());
    debugger

    localStorage.setItem(
      "TEXT",
      JSON.stringify(convertToHTML(data.getCurrentContent()))
    );
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("TEXT"));
    if (userData)
      setEditorState(EditorState.createWithContent(convertFromHTML(userData)));
  }, []);

  return (
    <>
   
      <Editor
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName={{ height: "500px" }}
        editorState={editorState}
      />
    </>
  );
}

export default App;
