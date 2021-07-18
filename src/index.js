// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var1変数を上書き";
// console.log(val1);

// let val2 = 'let変数';
// console.log(val2);

// val2 = 'let変数を上書き';
// console.log(val2);

// let val2 = 'let変数を再宣言';

// const val3 = 'const変数';
// console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name:'aaa',
//   age:28,

// };

// val4.name = 'jak';
// console.log(val4);

// constで定義した配列はプロパティの変更が可能

//const val5 = ["dog", "vat"];
// console.log(val5);

// val5[0] = "bird";
// val5.push("monkey");

// const name = '小田';
// const age = 24;

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);
// const func1 = function(str){
//   return str;
// }
// console.log(func1('ああああ'))

// const func3 = (num1,num2) => num1+num2;
// console.log(func3(10,20));

// const big3 = (bp,sq,dl) => bp+sq+dl;
// console.log(big3(150,200,220))

// const myProfile = {
//   name:'oda',
//   age : 28,
//   hobby:'筋トレ',
//   born:'千葉県',
// };
// const {name,age,hobby,born} = myProfile;

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です。
// 趣味は${hobby}で、出身は${born}です。`
// console.log(message2);
// const myProfile = ['小田',28];

// const message3 = `私の名前は${myProfile[0]}で、年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name,age] = myProfile;
// const message5 = `名前は${name}で、年齢は${age}です`
// console.log(message5);

// デフォルト値、引数など
// const sayhello = (name='ゲスト') =>console.log(`こんにちは${name}さん`);
// sayhello('ヒュー')

// const big3 = [150,200,220];
// const [bench,squat,dead] = big3;
// const messagebig = `ベンチは${bench}で、スクワットは${squat}で、デッドは${dead}です`;
// console.log(messagebig);

//スプレッド構文

// const arr1 = [1,2,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1,num2,num3) => console.log(num1+num2+num3);

// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3 ] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー

// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

//練習
// const arr1 = [100,332,4141,'小田'];
// const arr2 = [123,312,4324,'キムチ'];

// const arr3 =[...arr1,...arr2];

// console.log(...arr3);
// const big3 = (num1,num2) => console.log(num1+num2);
// big3(290,3131);

//mapyafilterを使った配列の処理

const nameArr = ["田中", "山田", "小田"];
// for (let index = 0; index<nameArr.length; index++){
//   console.log(nameArr[index]);
// }

//  const nameArr2 = nameArr.map((name)=>{
//    return name;
//  })
// console.log(nameArr2);

// nameArr.map((name)=> console.log(name));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) =>{
//   return num % 2 ===1;
// })
// console.log(newNumArr)

// const newNameArr = nameArr.map((name) =>{
//   if (name==='小田'){
//     return name;
//     }else{
//       return `${name}さん`
//     }
// })
// console.log(newNameArr);

//三項演算子
//ある条件?条件がtrueの時:条件がfalseの時

// const val1 =1 > 0 ?'trueです':'falseです';
// console.log(val1);

// const num = '1300';
// console.log(num.toLocaleString());

// const fomattedNum = typeof num === 'number'? num.toLocaleString:'数値を入力してください';
// console.log(fomattedNum);

// const checkSum = (num1,num2) =>{
//   return num1+num2 >100 ? '100を超えています':'許容範囲ないです';
// }
// console.log(checkSum(31,21));

//論理演算子の本当の意味を知ろう

// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2){
//   console.log('どちらかはtrue');
// }

// if(flag1 && flag2){
//   console.log('どちらもtrue');
// }
// ||は左側がFalseなら右を返すということ

// const num = null;
// const fee = num || '金額未設定です';
// console.log(fee)

// //&&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && '何か設定されました';
// console.log(fee2);

const numnum = [12, 31, 42, 14, 16];

const numsum = numnum.reduce((num, sum) => {
  return num + sum;
});
console.log(numsum);
