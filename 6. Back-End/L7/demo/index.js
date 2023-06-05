const mongoose = require('mongoose');
const Person = require('./models/Person')


const connectionStr = 'mongodb://127.0.0.1:27017/testdb';
start()

async function start() {
    await mongoose.connect(connectionStr, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log('Database connected');

    const data = await Person.find({}) // returns an Array with the matching data
    
    // // Printing Data
    // console.log(data[0].getInfo());
    // console.log(data[0].nameAndAge);
    //     // Iterating data with forEach
    // data.forEach(person => console.log(person.nameAndAge)); 

    // // Creating an Entry from Model
    //     // we can create a new Person with the class Person. On its own, this won't save the new Person in the DB, until we use persist
    //     const person = new Person({
    //         name: 'Petar',
    //         age: 25,
    //         height: 170
    //     })
    //     	await person.save() // this is the persist that saves the new Person in the DB


    // // Reading Data
    // const person = await Person.findById('647cbebb812698e73dfc5715') 
    // console.log(person);


    // // Updating Data
    // const person = await Person.findById('647cbebb812698e73dfc5715') 

    // person.age = 30
    // await person.save()

    // console.log(person);


    // // Delete Data
    // await Person.deleteOne({name: 'Petar'}) // will delete the first match
    //     //Version 2
    //     await Person.findByIdAndDelete('647cbebb812698e73dfc5715')



    // Filtering
    const result = await Person.find({age: {$gte:16}})

    const result1 = await Person
        .find({})
        .where({age: {$gte: 17}})
        .and({ age: {$lte: 30}})

    const result2 = await Person
        .find({})
        .where('age').gte(17).lte(30)


    console.log(result1);

    await mongoose.disconnect()

}
