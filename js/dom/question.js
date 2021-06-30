'use strict';
// 例題 コンソールに数値「1」を出力してください。
// console.log(1);

// 問題1：要素の取得
// id属性txt1の要素を取得し、変数txt1に代入してください。
// 代入後、変数txt1をコンソールに表示してださい。
document.getElementById('txt1');
console.log(txt1);


// 問題2：テキストの取得
// id属性txt2の要素を取得し、変数txt2に代入してください。
// txt2要素配下のテキストを取得し、コンソールに表示してください。
// ただしHTMLタグを含むもの、含まないもの両方の方法で表示すること。
document.getElementById('txt2');
console.log(txt2);
console.log(txt2.textContent);

// 問題3：テキストの書き換え
// id属性txt2配下のテキストを「書き換えました」という文字列に書き換えてください。
document.getElementById('txt2').innerHTML = '<p>書き換えました</p>';
console.log(txt2);

// 問題4：イベント(クリック)
// 取得ボタンをクリックしたとき、id属性txt3のテキストを取得し、id属性txt4に表示してください。
document.getElementById("btn1").onclick = function() {
  document.getElementById("txt3");
  document.getElementById("txt4").innerHTML = "Hello world!!";
};
// 問題5：イベント(サブミット) / フォーム部品の取得(テキスト)
// 送信ボタンをクリックしたとき、フォーム部品(id属性input1のvalue)の値を取得し、id属性txt5に出力してください。
var form = document.querySelector("#form1");
form.addEventListener("submit", function() {
 var input = document.querySelector("#input1");
 document.getElementById("txt5").textContent = (input.value);
});

// 問題6：フォーム部品の取得(セレクトボックス)
// 送信ボタンをクリックしたとき、セレクトボックス(name属性item1のvalue)の選択中の値を取得し、id属性result1に出力してください。
function clickBtn2(){
  const str = document.getElementsByName("item1").value;

  document.getElementById("result1").textContent = str;
}


// 問題7：フォーム部品の取得(チェックボックス)
// 送信ボタンをクリックしたとき、チェックボックス(name属性item1のvalue)の選択中の値を取得し、id属性result2に出力してください。
function clickBtn3(){
  const arr1 = [];
  const color2 = document.getElementsByName("check");
  for (let i = 0; i < color2.length; i++) {
    if (color2[i].checked)
    arr1.push(color2[i].value);{
  }
}
document.getElementById("result2").textContent = arr1;
}

// 問題8：フォーム部品の取得(ラジオ)
// 送信ボタンをクリックしたとき、ラジオボタン(name属性item1のvalue)の選択中の値を取得し、id属性result3に出力してください。
function clickBtn4() {
  let str = "";
  const f1 = document.getElementById("form4");
  const radio = f1.radio;

  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      str = radio[i].value;
      break;
    }
  }
  document.getElementById("result3").textContent = str;
}

// 問題9：バリデーションチェック
// 会社名が未入力のまま送信ボタンをクリックしたとき、「会社名が未入力です。」というアラートを表示してください。また未入力の場合は、処理を中断してください。
function check(){
  var flag = 0;

  if(document.form5.company.value == ""){
    flag = 1;
  }

  if(flag){
    window.alert("会社名が未入力です。");
    return false;
  }
  else{
    return true;
  }
}
// 問題10：CSSの操作
// id属性txt6のCSSプロパティを以下に変更してください。
// また変更するタイミングは画面表示時とする。
// 文字色→赤色、フォントサイズ→32px
var p = document.getElementById("txt6");
  p.style.color = "#f00";
  p.style.fontSize = "32px";

// 問題11：ノード追加
// 追加ボタンをクリックしたとき、id属性parentの子要素にpタグを追加し、pタグに「ノード追加テキスト」というテキストを追加してください。
var objA = document.getElementById("parent");
var objP = document.createElement("p");
objP.innerHTML = "ノード追加テキスト";
objP.id = "newP";

$("#btn2").on("click",function(){
objA.appendChild(objP)
});


// 問題12：ノード削除
// 削除ボタンをクリックしたとき、id属性parentの子要素を削除してください。
$("#btn3").on("click",function(){
  var objPdel = document.getElementById("newP");
  objA.removeChild(objPdel);
  });


// 問題13：属性取得・変更
// 変更ボタンをクリックしたとき、id属性link1のhref属性を取得し、コンソールに表示してください。またhref属性を「https://www.yahoo.co.jp」に書き換えてください。
document.getElementById("btn4").onclick = function() {
  var text = document.getElementById("link1");
  console.log(text.href);

  text.href = "https://www.yahoo.co.jp";
  console.log(text.href);
};


// 問題14：クエリーセレクター / カスタム属性 / this
// querySelectorAllを使い、id属性list1の子要素のliを全て取得してください。
// liをクリックしたとき、カスタム属性numの値を取得し、コンソールに表示してください。
// その場合、クリックした要素のカスタム属性のみ取得すること。
// 例 list２のliをクリックしたときはコンソールに「2」を表示する
var y = document.querySelectorAll("ul li");
console.log(y);

$("ul").click(function(){
  var i = $("li",this).data("num")
  console.log(i)
})
// 問題15-1：クラスの操作(追加)
// 追加ボタンをクリックしたとき、id属性txt7にクラスredを追加してください。
$("#btn5").on("click",function(){
  var A = document.getElementById("txt7");
  A.classList.add("red")
});

// 問題15-2：クラスの操作(削除)
// 削除ボタンをクリックしたとき、id属性txt7にクラスredを削除してください。
$("#btn6").on("click",function(){
  var A = document.getElementById("txt7");
  A.classList.remove("red")
});

// 問題15-3：クラスの操作(切り替え)
// 切り替えボタンをクリックしたとき、id属性txt7にクラスredがあれば削除し、なければ追加してください。
$("#btn7").on("click",function(){
  var A = document.getElementById("txt7");
  A.classList.toggle("red")
});

