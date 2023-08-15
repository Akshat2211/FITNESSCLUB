export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '2d84bff5a8msh9794777e02b9491p1275c1jsn220f639251d8',
    }
};
export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2d84bff5a8msh9794777e02b9491p1275c1jsn220f639251d8',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}