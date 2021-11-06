// Array=================
let userName = [ 'Ashari','Priasish', 'Zayed', 'Shohag','Shakil'];
let roll = [4,3,2,1,5];

userName.push('Shanto');
roll[roll.length] = 8;

for (let i = 0; i < userName.length;i++){
    console.log(userName[i] +' roll = '+ roll[i]);
}

userName.pop();
roll.shift();
console.log(userName.join(' * '));
console.log(roll.join(' => '));
console.log(userName.toString());

let myName = ['Abu','Ashari'];
myName.splice(0,0,'Md');

console.log(myName.join(' '));

//Find  How many 2 and 3  in this array ;

let find = [3,5,6,2,67,2,67,2,78,2,3,3,3,3,3,5,6,7,8,3];
let sum1 = 0;
let count = 1;
for( let i = 0; i < find.length; i++ ){
    if( find[i] == 2){
        console.log(`${count}number ==> ${find[i]} in the index of ${i+1}`);
        count += 1;
        sum1 += 1;
    }
}
let sum2 = 0;
let count2 = 1;
for( let i = 0; i < find.length; i++ ){
    if( find[i] == 3){
        console.log(`${count2}number ==> ${find[i]} in the index of ${i+1}`);
        count2 += 1;
        sum2 += 1;
    }
}
console.log('Total find the 2 value is '+ sum1 + ' is in the array');
console.log('And total summition is '+ sum1 * 2);
console.log('Total find the 3 value is '+ sum2 + ' is in the array');
console.log('And total summition is '+ sum2 * 3);