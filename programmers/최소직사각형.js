function solution(sizes) {
  const width = Math.max(...sizes.map((el) => el[0]));
  const height = Math.max(...sizes.map((el) => el[1]));
  let result = width * height;
  const getCardList = (arr, index, width, height) => {
    if (sizes.length <= index) {
      if (result > width * height) result = width * height;
    } else {
      if (
        sizes[index][0] < width &&
        sizes[index][0] < height &&
        sizes[index][1] < width &&
        sizes[index][1] < height
      ) {
        return getCardList([...arr], index + 1, width, height);
      }
      [0, 1].forEach((el) => {
        const newCard = el ? [sizes[index][1], sizes[index][0]] : sizes[index];

        const temp = [...arr, newCard];

        return getCardList(
          temp,
          index + 1,
          newCard[0] > width ? newCard[0] : width,
          newCard[1] > height ? newCard[1] : height
        );
      });
    }
  };
  getCardList([sizes[0]], 1, sizes[0][0], sizes[0][1]);
  return result;
}

solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
// 4000
