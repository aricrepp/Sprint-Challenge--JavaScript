// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2{
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }

    /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height

    */
    volume(){
        return this.length * this.width * this.height;
    }

    /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
    */
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }

  }

  const cuboid2 = new CuboidMaker2(4,5,5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid2.volume()); // 100
 console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods 
//  using the dimension properties from CuboidMaker.
//  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(length, width, height){
        super(length, width, height);
    }

    cubeVolume(){
        return this.length * this.width * this.height;
    }

    cubeSurfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cube = new CubeMaker(5,5,5);

console.log(cube.cubeVolume()); // 125
 console.log(cube.cubeSurfaceArea()); // 150