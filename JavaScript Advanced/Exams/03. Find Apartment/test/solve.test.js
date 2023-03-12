const { expect, assert } = require('chai')
const findNewApartment = require('../solve')

describe("findNewApartment", () => {
    describe("isGoodLocation", () => {
        it("should THROW ERROR inv city", () => {
            expect(()=>findNewApartment.isGoodLocation(1,true)).to.throw(`Invalid input!`) // Pass
        });
        it("should THROW ERROR inv transport", () => {
            expect(()=>findNewApartment.isGoodLocation('Rz',5)).to.throw(`Invalid input!`) // Pass
        });
        it("should THROW ERROR inv transport", () => {
            expect(()=>findNewApartment.isGoodLocation('Rz','true')).to.throw(`Invalid input!`) // Pass
        });
        it("should THROW ERROR inv city & transport", () => {
            expect(()=>findNewApartment.isGoodLocation(5,5)).to.throw(`Invalid input!`) // Pass
        });
        it("should Return != Sofia", () => {
            expect(findNewApartment.isGoodLocation('Rz',true)).to.equal(`This location is not suitable for you.`) // Pass
        });
        it("should Return != pt", () => {
            expect(findNewApartment.isGoodLocation('Sofia',false)).to.equal(`There is no public transport in area.`) // Pass
        });
        it("should Return OK", () => {
            expect(findNewApartment.isGoodLocation('Sofia',true)).to.equal(`You can go on home tour!`) // Pass
        });
        
     });
    
    describe("isLargeEnough", () => {
        it("should THROW ERROR inv input", () => { 
            expect(()=>findNewApartment.isLargeEnough(1, 50)).to.throw("Invalid input!")
        });
        it("should THROW ERROR inv input", () => { 
            expect(()=>findNewApartment.isLargeEnough([], 50)).to.throw("Invalid input!")
        });
        it("should THROW ERROR inv input", () => { 
            expect(()=>findNewApartment.isLargeEnough([1,2], 'five')).to.throw("Invalid input!")
        });
        // it("should THROW ERROR inv input", () => { 
        //     expect(()=>findNewApartment.isLargeEnough([1,2], -1)).to.throw("Invalid input!")

        // });
        it("should add app", () => { 
            expect(findNewApartment.isLargeEnough([2,4],2 )).to.equal("2, 4")
            
        });
        it("should add app", () => { 
            expect(findNewApartment.isLargeEnough([4],2 )).to.equal("4")
            
        });
        it("should add app", () => { 
            expect(findNewApartment.isLargeEnough([2],2 )).to.equal("2")
            
        });
        it("should add app", () => { 
            expect(findNewApartment.isLargeEnough([2,4],5 )).to.equal("")
            
        });
    })
    describe('isItAffordable', ()=> {
        it('should THROW err with inv input', ()=> {
            expect(()=>findNewApartment.isItAffordable('one', 10)).to.throw("Invalid input!")
        })
        it('should THROW err with inv input', ()=> {
            expect(()=>findNewApartment.isItAffordable(1, 'ten')).to.throw("Invalid input!")
        })
        it('should THROW err with inv input', ()=> {
            expect(()=>findNewApartment.isItAffordable(-1, 10)).to.throw("Invalid input!")
        })
        it('should THROW err with inv input', ()=> {
            expect(()=>findNewApartment.isItAffordable(1, -10)).to.throw("Invalid input!")
        })
        it('should THROW err with inv input', ()=> {
            expect(()=>findNewApartment.isItAffordable(-1, -10)).to.throw("Invalid input!")
        })
        it('should THROW err with inv input', ()=> {
            expect(()=>findNewApartment.isItAffordable(0, 10)).to.throw("Invalid input!")
        })
        it('should THROW err with inv input', ()=> {
            expect(()=>findNewApartment.isItAffordable(1, 0)).to.throw("Invalid input!")
        })
        it('should THROW err with inv input', ()=> {
            expect(()=>findNewApartment.isItAffordable(0, 0)).to.throw("Invalid input!")
        })
        it('should RETURN no', ()=> {
            expect(findNewApartment.isItAffordable(2, 1)).to.equal("You don't have enough money for this house!")
        })
        it('should RETURN yes', ()=> {
            expect(findNewApartment.isItAffordable(2, 2)).to.equal("You can afford this home!")
        })
        it('should RETURN yes', ()=> {
            expect(findNewApartment.isItAffordable(2, 3)).to.equal("You can afford this home!")
        })
        
    })
});