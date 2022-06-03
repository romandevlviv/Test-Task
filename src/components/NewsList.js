import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    CircularProgress,
    Grid,
    List,
} from "@material-ui/core";

import {loadTopStories} from "../state/actions";
import {selectFetching, selectHackersList} from "../state/selectors";
import NewsListEntry from "./NewsListEntry";
import PaginationControls from "./PaginationControls";
import {DEFAULT_ITEMS_COUNT} from "./consts";

function NewsList() {
    const newsList = useSelector(selectHackersList);
    const isFetching = useSelector(selectFetching);
    const [currentPage, updateCurrentPage] = useState(0);
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);

    const handleChangeAccordion = (panelName) => (event, isExpanded) => {
        setExpanded(isExpanded ? panelName : false);
    };

    useEffect(() => {
        dispatch(loadTopStories())
    }, [])

    if (isFetching) {
        return <CircularProgress />;
    }

    return (
        <Grid container justifyContent='center'>
            <>
                <PaginationControls
                    currentPage={currentPage}
                    updateCurrentPage={updateCurrentPage}
                    newsListLength={newsList.length}
                />
                <List>
                    {newsList.map((item, index) => {
                        const lowerBound = currentPage * DEFAULT_ITEMS_COUNT;
                        const upperBound = (currentPage + 1) * DEFAULT_ITEMS_COUNT;
                        if (index > lowerBound && index <= upperBound) {
                            return <React.Fragment key={item.title}>
                                <NewsListEntry
                                    expanded={expanded}
                                    handleChangeAccordion={handleChangeAccordion}
                                    index={index}
                                    item={item}
                                />
                            </React.Fragment>;
                        }
                        return null;
                    })}
                </List>
            </>

        </Grid>
    );
}

export default NewsList;
