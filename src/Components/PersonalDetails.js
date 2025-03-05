import React, { useState } from "react";
import { Grid, TextField, MenuItem, InputAdornment } from "@mui/material";
import { FormControlLabel, Switch } from "@mui/material";

const PersonalDetails = () => {
  const jobPositions = [
    "Software Engineer",
    "Product Manager",
    "Data Scientist",
    "UX Designer",
  ];
  const [currentAddress, setCurrentAddress] = useState("");
  const [presentAddress, setPresentAddress] = useState("");

  const handleCopyAddress = (event) => {
    if (event.target.checked) {
      setPresentAddress(currentAddress);
    } else {
      setPresentAddress("");
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField fullWidth label="Full Name" name="name" required />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Email" type="email" name="email" required />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Phone Number"
          type="number"
          name="phone"
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          select
          fullWidth
          label="Job Position"
          name="position"
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
          value={currentAddress}
          onChange={(e) => setCurrentAddress(e.target.value)}
          required
 
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Present Address"
          name="presentAddress"
          value={presentAddress}
          onChange={(e) => setPresentAddress(e.target.value)}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FormControlLabel
                  control={<Switch onChange={handleCopyAddress} />}
                  label="Same"
                  labelPlacement="start"
                  sx={{ marginLeft: 1 }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default PersonalDetails;
