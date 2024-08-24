let Q = ["cat","dog","bird","fish","horse","elephant","lion",
    "tiger","bear","monkey","giraffe","zebra","panda","kangaroo",
    "dolphin","whale","snake","turtle","frog","lizard","apple",
    "banana","orange","grape","strawberry","peach","pear","watermelon",
    "pineapple","cherry","mango","kiwi","avocado","lemon","lime",
    "coconut","bread","butter","cheese","milk","egg","meat","fish",
    "rice","pasta","noodle","Japan","China","USA","UK","France",
    "Germany","Italy","Spain","Russia","Canada","Australia","Brazil",
    "Mexico","India","Egypt","Greece","Turkey","South Africa",
    "Argentina","Korea","red","blue","green","yellow","orange",
    "purple","pink","brown","black","white","gray","silver","gold",
    "computer","smartphone","book","pen","pencil","paper","chair",
    "table","window","door","car","bus","train","plane","house",
    "room","kitchen","bathroom","bed","clock","love","hate","happy",
    "sad","angry","afraid","big","small","tall","short","fast",
    "slow","hot","cold","good","bad","yes","no","today","tomorrow"]; //問題

let Q_No = Math.floor(Math.random() * Q.length); //リストのデータの数の中からランダムな乱数
let Q_i = 0; //正解している文字数
let Q_l = Q[Q_No].length; //出題されている問題の単語の文字数
let Q_p = 0; //正解した問題数

window.addEventListener("keydown", push_Keydown);
function push_Keydown(event) {
    let keyCode = event.key;
    

    if (Q_l == Q_l - Q_i) {
        document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);
    }

    if (Q[Q_No].charAt(Q_i) == keyCode) {
        Q_i++;
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
    else{
        new Audio('Quiz-Wrong_Buzzer02-1.mp3').play();
    }

    document.getElementById("push").innerHTML = keyCode + "を押しました。";
    document.getElementById("Q_i").innerHTML = Q_i
    document.getElementById("Q_l").innerHTML = Q_l
    document.getElementById("Q_p").innerHTML = Q_p + "問正解しています" 
}


