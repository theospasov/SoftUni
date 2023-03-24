function andProcessors(input) {
    const manufactureTime = 3
    const workingHoursPerCapita = 8
    const costPerProcessor = 110.1
    //INPUT
    const targetProcessors = Number(input[0])
    const capitaQuantity = Number(input[1])
    const workingDays = Number(input[2])

    let line2 = capitaQuantity * workingDays * workingHoursPerCapita
    let line3 = Math.floor(line2 / manufactureTime)
    
    
    if (line3 < targetProcessors) {
        let diff = targetProcessors - line3
        let loss = diff * costPerProcessor
        console.log(`Losses: -> ${loss.toFixed(2)} BGN`)
    } else {
        let diff = line3 - targetProcessors
        let profit = diff * costPerProcessor
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`)
    }

}
andProcessors(["150",
"7",
"18"])
