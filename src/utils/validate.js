// Function to validate a file based on its file extension
export const validateFile = (file) => {
  console.log("File ", file);
  if (!file) return false;

  const allowedExtensions = [".pdf", ".ppt", ".pptx"];
  const fileExtension = file.name.substring(file.name.lastIndexOf("."));

  return allowedExtensions.includes(fileExtension.toLowerCase());
};
