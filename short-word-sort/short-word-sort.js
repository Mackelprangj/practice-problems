function shortestToLongest(strings, sorted = []) {
    let shortestLength = Infinity;
    let shortestWord = "";
    if (strings.length){
      for (ele in strings){
        if (strings[ele].length < shortestLength){
          shortestLength = strings[ele].length;
          shortestWord = strings[ele];
        } else if (strings[ele].length === shortestLength && strings[ele] < shortestWord){
          shortestWord = strings[ele];
        }
      }
      sorted.push(shortestWord);
      strings.splice(strings.indexOf(shortestWord), 1);
      return shortestToLongest(strings, sorted);
    }
  return sorted;
  
  }
  // Sorts strings from shortest to longest
  let strings1 = ["dog", "cat", "elephant", "ant", "pig", "emu"]
  console.log(shortestToLongest(strings1));
  // ['ant', 'cat', 'dog', 'emu', 'pig', 'elephant']