//this method is to go get our json data and return it!
//const proxyServer = 'http://solace.ist.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/';
const proxyServer =
  "https://people.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/";

// arg endpoint is the endpoint of the api I want to hit
//ex: 'about/' or 'people/'
async function getData(endpoint) {
  const result = await fetch(`${proxyServer}${endpoint}`);
  return await result.json();
}

export default getData;
