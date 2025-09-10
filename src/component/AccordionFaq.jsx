import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionFaq({
  items = [],
  defaultExpandedIndex = 0, // first open by default
  exclusive = false,        // set true to allow only one open at a time
}) {
  const [expandedIndex, setExpandedIndex] = React.useState(
    exclusive ? defaultExpandedIndex : -1
  );

  return (
    <div>
      {items.map((item, i) => {
        const id = `panel${i}`;
        const isControlled = exclusive;
        const controlledExpanded = isControlled ? expandedIndex === i : undefined;
        const uncontrolledDefault = !isControlled && i === defaultExpandedIndex;

        return (
          <Accordion
            key={id}
            expanded={isControlled ? controlledExpanded : undefined}
            onChange={
              isControlled
                ? (_e, isExp) => setExpandedIndex(isExp ? i : -1)
                : undefined
            }
            defaultExpanded={uncontrolledDefault}
            sx={{
              mb: 2,
              backgroundColor: '#FAF8FF',
              borderRadius: '10px',
              '& .MuiAccordionSummary-root': {
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
              },
              '& .MuiAccordionDetails-root': {
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${id}-content`}
              id={`${id}-header`}
            >
              <Typography component="span" sx={{ fontWeight: 600 }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ color: '#858585' }}>
              {item.answer}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
