import React, { useState } from "react";
import { analyzePDFFile, saveChangesToPDFFile } from "./utils/index"; // Placeholder for file utility functions

const App = () => {
  const [file, setFile] = useState(null);
  const [editingMode, setEditingMode] = useState(false);
  const [editedContent, setEditedContent] = useState(null);

  const validateFile = (file) => {
    console.log("File ", file);
    if (!file) return false;

    const allowedExtensions = [".pdf", ".ppt", ".pptx"];
    const fileExtension = file.name.substring(file.name.lastIndexOf("."));

    return allowedExtensions.includes(fileExtension.toLowerCase());
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    const validate = validateFile(uploadedFile);
    console.log(validate);
    if (validate) {
      setFile(uploadedFile);
      // Analyze and recognize text and images within the uploaded files
      const analyzedContent = analyzePDFFile(uploadedFile);
      setEditedContent(analyzedContent);
    } else {
      alert("Please upload a valid PDF or PPT file.");
    }
  };

  const handleSaveChanges = () => {
    if (editedContent && file) {
      // Save the edited content back into the original file format
      const savedFile = saveChangesToPDFFile(file, editedContent);
      // Download the saved file or perform other actions
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf,.ppt,.pptx" onChange={handleFileChange} />
      {file && (
        <div>
          {editingMode ? (
            <div>
              {/* Display bounding boxes around identified text and images */}
              {/* Provide a user-friendly interface to edit text and images */}
              {/* Save Changes button */}
              <button onClick={handleSaveChanges}>Save Changes</button>
            </div>
          ) : (
            <button onClick={() => setEditingMode(true)}>Start Editing</button>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
