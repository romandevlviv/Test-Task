import React from 'react';
import {Button, Typography} from "@material-ui/core";
import {DEFAULT_ITEMS_COUNT} from "./consts";

const PaginationControls = ({ currentPage, updateCurrentPage, newsListLength}) => {

	const goToPreviousStep = () => {
		const newPage = currentPage - 1;
		if (newPage >= 0) {
			updateCurrentPage(newPage);
		}
	}

	const goToNextStep = () => {
		const newPage = currentPage + 1;
		if (newPage < Math.ceil(newsListLength/DEFAULT_ITEMS_COUNT)) {
			updateCurrentPage(newPage);
		}
	}

	return (
		<React.Fragment>
			<Button onClick={goToPreviousStep}>previous</Button>
			<Typography variant="h5">{currentPage+1} / {Math.ceil(newsListLength/DEFAULT_ITEMS_COUNT)}</Typography>
			<Button onClick={goToNextStep}>next</Button>
		</React.Fragment>
	)
}

export default PaginationControls;
