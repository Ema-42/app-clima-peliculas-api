export const fetchData = async (endPoint) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${endPoint}`
    );
    const dataPrevia = await response.json();
    const data = dataPrevia.slice(0, 5);
    return {
      data,
      isLoading: false,
    };
  } catch (error) {
    console.error(error);
  }
};
