// changePossibilities(amount, denominations)
// Write a function that, given an amount of money and an array of coin denominations,
// computes the number of change permutations

// This solution assumes the amount will be given in an integer 

function changePossibilities(amount, denominations) {

  let combosThatEqualAmount = []

  for (let i = 0; i <= amount; i++) {
      combosThatEqualAmount[i] = 0;
  }

  combosThatEqualAmount[0] = 1;

  for (let j = 0; j < denominations.length; j++) {

      let current = denominations[j]
      let next = current

      for (next; next <= amount; next++) {
          var remainder = next - current;
          combosThatEqualAmount[next] += combosThatEqualAmount[remainder]
      }
  }

  return combosThatEqualAmount.pop()
}

