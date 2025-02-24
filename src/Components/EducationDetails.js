import React from "react";
import { Grid, TextField } from "@mui/material";

const EducationDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Highest Qualification"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="University/College"
          name="college"
          value={formData.college}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Years of Experience"
          type="number"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
        />
      </Grid>
    </Grid>
  );
};

export default EducationDetails;
