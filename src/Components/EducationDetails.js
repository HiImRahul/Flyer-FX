import React from "react";
import { Grid, TextField, Button } from "@mui/material";

const EducationDetails = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField fullWidth label="Highest Qualification" name="qualification" required />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="University/College" name="college" required />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Years of Experience" type="number" name="experience" required />
      </Grid>
      
    </Grid>
  );
};

export default EducationDetails;
