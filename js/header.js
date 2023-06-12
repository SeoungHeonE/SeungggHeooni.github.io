//header smooth
document.addEventListener("DOMContentLoaded",function(){
    // console.log("ok");
    //탑메뉴 스르륵
    window.onscroll = function(){
        // console.log(document.querySelector("html").scrollTop);
        if(document.querySelector("html").scrollTop > 100){
            document.querySelector("header").style.top = "-80px";
        }else{
            document.querySelector("header").style.top = "0px";
        }
    }
    //마우스 커서가 움직일 때 좌표값
    window.onmousemove = function(e){
        console.log(e.clientY);
        if(e.clientY < 60){
            document.querySelector("header").style.top = "0px";
        } else{
            document.querySelector("header").style.top = "-80px";
        }
    }
});
