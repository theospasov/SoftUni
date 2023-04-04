let { Repository } = require("../solution.js");
const { expect, assert } = require('chai')



describe("Tests Repository class", function () {
  let repository;
  beforeEach(function () {
    repository = new Repository({
      name: "string",
      age: "number",
      birthday: "object",
    });
  });

  describe("Test instantiation", function () {
    it("should initialize an instance of Repository", function () {
      expect(repository instanceof Repository).to.be.true;
    });

    it("should initialize an instance with empty data map", function () {
      expect(repository.data).to.be.an("Map");
      expect(repository.data.size).to.equal(0);
    });

    it("should throw an error if no props parameter is provided", function () {
      expect(() => new Repository()).to.throw("Invalid parameter");
    });
  });

  describe("Test add(entity)", function () {
    it("should add an entity to the repository and return its id", function () {
      const id = repository.add({
        name: "John Doe",
        age: 30,
        birthday: new Date(1990, 0, 1),
      });

      expect(id).to.equal(0);
      expect(repository.data.size).to.equal(1);
      expect(repository.data.get(0)).to.deep.equal({
        name: "John Doe",
        age: 30,
        birthday: new Date(1990, 0, 1),
      });
    });

    it("should throw an error if entity is missing a required property", function () {
      expect(() => repository.add({ name: "John Doe", age: 30 })).to.throw(
        "Property birthday is missing from the entity!"
      );
    });

    it("should throw an error if entity property is of incorrect type", function () {
      expect(() =>
        repository.add({
          name: "John Doe",
          age: "30",
          birthday: new Date(1990, 0, 1),
        })
      ).to.throw("Property age is of incorrect type!");
    });
  });

  describe("Test getId(id)", function () {
    it("should return the entity with the given id", function () {
      repository.add({
        name: "John Doe",
        age: 30,
        birthday: new Date(1990, 0, 1),
      });
      const entity = repository.getId(0);
      expect(entity).to.deep.equal({
        name: "John Doe",
        age: 30,
        birthday: new Date(1990, 0, 1),
      });
    });

    it("should return undefined if id does not exist in the repository", function () {
      const entity = repository.getId(0);
      expect(entity).to.be.undefined;
    });
  });

 

    
  })

