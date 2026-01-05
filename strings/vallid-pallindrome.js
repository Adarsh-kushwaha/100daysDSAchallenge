var isPalindrome = function (s) {
  const str = s
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  let first = 0;
  let last = str.length - 1;

  while (first < last) {
    if (str[first] !== str[last]) {
      return false;
    }
    first++;
    last--;
  }

  return true;
};
