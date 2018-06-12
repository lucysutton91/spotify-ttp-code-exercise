// decodeString(s)
// Given an encoded string, return it's corresponding decoded string
// The encoding rules is k[encoded_string], where encoded_string is repeated exactly k times

// This solution assumes the integer k is between 0-9

function decodeString(str){

  let numStack = []
  let characterStack = []
  let numbers = '0123456789'
  let decoded = ''

  for (let i = 0; i < str.length; i++){

    if (numbers.indexOf(str[i]) !== -1) numStack.push(str[i])

    else if (str[i] == ']') {
      let decodedSubStr = '' // keeps track of the set of characters between the brackets
      for (let j = characterStack.length - 1; j >= 0; j--){
        if (characterStack[j] !== '[') {
          decodedSubStr = characterStack[j] + decodedSubStr
          characterStack.pop()
        }
        if (characterStack[j] === '[') {
          characterStack.pop()
          break
        }
      }
      decoded = (decodedSubStr + decoded).repeat(numStack.pop())
    }

    else if (str[i] === '[') characterStack.push(str[i])

    else characterStack.push(str[i]) // push all other characters on to the stack

  }
  return decoded
}
