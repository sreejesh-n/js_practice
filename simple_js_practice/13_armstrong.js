function isArmstrong(number, digitCubeSum, numCopy = number) {
  if (numCopy === 0) {
    return number === digitCubeSum;
  }

  const digitCube = (numCopy % 10) ** 3;

  return isArmstrong(number, digitCubeSum + digitCube, (numCopy / 10) | 0);
}

const armstrong = isArmstrong(407, 0);

console.log(armstrong);
