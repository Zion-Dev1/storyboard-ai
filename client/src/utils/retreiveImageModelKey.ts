import getHeaders from "./getHeaders";

const retreiveImageModelKey = async () => {
  const response = await fetch(`http://localhost:3000/imagemodelkey`, {
    method: "GET",
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to retreive auth token");
  }

  const data = await response.json();
  return data.results;
};

export default retreiveImageModelKey;
