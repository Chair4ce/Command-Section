// this uses the callback syntax, however, we encourage you to try the async/await syntax shown in async-dadjoke.ts
export function handler(event: any, context: any, callback: (error: any, response: { statusCode: number, body: string }) => void) {
  console.log('queryStringParameters', event.queryStringParameters);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, World!' }),
  });
}

