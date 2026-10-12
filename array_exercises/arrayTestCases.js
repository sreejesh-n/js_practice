function ascendingData() {
  return [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
}

function descendingData() {
  return [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
}

function randomData(length) {
  const randomData = [];

  for (let i = 0; i < length; i++) {
    randomData[i] = Math.ceil(Math.random() * 100);
  }

  return randomData;
}

module.exports = {
  randomData,
  descendingData,
  ascendingData,
};
