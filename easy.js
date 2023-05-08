var run = exercise('running');
var swim = exercise('swimming');


function exercise(activity) {
    return function() {
      return "Today's exercise: " + activity;
    }
  };

  console.log(swim()); // prints "Today's exercise: swimming"
  console.log(run()); // prints "Today's exercise: running"