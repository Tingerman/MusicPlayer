function remSize(){
    var deviceWidth=document.documentElement.clientWidth || window.innerWidth;
    if(deviceWidth>=750) deviceWidth=750; //iphone设计稿一般是750
    if(deviceWidth<=320) deviceWidth=320;  
    document.documentElement.style.fontSize=(deviceWidth/7.5)+'px'; //1 rem =100像素 相当于/750（缩放比例）再*100
    //设计稿是750px，设置一半的宽度，是375px 一半宽度就是3.75rem
    document.querySelector('body').style.fontSize=0.3+'rem'
}

remSize();

window.onresize=function(){//窗口发生变化的时候，调用remSize
    remSize(); 
}
