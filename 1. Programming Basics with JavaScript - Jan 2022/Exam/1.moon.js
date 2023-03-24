function moon(input) {
    const avgSpeed = Number(input[0])
    const litersNeededFor100Km = Number(input[1])
    const distanceToTheSun = 384400
    const timeSpendOnTheSun = 3

    let totalDistance = (distanceToTheSun * 2)
    let timeFor2WayTrip = Math.ceil(totalDistance / avgSpeed)
    
    let totalTime = timeSpendOnTheSun + timeFor2WayTrip
    let fuel = (litersNeededFor100Km * totalDistance) / 100

    console.log(`${Math.round(totalTime)}\n${fuel}`)




}
moon(["15000",
"4"])

