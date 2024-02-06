//Find the lowest number in the array below.

function getLowest(numbers) {
    let lowest = numbers[0]
    for (const number of numbers) {
        if (number < lowest) {
            lowest = number;
        }
    }
    return lowest;
}

const heights2 = [167, 190, 120, 165, 5, 137];

const res = getLowest(heights2);
console.log(res)