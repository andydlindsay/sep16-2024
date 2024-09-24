const delays = [2500, 5000, 500, 768, 817, 2345, 612, 499, 1]; // 500 - 5000

for (const delay of delays) {
  setTimeout(() => {
    console.log(delay);
  }, delay);
}
