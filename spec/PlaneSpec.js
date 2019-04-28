use 'strict';

describe('Plane', function() {
  var plane;


  beforeEach(function() {
    plane = new Plane();
    //create airport variable, which is an instance of the Airport class and responds to the meathod clearForLanding
    //using Sandi Metz's space capsule technique, stubbing the outgoing interaction from plane to airport.
    airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeOff']);
  });

  it('tests the request to send to airport to takeoff', function {
    plane.set_request("take off")
    expect(plane.requested).toEqual("land")
  });
  // it('can land at an airport', function() {
  //   plane.land(airport);
  //   expect(airport.clearForLanding).toHaveBeenCalledWith(plane)
  // });
  //
  // it('can takeoff from an airport', function(){
  //   plane.land(airport);
  //   plane.takeoff(plane);
  //   expect(airport.clearForTakeOff).toHaveBeenCalled();
  // });

});
//
//   // it("Is not flying when landed", function(){
//   //   plane.land(airport);
//   //   expect(plane.flying).toBe(false);
//   // });
//   //
//   // it('Takes off from the airport', function(){
//   //   plane.land(airport);
//   //   plane.takeoff(airport);
//   //   expect(plane.flying).toBe(true);
//   // });
//   //
//   // it('does not take off in stormy weather', function() {
//   //   var msg = "Stormy"
//   //   plane.land(airport);
//   //   plane.update_weather(weather);
//   //   expect(function() { plane.takeoff(airport) }).toThrowError(msg);
//   // });
//
// // });
