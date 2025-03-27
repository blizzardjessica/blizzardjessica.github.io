import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function ResumePage() {
  return (
      <iframe
        id="resume"
        title="PDF in an i-Frame"
        src="/pdfs/Blizzard_Resume.pdf"
        height="100%"
        width="100%">
      </iframe>
  );

}
