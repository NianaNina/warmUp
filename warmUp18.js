

// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1',
// else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

  function countOccurrences(string, character) {

  	    var str = string.split(' ');
       if (Array.isArray()) {
      for (var i = 0; i < string.length; i++) {
        character(string[i], i);
      }
    } else {
      for (var key in string) {
        character(string[key], key);
      }
    }
  }
  
