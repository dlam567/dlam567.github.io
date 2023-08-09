let accountAll = [{ // 存储账户json数据的数组
    username: 'Admin',
    passwd: '@Password',
}]

function login() { //登陆判断
    let username = document.getElementById('username').value;
    let passwd = document.getElementById('passwd').value;
    let account = accountAll.filter(function(e) {
        return e.username == username
    })[0]; // 筛选账号返回数组，不存在则返回空数组
    if (!account) {
        document.getElementById("tishi").innerHTML="<b><font color='orange' >账户不存在</font><b\>";
        setTimeout(function(){document.getElementById("tishi").innerHTML=" ";},3000)
        doClear()
        // alert('账户不存在');
    } else {
        if (account.username == username && account.passwd == passwd) {
            // alert('登陆成功');
            document.getElementById("tishi").innerHTML="<b><font color='#00fa9a' >登陆成功</font><b\>";
            setTimeout(function(){window.location.href = './home.html'},700)

        } else {
            document.getElementById("tishi").innerHTML="<b><font color='#ff4500'>密码错误</font><b\>";
            setTimeout(function(){document.getElementById("tishi").innerHTML=" ";},3000)
            // alert('密码错误');
        }
    }
}
function doClear() { //获取页面所有的input框，是text和password框，内容=空串
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type == 'text' || inputs[i].type == 'password') {
            inputs[i].value = '';
        }
    }
}
//给清除按钮增加onclick事件
let btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', function() {
    doClear();
});

