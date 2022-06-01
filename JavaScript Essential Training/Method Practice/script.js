/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },

  newName: function (newName){
    this.name = newName;
  },

  newVolume: function (newVolume){
    this.volume = newVolume;
  },
  
  newColor: function (newColor){
    this.color = newColor;
  },
};


console.log("The backpack objects:", backpack);

// New Name 
backpack.newName("School Backpack");
console.log("New backpack name:", backpack.name);

// New volume
backpack.newVolume(25);
console.log("New backpack volume:", backpack.volume);

// New volume
backpack.newColor("black");
console.log("New backpack color:", backpack.color);
