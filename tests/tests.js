

 
(function(){
  'use strict';

  var myApp = require('../app/library.js');
  describe("Car Class: Create a car, make it drive", function() {

    it("The car should be a type of `object`, and an instance of the `Car` class", function() {
      var volvo = new myApp.Car('Volvo');
      expect(typeof volvo).toEqual(typeof {});
      expect(volvo instanceof myApp.Car).toBeTruthy();
    });

    it("The car should be called 'General' if no name is passed as a parameter", function() {
      var gm = new myApp.Car();
      expect(gm.name).toEqual('General');
      expect(gm.model).toBe('GM');
    });

    it("The car name and model should be a property of the car", function() {
      var innoson  = new myApp.Car('Innoson', 'fox');
      expect(innoson.name).toBe('Innoson');
      expect(innoson.model).toBe('fox');
    });

    it("The car shoud have four (4) doors except its a Porshe or Koenigsegg", function() {
      var opel  = new myApp.Car('Opel', 'Omega 3');
      expect(opel.numOfDoors).toBe(4);

      var porshe = new myApp.Car('Porshe', '911 Turbo');
      expect(porshe.numOfDoors).toBe(2);
      porshe.drive(5);
      expect(porshe.speed).toBe('250 km/h');
      expect((function(){return new myApp.Car('Koenigsegg', 'Agera R');}()).numOfDoors).toBe(2);
    });

    it("The car shoud have four (4) wheels except its a type of trailer", function() {
      var daf  = new myApp.Car('DAF', 'Truck', 'trailer');
      expect(daf.numOfWheels).toBe(8);
      expect(daf.isSaloon).toBe(false);

      var koenigsegg = new myApp.Car('Koenigsegg', 'Agera R');
      expect(koenigsegg.numOfWheels).toBe(4);
      expect(koenigsegg.isSaloon).toBeTruthy();
    });

   

  });
})();