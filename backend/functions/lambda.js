export const handler = async (event) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, Mehmet! Your request was received at ${event.requestContext.time}.`,
  };
};
