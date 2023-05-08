function createPii(name, ssn) {
    // create a closure to encapsulate the pii object and its properties
    let pii = {};
  
    // private property for ssn
    let ssnNumber = ssn;
  
    // public method for accessing the name property
    pii.getName = function() {
      return name;
    }
  
    // return the pii object with only the getName method exposed
    return pii;
  }
  
  // example usage
  let myPii = createPii("John Doe", "123-45-6789");
  console.log(myPii.getName()); // outputs "John Doe"
  console.log(myPii.ssnNumber); // outputs undefined (ssn property is not accessible)