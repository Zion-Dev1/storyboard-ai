import getHeaders from "../utils/getHeaders";

const generateStory = async (prompt: string) => {
  const response = await fetch(`http://localhost:3000/api/generate-story`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate story");
  }

  const data = await response.json();
  return data;
};

export default generateStory;
