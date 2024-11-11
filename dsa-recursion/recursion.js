/** product: calculate the product of an array of numbers. */
function product(nums) {
  // Base case: if array is empty, return 1 (multiplicative identity)
  if (nums.length === 0) {
      return 1;
  } else {
      // Recursive step: multiply first element with product of the rest
      return nums[0] * product(nums.slice(1));
  }
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  // Base case: if list has only one word, return its length
  if (words.length === 1) {
      return words[0].length;
  } else {
      // Recursive step: the longest length between first word and the rest
      return Math.max(words[0].length, longest(words.slice(1)));
  }
}

/** everyOther: return a string with every other letter. */
function everyOther(str) {
  // Base case: if string is empty, return an empty string
  if (str.length === 0) {
      return "";
  } else {
      // Recursive step: include the first character and skip the next
      return str[0] + (str.length > 1 ? everyOther(str.substring(2)) : "");
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
  // Base case: if string has 1 or 0 characters, it is a palindrome
  if (str.length <= 1) {
      return true;
  } else {
      // Recursive step: check first and last character and substring between
      return str[0] === str[str.length - 1] && isPalindrome(str.substring(1, str.length - 1));
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val) {
  // Base case: if array is empty, return -1 (not found)
  if (arr.length === 0) {
      return -1;
  } else if (arr[0] === val) {
      return 0;
  } else {
      // Recursive step: search the rest of the array
      const restIndex = findIndex(arr.slice(1), val);
      // Adjust index if value is found in the rest of the array
      return restIndex === -1 ? -1 : 1 + restIndex;
  }
}

/** revString: return a copy of a string, but in reverse. */
function revString(str) {
  // Base case: if the string is empty, return an empty string
  if (str.length === 0) {
      return "";
  } else {
      // Recursive step: reverse the substring and append the first character
      return revString(str.substring(1)) + str[0];
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let result = [];
  for (let key in obj) {
      if (typeof obj[key] === "string") {
          result.push(obj[key]);
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
          // Recursive step: if value is an object, gather strings within it
          result = result.concat(gatherStrings(obj[key]));
      }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
* return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val, low = 0, high = null) {
  if (high === null) {
      high = arr.length - 1;
  }
  // Base case: if the subarray is empty, return -1 (not found)
  if (low > high) {
      return -1;
  }
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === val) {
      return mid;
  } else if (arr[mid] > val) {
      // Recursive step: search the left half
      return binarySearch(arr, val, low, mid - 1);
  } else {
      // Recursive step: search the right half
      return binarySearch(arr, val, mid + 1, high);
  }
}

module.exports = {
product,
longest,
everyOther,
isPalindrome,
findIndex,
revString,
gatherStrings,
binarySearch
};
