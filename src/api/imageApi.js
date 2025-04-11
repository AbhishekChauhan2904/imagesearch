const API_KEY = '20168997-fe543123a5c80c8bb1cfbdada';

export const fetchImages = async (query) => {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo`
    );
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
