//1. Add and Subtract
function addAndSubtract(arr1) {

    let currNumber = 0

    let sumOrg = 0
    let sumModified = 0

    for (let digit of arr1) {
        sumOrg += digit
    }

    for (let i = 0; i < arr1.length; i++) {
        currNumber = arr1[i]

        if (currNumber % 2 == 0) {
            currNumber = currNumber + i
            arr1[i] = currNumber
        } else if (currNumber % 2 != 0) {
            currNumber = currNumber - i
            arr1[i] = currNumber
        }
        sumModified += currNumber

    }
    console.log(arr1);
    console.log(`${sumOrg}\n${sumModified}`)

}
addAndSubtract([5, 15, 23, 56, 35])