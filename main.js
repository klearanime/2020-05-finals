// const makeRunOn = function(para) {
//   let result = '';
//   for (let i = 0; i < para.length; i++) {
//     if (para[i] === '.') {
//       result = para[i] + ',';
//     } else {
//     if (para.length-1 === '.') 
//       result = result + para.length + '.';
//     }
//     }
//     return result;
//   }

const makeRunOn = function(para) {
  let result = '';
  for (let i = 0; i < para.length; i++) {
    if (para[i] === '.') {
      result += ',';
      if (para[i-1] === '.') {
        result+= '.';
      }
    } else {
      result += para[i]
  }
} 
return result
}

const totalScore = function(lvl1, lvl2, lvl3) {
  let sum = '';
  if (lvl1 + lvl2 + lvl3) {
    }
      return sum;
  } 

const nightOwls = function() {
//   let result = [];
// const people = Object.values(asleep)
// for ( const people of people) {
//  if (localTime > 100 && localTime <= 400) {
//   result += people 
//   } else {
//   result += !people
//   }
// }
// return people.filter(asleep);
}

const getToBed = function(people) {
  
}

const findIndices = function() {

}

// * `Faqtory` - a factory function that returns an object with methods for managing a FAQ list. It contains an array of questions set to empty to start with, an `addQuestion` method for adding questions to the list, and an `answerQuestion` method for answering those questions that have yet to be answered. See tests for details. **NOTE:** the questions being added are objects. Making a helper function that returns a question object may be worth it, but either way, make sure those questions are objects! **HINT** the `id` of a new question can be set by looking at how many questions are already in the list. 





if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
