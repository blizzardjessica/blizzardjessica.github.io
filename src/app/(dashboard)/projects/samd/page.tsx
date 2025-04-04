import * as React from 'react';
import {Card, CardContent, CardHeader} from '@mui/material';
import ProjectImageList from "@/src/components/ProjectImageList";
import {mmImages, npImages, rpImages, vmapImages} from "@/src/defs/images";

export default function GamesPage() {
  return (
      <Card>
          {/*<h1 style={{paddingLeft: "20px"}}>Software as a Medical Device</h1>*/}
          <CardContent>
              <CardHeader title="vMap"/>
              <p>Jessica was the lead software engineer on the vMap project. It is an application that maps the location
                  of a heart arrhythmia onto a 3D heart model. Jessica lead the development team to successfully deliver
                  the product to the client. The application was used in clinical trials and has since been FDA cleared
                  and is in use commercially.
                  Visit <a href="https://www.vektormedical.com/vmap">Vektor Medical - vMap</a> to learn more about how
                  the
                  application is being used.
                  <br/><br/>
                  Jessica was responsible for guiding the UI/UX design, the display of the ECG, the method of making
                  selections on the ECG lines, and the mapping the the D3 data received from the backend onto the 3D
                  heart
                  model. The front end of the application uses React.js, Material-UI, plotly.js and three.js.

                  The biggest challenge in development was manipulating ploty to create a smooth user experience while
                  allowing the user to click and drag to make selections on the ECG lines. Displaying the heatmap on the
                  3D heart model and being able to rotate it was the most satisfying.</p>

              <ProjectImageList itemData={vmapImages} rowHeight={330} width={640}/>
          </CardContent>


      </Card>
  );
}
