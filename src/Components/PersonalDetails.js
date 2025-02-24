import React from "react";
import { Grid, TextField, MenuItem, FormControlLabel, Switch } from "@mui/material";

const PersonalDetails = ({ formData, setFormData }) => {
  const jobPositions = ["Software Engineer", "Product Manager", "Data Scientist", "UX Designer"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  const handleCopyAddress = () => {
    setFormData({ presentAddress: formData.currentAddress });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          select
          fullWidth
          label="Job Position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
        >
          {jobPositions.map((position) => (
            <MenuItem key={position} value={position}>
              {position}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Current Address"
          name="currentAddress"
          value={formData.currentAddress}
          onChange={handleChange}
          required
        />
        <FormControlLabel control={<Switch onChange={handleCopyAddress} />} label="Same as Current Address" />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Present Address"
          name="presentAddress"
          value={formData.presentAddress}
          onChange={handleChange}
          required
        />
      </Grid>
    </Grid>
  );
};

export default PersonalDetails;
