import axios from "axios";

export const fetchApi = async (url) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "faee83c4d8msh973b89fc4c1cdc3p1e55f2jsn1ed0c17458f5",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  const { data } = await axios.get(
    `https://youtube-v31.p.rapidapi.com/${url}&maxResults=50`,
    options
  );
  return data;
};
