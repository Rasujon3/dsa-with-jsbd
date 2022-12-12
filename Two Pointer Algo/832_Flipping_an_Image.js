// Given two sorted array & return a merged asc sorted array.

function mergeArrays(image) {
  console.log(image.length);

  for (let i = 0; i < image.length; i++) {
    console.log(image[i]);
    image[i].reverse();
    console.log(image[i]);
    for (let j = 0; j < image[i].length; j++) {
      console.log(image[i][j]);
      if (image[i][j] === 0) {
        image[i][j] = 1;
      } else if (image[i][j] === 1) {
        image[i][j] = 0;
      }
      console.log(image[i][j]);
    }
  }
  console.log(image);
  return image;
}

let image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

/**
 * [1, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
 */

console.log(mergeArrays(image));
