function goldMine(input) {
    let index = 0
    let days = Number(input[index++])
    let sumOfDigs = 0
    let averagePerDay = 0

        for (i = 1 ; i <= days ; i++) {
            let expectedKg = Number(input[index++])
            let numberOfDigs = Number(input[index++])

            for (x = 1 ; x <= numberOfDigs ; x++) {
                let currDig = Number(input[index++])
                sumOfDigs += currDig
            }
            averagePerDay = sumOfDigs / numberOfDigs
            sumOfDigs = 0
            if (averagePerDay >= expectedKg) {
                console.log(`Good job! Average gold per day: ${averagePerDay.toFixed(2)}.`)
            } else if (averagePerDay < expectedKg) {
                let needed = expectedKg - averagePerDay
                console.log(`You need ${needed.toFixed(2)} gold.`)
            }
        }

        



}
goldMine(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])