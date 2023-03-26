function solve(arr0) {

    let arr1 = arr0.slice(0)
    let xpForTank = Number(arr1[0])
    let possibleRounds = Number(arr1[1])
    let battlesArray = arr1.slice(2)

    let battleCounter = 0
    let xpSum = 0
    let currentXP = 0
    let neededXP = 0


    for ( let i = 0 ; xpSum < xpForTank && battleCounter < possibleRounds ; i++ ) {
        currentXP = Number(battlesArray[i])
        battleCounter++

        if( battleCounter % 3 == 0) {
            currentXP *= 1.15
        }
        if (battleCounter % 5 == 0) {
            currentXP *= 0.9
        }
        if (battleCounter % 15 == 0) {
            currentXP *= 1.05
        }

        xpSum += Number(currentXP)

    }

    neededXP = Number(xpForTank - xpSum)

    if (xpSum >= xpForTank) {
        console.log(`Player successfully collected his needed experience for ${battleCounter} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${neededXP.toFixed(2)} more needed.`);
    }

 
} 
solve([500,
    5,
    50,
    100,
    200,
    100,
    20])
