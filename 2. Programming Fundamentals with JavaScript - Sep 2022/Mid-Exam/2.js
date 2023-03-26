function solve(arr0) {

    let arr1 = arr0.slice(0)

    let initialNameArray = arr1[0].split(', ')
    let commandArray = arr1.slice(1)

    let blacklistCounter = 0
    let lostCounter = 0


    for (let i = 0; commandArray[i] != 'Report'; i++) {

        let currentCommand = commandArray[i].split(' ')
        let command = currentCommand[0]
        let secondAttribute = currentCommand[1]
        let thirdAttribute = currentCommand[2]


        switch (command) {

            case 'Blacklist':
                // console.log(`is blacklist`);
                if (initialNameArray.includes(secondAttribute)) {
                    let namePosition = initialNameArray.indexOf(secondAttribute)
                    console.log(`${secondAttribute} was blacklisted.`);
                    initialNameArray.splice(namePosition,1,'Blacklisted')
                    blacklistCounter++
                    
                } else {
                    console.log(`${secondAttribute} was not found.`);
                }
                break

            case 'Error':
                //is index valid && name at index is not blacklisted && not an error
                if (initialNameArray[secondAttribute] != undefined  && initialNameArray[secondAttribute] != 'Blacklisted' && initialNameArray[secondAttribute] != 'Lost') {
                    console.log(`${initialNameArray[secondAttribute]} was lost due to an error.`);
                    // let namePosition = initialNameArray.indexOf(secondAttribute)
                    initialNameArray.splice(secondAttribute,1,'Lost')
                    lostCounter++
                }
                // console.log(`is error`);
                break
            case 'Change': 

                if (initialNameArray[secondAttribute] != undefined) {
                    let initialName = initialNameArray[secondAttribute]
                    console.log(`${initialName} changed his username to ${thirdAttribute}.`);
                    initialNameArray.splice(secondAttribute,1,thirdAttribute)
                }
                // console.log(`is change`);
                break
        }


    }
    console.log(`Blacklisted names: ${blacklistCounter}`);
    console.log(`Lost names: ${lostCounter}`);
    console.log(initialNameArray.join(' '));


}
solve(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])
