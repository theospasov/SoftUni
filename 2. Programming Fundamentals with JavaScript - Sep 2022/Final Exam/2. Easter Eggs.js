//2. Easter Eggs
function easterEggs(input) {

    let text = input.shift()
    
    let pattern = /[@#]+(?<color>[a-z]{3,})[@#]+([^[A-Za-z0-9]*)\/+(?<amount>\d+)\/+/gm

    let matchEgg = text.matchAll(pattern)

    for (const currEgg of matchEgg) {

        let color = currEgg.groups.color
        let amount = currEgg.groups.amount
        
        console.log(`You found ${amount} ${color} eggs!`);
    }
}
easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])
