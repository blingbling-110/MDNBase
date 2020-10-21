function changeImage(s){
    s.src = s.src.match('images/high-heels-5006440-1_1280.jpg')?
        "images/high-heels-5006440-2_1280.jpg":"images/high-heels-5006440-1_1280.jpg";
}

let switchButton = document.querySelector('button');
let heading = document.querySelector('h1');
let username;

function setUsername() {
    username = prompt('请输入您的用户名：');
    if (!username) {
        setUsername();
    }
    localStorage.setItem('username', username);
}

//初始化
if (!localStorage.getItem('username')) {
    setUsername();
} else {
    username = localStorage.getItem('username');
}
changeHeading();

function changeHeading() {
    heading.textContent = username + '，喜欢高跟鞋吗？嘿嘿';
}

switchButton.onclick = function () {
    setUsername();
    changeHeading();
}