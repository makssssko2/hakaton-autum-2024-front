import { useEffect, useState } from "react";

import QuillEditor from "react-quill";
import parse from 'html-react-parser';
import "./TextEditor.scss";
import "react-quill/dist/quill.snow.css";
import Checkmark from "../../../../assets/icons/Modal/Checkmark";
import Cross from "../../../../assets/icons/Modal/Cross";

const TextEditor = ({...props}) => {
  let  {
    prevValue,
    setPrevValue,
    setShowTitleChange,
  } = props
  
  const [value, setValue] = useState("");

  const cancel = () => {
    setShowTitleChange(false);
  }

  const changeText = () => {
    console.log(value.length)
    if(value.length < 100){
        setPrevValue(value);
    }
    
    setShowTitleChange(false);
  }

  useEffect(() => {
    setValue(prevValue);
  }, []);

  const formats = ["header","bold","italic","underline","strike","blockquote","list","bullet","link","image","color","clean",];
  const modules = {
    toolbar: {
      container: [
        [{ header: [2, 3, 4, false] }],
        ["bold", "italic", "underline", "blockquote"],
        [{ color: [] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          
        ],
        ["link"],
        ["clean"],
      ],
    },
    clipboard: {
      matchVisual: true,
    },
  }

  return (
    <div className="quillBlock">
    <button onClick={changeText}>
        <Checkmark />
    </button>
    <button onClick={cancel}>
        <Cross />
    </button>
    
      <QuillEditor
        theme="snow"
        value={value}
        formats={formats}
        modules={modules}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
};

export default TextEditor;