// Person constructor function
function Person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }
  
  // Person methods
  Person.prototype.exercise = function() {
    console.log("Running is fun! - said no one ever");
  };
  
  Person.prototype.fetchJob = function() {
    console.log(this.name + " is a " + this.job);
  };
  
  // Programmer constructor function
  function Programmer(name, job, age, languages) {
    Person.call(this, name, job, age);
    this.languages = languages;
    this.busy = true;
  }
  
  // Programmer methods (inheriting from Person)
  Programmer.prototype = Object.create(Person.prototype);
  Programmer.prototype.constructor = Programmer;
  
  Programmer.prototype.completeTask = function() {
    this.busy = false;
  };
  
  Programmer.prototype.acceptNewTask = function() {
    this.busy = true;
  };
  
  Programmer.prototype.offerNewTask = function() {
    if (this.busy) {
      console.log(this.name + " can't accept any new tasks right now.");
    } else {
      console.log(this.name + " would love to take on a new responsibility.");
    }
  };
  
  Programmer.prototype.learnLanguage = function(language) {
    this.languages.push(language);
  };
  
  Programmer.prototype.listLanguages = function() {
    console.log(this.name + " knows " + this.languages.join(", "));
  };
  
  // testing the code
  var person1 = new Person("Alice", "teacher", 30);
  person1.exercise();
  person1.fetchJob();
  
  var programmer1 = new Programmer("Bob", "developer", 25, ["JavaScript"]);
  programmer1.offerNewTask();
  programmer1.completeTask();
  programmer1.offerNewTask();
  programmer1.learnLanguage("Python");
  programmer1.listLanguages();
  
  var programmer2 = new Programmer("Charlie", "data scientist", 35, ["Python"]);
  programmer2.listLanguages();
  
