import "./UploadForm.css";
import { UploadFormModalOne } from "./modal/UploadFormModalOne";
import { UploadFormModalTwo } from "./modal/UploadFormModalTwo";
import { useState } from "react";

export const UploadForm = () => {
  const [uploadFormOne, setUploadFormOne] = useState(false);
  const [uploadFormTwo, setUploadFormTwo] = useState(false);

  return (
    <>
      <div className="uploadform-body">
        <h1 className="uploadform-heading">
          Please upload form from either way shown below
        </h1>
        <div className="uploadform-btn-container">
          <button
            className="uploadform-btn"
            onClick={() => {
              setUploadFormOne(!uploadFormOne);
            }}
          >
            Form1
          </button>
          <button
            className="uploadform-btn"
            onClick={() => {
              setUploadFormTwo(!uploadFormTwo);
            }}
          >
            Form2
          </button>
        </div>
        {uploadFormOne && (
          <UploadFormModalOne
            uploadFormOne={uploadFormOne}
            setUploadFormOne={setUploadFormOne}
            closeOnBack={true}
          />
        )}
        {uploadFormTwo && (
          <UploadFormModalTwo
            uploadFormTwo={uploadFormTwo}
            setUploadFormTwo={setUploadFormTwo}
            closeOnBack={true}
          />
        )}
      </div>
    </>
  );
};
