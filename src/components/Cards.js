import React, { useState, useEffect } from "react";
// nav
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';

import "../style/style.css";

export const Cards = () => {
  const [all, setAll] = useState([]);

  const GetAll = async () => {
    const resp = await fetch(
      "https://6243a5813da3ac772b04e2cd.mockapi.io/sessions"
    );
    const json = await resp.json();
    setAll(json);
  };

  useEffect(() => {
    GetAll();
  });

  // nav
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (

    
    <div className="padreC">
      <nav >
  {/*   <img src="https://res.cloudinary.com/academia-geek1/image/upload/v1648943494/baner/banner-escritorio_ebmksm_ndxpnq.png" alt="" ></img> */}
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Item One" />
            <Tab value="two" label="Item Two" />
            <Tab value="three" label="Item Three" />
          </Tabs>
        </Box>

      
      </nav>
    
    
      {all.map((element) => {
        const {
          title,
          description,
          speakers,
          industry_segment,
          primary_topic,
          session_type,
          audience_type,
          lenguage,
          audience_level,
          date,
          id,
        } = element;
        return (
          <div className="card">
            <h2>{title}</h2>
            <h4>{session_type}</h4>
            <p>{description}</p>
            <p>{audience_level}</p>
            <p>{lenguage}</p>
            <p>{speakers}</p>
            <p>{audience_type}</p>
            <p>
              {" "}
              <b>Industry:</b> {industry_segment}
            </p>
            <p>
              {" "}
              <b>Primary Topic:</b> {primary_topic}
            </p>
            <Button className="contained" disableElevation>
      REPLAY SESSION
    </Button>
          </div>
        );
      })}
      
    </div>
  );
};