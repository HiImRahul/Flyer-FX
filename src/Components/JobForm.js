import React, { useState } from "react";
import { Container, Paper, Box, Tab, Typography } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PersonalDetails from "./PersonalDetails";
import EducationDetails from "./EducationDetails";
import Upload from "./Upload";
const JobRegistrationForm = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
          <Typography variant="h5" gutterBottom>
            Job Registration Form
          </Typography>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange} aria-label="job form tabs">
                  <Tab label="Personal Details" value="1" />
                  <Tab label="Education" value="2" />
                  <Tab label="Uploads" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <PersonalDetails />
              </TabPanel>
              <TabPanel value="2">
                <EducationDetails />
              </TabPanel>
              <TabPanel value="3">
                <Upload/>
              </TabPanel>
            </TabContext>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default JobRegistrationForm;
