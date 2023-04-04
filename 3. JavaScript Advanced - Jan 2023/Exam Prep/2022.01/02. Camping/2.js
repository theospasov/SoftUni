class SummerCamp {
    constructor(organizer, location ) {
        this.organizer = organizer
        this.location = location
        this.priceFotTheCamp = {"child": 150, "student": 300, "collegian": 500}
        this.listOfParticipants = []
    }

    registerParticipant(name, condition, money) {
        
        if (!this.priceFotTheCamp[condition]) {
            throw new Error ('Unsuccessful registration at the camp.')
        }

    
        if (this.listOfParticipants.some(x => x.name == name)) {
            return `The ${name} is already registered at the camp.`
        }

        if (money < this.priceFotTheCamp[condition] ) {
            return `The money is not enough to pay the stay at the camp.`
        } else {
            this.listOfParticipants.push({name, condition, power: 100, wins: 0})
            return `The ${name} was successfully registered.`
        }

        
    }

    unregisterParticipant(name) {
        if (!this.listOfParticipants.some(x => x.name == name)) {
          return (`The ${name} is not registered in the camp.`)
        }
        this.listOfParticipants = this.listOfParticipants.filter(x => x.name !== name)
        return `The ${name} removed successfully.`
        
    } 

    timeToPlay(typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find(x => x.name == participant1)
        let player2 = this.listOfParticipants.find(x => x.name == participant2)
        if (typeOfGame == 'Battleship') {
            if (!this.listOfParticipants.some(x => x.name == participant1)) {
                throw new Error (`Invalid entered name/s.`)
            }
            player1.power += 20
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }

        if (typeOfGame == 'WaterBalloonFights') {
            if (!this.listOfParticipants.some(x => x.name == participant1) || !this.listOfParticipants.some(x => x.name == participant2) ) {
                throw new Error (`Invalid entered name/s.`)

            }

            if (player1.condition !=  player2.condition) {
               return (`Choose players with equal condition.`)
            }
                
            if (player1.power > player2.power) {
                player1.wins += 1 
                return `The ${player1.name} is winner in the game ${typeOfGame}.`
            } else if (player1.power < player2.power) {
                player2.wins += 1
                return `The ${player2.name} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`
            }
        }
        

    }

    toString() {
        console.log( `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)

        let sortedParticipants = this.listOfParticipants.sort((a,b) = b.wins - a.wins)

        for (const iterator of sortedParticipants) {
            console.log(`${iterator.name} - ${iterator.condition} - ${iterator.power} - ${iterator.wins}`)
        }
    } 
}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Alex Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// // console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// // console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Dimitur Kostov", "Dimitur Kostov"));

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));