const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const count = document.querySelector(".status_count");
const endPoint = 20;
const select = [];


/////////////////////////////////////////
var first =0;
var second =0;
var third =0;
var fourth =0;
let i_cnt =0;
let answer_idx=0;
let resultHtml = '';


function showResult0() {
    // value1, value2, value3는 각각 계산된 값으로 대체됩니다.
  
    // 결과를 출력할 result section을 찾습니다.
    const resultSection = document.querySelector('#result');
  
    // 이미지와 텍스트를 출력하는 HTML 코드를 작성합니다.
    const image0 = `<img src="./img/image0.png" alt="Image 0">`;
    const text1 = `<p>집현전 고전특강: 고독한 생일파티 / 세종대학교 학생회관 지하 1층 대공연장</p>`;
    const text2 = `<p>Text 2</p>`;
    const text3 = `<p>Text 3</p>`;
    const text4 = `<p>Text 4</p>`;


  
    // 출력할 결과를 담는 HTML 코드를 작성합니다.
    resultHtml += image0;
    resultHtml += text1;
  
    // 결과를 출력합니다.
    resultSection.innerHTML = resultHtml;
  }

//value1이 10보다 크면 실행
function showResult1(first) {
    // value1, value2, value3는 각각 계산된 값으로 대체됩니다.
  
    // 결과를 출력할 result section을 찾습니다.
    const resultSection = document.querySelector('#result');
  
    // 이미지와 텍스트를 출력하는 HTML 코드를 작성합니다.
    const image1 = `<center><img src="./img/image1.png" alt="Image 1"><center>`;
    const text1 = `<p>어린이대공원 - 놀이기구 /p>`;

    const text2 = `<p>사뿐 pic(사회과학대학), 한손은 거들뿐(한손) - 타투, 페이스페인팅</p>`;
    const text3 = `<p>Text 3</p>`;

    const text4 = `<p>생명과학 전통놀이(생명과학대학), 나는 자연인이다(자연과학대학),사진 찍고 갈 공대(공과대학), 플리마켓, THE EYES - 굿즈, 플리마켓
    </p>`;
    const text5 = `<p>Text 5</p>`;
    const text6 = `<p>Text 6</p>`;
    const text7 = `<p>Text 7</p>`;
    const text8 = `<p>Text 8</p>`;

  
    // 출력할 결과를 담는 HTML 코드를 작성합니다.

    if (10 <= first && first < 15) {
        resultHtml += image1;
        
        resultHtml += text1;
    }
    else if(first < 20){
        resultHtml += image1;
        
        resultHtml += text2;
    }
    else {
        resultHtml += image1;
        
        resultHtml += text4;
    }
  
    // 결과를 출력합니다.
    resultSection.innerHTML = resultHtml;
  }

//value2가 10보다 크면 실행
function showResult2(second) {
    // value1, value2, value3는 각각 계산된 값으로 대체됩니다.
  
    // 결과를 출력할 result section을 찾습니다.
    const resultSection = document.querySelector('#result');
  
    // 이미지와 텍스트를 출력하는 HTML 코드를 작성합니다.
    const image2 = `<center><img src="./img/image2.png" alt="Image 2"><center>`;
    
    const text1 = `<p>경경보드카페(경영경제대학), HOGWANS(호텔관광대학) - 보드게임, (아마도)카지노
    </p>`;
    const text2 = `<p>Text 2</p>`;

    const text3 = `<p>나는 자연인이다(자연과학대학), UNSA X 벤엔제리스(UNSA) - 퀴즈
    </p>`;
    const text4 = `<p>Text 4</p>`;

    const text5 = `<p>세종대 야구왕(세종킹스), 전정오락실(전자정보공학대학) - 야구게임, 사격
    </p>`;
    const text6 = `<p>Text 6</p>`;


  
    // 출력할 결과를 담는 HTML 코드를 작성합니다.
    if (10 < second && second < 15) {
        resultHtml += image2;
        
        resultHtml += text1;
    }
    else if(second < 20){
        resultHtml += image2;
        
        resultHtml += text3;
    }
    else if(second < 26) {
        resultHtml += image2;
        
        resultHtml += text5;
    }
  
    // 결과를 출력합니다.
    resultSection.innerHTML = resultHtml;
}

//value3이 15보다 크면 실행
function showResult3(third) {
    // value1, value2, value3는 각각 계산된 값으로 대체됩니다.
  
    // 결과를 출력할 result section을 찾습니다.
    const resultSection = document.querySelector('#result');
  
    // 이미지와 텍스트를 출력하는 HTML 코드를 작성합니다.
    const image3 = `<center><img src="./img/image3.png" alt="Image 3"><center>`;
    
    const text1 = `<p>이상한 컴파일러 : 소융대 AI 추천 소개팅(소프트웨어융합대학), 매칭부스(전다예, 개인), 나의 동물 단짝을 찾아서(조준희, 개인) - 미팅
    </p>`;
    const text2 = `<p>Text 2</p>`;
    const text3 = `<p>Text 3</p>`;


  
    // 출력할 결과를 담는 HTML 코드를 작성합니다.
    if (third > 15) {
        resultHtml += image3;
        
        resultHtml += text1;
    }

  
    // 결과를 출력합니다.
    resultSection.innerHTML = resultHtml;
}

function showResult4(fourth) {
    // value1, value2, value3는 각각 계산된 값으로 대체됩니다.
  
    // 결과를 출력할 result section을 찾습니다.
    const resultSection = document.querySelector('#result');
  
    // 이미지와 텍스트를 출력하는 HTML 코드를 작성합니다.
    const image4 = `<center><img src="./img/image4.png" alt="Image 4"><center>`;
    
    const text1 = `<p>전정오락실(전자정보공학대학), 수통이 마시는데 슬러시를 안 마셔?!(수학통계학과) - 슬러시
    </p>`;
    const text2 = `<p>
    </p>`;

    const text3 = `<p>USNA X 벤엔제리스(USNA) - 아이스크림</p>`;

    const text4 = `<p>주점, 푸드트럭</p>`;


  
    // 출력할 결과를 담는 HTML 코드를 작성합니다.
    
    if (fourth < 15) {
        resultHtml += image4;
        
        resultHtml += text1;
    }
    else if(fourth < 20){
        resultHtml += image4;
        
        resultHtml += text3;
    }
    else{
        resultHtml += image4;
        
        resultHtml += text4;
    }

  
    // 결과를 출력합니다.
    resultSection.innerHTML = resultHtml;
}


function printresult(first, second, third, fourth){
    if(first <= 10 && second <= 10 && fourth <= 15){
        showResult0();
    }
    else{
        var max = first;
        if(max < second){
            max = second;
        }
        if(max < third){
            max = third;
        }
        if(max < fourth){
            max = fourth;
        }
        
        const text1 = `<center><p>당신의 결과는?</p></center>`;

        resultHtml += text1;

        if(10 < first){
            showResult1(first);
        }
        if(10 < second){
            showResult2(second);
        }
        if(15 < third){
            showResult3(third);
        }
        
    }
    showResult4(fourth);
}

function goResult(){

    for(let i=0; i<5; i++){
        first = parseInt(first) + parseInt(select[i]) + parseInt(1);
    }
    for(let i=5; i<10; i++){
        second = parseInt(second) + parseInt(select[i]) + parseInt(1);
    }
    for(let i=10; i<15; i++){
        third = parseInt(third) + parseInt(select[i]) + parseInt(1);
    }
    for(let i=15; i<20; i++){
        fourth = parseInt(fourth) + parseInt(select[i]) + parseInt(1);
    }

    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() =>{
            qna.style.display = "none";
            result.style.display = "block"; 
        }, 450)
    }, 450);
    printresult(first, second, third, fourth);
}
function addAnswer(answerText, qIdx, idx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');
    answer.setAttribute('name', idx)

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click",function(e){
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++){
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
          }
          setTimeout(() => {
            select[qIdx] = idx;
            for(let i = 0; i < children.length; i++){
              children[i].style.display = 'none';
            }
            goNext(++qIdx, i_cnt++, e.target.name);
          },450)
        }, false);
}
function goNext(qIdx){
    if(qIdx === endPoint){
        goResult();
        return;
    }
    var q = document.querySelector('.qBox');

    q.innerHTML = qnaList[qIdx].q;
    
    //console.log(second);
    // console.log(third);
    // console.log(fourth);

    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx+1) + '%';
    
} 


function begin() {
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() =>{
            main.style.display = "none";
            qna.style.display = "block"; 
        }, 450)
    }, 450);
    let qIdx = 0;
    let answer_idx_init = 0;
    goNext(qIdx, i_cnt, answer_idx_init);
    //main.style.display = "none";
    //alert("hello world");
}
//////////////////////////////

//
