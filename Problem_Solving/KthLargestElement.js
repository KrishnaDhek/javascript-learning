class KthLargestElement {
  static kthLargestElement(nums, k) {
    // Min Heap
    const minHeap = [];

    for (const num of nums) {
      minHeap.push(num);

      // Sort heap in ascending order
      minHeap.sort((a, b) => a - b);

      // Keep only k largest elements
      if (minHeap.length > k) {
        minHeap.shift();
      }
    }

    // Root of min heap = kth largest element
    return minHeap[0];
  }
}

// Main function
const nums = [3, 2, 1, 5, 6, 4, 9, 10, 8];
const k = 4;

console.log(KthLargestElement.kthLargestElement(nums, k));
