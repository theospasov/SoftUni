function catFoot(input) {
    //INPUT
    let index = 0
    const catNumbers = Number(input[index++])
    const catFoodPricePerKg = 12.45
    //LOGIC
    let sumFood = 0
    let group1Counter = 0
    let group2Counter = 0
    let group3Counter = 0

    for (i = 1 ; i <= catNumbers ; i++) {
        let gramsPerCat = Number(input[index++])
        sumFood += gramsPerCat

        if (gramsPerCat >= 100 && gramsPerCat < 200) {
            group1Counter++
        } else if (gramsPerCat >= 200 && gramsPerCat < 300) {
            group2Counter++
        } else if (gramsPerCat >= 300 && gramsPerCat < 400) {
            group3Counter++
        }

    }
    let priceForAllFoodPerDay = (sumFood / 1000) * catFoodPricePerKg
console.log(`Group 1: ${group1Counter} cats.\nGroup 2: ${group2Counter} cats.\nGroup 3: ${group3Counter} cats.\nPrice for food per day: ${priceForAllFoodPerDay.toFixed(2)} lv.`)



}
catFoot(["6",
"102",
"236",
"123",
"399",
"342",
"222"])
