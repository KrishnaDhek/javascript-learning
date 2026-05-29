class BestTimeToBuyAndSellStock {
  static maxProfit(prices) {
    let buy = Number.MAX_SAFE_INTEGER;
    let sell = 0;

    for (const price of prices) {
      // Find minimum buying price
      if (price < buy) {
        buy = price;
      } else {
        // Calculate maximum profit
        sell = Math.max(sell, price - buy);
      }
    }

    return sell;
  }
}

// Main function
const prices = [7, 1, 5, 3, 6, 4];

console.log(
  'The maximum profit is : ' + BestTimeToBuyAndSellStock.maxProfit(prices),
);
