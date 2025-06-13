const url = (host = "", path = "") => {
    if (!host) return path; // fallback nếu host bị undefined
    if (!host.endsWith("/") && !path.startsWith("/")) return host + "/" + path;
    return host + path;
};

module.exports = { url };
