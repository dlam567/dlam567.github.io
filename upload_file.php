<?php
// 允许上传的图片后缀
$allowedExts = array("gif", "jpeg", "jpg", "png","doc","docx","pdf");
$temp = explode(".", $_FILES["file"]["name"]);
//echo $_FILES["file"]["size"];
$extension = end($temp);     // 获取文件后缀名
// $_FILES需要找到对应的文件的MIME 类型，这个可以到网上找
if ((($_FILES["file"]["type"] == "image/gif")
|| ($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/jpg")
|| ($_FILES["file"]["type"] == "image/pjpeg")
|| ($_FILES["file"]["type"] == "image/png")
|| ($_FILES["file"]["type"] == "image/x-png")
|| ($_FILES["file"]["type"] == "application/msword") //上传doc文件
|| ($_FILES["file"]["type"] == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") //上传docx文件
|| ($_FILES["file"]["type"] == "application/pdf")) //上传pdf文件

&& ($_FILES["file"]["size"] < 102400000)   // 小于 100 mb（这个可以自己修改）
&& in_array($extension, $allowedExts))
{

    echo '<link rel="stylesheet" href="dimension/assets/css/main.css" />';
    echo '<noscript><link rel="stylesheet" href="dimension/assets/css/noscript.css" /></noscript>';
    echo '<body class="is-preload"><div id="wrapper">';

//    echo '<header id="header"><div class="logo"><span class="icon fa-gem"></span></div>';
//    echo '<div class="content"><div class="inner"><h1>标题</h1><p>正文文本</p></div></div>';
//    echo '<nav><ul><li><a href="#work">Work</a></li><li><a href="#about">About</a></li></ul></nav></header>';
//    echo '';
//    echo '';
//    echo '';
//    echo '';
//    echo '';
//    echo '';
//    echo '';
//    echo '';
//    echo '';
//    echo '';
//    echo '';
//    echo '';
//    echo '';
//    echo '';
//    echo '';
//    echo '';


    if ($_FILES["file"]["error"] > 0)
    {
        echo '<header id="header"><div class="logo"><span class="icon fa-gem"></span></div>';
        echo '<div class="content"><div class="inner"><h1>错误</h1><p>' . $_FILES["file"]["error"] . '</p></div></div>';
        echo '<nav><ul><li><input type="button" name="Submit" onclick="javascript:history.back(-1);" value="返回上一页"></li></ul></nav></header>';
//        echo "错误: " . $_FILES["file"]["error"] . "<br>";
    }
    else
    {
        echo '<header id="header"><div class="logo"><span class="icon fa-gem"></span></div>';
        echo '<div class="content"><div class="inner"> <p> ';

        echo "上传文件名: " . $_FILES["file"]["name"] . "<br>";
        echo "文件类型: " . $_FILES["file"]["type"] . "<br>";
        echo "文件大小: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
        echo "文件临时存储的位置: " . $_FILES["file"]["tmp_name"] . "<br></p>";

        // 判断当期目录下的 upload 目录是否存在该文件
        // 如果没有 upload 目录，你需要创建它，upload 目录权限为 777
        if (file_exists("upload/" . $_FILES["file"]["name"]))
        {
            if  ($_POST["submit"] == "替换"){
                move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $_FILES["file"]["name"]);
                echo $_FILES["file"]["name"] . "<h1> 检测到同名文件,现已被替换。<br>";
                echo "文件存储在: " . "upload/" . $_FILES["file"]["name"];
                echo '</h1></div></div>';
                echo '<nav><ul><li><a href="index.html">查看index</a></li></ul></nav></header>';
//                echo "<br><a href='index.html'>查看index</a>";
            }
            else{
                echo '<h1>';
                echo $_FILES["file"]["name"] . " 文件已经存在。 ";
                echo '</h1></div></div>';
                echo '<nav><ul><li><a href="index.html">查看index</a></li><li><input type="button" name="Submit" onclick="javascript:history.back(-1);" value="返回上一页"></li></ul></nav></header>';
            }
        }
        else
        {
            // 如果 upload 目录不存在该文件则将文件上传到 upload 目录下
            move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $_FILES["file"]["name"]);
            echo '<h1>';
            echo "文件存储在: " . "upload/" . $_FILES["file"]["name"];
            echo '</h1></div></div>';
            echo '<nav><ul><li><br><a href="index.html">查看index</a></li><li><input type="button" name="Submit" onclick="javascript:history.back(-1);" value="返回上一页"></li></ul></nav></header>';
        }
    }
}
else
{
    echo '<link rel="stylesheet" href="dimension/assets/css/main.css" />';
    echo '<noscript><link rel="stylesheet" href="dimension/assets/css/noscript.css" /></noscript>';
    echo '<body class="is-preload"><div id="wrapper">';
    echo '<header id="header"><div class="logo"><span class="icon fa-gem"></span></div>';
    echo '<div class="content"><div class="inner"> <h1>';
    echo "非法的文件格式";
    echo '</h1></div></div>';
    echo '<nav><ul><li><input type="button" name="Submit" onclick="javascript:history.back(-1);" value="返回上一页"></li></ul></nav></header>';
//    echo '<br><br><input type="button" name="Submit" onclick="javascript:history.back(-1);" value="返回上一页">';
}
//echo '<div id="bg"></div>';
echo '<script src="dimension/assets/js/jquery.min.js"></script>';
echo    '<script src="dimension/assets/js/browser.min.js"></script>';
echo	'<script src="dimension/assets/js/breakpoints.min.js"></script>';
echo		'<script src="dimension/assets/js/util.js"></script>';
echo	'<script src="assets/js/main.js" > </script></body>';
?>