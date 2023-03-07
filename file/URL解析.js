/**
 * 解析URL
 * 
 */

function parseUrl(url) {
  const urlObj = {};
  const [protocol, rest] = url.split("://");
  urlObj.protocol = protocol;
  const [hostnameAndPort, pathAndQuery] = rest.split("/");
  const [hostname, port] = hostnameAndPort.split(":");
  urlObj.hostname = hostname;
  if (port) {
    urlObj.port = Number(port);
  }
  const [pathname, searchAndHash] = pathAndQuery.split("?");
  urlObj.pathname = pathname;
  const [search, hash] = searchAndHash.split("#");
  if (search) {
    urlObj.search = "?" + search;
  }
  if (hash) {
    urlObj.hash = "#" + hash;
  }
  return urlObj;
}

console.log(parseUrl('http://www.domain.com/order?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'));