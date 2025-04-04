import * as React from 'react';
import {Card, CardContent, CardHeader} from '@mui/material';
import ProjectImageList from "@/src/components/ProjectImageList";
import {csImages, mmImages, npImages, rpImages} from "@/src/defs/images";

export default function GamesPage() {
  return (
      <Card>
        <CardContent>
          <CardHeader title="Crime Spree"/>
            <p>Jessica was the lead programmer on Crime Spree. It is an iOS game with a Rally X and PacMan style
                gameplay. The key features of the game include:<br/><br/>
                - Arcade Mode – Avoid the police and collect all the loot to progress to the next level<br/>
                - Survival Mode – Collect as much cash as you can before getting caught by the police<br/>
                - Three Control Options - Either tilt, tap or swipe to steer the car<br/>
                - Local High Score Boards<br/>
                - Global High Score Boards – Compete against players around the world<br/><br/>

                The biggest challenge in programming Crime Spree was designing the algorithm that randomized the
                construction of each level. Programming the AI of the enemy police cars was the most satisfying.
                <br/><br/>
                You can watch the game being played in Survival Mode in
                this <a href="http://www.youtube.com/v/ynMrxz20SuY">Crime Spree Demo</a>.
            </p>

            <ProjectImageList itemData={csImages} rowHeight={320} width={480}/>

        </CardContent>

          <CardContent>
              <CardHeader title="Relaxation Portal"/>
          <p>Relaxation Portal is a relaxation and white noise style app for both iOS and Android. Jessica was the
            main programmer for both platforms. The key features include:<br/><br/>
              - Fully Customizable Sound – Turn off any sounds you don&apos;t want to hear<br/>
              - Beautiful Images – Explore the world through amazing pictures of each location<br/>
              - Night Mode - Listen to the sounds without the brightness of the screen<br/>
              - 3D effects - Plug in headphones to feel immersed in the location<br/><br/>

            Some of the interesting user experience programming challenges were the melding of the 3D world
            interface with the 2D menu interface and the carousel of images.
          </p>
          <ProjectImageList itemData={rpImages} rowHeight={359} width={640}/>
        </CardContent>

        <CardContent>
          <CardHeader title="Neopets Codestone Quest"/>
          <p>Jessica was the lead programmer on Neopets Codestone Quest. Built upon MumboJumbo&apos;s Luxor engine,
            Jessica added many features to give the game a Neopets theme. A few of the visual effects that
            were fun to add were suspending the shooter on a rope, the path glow, and the page turns of the
            storybook.<br/><br/>You can see more screenshots and a walkthrough of the game in
            this <a href="http://thedailyneopets.com/articles/codestone-quest/">Codestone Quest Article</a>.</p>
          <ProjectImageList itemData={npImages} rowHeight={300} width={400}/>
        </CardContent>

        <CardContent>
          <CardHeader title="Myth Match"/>
          <p>Myth Match is also built upon MumboJumbo&apos;s Luxor engine but with a fantasy theme.</p>

          <ProjectImageList itemData={mmImages} rowHeight={384} width={480}/>
        </CardContent>
      </Card>
  );
}
