export const handler = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Hello World template'
    }),
    headers: {
      "Content-type": "application/json"
    }
  }
}