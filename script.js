var bodys=document.querySelectorAll("*");
    var bodyarr=[];
    var strs=["jlib-fontSize-","jlib-color-","jlib-backgroundColor-"];
    var findClass=function(cls){
    return cls.split(' ');  
    };
    var calc=function(x,y){
        console.log(x+" "+y);
        var b=y.replace(x,"");
        console.log(b);
    return b;
    };
    
    for(var i=0;i<bodys.length;i++){

    bodyarr.push(findClass(bodys[i].className))
    }
      
    for(var i=0;i<bodys.length;i++){
  
    if(bodyarr[i]===""){
    continue;
    }
     
    for(var j=0;j<bodyarr[i].length;j++){
    
    if(bodyarr[i][j].includes(strs[0])===true){
         //console.log(bodys.length);
     bodys[i].style.fontSize=calc(strs[0],(bodyarr[i])[j]) +"px";

    }
    if(bodyarr[i][j].includes(strs[1])===true){
         //console.log(bodys.length);
    switch(calc(strs[1],(bodyarr[i])[j])){
    case "red":
    bodys[i].style.color="rgb(255,0,0)";
    break;
    case "blue":
    bodys[i].style.color="rgb(0,0,255)";
    break;
    case "black":
    bodys[i].style.color="rgb(0,0,0)";
    break;
    case "green":
    bodys[i].style.color="rgb(0,255,0)";
    break;
    case "yellow":
    bodys[i].style.color="rgb(255,255,0)";
    break;
    case "purple":
    bodys[i].style.color="rgb(150, 0, 150)";
    break;
    case "orange":
    bodys[i].style.color="rgb(255,155,0)";
    break;
    case "white":
    bodys[i].style.color="rgb(255,255,255)";
    break;
    case "dark-green":
    bodys[i].style.color="rgb(0,140,0)";
    break;
    case "pink":
    bodys[i].style.color="rgb(242, 0, 255)";
    break;
        
    }
     
    }
     if(bodyarr[i][j].includes(strs[2])===true){
         
      switch(calc(strs[2],(bodyarr[i])[j])){
    case "red":
    bodys[i].style.backgroundColor="rgb(255,0,0)";
    break;
    case "blue":
    bodys[i].style.backgroundColor="rgb(0,0,255)";
    break;
    case "black":
    bodys[i].style.backgroundColor="rgb(0,0,0)";
    break;
    case "green":
    bodys[i].style.backgroundColor="rgb(0,255,0)";
    break;
    case "yellow":
    bodys[i].style.backgroundColor="rgb(255,255,0)";
    break;
    case "purple":
    bodys[i].style.backgroundColor="rgb(150, 0, 150)";
    break;
    case "orange":
    bodys[i].style.backgroundColor="rgb(255,155,0)";
    break;
    case "white":
    bodys[i].style.backgroundColor="rgb(255,255,255)";
    break;
    case "dark-green":
    bodys[i].style.backgroundColor="rgb(0,140,0)";
    break;
    case "pink":
    bodys[i].style.backgroundColor="rgb(242, 0, 255)";
    break;
        
    }
         
     }
        
       if(bodyarr[i][j].includes(strs[3])===true){
       bodys[i].style.margin=calc(strs[0],(bodysarr[i])[j] )+"px";
       }
    }
    }

   
    
    
