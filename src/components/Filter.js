import React, { useState, useEffect } from "react";
//acordion
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//form
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SearchIcon from "@mui/icons-material/Search";
import FilterType from "../helpers/FilterType";

import "../style/style.css";

export const Filter = () => {
  const [industry, setIndustry] = useState([]);
  const [primary, setPrimary] = useState([]);
  const [session, setSession] = useState([]);

  const getFilters = async () => {
    const { industry_segment, primary_topic, session_type } =
      await FilterType();
    setIndustry(industry_segment);
    setPrimary(primary_topic);
    setSession(session_type);
  };

  useEffect(() => {
    getFilters();

   
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  
  return (
 
    <div className="padreF">
      <h2>Filters</h2>
      <div className="search">
        <input placeholder="search" className="input" />
        <SearchIcon className="lupa" />
      </div>
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "23%", flexShrink: 0 }}>
              Industry Segment
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {industry.map((element) => {
                return (
                  <FormControlLabel control={<Checkbox/>} label={element} />
                );
              })}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Primary Topic
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {primary.map((element) => {
                return (
                  <FormControlLabel control={<Checkbox />} label={element} />
                );
              })}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Session Type
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {session.map((element) => {
                return (
                  <FormControlLabel control={<Checkbox />} label={element} />
                );
              })}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
    
  );
};
