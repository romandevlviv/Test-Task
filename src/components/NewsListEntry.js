import React from 'react'
import {Accordion, AccordionDetails, AccordionSummary, ListItem, Typography} from "@material-ui/core";

const NewsListEntry = ({ item, expanded, index, handleChangeAccordion }) => {

	return (
		<ListItem>
			<Accordion expanded={expanded === `panel-${index}`} onChange={handleChangeAccordion(`panel-${index}`)}>
				<AccordionSummary
					expandIcon={<>&#8595;</>}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography>
						{item.by}
					</Typography>
					<Typography style={{ paddingLeft: '30px'}} >{item.title}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography dangerouslySetInnerHTML={{ __html: item.text }} />
				</AccordionDetails>
			</Accordion>
		</ListItem>
	)
}

export default NewsListEntry;