import {hackersApi} from "./api";
import {hackerReducerActions} from "./reducer";
import {getFullStories} from "./helpers";

export function loadTopStories() {
    return async (dispatch) => {
        try {
            dispatch(hackerReducerActions.updateIsFetching(true));
            const storiesResponse = await hackersApi.loadTopStories();
            const storiesIds = await storiesResponse.json();

            const fullStories = await getFullStories(storiesIds);

            dispatch(hackerReducerActions.loadTopStories(fullStories));
            dispatch(hackerReducerActions.updateIsFetching(false));
        } catch (error) {
            dispatch(hackerReducerActions.updateIsFetching(false));
        }
    };
}
