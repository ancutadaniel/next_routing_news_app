export function GET(request) {
  console.log("GET request received", request);

  return new Response("GET request received");
}

export function POST(request) {
  console.log("POST request received", request);

  // return new Response.json({ message: 'POST request received' });
  return new Response("POST request received");
}
