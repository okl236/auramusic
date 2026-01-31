export async function onRequest({ request }) {
  const originalUrl = new URL(request.url);

  const backendUrl = new URL(request.url);
  backendUrl.hostname = 'auramusic-odon.vercel.app';
  backendUrl.protocol = 'https:';
  backendUrl.port = '';

  const proxyRequest = new Request(backendUrl.toString(), request);
  const response = await fetch(proxyRequest);

  return response;
}
