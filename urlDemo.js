import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

// URL Object
const urlObj = new URL(urlString);

console.log(urlObj);

// format() - takes url object can coverts back to string
console.log(url.format(urlObj));

// import.meta.url - file URL
console.log(import.meta.url);

// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

// Get search params from url
const params = new URLSearchParams(urlObj.search);
console.log(params);
console.log(params.get("q"));

// Add search params
params.append("limit", "5");
console.log(params);

// Delete search params
params.delete("limit");
console.log(params);
