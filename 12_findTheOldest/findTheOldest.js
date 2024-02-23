const getAge = (person) => {
    let yearOfDeath = person.yearOfDeath || new Date().getFullYear();
    return yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        let oldestAge = getAge(oldest);
        let currentAge = getAge(currentPerson);
        return (currentAge > oldestAge) ? currentPerson : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
