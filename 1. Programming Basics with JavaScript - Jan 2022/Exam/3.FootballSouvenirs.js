function footballSouvenirs(input) {
    const country = input[0]
    const item = input[1]
    const quantity = Number(input[2])
    let itemPrice = 0
    let sum = 0
    let isTheRightCountry = true
    let isTheRightItem = true

    switch (country) {
        case "Argentina":
            switch (item) {
                case "flags": itemPrice = 3.25; break
                case "caps": itemPrice = 7.2; break
                case "posters": itemPrice = 5.1; break
                case "stickers": itemPrice = 1.25; break
                default: isTheRightCountry = false; break

            
            }
            break
        case "Brazil":
            switch (item) {
                    case "flags": itemPrice = 4.2; break
                    case "caps": itemPrice = 8.5; break
                    case "posters": itemPrice = 5.35; break
                    case "stickers": itemPrice = 1.2; break
                    default: isTheRightCountry = false; break
            }
            break
        case "Croatia":
            switch (item) {
                    case "flags": itemPrice = 2.75; break
                    case "caps": itemPrice = 6.9; break
                    case "posters": itemPrice = 4.95; break
                    case "stickers": itemPrice = 1.1; break
                    default: isTheRightCountry = false; break
                }
                break
        case "Denmark":
                    switch (item) {
                            case "flags": itemPrice = 3.1; break
                            case "caps": itemPrice = 6.5; break
                            case "posters": itemPrice = 4.8; break
                            case "stickers": itemPrice = 0.9; break
                            default: isTheRightCountry = false; break
                        }
                        break
        default: isTheRightItem = false
                    }
    


    if (isTheRightCountry != true ) {
        console.log(`Invalid stock!`)
    } else if (isTheRightItem != true) {
        console.log(`Invalid country!`)
    } else {
        console.log(`Pepi bought ${quantity} ${item} of ${country} for ${(quantity * itemPrice).toFixed(2)} lv.`)
    }
}
footballSouvenirs(["Croatia",
"flags",
"13"])