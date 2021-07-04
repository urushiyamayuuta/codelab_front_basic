'use strict';
// 例題 コンソールに数値「1」を出力してください。
// console.log(1);

// Math問題：最大値
// 以下の数値の最大値をコンソールに表示してください。
var max = Math.max(10,20,30);
console.log(max);

// Math問題：最小値
// 以下の数値の最小値をコンソールに表示してください。
var min = Math.min(10,20,30);
console.log(min);

// Math問題：小数点以下の切り上げ
// 100.53の小数点以下を切り上げし、コンソールに表示してください。
var ceil = Math.ceil(100.53);
console.log(ceil);

// Math問題：小数点以下の切り捨て
// 100.53の小数点以下を切り捨てし、コンソールに表示してください。
var floor = Math.floor(100.53);
console.log(floor);

// Math問題：小数点以下の四捨五入
// 100.53の小数点以下を四捨五入し、コンソールに表示してください。
var round = Math.round(100.53);
console.log(round);

// Math問題：乱数
// 1~9の乱数を生成し、コンソールに表示してください。
var rnd = Math.floor(Math.random() * 10);
console.log(rnd);

// Date問題：オブジェクト生成
// Dateオブジェクトを生成し、変数dayに代入し、現在日付をコンソールに表示してください。
var day = new Date();
console.log(day);

// Date問題：年取得
// 現在の西暦をコンソールに表示してください
var now = new Date();
var year = now.getFullYear();
console.log(year);

// Date問題：月取得
// 現在の月をコンソールに表示してください。
// 例：3月であれば「3」を出力
var now = new Date();
var month = now.getMonth()+1;
console.log(month);

// Date問題：日にち取得
// 現在の日数をコンソールに表示してください；
var now = new Date();
var date = now.getDate();
console.log(date);

// Date問題：時刻取得
// 現在の時間をコンソールに表示してください。
// 例：12時であれば「12」を出力
var now = new Date();
var hours = now.getHours();
console.log(hours);

// Date問題：大阪万博の開催は2025年5月3日です。
// 現在の日付から大阪万博開催までの日数を表示してください。
// 例：大阪万博まであと400日
// ヒント：getTimeでそれぞれの経過ミリ秒を取得し、日付に変換する。
// 経過ミリ秒 ÷ (1000ミリ秒 × 60秒 × 60分 × 24時間)
var nowDate = new Date();
var now = nowDate.getTime();

var targetDate = new Date(2025,5-1,3);
var target = targetDate.getTime();

var diff = target - now;
var diffDays =diff / (1000 * 60 * 60 * 24);
var show = Math.ceil(diffDays);

var Msg;
  Msg = "指定日まであと" + show + "日です";
console.log(Msg);

// タイマー問題：setTimeout
// 変数num1が2秒後カウントアップ(0→1)する処理を記載してください。
// 変数num1はコンソールに表示すること
var num1 = 0;
function showTime(){
  console.log(num1++);
}
console.log(num1++);
setTimeout(showTime,2000);

// タイマー問題：setInnterval / clearInterval
// 変数num2が2秒ごとにカウントアップする処理を記載してください。
// またnum2の値が5以上になったとき、処理を止めること
var num2 = 0;
var timer1 = null;

function event() {
  num2++;
  if (num2 >= 5 && timer1 != null) {
  clearInterval(timer1);
}
console.log(num2);
}
timer1 = setInterval(event, 2000);