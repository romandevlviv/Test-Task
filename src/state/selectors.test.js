import {selectFetching, selectHackersList} from "./selectors";

describe('Tests for selectors', () => {
	const state = {
		hackersTopStories: [{
			by: 'test',
			title: 'Test title'
		}],
		isFetching: false
	};

	it('Test for selectFetching', () => {
		const expectedOutput = false;

		expect(selectFetching(state)).toEqual(expectedOutput);
	});

	it('Test for selectHackersList', () => {
		const expectedOutput = [{
			by: 'test',
			title: 'Test title'
		}];

		expect(selectHackersList(state)).toEqual(expectedOutput);
	});

})