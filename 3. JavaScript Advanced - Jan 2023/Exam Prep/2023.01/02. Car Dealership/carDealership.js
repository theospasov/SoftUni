class CarDealership {
    constructor(name) {
        this.name = name
        this.availableCars = []
        this.soldCars = []
        this.totalIncome = 0
    }

    addCar(model, horsepower, price, mileage) {
        if (model == '' || horsepower < 0 || !Number.isInteger(horsepower) || price < 0 || mileage < 0) {
            throw new Error ("Invalid input!")
        }


        this.availableCars.push({model, horsepower, price, mileage })
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`

    }

    sellCar(model, desiredMileage) {
        let carIsAvailable = false
        let currCar = null

        for (const currEl of this.availableCars) {
            if(currEl.model == model ) {
                carIsAvailable = true
                currCar = currEl
            }
        }

        if(!carIsAvailable) {
            throw new Error (`${model} was not found!`) 
        } 

        let difference = currCar.mileage - desiredMileage

        if(currCar.mileage <= desiredMileage) {
            currCar.price =  currCar.price.toFixed(2)
        } else if (difference <= 40000) {
            currCar.price = (currCar.price * 0.95).toFixed(2)
        } else if (difference > 40000) {
            currCar.price = (currCar.price * 0.90).toFixed(2)
        }

        let soldCar = {
            model:  currCar.model,
            horsepower: currCar.horsepower,
            price:  currCar.price
        }
        this.totalIncome += Number(currCar.price)
        this.soldCars.push(soldCar)
        
        this.availableCars.filter(x => x != currCar)
        return `${currCar.model} was sold for ${currCar.price}$`

    }

    currentCar() {

        let finalText = '-Available cars:'
        
        if(this.availableCars.length == 0) {
            return `There are no available cars`
        } else {

            for (const currEl of this.availableCars) {
                finalText += `\n---${currEl.model} - ${currEl.horsepower} HP - ${(currEl.mileage).toFixed(2)} km - ${(currEl.price).toFixed(2)}$`
            }
        }
        return finalText
    }
    salesReport(criteria) {
        let sortedArray = null
        let finalText = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:`

        let correctCriteria = false 

        if (criteria == 'horsepower') {
            correctCriteria = true
        }

        if (criteria == 'model') {
            correctCriteria = true
        }
        

        if(!correctCriteria ) {
            throw new Error ("Invalid criteria!")
        }

        if (criteria == 'horsepower' ) {
            sortedArray = this.soldCars.sort((a,b) => b.horsepower - a.horsepower)
            for (const iterator of sortedArray) {
                
                finalText += `\n---${iterator.model} - ${iterator.horsepower} HP - ${iterator.price}$`
            }
        }
        
        if (criteria == 'model' ) {
            sortedArray = this.soldCars.sort((a,b) => (a.model).localeCompare(b.model))
            for (const iterator of sortedArray) {
                
                finalText += `\n---${iterator.model} - ${iterator.horsepower} HP - ${iterator.price}$`
            }
        }

        return finalText

        
    }

}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Coraalla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));