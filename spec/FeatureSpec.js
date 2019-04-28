'use strict';

describe('Feature Test', function() {
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport;
  });

  it('planes can be instructed to land at airport', function() {
    plane.land(airport)
    expect(airport.planes).toContain(plane);
  });

  it('planes can be instructed to takeoff and confirm that it has taken off', function(){
    plane.land(airport)
    expect(airport.planes).toContain(plane)
    plane.takeoff(plane)
    expect(airport.planes).not.toContain(plane)
  });

  it('prevents takeoff in stormy weather', function(){
    plane.land(airport)
    //spyOn is simalar to allow -- allow aiport to receive method called isSotrmy and return value true
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane);
  });

  // it('prevent takeoff when weather is stormy', function() {
  //   plane.land(airport)
  //   expect(airport._landed).toContain(plane)
  //
  //   airport.weather_is_stormy = true;
  //
  //   plane.takeoff()
  //   // take-off should be prevented
  //   expect(airport._landed).not.toEqual([])
  // });
  //
  // it('prevents landing when weather is stormy', function(){
  //
  //     airport.weather_is_stormy = false;
  //     plane.land(airport)
  //     plane.takeoff()
  //     expect(airport._landed).toEqual([])
  //     airport.weather_is_stormy = true;
  //     plane.land(airport)
  //     expect(airport._landed).not.toContain(plane)
  // });

});
