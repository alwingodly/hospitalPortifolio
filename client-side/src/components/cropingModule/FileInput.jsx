import React, { useRef } from "react";

const FileInput = ({ onImageSelected }) => {
  const inputRef = useRef();
  const handleOnchange = (event)=>{
    if(event.target.files && event.target.files.length > 0){
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (e){
            onImageSelected(reader.result)
        }
    }
  }
  const onChooseImage = ()=>{
    inputRef.current.click();
  }
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleOnchange}
        style={{ display: "none" }}
      />
      <button className="btn" onClick={onChooseImage}>
        Choose Image
      </button>
    </div>
  );
};

export default FileInput;
