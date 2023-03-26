function wildZoo(input) {

    let animalDBObj = {}

    for (let index = 0; input[index] != "EndDay"; index++) {
        let currentLine = input[index]
        let currentCommand = currentLine.split(': ')[0]
        let theRestOfTheCommand = currentLine.split(': ')[1]

        if (currentCommand == 'Add') {

            let animalName = theRestOfTheCommand.split('-')[0]
            let neededFoodQuantity = Number(theRestOfTheCommand.split('-')[1])
            let animalArea = theRestOfTheCommand.split('-')[2]

            if (!animalDBObj.hasOwnProperty(animalName)) {
                animalDBObj[animalName] = {
                    needFood: neededFoodQuantity,
                    animalArea: animalArea
                }
            } else {
                animalDBObj[animalName].needFood += neededFoodQuantity
            }

        }

        if (currentCommand == 'Feed') {
            let animalName = theRestOfTheCommand.split('-')[0]
            let foodFed = Number(theRestOfTheCommand.split('-')[1])
            if (animalDBObj.hasOwnProperty(animalName)) {
                animalDBObj[animalName].needFood -= foodFed

                if (animalDBObj[animalName].needFood <= 0) {
                    console.log(`${animalName} was successfully fed`);
                    delete animalDBObj[animalName]
                }
            }
        }
    }

    console.log(`Animals:`);

    for (const animalName in animalDBObj) {

        console.log(` ${animalName} -> ${animalDBObj[animalName].needFood}g`);


    }

    console.log(`Areas with hungry animals:`);

    let areaDBObj = {}

    for (const animalName in animalDBObj) {
        let area = animalDBObj[animalName].animalArea
        if (!areaDBObj.hasOwnProperty(area)) {
            areaDBObj[area] = 1
        } else {
            areaDBObj[area] += 1
        }
    }

    for (const area in areaDBObj) {
        console.log(` ${area}: ${areaDBObj[area]}`);


    }

}
wildZoo(["Add: Jamie-600-WaterfallArea",
"Add: Maya-6570-WaterfallArea",
"Add: Adam-4500-ByTheCreek",
"Add: Bobbie-6570-WaterfallArea",
"Add: Aq-6570-Selo",
"Feed: Jamie-2000",
"Feed: Adam-2000",
"Feed: Adam-2500",
"EndDay"])