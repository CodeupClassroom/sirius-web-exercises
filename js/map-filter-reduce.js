"use strict";
(function(){

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    let threeLanguages = users.filter(user => user.languages.length >= 3);

    console.log(threeLanguages);

    let emailAddresses = users.map(user => user.email);

    console.log(emailAddresses);

    let totalYears = users.reduce((previousVal, currentVal) => {
        return previousVal + currentVal.yearsOfExperience;
    }, 0)
    console.log(totalYears);
    // pt. 2
    let avgExp = totalYears / users.length;

    // let longestEmail = emailAddresses.reduce((previousValue, currentValue) => {
    //     return previousValue.length > currentValue.length ? previousValue : currentValue;
    // });
    // console.log(longestEmail);

    let longestEmail = users.reduce((previousValue, currentValue) => {
        if(previousValue.email.length > currentValue.email.length) {
         return previousValue;
        } else{
            return currentValue;
        }
    });
    console.log(longestEmail);

    let instructors = users.reduce((finalString, nextUser, index) => {
        // if it is the LAST INDEX of the array, concat a period, else, concat a comma.
        if(index === users.length -1) {
            return finalString + nextUser.name + ".";
        } else {
            return finalString + nextUser.name + ", ";
        }
    }, "Your instructors are: ");

    console.log(instructors)

    let uniqueLanguages = users.reduce((langs, currentVal) => {
        currentVal.languages.forEach(language => {
            if(!langs.includes(language)) {
                langs.push(language);
            }
        })
        return langs;
    }, []);

    console.log(uniqueLanguages);

})();