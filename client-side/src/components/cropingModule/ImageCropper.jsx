import React, { useState } from "react";
import Cropper from "react-easy-crop";
const ImageCropper = ({ image, onCropDone, onCropCancel }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(3 / 3);
  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };
  const onAspectRatioChange = (event) => {
    setAspectRatio(event.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-primaryWhite rounded-lg shadow-xl">
      <div className="relative w-full h-80">
        <Cropper
          image={image}
          aspect={aspectRatio}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={{
            containerStyle: { width: "100%", height: "100%" },
            mediaStyle: { borderRadius: "8px" },
          }}
        />
      </div>
      <div className="flex justify-center space-x-2 my-4">
        <div className="aspect-ratios" onChange={onAspectRatioChange}>
          <input type="radio" value={1 / 1} name="ratio" /> 1:1
          <input type="radio" value={5 / 4} name="ratio" /> 5:4
          <input type="radio" value={4 / 3} name="ratio" /> 4:3
          <input type="radio" value={3 / 2} name="ratio" /> 3:2
          <input type="radio" value={5 / 3} name="ratio" /> 5:3
          <input type="radio" value={16 / 9} name="ratio" /> 16:9
          <input type="radio" value={3 / 1} name="ratio" /> 3:1
        </div>
      </div>
      <div className="btn-container mt-4">
        <button
          className="bg-primary text-primaryWhite p-2 rounded-md ml-4 text-sm"
          onClick={onCropCancel}
        >
          Cancel
        </button>
        <button
          className="bg-primary text-primaryWhite p-2 rounded-md ml-4 text-sm"
          onClick={() => {
            onCropDone(croppedArea);
          }}
        >
          Crop & Apply
        </button>
      </div>
    </div>
  );
};

export default ImageCropper;
