// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311
import axios from 'axios';

async function getJoke(): Promise<string> {
  try {
    const response = await axios.get('https://icanhazdadjoke.com', { headers: { Accept: 'application/json' } });
    return response.data.joke;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function handler(event: any, context: any): Promise<{ statusCode: number, body: string }> {
  try {
    const joke = await getJoke();
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: joke })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message })
    };
  }
}


