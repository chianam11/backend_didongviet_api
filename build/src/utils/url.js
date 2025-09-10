"use strict";

var url = function url() {
  var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  if (!host) return path; // fallback nếu host bị undefined
  if (!host.endsWith("/") && !path.startsWith("/")) return host + "/" + path;
  return host + path;
};
module.exports = {
  url: url
};