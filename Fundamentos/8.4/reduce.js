const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (arr) => {
  console.log(arr.reduce( (acc, curr) => acc.concat(curr)));
};
flatten(arrays)