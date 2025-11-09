import getHeaders from "../utils/getHeaders";

const generateStory = async (character: String) => {
  const response = await fetch(`http://localhost:3000/gen/story`, {
    method: "POST",
    body: JSON.stringify({ character }),
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to generate story");
  }

  const data = await response.json();
  return data;
};

export default generateStory;
