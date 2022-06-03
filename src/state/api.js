export const hackersApi = {
    loadTopStories: () => {
        return fetch('https://hacker-news.firebaseio.com/v0/askstories.json');
    },
    fetchStoryById: (id) => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    }
}