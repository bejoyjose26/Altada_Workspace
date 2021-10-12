//import "./dashboard.css";

import { MASK_DETECTION, PERSON_DETECTION, RECOGNIZE } from "../../endpoints";

import Grid from "@material-ui/core/Grid";
import MediaCard from "../../components/card1";
import React from "react";
import face from "../../assets/images/cards/recognition.jpeg";
import mask from "../../assets/images/cards/AI-4.jpg";
import person from "../../assets/images/cards/person-detection.png";
import Particles from 'react-particles-js';
export default function Dashboard({ setSelectedMode }) {
  return (
    <div className="dashboard-container" style={{backgroundColor: '#2E3B55'}}>
      
      <Grid container spacing={4} justify="center">
        <Grid item>
          <div onClick={() => setSelectedMode(MASK_DETECTION)}>
            {/* <WebcamComponent selectedMode={selectedMode}></WebcamComponent> */}
            <MediaCard img={mask} title={"Mask Detection"}></MediaCard>
          </div>
        </Grid>
        <Grid item>

          <div onClick={() => setSelectedMode(PERSON_DETECTION)}>
           <MediaCard img={person} title={"Person Detection"}></MediaCard> 
          </div>
        </Grid>
        <Grid item>
          <div onClick={() => setSelectedMode(RECOGNIZE)}>
            <MediaCard img={face} title={"Face Recognition"}></MediaCard>
          </div>
        </Grid>
      </Grid>
      <Particles
        params={{
          "particles": {
              "number": {
                  "value": 100
              },
              "size": {
                  "value": 3
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  }
              }
          }
      }} />
    </div>
  );
}
