const s = "abcabcbb";

var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let maxLen = 0;

  const set = new Set();

  for (right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
};

lengthOfLongestSubstring(s);
