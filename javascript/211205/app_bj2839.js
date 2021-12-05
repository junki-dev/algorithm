function bj2839(n) {
  let bagCount = 0;

  while (true) {
    if (n % 5 !== 0) {
      if (n < 3) {
        bagCount = -1;
        break;
      } else {
        n -= 3;
        bagCount++;
      }
    } else {
      break;
    }
  }

  if (bagCount !== -1) {
    bagCount += parseInt(n / 5);
  }

  return bagCount;
}

export default bj2839;
