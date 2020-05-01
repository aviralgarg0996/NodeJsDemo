setTimeout(() => console.log("Hi"), 2000);

const names = ["aviral", "abb", "abc"];

const shortnames = names.filter((name) => name.length <= 4);

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    callback(data);
  }, 2000);
};
geocode("Los Angeles", (data) => {
  console.log(data);
});

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};
add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
