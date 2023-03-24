function christmasGifts(input) {
    //INPUT
    let index = 0
    const pricePerSweaters = 15
    const pricePetToy = 5
    let command = input[index]
    //LOGIC
    let kidCounter = 0
    let adultCounter = 0

    while(command != "Christmas"){
        command = (input[index++])
            if (command <= 16) {
                kidCounter++
            } else if (command > 16) {
                adultCounter++
            }
           

            
            
    }


    console.log(`Number of adults: ${adultCounter}\nNumber of kids: ${kidCounter}\nMoney for toys: ${(kidCounter * pricePetToy).toFixed(0)}\nMoney for sweaters: ${(adultCounter * pricePerSweaters).toFixed(0)}`)



}
christmasGifts(["16",
"20",
"46",
"12",
"8",
"20",
"49",
"Christmas"])