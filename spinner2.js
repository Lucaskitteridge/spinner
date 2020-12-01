let timer = 0
let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ']

for(let rot of spinner) {
  setTimeout(() => {
    process.stdout.write(rot);
  },timer += 200);
};