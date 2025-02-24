import React, { useState } from "react";
import { Button, Typography, Box, Paper, Snackbar, Alert } from "@mui/material";

const Uploadr = () => {
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewURL(
        selectedFile.type === "application/pdf"
          ? URL.createObjectURL(selectedFile)
          : ""
      );
    }
  };

  const handleSubmit = () => {
    if (file) {
      setShowAlert(true);
    }
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h6">Upload Your Resume</Typography>

        <input
          accept=".pdf,.doc,.docx"
          style={{ display: "none" }}
          id="resume-upload"
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor="resume-upload">
          <Button variant="contained" component="span" sx={{ mt: 2 }}>
            Choose File
          </Button>
        </label>

        {file && (
          <Box mt={2}>
            <Typography variant="body1">Selected File: {file.name}</Typography>
            {previewURL && (
              <iframe
                src={previewURL}
                width="100%"
                height="300px"
                style={{ border: "1px solid #ccc", marginTop: "10px" }}
                title="Resume Preview"
              />
            )}
          </Box>
        )}

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Paper>

      <Snackbar
        open={showAlert}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" variant="filled">
          File saved successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Uploadr;
