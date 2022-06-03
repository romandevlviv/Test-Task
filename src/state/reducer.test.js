import reducer, {hackerReducerActions} from "./reducer";

describe('Test reducer', () => {
    const initialState = {
        hackersTopStories: [],
        isFetching: false
    };
    const {loadTopStories, updateIsFetching} = hackerReducerActions;

    it('Test loadTopStories', () => {
        const payload = [{
            by: 'test',
            title: 'Test title'
        }];
        expect(reducer(initialState, loadTopStories(payload))).toEqual({
            hackersTopStories: payload,
            isFetching: false
        })
    });

    it('Test updateIsFetching', () => {
        const payload = false;
        expect(reducer(initialState, updateIsFetching(payload))).toEqual({
            hackersTopStories: [],
            isFetching: payload
        })
    });
});
