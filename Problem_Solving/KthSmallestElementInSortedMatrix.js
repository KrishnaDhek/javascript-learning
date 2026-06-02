// 378. Kth Smallest Element in a Sorted Matrix
// Binary Search + Count Elements <= mid

class KthSmallestElementInSortedMatrix {
  static kthSmallest(matrix, k) {
    let low = matrix[0][0];
    let high = matrix[matrix.length - 1][matrix.length - 1];

    while (low < high) {
      const mid = low + Math.floor((high - low) / 2);

      const elementCount = this.count(matrix, mid);

      if (elementCount < k) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    return low;
  }

  static count(matrix, mid) {
    let elementCount = 0;

    let row = matrix.length - 1;
    let column = 0;

    while (row >= 0 && column < matrix.length) {
      if (matrix[row][column] <= mid) {
        elementCount += row + 1;
        column++;
      } else {
        row--;
      }
    }

    return elementCount;
  }
}

// Main Function
const matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
];

const k = 9;

console.log(KthSmallestElementInSortedMatrix.kthSmallest(matrix, k));
