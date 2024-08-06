var datas
function more_text() {
    $.ajax({
        url: "assets/js/yuwen3.json",
        type: "GET",
        dataType: "json",
        success:
            function (data) {
            datas = data
            displayData(data)
            document.getElementById("tishi").innerHTML=musicList[musicIndex]
            document.getElementById("musicPlayer").src=musicList[musicIndex]

            }
    });

    var displayData = function(data){
        document.getElementById("detail").innerHTML=data[musicIndex].text
        document.getElementById("name").innerHTML=data[musicIndex].name
        document.getElementById("author").innerHTML="作者: " + data[musicIndex].author  + " | " + "页码: " + data[musicIndex].pagenum
    }
}





var musicIndex=0, musicList=['yuwen/mp3/recite_yuwen_3/01.论语十二章.mp3', 'yuwen/mp3/recite_yuwen_3/02.大学之道.mp3', 'yuwen/mp3/recite_yuwen_3/03.人皆有不忍人之心.mp3', 'yuwen/mp3/recite_yuwen_3/04.《老子》四章.mp3', 'yuwen/mp3/recite_yuwen_3/05.无衣.mp3', 'yuwen/mp3/recite_yuwen_3/06.春江花月夜.mp3', 'yuwen/mp3/recite_yuwen_3/07.将进酒.mp3', 'yuwen/mp3/recite_yuwen_3/08.江城子·乙卯正月二十日夜记梦.mp3']
more_text()

document.querySelector('#musicPlayer').addEventListener('ended', function(){

    musicIndex=musicIndex<musicList.length-1?musicIndex+1:0

    this.src=musicList[musicIndex]

    document.getElementById("tishi").innerHTML=musicList[musicIndex]
    more_text()



})
function Mup(){
    if(musicIndex>-1){musicIndex = musicIndex-1
        setTimeout(function(){document.getElementById("tip").innerHTML=" ";},1000)}

    document.querySelector('#musicPlayer').src=musicList[musicIndex]
    document.getElementById("tishi").innerHTML=musicList[musicIndex]
    more_text()

    document.getElementById("tip").innerHTML="正在播放: "+musicList[musicIndex]
    if(musicIndex<0){
        musicIndex = musicList.length-1
        document.getElementById("tip").innerHTML='没有上一首了哦 (自动转到最后一首)';
        setTimeout(function(){document.getElementById("tip").innerHTML=" ";},2000)};
    document.querySelector('#musicPlayer').src=musicList[musicIndex]
    document.getElementById("tishi").innerHTML=musicList[musicIndex]
}
function Mdown(){
    musicIndex = musicIndex+1

    document.querySelector('#musicPlayer').src=musicList[musicIndex]
    document.getElementById("tishi").innerHTML=musicList[musicIndex]
    more_text()

    document.getElementById("tip").innerHTML="正在播放: "+musicList[musicIndex]
    setTimeout(function(){document.getElementById("tip").innerHTML=" ";},1000)
    if(musicIndex>=(musicList.length)){
        musicIndex = 0
        document.getElementById("tip").innerHTML='没有下一首了哦 (自动转到第一首)';
        setTimeout(function(){document.getElementById("tip").innerHTML=" ";},2000);
        document.querySelector('#musicPlayer').src=musicList[musicIndex]
        document.getElementById("tishi").innerHTML=musicList[musicIndex]
    }
}
function pause() {
    window.speechSynthesis.pause();
}

var audio = document.getElementsByTagName("audio");
audio = audio[0];
audio.addEventListener("timeupdate", checkStatus);

function checkStatus() {
    // 检查音频是否已加载
    if (audio.readyState > 2) {
        document.title = "Tools"
    }
    if (datas){  //检查数组中是否有数据

        // 检查音频是否暂停
        if (audio.paused) {
            document.title = "Tools"
        } else {
            document.title = "正在播放: "+ datas[musicIndex].name
        }

    }else{
        document.title = "Tools"
    }

    // 检查音频是否在错误状态
    if (audio.error) {
        console.log("Error: " + audio.error.message);
    }
}
