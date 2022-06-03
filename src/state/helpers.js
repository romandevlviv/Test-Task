import { hackersApi } from './api';

export const getFullStories = async (storiesIds) => {
	const promises = storiesIds.map(story => {
		return hackersApi.fetchStoryById(story)
	});

	const fullStoriesResponse = await Promise.all(promises);

	return await Promise.all(fullStoriesResponse.map(story => story.json()));
}
