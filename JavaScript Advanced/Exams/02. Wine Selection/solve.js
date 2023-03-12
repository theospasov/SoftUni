class WineSelection{
    constructor(space) {
        this.space = space
        this.wines = []
        this.bill = 0
    }

    reserveABottle(wineName, wineType, price) {
        this.space -= 1
        if(this.space < 0) {
            throw new Error ("Not enough space in the cellar.")
        }
        let itemToAdd = {wineName, wineType, price, paid: false}
        this.wines.push(itemToAdd)

        return `You reserved a bottle of ${wineName} ${wineType} wine.`

    }

    payWineBottle( wineName, price ) {
        let wineIsAvailable = false
        let isPaid = false
        let currWine 

        if(typeof wineName == 'string' && typeof price == 'number' ) {

            for (const currEl of this.wines) {
                if (currEl.wineName == wineName ) {
                    wineIsAvailable = true
                    currWine = currEl
                    if (currEl.paid == true) {
                        isPaid = true
                    }

                }
            }

            if(!wineIsAvailable) {
                throw new Error(`${wineName} is not in the cellar.`)
            } 

            if(isPaid) {
                throw new Error(`${wineName} has already been paid.`)
            } else {
                currWine.paid = true
            }
            //console.table(this.wines)
            //console.table(this.bill)
            this.bill += price
            //console.table(this.bill)
            return `You bought a ${wineName} for a ${price}$.`
        } 

        

    }
    openBottle(wineName)  {
        let wineIsAvailable = false
        let currWine 

        for (const currEl of this.wines) {
            if (currEl.wineName == wineName ) {
                wineIsAvailable = true
                currWine =  currEl
                
            }
        }
        if(!wineIsAvailable) {
            throw new Error(`The wine, you're looking for, is not found.`)
        }  

        if(currWine.paid == false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }
        console.table(this.wines)
        let filterredArray =  this.wines.filter(x => x.wineName != wineName)
        this.wines = filterredArray
        console.table(this.wines)
        

        return `You drank a bottle of ${wineName}.`
    }

    cellarRevision(wineType) {
        if(wineType == undefined ) {
            let finalText = `You have space for ${this.space} bottles more.\nYou paid ${this.bill}$ for the wine.`
            let sortedArray = this.wines.sort((a,b) => (a.wineName).localeCompare(b.wineName))

            for (const iterator of sortedArray) {
                finalText += `\n${iterator.wineName} > ${iterator.wineType} - ${iterator.paid?"Has Paid":"Not Paid"}.`
                
            }
            return finalText
        }

        if(wineType != undefined) {
            let finalText = ''
            let filterredArray = this.wines.filter(x => x.wineType == wineType)
            if(filterredArray.length > 0) {
                for (const iterator of filterredArray) {
                    finalText += `${iterator.wineName} > ${iterator.wineType} - ${iterator.paid?"Has Paid":"Not Paid"}.\n`
                    
                }

                return finalText.trim()
            } else {
                throw new Error (`There is no ${wineType} in the cellar.`)
            }
            

        }

    }

}
const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.reserveABottle('Bodegas Godelib Mencía', 'Rose', 144);
selection.reserveABottle('Bodegas Godelic Mencía', 'White', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.payWineBottle('Bodegas Godelib Mencía', 144);
selection.payWineBottle('Bodegas Godelic Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision('Rose'));

