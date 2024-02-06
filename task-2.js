// Find the friend with the smallest name.

function getSmallestName(strings) {
    let lowestName = strings[0];
    for (const str of strings) {
        if (str.length < lowestName.length) {
            lowestName = str;
        }
    }
    return lowestName;
}

const heights2 = ['rahim', 'ab', 'robin', 'rafi', 'ron', 'rashed'];

const res = getSmallestName(heights2);
console.log(res);