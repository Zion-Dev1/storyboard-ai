const endpointUrl = "https://modelslab.com/api/v7/images/text-to-image";

async function generateImages(imageModelKey: string) {
  try {
    const requestBody = {
      prompt:
        "You are a cinematic illustrator. You will be given a short sentence. Generate a unique image that clearly visualizes the scene described. It should focus on the key characters, places, and actions mentioned in that sentence. Do not add text, captions, or numbers to the image. Use a consistent art style that matches the tone of the story. Ensure the image is detailed and visually engaging, suitable for a storyboard format. The sentence is: ",
      model_id: "imagen-4",
      aspect_ratio: "1:1",
      key: imageModelKey,
    };

    const response = await fetch(endpointUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      let errorResult;
      try {
        errorResult = await response.json();
      } catch (e) {
        errorResult = { error: { message: await response.text() } };
      }
      throw new Error(
        `API Error (${response.status}): ${
          errorResult.error?.message || response.statusText || "Unknown error"
        }`
      );
    }

    const result = await response.json();
    console.log("API Response:", result);
    return result;
  } catch (e) {
    console.error("Error making API request:", (e as Error).message);
    throw e;
  }
}

export default generateImages;
