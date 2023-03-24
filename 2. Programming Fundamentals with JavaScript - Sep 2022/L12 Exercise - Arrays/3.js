
//3. Merge Arrays
function mergeArrays(arr1, arr2) {

    let arr3 = []

    for (let i = 0; i < arr1.length; i++) {
        let currentEl1 = arr1[i]
        for (; i < arr2.length; i++) {
            let currEl2 = arr2[i]

            if (i % 2 == 0) {
                let sumEven = Number(currentEl1) + Number(currEl2)
                arr3.push(sumEven)
            } else if (i % 2 != 0) {
                let sumOdd = `${currentEl1}${currEl2}`
                arr3.push(sumOdd)
            }

            break
        }
    }
    console.log(arr3.join(' - '))
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])
