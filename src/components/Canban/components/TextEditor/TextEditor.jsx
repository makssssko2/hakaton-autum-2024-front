import { useEffect, useState } from "react";

import QuillEditor from "react-quill";
import "./TextEditor.scss";
import "react-quill/dist/quill.snow.css";
import Checkmark from "../../../../assets/icons/Modal/Checkmark";
import Cross from "../../../../assets/icons/Modal/Cross";
import parse from 'html-react-parser';

const TextEditor = ({...props}) => {
  let  {
    prevValue,
    setPrevValue,
    setShowTitleChange,
  } = props
  
  const [value, setValue] = useState("");
  const [length, setLength] = useState(0);

  useEffect(() => {
    // Создаём временный элемент
    const tempElement = document.createElement('div');
    tempElement.innerHTML = value;

    // Получаем текстовое содержимое и его длину
    const textContent = tempElement.innerText || tempElement.textContent;
    setLength(textContent.length);
  }, [value]);
  const cancel = () => {
    setShowTitleChange(false);
  }

  const changeText = () => {
    console.log(length);
    if(length < 1000){
        setPrevValue(value);
    }
    
    setShowTitleChange(false);
  }

  useEffect(() => {
    setValue(prevValue);
  }, []);

  const formats = ["header","bold","italic","underline","list","bullet","link","color","clean"];
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, false] }],
        ["bold", "italic", "underline"],
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
        onChange={(value) => {console.log(value.length); if(value.length < 100){setValue(value)} else{setValue(prevValue)}}}
      />
    </div>
  );
};

export default TextEditor;