function solve(priceArray, entryPoint, itemsType ) {

    let sumItemsToTheLeft = 0
    let sumItemsToTheRight = 0
    let currentPrice

    for ( let i = entryPoint - 1; i >= 0 ; i--) {
        if (itemsType == 'cheap') {
            currentPrice = Number(priceArray[i])
            if (currentPrice < priceArray[entryPoint]) {
                sumItemsToTheLeft += currentPrice
            }

        } else if (itemsType == 'expensive') {
            currentPrice = Number(priceArray[i])
            if (currentPrice >= priceArray[entryPoint]) {
                sumItemsToTheLeft += currentPrice
            }
        }
        
    }

    for ( let i = entryPoint + 1; i < priceArray.length ; i++) {
        if (itemsType == 'cheap') {
            currentPrice = Number(priceArray[i])
            if (currentPrice < priceArray[entryPoint]) {
                sumItemsToTheRight += currentPrice
            }

        } else if (itemsType == 'expensive') {
            currentPrice = Number(priceArray[i])
            if (currentPrice >= priceArray[entryPoint]) {
                sumItemsToTheRight += currentPrice
            }
        }
        
    }

    if (sumItemsToTheLeft >= sumItemsToTheRight) {
        console.log(`Left - ${sumItemsToTheLeft}`);
    } else {
        console.log(`Right - ${sumItemsToTheRight}`);
    }
    
} 
solve([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive")
