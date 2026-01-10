var longestPalindrome = function(s){
    if(s.length <= 0) return s;

    let start = 0;
    let maxLen = 1;

    const expandFromCentre = (left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left--;
            right++;
        }

        return right - left - 1;
    }

    for(let i = 0; i<s.length; i++){
        //odd length
        let len1 = expandFromCentre(i, i);

        //even length
        let len2 = expandFromCentre(i, i+1);

        let len = Math.max(len1, len2);

        if(len> maxLen){
            maxLen = len;
            start = i - Math.floor((len-1)/2)
        }
    }

    console.log(s.substring(start, start + maxLen))
    return s.substring(start, start + maxLen);
}  

longestPalindrome("babad")