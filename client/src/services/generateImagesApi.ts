import getHeaders from "../utils/getHeaders";

const endpointUrl = "https://modelslab.com/api/v7/images/text-to-image";

async function generateImages(
  scene: string,
  style: string,
  imageModelKey: string,
  prevScene?: string
) {
  try {
    const requestBody = {
      prompt: `You will be given a short sentence. Generate a unique image that clearly visualizes the scene described, focusing on the key characters, places, and actions mentioned in that sentence. Do not add text, captions, or numbers to the image. It should be created in a ${style} kind of style. The sentence for the current scene is: ${scene}
      
      ${
        prevScene
          ? `The previous scene was: ${prevScene}. Keep the current scene consistent with the story of the previous scene`
          : ""
      }
      `,
      model_id: "imagen-4",
      aspect_ratio: "1:1",
      key: imageModelKey,
    };

    const response = await fetch(endpointUrl, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(
        `API Error (${response.status}): ${
          response.statusText || "Unknown error"
        }`
      );
    }

    const result = await response.json();
    return result.output[0];
  } catch (e) {
    console.error("Error making API request:", (e as Error).message);
    throw e;
  }
}

export default generateImages;
