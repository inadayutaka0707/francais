/*-----------------------ヘッダーの表示-----------------------*/
(function() {
    const target        = document.getElementById('top'),
          height        = 75;
    let offset          = 0,
        lastPosition    = 0,
        ticking         = false;
    
    function onScroll() {
        if(lastPosition > height) {
            if(lastPosition > offset) {
                target.classList.add('head-animation');
            } else {
                target.classList.remove('head-animation');
            }
            offset = lastPosition;
        }
    }
    
    window.addEventListener('scroll', function(e) {
        lastPosition = window.scrollY;
        if(!ticking) {
            window.requestAnimationFrame(function() {
                onScroll(lastPosition);
                ticking = false;
            });
        }
    });
})();
/*-----------------------ヘッダーの表示-----------------------*/



/*-----------------------Audioの再生設定-----------------------*/
function ring1() {
    document.getElementById('talkListSound1').play();
}

function ring2() {
    document.getElementById('talkListSound2').play();
}

function ring3() {
    document.getElementById('talkListSound3').play();
}

function ring4() {
    document.getElementById('talkListSound4').play();
}
/*-----------------------Audioの再生設定-----------------------*/



/*-----------------------Topボタン表示-----------------------*/
//スクロール量を取得する関数
function getScrolled() {
  return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
}
        
//トップに戻るボタンの要素を取得
var topButton = document.getElementById( 'js-scroll-fadein' );
          
//ボタンの表示・非表示
window.onscroll = function() {
  ( getScrolled() > 300 ) ? topButton.classList.add( 'is-fadein' ): topButton.classList.remove( 'is-fadein' );
};
          
//トップに移動する関数
function scrollToTop() {
  var scrolled = getScrolled();
  window.scrollTo( 0, Math.floor( scrolled / 1.01 ) );
  if ( scrolled > 0 ) {
    window.setTimeout( scrollToTop, 0.1 );
  }
};
          
//イベント登録
topButton.onclick = function() {
  scrollToTop();
};
/*-----------------------Topボタン表示-----------------------*/

/*-----------------------問題表示-----------------------*/
//let myQA = new Array(
//"AAA", "aaa",
//"BBB", "bbb",
//"CCC", "ccc"
//);
//
//var myNowCnt = 0;
//var myLastCnt = myQA.length / 2;
//var myQAno = new Array(myLastCnt);
//var myHit = 0;
//
//function myQuizInit() {
//    for(var i = 0; i < myLastCnt; i++) {
//        myQAno[i] = i;
//    }
//    for(var i = 0; i < 500; i++) {
//        my1 = Math.floor(Math.random() * myLastCnt);
//        my2 = Math.floor(Math.random() * myLastCnt);
//        var myBackup = myQAno[my1];
//        myQAno[my1] = myQAno[my2];
//        myQAno[my2] = myBackup;
//    }
//}
//
//function myQuiz() {
//    if(myNowCnt == 0) {
//        myQuizInit();
//        var quizAnswer = document.getElementById("quizAnswer");
//        quizAnswer.innerHTML = "";
//        var quizQuestion = document.getElementById("quizQuestion");
//        quizQuestion.innerHTML = "";
//    }
//    var myA = prompt("\n問題：" + myQA[myQAno[myNowCnt] * 2],"");
//    if(myA != null) {
//        //正解表示
//        if(myA == myQA[myQAno[myNowCnt] * 2 + 1]) {
//            var newElement = document.createElement("p");
//            var newContent = document.createTextNode(myA);
//            newElement.appendChild(newContent);
//            newElement.setAttribute("class", "true");
//
//            var textQuiz = document.getElementById("quizQuestion");
//            textQuiz.appendChild(newElement);
//            
//            var newElement = document.createElement("p");
//            var newContent = document.createTextNode("正解");
//            newElement.appendChild(newContent);
//            newElement.setAttribute("class", "true");
//
//            var textQuiz = document.getElementById("quizAnswer");
//            textQuiz.appendChild(newElement);
//            myHit++;
//        } else {
//            //間違い表示
//            var newElement = document.createElement("p");
//            var newContent = document.createTextNode(myA);
//            newElement.appendChild(newContent);
//            newElement.setAttribute("class", "fault");
//
//            var text = document.getElementById("quizQuestion");
//            text.appendChild(newElement);
//            
//            var newElement = document.createElement("p");
//            var newContent = document.createTextNode(myQA[myQAno[myNowCnt]*2+1]);
//            newElement.appendChild(newContent);
//            newElement.setAttribute("class", "fault");
//
//            var text = document.getElementById("quizAnswer");
//            text.appendChild(newElement);
//        }
//    if(myNowCnt == myLastCnt - 1) {
//        var myScore = Math.floor(myHit * 100 / myLastCnt);
//        alert("問題終了です¥n¥n"+myLastCnt+"問中"+myHit+"問正解。点数は"+myScore+"点です。");	
//        myNowCnt=0;	
//        myHit=0;
//    } else {
//        myNowCnt++;
//        myQuiz();
//    }
//
//    } else {
//        myNowCnt = 0;
//        myHit = 0;
//        alert("勉強中断　お疲れ様でした！");	
//    }
//}
/*-----------------------問題表示-----------------------*/