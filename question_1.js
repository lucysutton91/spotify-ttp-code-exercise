// sortByString(s, t)
// Sort the letters in the string s by the order they occur in string t

function sortByStrings (s, t){
  const letterCount = {}
  for (let i = 0; i < s.length; i++){
    if (letterCount[s[i]]) letterCount[s[i]]++
    else letterCount[s[i]] = 1
  }
  let result = ''
  for (let j = 0; j < t.length; j++){
    result += t[j].repeat(letterCount[t[j]])
  }
  return result
}

// Since there are a finite number of characters, space shouldn't be a problem,
// if it were the solution below uses nested loops so you don't need to store
// anything but the result

function sortByStringsSpaceOptimized (s, t){
  let result = '';
  for (let i = 0; i < t.length; i++){
    for (let j = 0; j < s.length; j++){
      if (t[i] === s[j]) result += s[j]
    }
  }
  return result
}
