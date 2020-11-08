function ring1_1() {
    document.getElementById('audioPlay1').play();
}
function ring1_2() {
    document.getElementById('audioPlay2').play();
}
function ring1_3() {
    document.getElementById('audioPlay3').play();
}
function ring1_4() {
    document.getElementById('audioPlay4').play();
}
function ring1_5() {
    document.getElementById('audioPlay5').play();
}
function ring1_6() {
    document.getElementById('audioPlay6').play();
}

function audio2_1() {
    document.getElementById('audioPlay1').play();
}
function audio2_2() {
    document.getElementById('audioPlay1').play();
}
function audio2_3() {
    document.getElementById('audioPlay1').play();
}
function audio2_4() {
    document.getElementById('audioPlay1').play();
}
function audio2_5() {
    document.getElementById('audioPlay1').play();
}
function audio2_6() {
    document.getElementById('audioPlay6').play();
}

function answer1_1() {
//Question1----------------------------------------------
    var answer1 = document.getElementById('mainBottom2_2_ture1');
    var answer2 = document.getElementById('mainBottom2_2_ture2');
    var answer3 = document.getElementById('mainBottom2_2_ture3');
    var answer4 = document.getElementById('mainBottom2_2_ture4');
    var answer5 = document.getElementById('mainBottom2_2_ture5');
    var answer6 = document.getElementById('mainBottom2_2_ture6');
    var answer7 = document.getElementById('mainBottom2_2_ture7');
    var answer8 = document.getElementById('mainBottom2_2_ture8');
    var answer9 = document.getElementById('mainBottom2_2_ture9');
    
    let Array1 = [
        answer1, answer2, answer3, answer4, answer5,
        answer6, answer7, answer8, answer9
    ];
    
    var answerAdd1 = document.getElementById('mainBottom2_2_question1');
    var answerAdd2 = document.getElementById('mainBottom2_2_question2');
    var answerAdd3 = document.getElementById('mainBottom2_2_question3');
    var answerAdd4 = document.getElementById('mainBottom2_2_question4');
    var answerAdd5 = document.getElementById('mainBottom2_2_question5');
    var answerAdd6 = document.getElementById('mainBottom2_2_question6');
    var answerAdd7 = document.getElementById('mainBottom2_2_question7');
    var answerAdd8 = document.getElementById('mainBottom2_2_question8');
    var answerAdd9 = document.getElementById('mainBottom2_2_question9');
    
    let Array2 = [
        answerAdd1, answerAdd2, answerAdd3, answerAdd4, answerAdd5,
        answerAdd6, answerAdd7, answerAdd8, answerAdd9
    ];
    
    for (var i = 0; i < Array1.length; i++){
        var answerText = document.createElement('p');
        if(Array1[i].checked){
            var answerTextNode = document.createTextNode('◎');
            answerText.appendChild(answerTextNode);
            var answerAdd = Array2[i];
            answerAdd.appendChild(answerText);
            answerAdd.setAttribute('class', 'answerAddTure');
        } else {
            var answerTextNode = document.createTextNode('×');
            answerText.appendChild(answerTextNode);
            var answerAdd = Array2[i];
            answerAdd.appendChild(answerText);
            answerAdd.setAttribute('class', 'answerAddFault');
        }
    };
    
    var bottom1 = document.getElementById('mainBottom2_2_answer');
    var bottom2 = document.getElementById('mainBottom2_2_hidden');
    bottom1.style.display = 'none';
    bottom2.style.display = 'inline-block';
}

function answer1_2() {
    var textAnswer = new Array(
        "CCCCCCC",
        "AAAA",
        "JJJJ",
        "AAAAA",
        "MMMMM",
        "IIII",
        "MMMMMM",
        "VVVVVVVV",
        "MMMMMM"
    );
    
    var answer1 = document.getElementById('mainBottom3_2_1').value;
    var answer2 = document.getElementById('mainBottom3_2_2').value;
    var answer3 = document.getElementById('mainBottom3_2_3').value;
    var answer4 = document.getElementById('mainBottom3_2_4').value;
    var answer5 = document.getElementById('mainBottom3_2_5').value;
    var answer6 = document.getElementById('mainBottom3_2_6').value;
    var answer7 = document.getElementById('mainBottom3_2_7').value;
    var answer8 = document.getElementById('mainBottom3_2_8').value;
    var answer9 = document.getElementById('mainBottom3_2_9').value;
    
    let Array2 = [
        answer1, answer2, answer3, answer4, answer5,
        answer6, answer7, answer8, answer9
    ];
    
    var answerAdd1 = document.getElementById('mainBottom3_2_question1');
    var answerAdd2 = document.getElementById('mainBottom3_2_question2');
    var answerAdd3 = document.getElementById('mainBottom3_2_question3');
    var answerAdd4 = document.getElementById('mainBottom3_2_question4');
    var answerAdd5 = document.getElementById('mainBottom3_2_question5');
    var answerAdd6 = document.getElementById('mainBottom3_2_question6');
    var answerAdd7 = document.getElementById('mainBottom3_2_question7');
    var answerAdd8 = document.getElementById('mainBottom3_2_question8');
    var answerAdd9 = document.getElementById('mainBottom3_2_question9');
    
    let Array3 = [
        answerAdd1, answerAdd2, answerAdd3, answerAdd4, answerAdd5,
        answerAdd6, answerAdd7, answerAdd8, answerAdd9
    ];
    
    for(var i = 0; i < Array2.length; i++){
        var answerText = document.createElement('p');
        if(Array2[i] == textAnswer[i]){
            var answerTextNode = document.createTextNode('◎');
            answerText.appendChild(answerTextNode);
            var answerAdd = Array3[i];
            answerAdd.appendChild(answerText);
            answerAdd.setAttribute('class', 'answerAddTure2');
        } else {
            var answerTextNode = document.createTextNode(textAnswer[i]);
            answerText.appendChild(answerTextNode);
            var answerAdd = Array3[i];
            answerAdd.appendChild(answerText);
            answerAdd.setAttribute('class', 'answerAddFault2');
        }
    }
    
    var bottom1 = document.getElementById('mainBottom3_2_answer');
    var bottom2 = document.getElementById('mainBottom3_2_hidden');
    bottom1.style.display = 'none';
    bottom2.style.display = 'inline-block';
}

function answer1_3() {
    window.location.reload(false);
}

function answer1_4() {
    window.location.reload(false);
}

//2番目

function answer2_1() {
//Question1-------------------------------------------
    var answer = document.getElementById('mainBottom1_1_1');
    
    var answerText = document.createElement('td');
    if(answer.checked){
        var answerTextNode = document.createTextNode('×');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer1');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(255,0,0,0.3)';
    } else {
        var answerTextNode = document.createTextNode('◎');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer1');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(0,255,0,0.3)';
    }
    
//Question2-------------------------------------------
    var answer = document.getElementById('mainBottom1_1_2');
    
    var answerText = document.createElement('td');
    if(answer.checked){
        var answerTextNode = document.createTextNode('◎');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer2');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(0,255,0,0.3)';
    } else {
        var answerTextNode = document.createTextNode('×');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer2');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(255,0,0,0.3)';
    }
    
//Question3-------------------------------------------
    var answer = document.getElementById('mainBottom1_1_3');
    
    var answerText = document.createElement('td');
    if(answer.checked){
        var answerTextNode = document.createTextNode('×');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer3');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(255,0,0,0.3)';
    } else {
        var answerTextNode = document.createTextNode('◎');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer3');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(0,255,0,0.3)';
    }
    
//Question4-------------------------------------------
    var answer = document.getElementById('mainBottom1_1_4');
    
    var answerText = document.createElement('td');
    if(answer.checked){
        var answerTextNode = document.createTextNode('×');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer4');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(255,0,0,0.3)';
    } else {
        var answerTextNode = document.createTextNode('◎');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer4');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(0,255,0,0.3)';
    }
    
//Question5-------------------------------------------
    var answer = document.getElementById('mainBottom1_1_5');
    
    var answerText = document.createElement('td');
    if(answer.checked){
        var answerTextNode = document.createTextNode('◎');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer5');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(0,255,0,0.3)';
    } else {
        var answerTextNode = document.createTextNode('×');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer5');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(255,0,0,0.3)';
    }
    
//Question6-------------------------------------------
    var answer = document.getElementById('mainBottom1_1_6');
    
    var answerText = document.createElement('td');
    if(answer.checked){
        var answerTextNode = document.createTextNode('◎');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer6');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(0,255,0,0.3)';
    } else {
        var answerTextNode = document.createTextNode('×');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer6');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(255,0,0,0.3)';
    }
    
//answerExplanation1-----------------------------------
    var answerText = document.createElement('td');
    var answerTextNode = document.createTextNode('méméは[e]、maisは[ɛ]の発音');
    answerText.appendChild(answerTextNode);
    var answerAdd = document.getElementById('mainBottom1_1_answer1');
    answerAdd.appendChild(answerText);
    
//answerExplanation2-----------------------------------
    var answerText = document.createElement('td');
    var answerTextNode = document.createTextNode('どちらも[i]。日本語の「イ」と一緒です。');
    answerText.appendChild(answerTextNode);
    var answerAdd = document.getElementById('mainBottom1_1_answer2');
    answerAdd.appendChild(answerText);
    
//answerExplanation3-----------------------------------
    var answerText = document.createElement('td');
    var answerTextNode = document.createTextNode('feuは[ø]、seulは[œ]の発音');
    answerText.appendChild(answerTextNode);
    var answerAdd = document.getElementById('mainBottom1_1_answer3');
    answerAdd.appendChild(answerText);
    
//answerExplanation4-----------------------------------
    var answerText = document.createElement('td');
    var answerTextNode = document.createTextNode('bœufは[bœf]、bœufsは[bø]の発音');
    answerText.appendChild(answerTextNode);
    var answerAdd = document.getElementById('mainBottom1_1_answer4');
    answerAdd.appendChild(answerText);
    
//answerExplanation5-----------------------------------
    var answerText = document.createElement('td');
    var answerTextNode = document.createTextNode('どちらも[o]。日本語のオの発音に近いです。');
    answerText.appendChild(answerTextNode);
    var answerAdd = document.getElementById('mainBottom1_1_answer5');
    answerAdd.appendChild(answerText);
    
//answerExplanation6-----------------------------------
    var answerText = document.createElement('td');
    var answerTextNode = document.createTextNode('どちらも[ɛ]。日本語にはない音です。');
    answerText.appendChild(answerTextNode);
    var answerAdd = document.getElementById('mainBottom1_1_answer6');
    answerAdd.appendChild(answerText);
    
//答え合わせ/答えを隠すボタンの表示非表示--------------------    
    var bottom1 = document.getElementById('mainBottom1_2');
    bottom1.style.display = 'none';
}

//3番目

function answer3_1() {
//Question1-------------------------------------------
    var answer = document.getElementById('mainBottom1_1_1');
    
    var answerText = document.createElement('td');
    if(answer.checked){
        var answerTextNode = document.createTextNode('◎');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer1');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(0,255,0,0.3)';
    } else {
        var answerTextNode = document.createTextNode('×');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer1');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(255,0,0,0.3)';
    }
    
//Question2-------------------------------------------
    var answer = document.getElementById('mainBottom1_1_2');
    
    var answerText = document.createElement('td');
    if(answer.checked) {
        var answerTextNode = document.createTextNode('◎');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer2');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(0,255,0,0.3)';
    } else {
        var answerTextNode = document.createTextNode('×');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer2');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(255,0,0,0.3)';
    }
    
//Question3-------------------------------------------
    var answer = document.getElementById('mainBottom1_1_3');
    
    var answerText = document.createElement('td');
    if(answer.checked) {
        var answerTextNode = document.createTextNode('×');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer3');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(255,0,0,0.3)';
    } else {
        var answerTextNode = document.createTextNode('◎');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer3');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(0,255,0,0.3)';
    }
    
//Question4-------------------------------------------
    var answer = document.getElementById('mainBottom1_1_4');
    
    var answerText = document.createElement('td');
    if(answer.checked) {
        var answerTextNode = document.createTextNode('×');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer4');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(255,0,0,0.3)';
    } else {
        var answerTextNode = document.createTextNode('◎');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer4');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(0,255,0,0.3)';
    }

//Question5-------------------------------------------
    var answer = document.getElementById('mainBottom1_1_5');
    
    var answerText = document.createElement('td');
    if(answer.checked) {
        var answerTextNode = document.createTextNode('◎');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer5');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(0,255,0,0.3)';
    } else {
        var answerTextNode = document.createTextNode('×');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer5');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(255,0,0,0.3)';
    }
    
//Question6-------------------------------------------
    var answer = document.getElementById('mainBottom1_1_6');
    
    var answerText = document.createElement('td');
    if(answer.checked) {
        var answerTextNode = document.createTextNode('◎');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer6');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(0,255,0,0.3)';
    } else {
        var answerTextNode = document.createTextNode('×');
        answerText.appendChild(answerTextNode);
        var answerAdd = document.getElementById('mainBottom1_1_answer6');
        answerAdd.appendChild(answerText);
        answerAdd.style.backgroundColor = 'rgba(255,0,0,0.3)';
    }
    
//answerExplanation1-----------------------------------
    var answerText = document.createElement('td');
    var answerTextNode = document.createTextNode('[k]で同じ発音です');
    answerText.appendChild(answerTextNode);
    var answerAdd = document.getElementById('mainBottom1_1_answer1');
    answerAdd.appendChild(answerText);
//answerExplanation2-----------------------------------
    var answerText = document.createElement('td');
    var answerTextNode = document.createTextNode('[ʒ]で同じ発音です');
    answerText.appendChild(answerTextNode);
    var answerAdd = document.getElementById('mainBottom1_1_answer2');
    answerAdd.appendChild(answerText);
//answerExplanation3-----------------------------------
    var answerText = document.createElement('td');
    var answerTextNode = document.createTextNode('commeは[k]、garçonは[s]の発音です');
    answerText.appendChild(answerTextNode);
    var answerAdd = document.getElementById('mainBottom1_1_answer3');
    answerAdd.appendChild(answerText);
//answerExplanation4-----------------------------------
    var answerText = document.createElement('td');
    var answerTextNode = document.createTextNode('maisonは[z]、sonは[s]の発音です');
    answerText.appendChild(answerTextNode);
    var answerAdd = document.getElementById('mainBottom1_1_answer4');
    answerAdd.appendChild(answerText);
//answerExplanation5-----------------------------------
    var answerText = document.createElement('td');
    var answerTextNode = document.createTextNode('[k]で同じ発音です');
    answerText.appendChild(answerTextNode);
    var answerAdd = document.getElementById('mainBottom1_1_answer5');
    answerAdd.appendChild(answerText);
//answerExplanation6-----------------------------------
    var answerText = document.createElement('td');
    var answerTextNode = document.createTextNode('[f]で同じ発音です');
    answerText.appendChild(answerTextNode);
    var answerAdd = document.getElementById('mainBottom1_1_answer6');
    answerAdd.appendChild(answerText);
//答え合わせ/答えを隠すボタンの表示非表示--------------------    
    var bottom1 = document.getElementById('mainBottom1_2');
    bottom1.style.display = 'none';
    var bottom2 = document.getElementById('mainBottom1_3');
    bottom2.style.display = 'inline-block';
}

function answer3_2() {
    window.location.reload(false);
}

//4番目

function answer4_1() {
    var quizContent1_1 = document.getElementById("quizContent1_1").value;
    var quizContent1_2 = document.getElementById("quizContent1_2").value;
    var quizContent1_3 = document.getElementById("quizContent1_3").value;
    let Array1 = [
        quizContent1_1,
        quizContent1_2,
        quizContent1_3
    ];
    
    let Array2 = [
        "こんばんは",
        "こんにちは",
        "ばいばい or やあ"
    ];
    
    var answerAdd1 = document.getElementById('quizContentAdd1_1');
    var answerAdd2 = document.getElementById('quizContentAdd1_2');
    var answerAdd3 = document.getElementById('quizContentAdd1_3');
    let Array3 = [
        answerAdd1,
        answerAdd2,
        answerAdd3
    ]
    
//quizContent1--------------------------------------------
    for(var i = 0; i < Array1.length; i++){
        if(Array1[i] == Array2[i]){
            var answerText = document.createElement('td');
            var answerTextNode = document.createTextNode('◎');
            answerText.appendChild(answerTextNode);
            var answerAdd = Array3[i];
            answerAdd.appendChild(answerText);
            answerAdd.style.backgroundColor = 'rgba(0,255,0,0.3)';
        } else if(Array1[i] == Array1[2]) {
            if(Array1[2] == "やあ" || Array1[2] == "ばいばい"){
                var answerText = document.createElement('td');
                var answerTextNode = document.createTextNode('◎');
                answerText.appendChild(answerTextNode);
                var answerAdd = Array3[i];
                answerAdd.appendChild(answerText);
                answerAdd.style.backgroundColor = 'rgba(0,255,0,0.3)';
            } else {
                var answerText = document.createElement('td');
                var answerTextNode = document.createTextNode('正解は「'+ Array2[i] + '」');
                answerText.appendChild(answerTextNode);
                var answerAdd = Array3[i];
                answerAdd.appendChild(answerText);
                answerAdd.style.backgroundColor = 'rgba(255,0,0,0.3)';
            }
        } else {
            var answerText = document.createElement('td');
            var answerTextNode = document.createTextNode('正解は「'+ Array2[i] + '」');
            answerText.appendChild(answerTextNode);
            var answerAdd = Array3[i];
            answerAdd.appendChild(answerText);
            answerAdd.style.backgroundColor = 'rgba(255,0,0,0.3)';
        }
    }
    
    var bottom1 = document.getElementById('answer4_1');
    bottom1.style.display = 'none';
    var bottom2 = document.getElementById('answer4_2');
    bottom2.style.display = 'block';
}

function answer4_2() {
    window.location.reload(false);
}

function answer4_3() {
    var answer1 = document.getElementById('francais_mail_4_quizContent2_1');
    var answer2 = document.getElementById('francais_mail_4_quizContent2_2');
    var answer3 = document.getElementById('francais_mail_4_quizContent2_3');
    let Array1 = [
        answer1,
        answer2,
        answer3
    ]
    
    var answer1_1 = document.getElementById('francais_mail_4_Answer1');
    var answer1_2 = document.getElementById('francais_mail_4_Answer2');
    var answer1_3 = document.getElementById('francais_mail_4_Answer3');
    let Array2_1 = [
        answer1_1,answer1_2,answer1_3
    ]
    
    var answer2_1 = document.getElementById('francais_mail_4_Answer4');
    var answer2_2 = document.getElementById('francais_mail_4_Answer5');
    var answer2_3 = document.getElementById('francais_mail_4_Answer6');
    let Array2_2 = [
        answer2_1,answer2_2,answer2_3
    ]
    
    var answer3_1 = document.getElementById('francais_mail_4_Answer7');
    var answer3_2 = document.getElementById('francais_mail_4_Answer8');
    var answer3_3 = document.getElementById('francais_mail_4_Answer9');
    let Array2_3 = [
        answer3_1,answer3_2,answer3_3
    ]
    
    let Array3 = [
        "a","b","c"
    ]
    
    for(var i = 0; i < Array1.length; i++){
        var answerText = document.createElement('p');
        var answerTextNode = document.createTextNode('答えは：'+ Array3[i]);
        answerText.appendChild(answerTextNode);
        Array1[i].appendChild(answerText);
        if(Array2_1[i].checked || Array2_2[i].checked || Array2_3[i].checked){
            Array1[i].style.color = 'rgba(0,255,0,1)';
        } else {
            Array1[i].style.color = 'rgba(255,0,0,1)';
        }
    }
    
    var bottom1 = document.getElementById('answer4_3');
    bottom1.style.display = 'none';
    var bottom2 = document.getElementById('answer4_4');
    bottom2.style.display = 'block';
}

function answer4_4() {
    window.location.reload(false);
}

function francais_mail_4_Audio1() {
    document.getElementById('francais_mail_4_Audio1').play();
}
function francais_mail_4_Audio2() {
    document.getElementById('francais_mail_4_Audio2').play();
}
function francais_mail_4_Audio3() {
    document.getElementById('francais_mail_4_Audio3').play();
}
function francais_mail_4_Audio4() {
    document.getElementById('francais_mail_4_Audio4').play();
}
function francais_mail_4_Audio5() {
    document.getElementById('francais_mail_4_Audio5').play();
}
function francais_mail_4_Audio6() {
    document.getElementById('francais_mail_4_Audio6').play();
}
function francais_mail_4_Audio7() {
    document.getElementById('francais_mail_4_Audio7').play();
}
function francais_mail_4_Audio8() {
    document.getElementById('francais_mail_4_Audio8').play();
}
function francais_mail_4_Audio9() {
    document.getElementById('francais_mail_4_Audio9').play();
}

function answer5_1() {
    var answer1 = document.getElementById('quizContent1_5_1').value;
    var answer2 = document.getElementById('quizContent1_5_2').value;
    var answer3 = document.getElementById('quizContent1_5_3').value;
    let Array1 = [
        answer1, answer2, answer3
    ];
    
    let Array2 = [
        "あなた", "ありがとう", "元気"
    ];
    
    var answerTrue1 = document.getElementById('quizContent1_answerAdd_5_1');
    var answerTrue2 = document.getElementById('quizContent1_answerAdd_5_2');
    var answerTrue3 = document.getElementById('quizContent1_answerAdd_5_3');
    let Array3 = [
        answerTrue1, answerTrue2, answerTrue3
    ];
    
    for(var i = 0; i < Array1.length; i++){
        if(Array1[i] == Array2[i]){
            var answerText = document.createElement('td');
            var answerTextNode = document.createTextNode('◎');
            answerText.appendChild(answerTextNode);
            var answerAdd = Array3[i];
            answerAdd.appendChild(answerText);
            answerAdd.style.color = 'rgba(0,255,0,1)';
        } else {
            var answerText = document.createElement('td');
            var answerTextNode = document.createTextNode(Array2[i]);
            answerText.appendChild(answerTextNode);
            var answerAdd = Array3[i];
            answerAdd.appendChild(answerText);
            answerAdd.style.color = 'rgba(255,0,0,1)';
        }
    }
    
    var bottom1 = document.getElementById('answer5_1');
    bottom1.style.display = 'none';
    var bottom2 = document.getElementById('answer5_2');
    bottom2.style.display = 'block';
}

function answer5_2() {
    var answerRemove1 = document.getElementById('quizContent1_answerAdd_5_1');
    var answerRemove2 = document.getElementById('quizContent1_answerAdd_5_2');
    var answerRemove3 = document.getElementById('quizContent1_answerAdd_5_3');
    let Array = [
        answerRemove1, answerRemove2, answerRemove3
    ]
    
    for(var i = 0; i < Array.length; i++) {
        if(Array[i].children[3]){
            Array[i].removeChild(Array[i].children[3]);
        }
    }
    
    var bottom1 = document.getElementById('answer5_2');
    bottom1.style.display = 'none';
    var bottom2 = document.getElementById('answer5_1');
    bottom2.style.display = 'block';
}

function answer5_3() {
    var answer1 = document.getElementById('quizContent2_5_1');
    var answer2 = document.getElementById('quizContent2_5_2');
    var answer3 = document.getElementById('quizContent2_5_3');
    var answer4 = document.getElementById('quizContent2_5_4');
    var answer5 = document.getElementById('quizContent2_5_5');
    var answer6 = document.getElementById('quizContent2_5_6');
    var answer7 = document.getElementById('quizContent2_5_7');
    var answer8 = document.getElementById('quizContent2_5_8');
    var answer9 = document.getElementById('quizContent2_5_9');
    let Array1_1 = [
        answer1, answer2, answer3
    ];
    
    let Array1_2 = [
        answer4, answer5, answer6
    ];
    
    let Array1_3 = [
        answer7, answer8, answer9
    ];
    
    var answerTrue1 = document.getElementById('quizContent2_answerAdd_5_1');
    var answerTrue2 = document.getElementById('quizContent2_answerAdd_5_2');
    var answerTrue3 = document.getElementById('quizContent2_answerAdd_5_3');
    var answerTrue4 = document.getElementById('quizContent2_answerAdd_5_4');
    var answerTrue5 = document.getElementById('quizContent2_answerAdd_5_5');
    var answerTrue6 = document.getElementById('quizContent2_answerAdd_5_6');
    var answerTrue7 = document.getElementById('quizContent2_answerAdd_5_7');
    var answerTrue8 = document.getElementById('quizContent2_answerAdd_5_8');
    var answerTrue9 = document.getElementById('quizContent2_answerAdd_5_9');
    let Array2_1 = [
        answerTrue1, answerTrue2, answerTrue3
    ];
    
    let Array2_2 = [
        answerTrue4, answerTrue5, answerTrue6
    ];
    
    let Array2_3 = [
        answerTrue7, answerTrue8, answerTrue9
    ];
    
    for(var i = 0; i < Array1_1.length; i++) {
        if(answer1.checked) {
            if(i == 0){
                var answerText = document.createElement('td');
                var answerTextNode = document.createTextNode('◎');
                answerText.appendChild(answerTextNode);
                var answerAdd = Array2_1[i];
                answerAdd.appendChild(answerText);
                answerAdd.style.color = 'rgba(0,255,0,1)';
            }
        } else if(answer2.checked) {
            if(i == 1){
                var answerText = document.createElement('td');
                var answerTextNode = document.createTextNode('Vousは「allez」を使う');
                answerText.appendChild(answerTextNode);
                var answerAdd = Array2_1[i];
                answerAdd.appendChild(answerText);
                answerAdd.style.color = 'rgba(255,0,0,1)';
            }
        } else if(answer3.checked) {
            if(i == 2){
                var answerText = document.createElement('td');
                var answerTextNode = document.createTextNode('Tuは「va」を使う');
                answerText.appendChild(answerTextNode);
                var answerAdd = Array2_1[i];
                answerAdd.appendChild(answerText);
                answerAdd.style.color = 'rgba(255,0,0,1)';
            }
        }
    }
    
    for(var i = 0; i < Array1_2.length; i++) {
        if(answer4.checked || answer6.checked) {
            if(i == 0 || i == 2){
                var answerText = document.createElement('td');
                var answerTextNode = document.createTextNode('Salutを使う');
                answerText.appendChild(answerTextNode);
                if(answer4.checked){
                    if(i == 0){
                        var answerAdd = Array2_2[i];
                        answerAdd.appendChild(answerText);
                        answerAdd.style.color = 'rgba(255,0,0,1)';
                    }
                } else if(answer6.checked){
                    if(i == 2){
                        var answerAdd = Array2_2[i];
                        answerAdd.appendChild(answerText);
                        answerAdd.style.color = 'rgba(255,0,0,1)';
                    }
                }
            }
        } else if(answer5.checked) {
            if(i == 1){
                var answerText = document.createElement('td');
                var answerTextNode = document.createTextNode('◎');
                answerText.appendChild(answerTextNode);
                var answerAdd = Array2_2[i];
                answerAdd.appendChild(answerText);
                answerAdd.style.color = 'rgba(0,255,0,1)';
            }
        }
    }
    
    for(var i = 0; i < Array1_3.length; i++) {
        if(answer7.checked || answer8.checked){
            if(i == 0 || i == 1){
                var answerText = document.createElement('td');
                var answerTextNode = document.createTextNode('あなたは？と聞きたいので「toi」を使う');
                answerText.appendChild(answerTextNode);
                if(answer7.checked){
                    if(i == 0){
                        var answerAdd = Array2_3[i];
                        answerAdd.appendChild(answerText);
                        answerAdd.style.color = 'rgba(255,0,0,1)';
                    }
                } else if(answer8.checked){
                    if(i == 1){
                        var answerAdd = Array2_3[i];
                        answerAdd.appendChild(answerText);
                        answerAdd.style.color = 'rgba(255,0,0,1)';
                    }
                }
            }
        } else if(answer9.checked) {
            if(i == 2){
                var answerText = document.createElement('td');
                var answerTextNode = document.createTextNode('◎');
                answerText.appendChild(answerTextNode);
                var answerAdd = Array2_3[i];
                answerAdd.appendChild(answerText);
                answerAdd.style.color = 'rgba(0,255,0,1)';
            }
        }
    }
    
    var bottom1 = document.getElementById('answer5_3');
    bottom1.style.display = 'none';
    var bottom2 = document.getElementById('answer5_4');
    bottom2.style.display = 'block';
}

function answer5_4() {
    var parent1 = document.getElementById('quizContent2_answerAdd_5_1');
    var parent2 = document.getElementById('quizContent2_answerAdd_5_2');
    var parent3 = document.getElementById('quizContent2_answerAdd_5_3');
    var parent4 = document.getElementById('quizContent2_answerAdd_5_4');
    var parent5 = document.getElementById('quizContent2_answerAdd_5_5');
    var parent6 = document.getElementById('quizContent2_answerAdd_5_6');
    var parent7 = document.getElementById('quizContent2_answerAdd_5_7');
    var parent8 = document.getElementById('quizContent2_answerAdd_5_8');
    var parent9 = document.getElementById('quizContent2_answerAdd_5_9');
    let Array = [
        parent1, parent2, parent3, parent4, parent5,
        parent6, parent7, parent8, parent9
    ]
    
    for(var i = 0; i < Array.length; i++){
        if(Array[i].children[3]){
            Array[i].removeChild(Array[i].children[3]);
        }
    }
    
    var bottom1 = document.getElementById('answer5_4');
    bottom1.style.display = 'none';
    var bottom2 = document.getElementById('answer5_3');
    bottom2.style.display = 'block';
}