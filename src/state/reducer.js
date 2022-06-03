const initialState = {
    hackersTopStories: [],
    isFetching: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'HACKERS/LOAD_TOP_STORIES': {
            return {
                ...state,
                hackersTopStories: action.payload
            }
        }
        case 'HACKERS/UPDATE_FETCHING': {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        default:
            return state;
    }
}

export const hackerReducerActions = {
    loadTopStories: (stories) => ({type: 'HACKERS/LOAD_TOP_STORIES', payload: stories}),
    updateIsFetching: (isFetching) => ({ type: 'HACKERS/UPDATE_FETCHING', payload: isFetching})
};
