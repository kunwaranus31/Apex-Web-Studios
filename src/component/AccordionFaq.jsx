import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionFaq() {
  return (
    <div>
      <Accordion defaultExpanded sx={{
        mb:2,
        backgroundColor: '#FAF8FF',
        borderRadius: "10px",
        '& .MuiAccordionSummary-root': {
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        },
        '& .MuiAccordionDetails-root': {
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
        }
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" sx={{fontWeight:600}} >Can you integrate with our existing systems?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color:"#858585"}} >
          We primarily serve banking, insurance, aerospace, and education—but our solutions adapt to any sector in need of custom software and data-driven innovation.
        </AccordionDetails>
      </Accordion>
      
      <Accordion sx={{
        mb:2,
        backgroundColor: '#FAF8FF',
        borderRadius: '10px',
        '& .MuiAccordionSummary-root': {
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        },
        '& .MuiAccordionDetails-root': {
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
        }
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" sx={{fontWeight:600}} >What industries do you specialize in?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color:"#858585"}} >
          We primarily serve banking, insurance, aerospace, and education—but our solutions adapt to any sector in need of custom software and data-driven innovation.
        </AccordionDetails >
      </Accordion>

      <Accordion  sx={{
        mb:2,
        backgroundColor: '#FAF8FF',
        borderRadius: '10px',
        '& .MuiAccordionSummary-root': {
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        },
        '& .MuiAccordionDetails-root': {
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
        }
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" sx={{fontWeight:600}} >Do you provide end-to-end development?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color:"#858585"}} >
          We primarily serve banking, insurance, aerospace, and education—but our solutions adapt to any sector in need of custom software and data-driven innovation.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
