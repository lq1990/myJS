function Dog() {
	this.age=2;
}

Dog.prototype.weight = 20;
var m = new Dog();

m.__proto__ === Dog.prototype
Dog.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null












