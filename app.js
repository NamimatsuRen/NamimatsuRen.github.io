let Q = ["cat","dog","bird","fish","horse","elephant","lion",
    "tiger","bear","monkey","giraffe","zebra","panda","kangaroo",
    "dolphin","whale","snake","turtle","frog","lizard","apple",
    "banana","orange","grape","strawberry","peach","pear","watermelon",
    "pineapple","cherry","mango","kiwi","avocado","lemon","lime",
    "coconut","bread","butter","cheese","milk","egg","meat","fish",
    "rice","pasta","noodle","red","blue","green","yellow","orange",
    "purple","pink","brown","black","white","gray","silver","gold",
    "computer","smartphone","book","pen","pencil","paper","chair",
    "table","window","door","car","bus","train","plane","house",
    "room","kitchen","bathroom","bed","clock","love","hate","happy",
    "sad","angry","afraid","big","small","tall","short","fast",
    "slow","hot","cold","good","bad","yes","no","today","tomorrow"]; //問題

let Q_No = Math.floor(Math.random() * Q.length); //リストのデータの数の中からランダムな乱数
let Q_i = 0; //正解している文字数
let Q_t = -1; //打った文字数
let Q_l = Q[Q_No].length; //出題されている問題の単語の文字数
let Q_p = 0; //正解した問題数
let Q_w = -1; //間違えた回数
let Q_f = 0; //問題文読み上げ判定用
let level = 0; //最終スコア表示

window.addEventListener("keydown", push_Keydown);
function push_Keydown(event) {
    let keyCode = event.key;
    Q_t++;
    

    if (Q_l == Q_l - Q_i) {
        document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);

        if(Q_f == 0){
            var speak = new SpeechSynthesisUtterance();
            speak.text = Q[Q_No];
            speak.lang = 'en-US';
            speechSynthesis.speak(speak);
        }
    }
 
    if (Q[Q_No].charAt(Q_i) == keyCode) {
        Q_i++;
        Q_f = 0;
        new Audio('typing.mp3').play();
        document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);

        if (Q_l - Q_i === 0) {
            Q_No = Math.floor(Math.random() * Q.length);
            Q_i = 0;
            Q_l = Q[Q_No].length;
            Q_p++;

            document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);
        }
    }
    else {
        Q_f = 1;
        Q_w++;
        Q_t--;
        
        if(Q_w >= 1){
            new Audio('Quiz-Wrong_Buzzer02-1.mp3').play();
        }
    }

    level = Math.trunc(Q_p * (Q_t - Q_w*5) * 4444 )
    document.getElementById("push").innerHTML = keyCode + "を押しました。";
    document.getElementById("Q_p").innerHTML = Q_p + "問正解しています" 
    document.getElementById("Q_w").innerHTML = Q_w + "回間違えました．" 
    document.getElementById("level").innerHTML = "あなたの年収は" + level + "円程度です．" 
}


