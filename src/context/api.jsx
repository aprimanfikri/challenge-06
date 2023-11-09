export const BASE_URL =
  "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main";

export const fetchData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/data/cars.min.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching car data: ", error);
    throw error;
  }
};
