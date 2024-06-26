function more_text() {
    $.ajax({
        url: "assets/js/yuwen.json",
        type: "GET",
        dataType: "json",
        success:
            function (data) {
                displayData(data)
            }
    });

    var displayData = function(data){
        document.getElementById("detail").innerHTML=data[musicIndex].text
        document.getElementById("name").innerHTML=data[musicIndex].name
        document.getElementById("author").innerHTML=data[musicIndex].author
    }
}





var musicIndex=0, musicList=['yuwen/mp3/1.沁园春·长沙.mp3','yuwen/mp3/2.诗经·邶风·静女.m4a','yuwen/mp3/3.古诗十九首·涉江采芙蓉.m4a','yuwen/mp3/4.琵琶行.mp3','yuwen/mp3/5.劝学.mp3','yuwen/mp3/6.师说.mp3']

document.getElementById("tishi").innerHTML="yuwen/mp3/1.沁园春·长沙.mp3"
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