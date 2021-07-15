export const handler = (event) => {
  return {
    statusCode: 201,
    body: {
      message: 'Hello World template'
    },
    headers: {
      "Content-type": "application/json"
    }
  }
}