import axios from "axios";

// Function definitions (same as provided by you)
export const getFirstData = async () => {
  const { data } = await axios.get("http://localhost:5000/0");
  return data;
};

export const getSecondData = async () => {
  const { data } = await axios.get("http://localhost:5000/1");
  return data;
};

export const getThirdData = async () => {
  const { data } = await axios.get("http://localhost:5000/2");
  return data;
};

export const getFourthData = async () => {
  const { data } = await axios.get("http://localhost:5000/3");
  return data;
};

export const getFifthData = async () => {
  const { data } = await axios.get("http://localhost:5000/4");
  return data;
};

export const getSixthData = async () => {
  const { data } = await axios.get("http://localhost:5000/5");
  return data;
};

export const allData = [
  getFirstData(),
  getSecondData(),
  getThirdData(),
  getFourthData(),
  getFifthData(),
  getSixthData(),
];

// Handling all the data using Promise.all
// Promise.all(allData)
//   .then((results) => {
//     console.log("All data fetched successfully:", results);
//     // You can now work with the 'results' array, which contains the resolved values from all API requests
//   })
//   .catch((error) => {
//     console.error("An error occurred while fetching the data:", error);
//   });
