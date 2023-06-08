class Coordinate {
  constructor(param1, param2) {
    if (param1 !== undefined && param2 !== undefined) {
      this.x = param1;
      this.y = param2;
    } else if (param1 !== undefined) {
      let sums = this.getPairSum(param1);

      this.x = sums.x;
      this.y = sums.y;
    } else {
      this.x = 0;
      this.y = 0;
    }
  }

  getPairSum(string) {
    // Use regular expression to extract coordinate pairs
    let pairs = string.match(/{\d+,\d+}/g);

    let xSum = 0,
      ySum = 0;

    pairs.forEach((pair) => {
      // Remove braces and split pair into individual numbers
      let [x, y] = pair.replace(/[{}]/g, "").split(",").map(Number);
      xSum += x;
      ySum += y;
    });

    return { x: xSum, y: ySum };
  }

  toString() {
    return `{${this.x},${this.y}}`;
  }
}

console.log(
  new Coordinate(
    new Coordinate(30, 90) + new Coordinate(70, 150)
  ).toString() === "{100,240}"
); // Must return true.

console.log(
  new Coordinate(
    new Coordinate(250, 10) + new Coordinate(60, 430) + new Coordinate(80, 0)
  ).toString() === "{390,440}"
); // Must return true.

console.log(
  new Coordinate(
    new Coordinate(50000, 50000) +
      new Coordinate(50000, 50000) +
      new Coordinate(50000, 50000)
  ).toString() === "{150000,150000}"
); // Must return true.
