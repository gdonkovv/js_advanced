function carFactory(car) {

    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriages = [{ type: 'hatchback', color: car.color }, { type: 'coupe', color: car.color }];

    let result = {model: car.model};

    result.engine = engines.filter(x => x.power >= car.power)[0];
    result.carriage = carriages.filter(x => x.type === car.carriage)[0];
    let wheel = car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize; 
    result.wheels = [wheel,wheel,wheel,wheel];

    return result;

}
carFactory(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    });