/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
        return arr.reduce(function(acc,nextValue){
        //put this above return so that it includes the first value
         acc.push(nextValue[key]);
         return acc;
    }, []);
};

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

// const str = 'lollapalooze';
// let charFreq = {};
// for (let char of str){
//     if(charFreq[char]){
//         charFreq[char] +=1;
//     }
//     else {
//         charFreq[char] = 1;
//     }
// }


function vowelCount(str) {
    letterArray = Array.from(str);
    let vowelStr = 'aeiou';
    return letterArray.reduce(function(acc,next){
        let lowerCased= next.toLowerCase();
        if(vowelStr.indexOf(lowerCased) !== -1){
            if(acc[lowerCased]){
                acc[lowerCased]++;
            } else{
                acc[lowerCased] = 1;
            }
        }
        return acc;
    }, {})
    }

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

// function addKeyAndValue(arr, key, value) {
//     arr.forEach(function(obj){
//         return obj[key] = `${value}`;
//     })
//     return arr;
// };

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(acc,next,idx){
        acc[idx][key] = value;
        return acc;
    }, arr)
};

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/
// let minScore = midtermScores.reduce(function(min,nextScore){
//     //     if(nextScore < min){
//     //         return nextScore
//     //     };
//     //     return min;
//     // })

function partition(arr, callback) {
    let trueArray = [];
    let falseArray = [];
    //for some reason i can't get the first value of the array to work with reduce
    if (callback(arr[0])){
        trueArray.push(arr[0]);
    }
    else {
        falseArray.push(arr[0]);
    };
    ///so i had to call it separately. this does every other value
    arr.reduce(function(acc, next){
        if (callback(next)){
            return trueArray.push(next);
        }
        else {
            return falseArray.push(next);
        }
    })
    return [trueArray, falseArray];
};
