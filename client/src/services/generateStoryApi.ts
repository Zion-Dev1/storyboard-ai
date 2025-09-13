import getHeaders from "../utils/getHeaders";

const generateStory = async () => {
  const response = await fetch(`http://localhost:3000/genstory`, {
    method: "GET",
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to generate story");
  }

  const data = await response.json();
  return data;
};

export default generateStory;
