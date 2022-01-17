export const getGif = async (query) => {
    const apiKey = 'hsdo4KcjTUjGNxf1EPyDY8VJiXEJ7xuA';
    const urlQuery = `https://api.giphy.com/v1/gifs/search?api_key=${encodeURI(apiKey)}&q=${query}&limit=5&offset=0&rating=g&lang=en`;

    const resp = await fetch(urlQuery);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });

    return gifs;
};
