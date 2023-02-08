const student = {
  name: "Topu Rayhan",
  id: 121,
  address: "Bangladesh",
  isSingle: true,
  friends: ["Jack Ma", "Elon Musk", "Bill Gates", "Jeff Bejos"],
  movies: [
    { name: "Shawshank Redemtion", year: 1995 },
    { name: "Inception", year: 2012 },
  ],
  act: function () {
    console.log("I am Topu Rayhan");
  },
  car: {
    brand: "Tesla",
    price: 50000000,
    made: 2021,
    manufacturer: {
      name: "Tesla",
      ceo: "Elon Musk",
      country: "USA",
    },
  },
};
console.log(student.car);
student.act();
