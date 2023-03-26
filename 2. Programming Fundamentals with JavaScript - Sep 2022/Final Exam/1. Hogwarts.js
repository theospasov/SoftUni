//1. Hogwarts
function hogwarts(input) {

    let rawSpell = input.shift()


    for (let index = 0; input[index] != "Abracadabra"; index++) {
        let currLine = input[index].split(' ')
        let currCommand = currLine[0]

        if (currCommand != 'Abjuration' && currCommand != 'Necromancy' && currCommand != 'Illusion' && currCommand != 'Divination' && currCommand != 'Alteration') {
            console.log("The spell did not work!");

        } else {

            if (currCommand == 'Abjuration') {
                rawSpell = rawSpell.toUpperCase()
                console.log(rawSpell);
            }

            if (currCommand == 'Necromancy') {
                rawSpell = rawSpell.toLowerCase()
                console.log(rawSpell);
            }

            if (currCommand == 'Illusion') {
                let currIndex = Number(currLine[1])

                let currLetter = currLine[2]

                if (currIndex < 0 || currIndex > rawSpell.length - 1) {
                    console.log("The spell was too weak.");
                } else {
                    let firstPart = rawSpell.substring(0, currIndex)
                    let lastPart = rawSpell.substring(currIndex + 1)
                    rawSpell = firstPart + currLetter + lastPart
                    console.log('Done!');
                }

            }

            if (currCommand == 'Divination') {
                let firstSub = currLine[1]
                let secondSub = currLine[2]

                if (!rawSpell.includes(firstSub)) {

                } else {

                    while (rawSpell.includes(firstSub)) {
                        rawSpell = rawSpell.replace(firstSub, secondSub)

                    }
                    console.log(rawSpell);
                }

            }

            if (currCommand == 'Alteration') {
                let firstSub = currLine[1]


                if (!rawSpell.includes(firstSub)) {

                } else {

                    rawSpell = rawSpell.replace(firstSub, "")
                    console.log(rawSpell);

                }
            }
        }
    }


}
hogwarts(["SwordMaster",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"])
