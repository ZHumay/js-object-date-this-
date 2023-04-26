//Object task-1
// const users = [
//   { username: "David", status: "online", lastActivity: 10 },

//   { username: "Lucy", status: "offline", lastActivity: 22 },

//   { username: "Bob", status: "online", lastActivity: 104 },
// ];

// const onlineUsers = users.filter((user) => user.status === "online");
// console.log(onlineUsers);
// const usersOnlineNames = onlineUsers.map((user) => user.username).join(", ");

// alert(`The following users are online now: ${usersOnlineNames}`);

//Object task-2
// const student = {
//   fullName: "Maxim",
//  experienceInMonths: 12,
//  stack: ["HTML", "CSS", "JavaScript", "React"],
// };
// function giveJobToStudent(student, jobName) {
//   alert(
//     `Congratulations! Student ${student.fullName} has a new job! It is now ${jobName}`
//   );
// }
// const updatedStudent = giveJobToStudent(student, "web developer");

// Object task-3
// function handleObject(obj, key, action) {
//   if(action==="get"){
// return obj[key]
//   }
// if(action==="delete"){
//   delete obj[key]
//   return obj
//   }
// if(action==="add"){
//    obj[key]=" "
//    return obj
//   }
// }

// const student = {
//   name: "Maxim",
//   programmingLanguage: "JavaScript",
// };

// const result1 = handleObject(student, "programmingLanguage", "get");
// console.log("result", result1);

// const result2 = handleObject(student, "programmingLanguage", "delete");
// console.log("result", result2);

// const result3 = handleObject(student, "programmingLanguage", "add");
// console.log("result", result3);

// Object task-4
// function getKiller(suspectInfo, deadPeople) {
//   for (const suspect in suspectInfo) {
//     if (suspect in suspectInfo) {
//       const whoSee = suspectInfo[suspect];
//       const allSeen = deadPeople.every((dead) => whoSee.includes(dead));
//       if (allSeen) {
//         return suspect;
//       }
//     }
//   }
//   return "Unknown";
// }
// const killer1 = getKiller(
//   {
//     James: ["Jacob", "Bill", "Lucas"],
//     Johnny: ["David", "Kyle", "Lucas"],
//     Peter: ["Lucy", "Kyle"],
//   },
//   ["Lucas", "Bill"]
// );
// console.log(killer1);

// const killer2 = getKiller(
//   {
//     Brad: [],
//     Megan: ["Ben", "Kevin"],
//     Finn: [],
//   },
//   ["Ben"]
// );
// console.log(killer2);

//Object task-5
// function getWinner(applicants, winnerObject) {
//   const keys = Object.keys(applicants);
//   const winnerKey = keys[getRandomNumberInRange(0, keys.length)];
//   const winner = applicants[winnerKey];
//   return { ...winnerObject, ...winner };
// }

// function getRandomNumberInRange(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// const todaysWinner = {
//   prize: "$10,000",
// };

// const winnerApplicants = {
//   "001": {
//     name: "Max",
//     age: 25,
//   },
//   "201": {
//     name: "Svetlana",
//     age: 20,
//   },
//   "304": {
//     name: "Catherine",
//     age: 35,
//   },
// };

// const resultWinner = getWinner(winnerApplicants, todaysWinner);
// console.log("resultWinner", resultWinner);

//Object task-6
// function giveTalonsInOrder(patients, orders) {
//   const sortedPatients = [];

//   for (const id of orders) {
//     const patient = patients.find((p) => p.id === id);

//     if (patient) {
//       sortedPatients.push(patient);
//     }
//   }

//   return sortedPatients;
// }

// const ordersArr = [4, 2, 1, 3];
// const people = [
//   { id: 1, name: "Maxim" },
//   { id: 2, name: "Nicholas" },
//   { id: 3, name: "Angelina" },
//   { id: 4, name: "Vitaly" },
// ];

// const result = giveTalonsInOrder(people, ordersArr);
// console.log("result", result);







//Date task-1
// function getDateFormat(date, separator = '.') {
//   const day = date.getDate().toString().padStart(2, '0');
//   const month = (date.getMonth() + 1).toString().padStart(2, '0');
//   const year = date.getFullYear().toString();

//   if (separator === '-') {
//     return `${day}-${month}-${year}`;
//   } else {
//     return `${day}${separator}${month}${separator}${year}`;
//   }
// }

// const myDate = new Date('April 27,2023');
// console.log(getDateFormat(myDate));     
// console.log(getDateFormat(myDate, '-')); 

// //if 1<day<10 and 1<month<10
// const myDate2=new Date('April 8,2023')
// console.log(getDateFormat(myDate2)); //08.04.2023
// console.log(getDateFormat(myDate2,'-'))



//Date task -2
// function getDaysBeforeBirthday(nextBirthdayDate) {

//   const today = new Date();

//   nextBirthdayDate.setFullYear(today.getFullYear());

//   if (nextBirthdayDate < today) {
//     nextBirthdayDate.setFullYear(today.getFullYear() + 1);
//   }

//   const timeDiff = nextBirthdayDate.getTime() - today.getTime();

//   const daysDiff = convertMsToDays(timeDiff);

//   return daysDiff;
// }

// function convertMsToDays(milliseconds) {
//   const oneDayMs = 24 * 60 * 60 * 1000;

//   return Math.round(milliseconds / oneDayMs);
// }
// const myNextBirthday = new Date('Iyun 1, 2023');
// console.log(getDaysBeforeBirthday(myNextBirthday)); 



//Date task-3
// function addDays(date, days = 1) {
//   const daysInMs = days * 24 * 60 * 60 * 1000;
//   const newTimestamp = date.getTime() + daysInMs;
//   return new Date(newTimestamp);
// }
// const myDate = new Date('2023-04-27');
// const updatedDate = addDays(myDate, 7);
// console.log(updatedDate)






//This task-1
// const student = {
//   stack: ['HTML'],
//   level: 1,
//   improveLevel() {
//     this.level++;

//     if (this.level === 2) {
//       this.stack.push('CSS');
//     } else if (this.level === 3) {
//       this.stack.push('JavaScript');
//     } else if (this.level === 4) {
//       this.stack.push('React');
//     } else if (this.level === 5) {
//       this.stack.push('NodeJS');
//     } else if (this.level > 5) {
//       alert('The student has learned all technologies!');
//     }

//     return this;
//   },
// };
// student
//   .improveLevel()
//   .improveLevel()
//   .improveLevel()
//   .improveLevel()
//   .improveLevel();

// console.log(student.stack); 





//This task-2
//bind:
// function makeDomestic(name,type,isDomestic) {
//   console.log(`${this.type} by name ${this.name} says ${this.makeSound()}`);
//   return {
//     name: this.name,
//     type: this.type,
//     makeSound: this.makeSound,
//     isDomestic: isDomestic,
//   };
// }

// const makeDogDomestic = makeDomestic.bind(dog);
// const dogDomestic = makeDogDomestic(true);

// const makeBirdDomestic = makeDomestic.bind(bird);
// const birdDomestic = makeBirdDomestic(false);

//call
// function makeDomestic(isDomestic) {
//   console.log(`${this.type} by name ${this.name} says ${this.makeSound()}`);
//   return {
//     name: this.name,
//     type: this.type,
//     makeSound: this.makeSound,
//     isDomestic: isDomestic,
//   };
// }

// const dogDomestic = makeDomestic.call(dog, true);
// const birdDomestic = makeDomestic.call(bird, false);


//apply
// function makeDomestic(isDomestic) {
//   console.log(`${this.type} by name ${this.name} says ${this.makeSound()}`);
//   return {
//     name: this.name,
//     type: this.type,
//     makeSound: this.makeSound,
//     isDomestic: isDomestic,
//   };
// }
// const dogDomestic = makeDomestic.apply(dog, [true]);
// const birdDomestic = makeDomestic.apply(bird, [false]);




//This task-3
// const footballer = {
//   fullName: 'Cristiano Ronaldo',
//   attack: function() {
//     console.log(`${this.fullName} is now with the ball and starting to attack!`);
//   },
//   scoreGoal: function(sound) {
//     console.log(`${this.fullName} scored a goal! Wow!`);
//     this.celebrate(sound);
//   },
//   celebrate: function(sound) {
//     console.log(sound);
//   },
//   goToSubstitution: function(newPlayer) {
//     console.log(`${this.fullName} goes to replace. ${newPlayer} enters the field`);
//   }
// };

// const attack = footballer.attack.bind(footballer);
// const score = footballer.scoreGoal;
// const substitute = footballer.goToSubstitution;

// attack();
// score.call(footballer, ';Siiiiii');
// substitute.apply(footballer, ['Paulo Dibala']);
