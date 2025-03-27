import * as React from 'react';
import {Card, CardContent, CardHeader, IconButton} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <Card>
                <CardHeader
                    sx={{fontWeight: 'bold', width: 'auto' }}
                    avatar={
                        <IconButton
                            disableRipple
                            sx={[
                                {
                                    '&:hover': {
                                        color: 'grey',
                                    },
                                },
                                {
                                    color: 'inherit',
                                },
                            ]}
                            aria-label="Software Engineer"
                            href="https://www.linkedin.com/in/jessica-blizzard"
                            target="_blank">
                            Jessica Blizzard - Software Engineer<LinkedInIcon color="primary" fontSize="large"/>
                        </IconButton>
                    }
                />

                <CardContent>
                    <p>Jessica Blizzard is a Software Engineer with a strong background in
                        interactive applications. She has experience creating applications in the Software as a
                        Medical Device
                        (SaMD) industry as well as experience in video game development and
                        mobile application development with multiple released
                        titles. She is able to write efficient, object oriented code for
                        multiple platforms and in multiple coding languages. She can analyze, debug and
                        maintain code to the company&#39;s standards. She has a proven track record of
                        successfully completing milestones in a timely manner. She has a strong understanding
                        of what makes an intuitive and aesthetic user interface / user experience (UI / UX).
                        Her passion is for giving users an accessible, fun and engaging experience.
                    </p>
                    {/*<Link href={"/pdfs/Blizzard_Resume.pdf"} target='_blank'>Resume</Link>*/}
                    {/*<a href="/pdfs/Blizzard_Resume.pdf"><strong>Resume</strong></a>*/}

                </CardContent>
            </Card>
        </>
    );
}
