const { SyncBailHook } = require('tapable');
const assert = require('node:assert');

class Car {
	constructor() {
		this.speed = 0;
		
		this.hooks = {
			accelerate: new SyncBailHook(["newSpeed"])
		};
	}

	accelerate(newSpeed, cb) {
		const hookSpeed = this.hooks.accelerate.call(newSpeed);
		this.speed = hookSpeed;
	}
}

const car = new Car();


car.hooks.accelerate.tap(
	"plugin",
	(newSpeed) => newSpeed + 50
);

car.accelerate(100);
assert.equal(car.speed, 150);

car.accelerate(150);
assert.equal(car.speed, 200);
