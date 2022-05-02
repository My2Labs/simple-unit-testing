function greetPeople(people) {
    var greeting = "Hello ";

    people.forEach(function(person) {
        greeting = greeting + person;
    });
    console.log(greeting)
    return greeting;
}

module.exports = greetPeople;