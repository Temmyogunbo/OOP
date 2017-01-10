

module.exports = {


//QUESTION 3

Car: function(name ='General', model='GM', type,numOfDoors, speed=0 ) {
  this.type = type;
  this.model = model;
  this.name = name;
  this.numOfDoors= (name === 'Porshe' || name === 'Koenigsegg') ? 2:4 ;
  this.numOfWheels = type === "trailer" ? 8 : 4;
  this.isSaloon = type === "trailer" ? false : true;
  this.drive = function(num = 0) {
    this.speed = this.model === "911 Turbo" ? num * 50 + " " + "km/h" : num * 11 + " " + "km/h";
    }

}

//instantiation will be
// var myCar=new Car("Toyota","2.6","Spider")




}    




 