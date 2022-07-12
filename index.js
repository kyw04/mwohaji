let data1 = [
"항공 스포츠", "궁술", "천문학", "베이스 점핑", "야구",
"농구", "양봉", "탐조", "대장장이", "보디빌딩",
"브라질리안 주짓수", "야영", "운전", "어로", "플라잉",
"원반 장난감", "정원 가꾸기", "지오캐싱", "낙서", "핸드볼",
"하이킹", "마술", "사냥", "연날리기", "카이트서핑",
"라이브 액션 롤플레잉 게임", "금속 탐지", "모터스포츠", "등산", "네트볼",
"오리엔티어링", "페인트볼", "파쿠르", "사진술", "폴로",
"래프팅", "현수하강", "암벽등반", "롤러스케이팅", "럭비",
"달리기", "세일링", "샌드 아트", "스카우트 운동", "스쿠버 다이빙",
"사격", "쇼핑", "스케이트보딩", "스키", "스킴보딩",
"스카이다이빙", "슬래클라이닝", "스노보드", "축구", "물수제비",
"파도타기", "수영", "태권도", "태극권", "휴가", // 59
"걷기", "수상 스포츠", // 61

"3차원 인쇄", "연기", "아마추어 무선", "배턴 트월링", "보드 게임",
"캘리그래피", "컴퓨터 프로그래밍", "조리", "코스프레", "십자수",
"십자말", "암호학", "춤", "디지털 아트", "DIY",
"드라마", "소묘", "일렉트로닉스", "자수", "패션",
"게이밍", "계보학", "양액재배", "빙상 스케이트", "직소 퍼즐",
"저글링", "뜨개질", "레이스 제작", "가죽 공예", "레고 조립",
"음악 듣기", "마술", "종이접기", "회화", "애완동물",
"우취", "악기 연주", "도예", "퍼즐", "책 읽기",
"조각", "바느질", "가창", "스케치", "비누",
"스탠드업 코미디", "탁구", "태팅", "박제", "비디오 게임",
"영화 보기", "텔레비전 시청", "월드 와이드 웹", "위키백과 편집", "목각", // 116
"목공", "쓰기", "요요", "요가" // 120
];
let data2 = [ "indoor_hobby", "outdoor_hobby" ];

function show_submenu(id)
{
    var li = document.getElementById(id); 
    let children_lenght = li.children.length;
    let children_height = li.children[0].clientHeight;
    let submenu_height = children_lenght * children_height + 5;

    li.style.height = submenu_height + 'px';
}

function close_submenu(id)
{
    var li = document.getElementById(id);
    // li.style.transitionDuration = '0.5s';
    li.style.height = 0;
}

function random_click()
{
    let index = Math.floor(Math.random() *  data1.length);
    // index = parseInt(index);
    console.log(index);
    console.log(data1[index]);
    if (confirm(data1[index] + "(이/가) 있는 곳으로 이동하시겠습니까?"))
    {
        var tempIndex;
        if (index > 61)
            tempIndex = 0;
        else
            tempIndex = 1;
        
        Coloring(index);
        document.getElementById(data2[tempIndex]).scrollIntoView();
    }
    
}

function Coloring(index)
{
    // 자식들 사이에 이상한 text값들이 있어서 처리 해야 함;
    var tr = index;
    var td = index % 5;
    var tableId;
    var indexTable;

    if (index - 61 <= 0)
    {
        tableId = "outdoor_hobby";
    }
    else
    {
        tableId = "indoor_hobby";
        tr -= 62;
        td = (index - 62) % 5;
    }
    tr /= 5;
    tr = parseInt(tr) * 2;
    td = td * 2 + 1;

    indexTable = document.getElementById(tableId).childNodes[3].childNodes[1];
    indexTable = indexTable.childNodes[tr].childNodes[td];
    console.log(indexTable);

    indexTable.style.backgroundColor = "white";
    Twinkling(indexTable);
}
var intervalId;
function Twinkling(element)
{
    console.log(element.style.backgroundColor);
    if (element.style.backgroundColor == "white")
    {
        element.style.backgroundColor = "red";
        intervalId = setInterval(Twinkling, 1500, element);
        console.log("set");
    }
    else
    {
        element.style.backgroundColor = "white";
        clearInterval(intervalId);
        console.log("clear");
    }
}

function EmailCopy()
{
    const copyText = document.getElementById("email").textContent; // 복사할 값
    const textArea = document.createElement('textarea'); // 잠깐 만들 textarea

    document.body.appendChild(textArea); // 복사하기 위해 생성
    textArea.value = copyText; // 복사할 값 입력

    textArea.select(); // 값 선택
    document.execCommand("Copy"); // 선택된 값 복사

    document.body.removeChild(textArea); // textArea 제거

    alert("이메일이 복사 되었습니다."); // 복사 되면 메시지 출력
}

function test()
{
    console.log("ok");
}