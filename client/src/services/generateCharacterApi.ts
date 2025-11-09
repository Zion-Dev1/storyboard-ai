import getHeaders from "../utils/getHeaders";

const generateCharacter = async () => {
  const response = await fetch(`http://localhost:3000/gen/character`, {
    method: "GET",
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to generate character");
  }

  const data = await response.json();
  return data;
};

export default generateCharacter;
