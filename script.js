
var jn=function(a,b,c,d,e,f,g){
this.sel=document.querySelectorAll(a);
return {
val:this.sel 
    
ad:function(a,b){
for(var i=0;i<this.sel.length;i++){
this.sel[i]["a"]=b;
}
       
       
       };
};

jn.prototype.createVar=function(a,b){
window[a]=b;
};

var bodys=document.querySelectorAll("*");
    var bodyarr=[];
    var strs=["jl-fontSize-","jl-color-","jl-backgroundColor-","jl-margin-","jl-padding-","jl-border-","jl-float-","jl-position-","jl-display-","jl-overflow-"];
    var findClass=function(cls){
    return cls.split(' ');  
    };
    var calc=function(x,y,arg){
     //   console.log(x+" "+y);
        var b=y.replace(x,"");
        if(arg!==undefined){
        b=b.replace(arg.r1,arg.r2);
        b=b.replace(arg.r3,arg.r4);
        }
        console.log(b);
    return b;
    };
    
    for(var i=0;i<bodys.length;i++){
    if(bodys[i].jl===undefined||bodys[i].jl===null|| bodys[i].jl===NaN){
    bodys[i].jl="";    
    }
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
       bodys[i].style.margin=calc(strs[3],(bodyarr[i])[j] )+"px";
       }
        
        if(bodyarr[i][j].includes(strs[4])===true){
       bodys[i].style.padding=calc(strs[4],(bodyarr[i])[j] )+"px";
       }
        
       if(bodyarr[i][j].includes(strs[5])===true){
       bodys[i].style.border=calc(strs[5],(bodyarr[i])[j],{r1:");",r2:"); ", r3:"px",r4:"px "} );
       }
       if(bodyarr[i][j].includes(strs[6])===true){
       bodys[i].style.float=calc(strs[6],(bodyarr[i])[j]);
       }
       if(bodyarr[i][j].includes(strs[7])===true){
       bodys[i].style.position=calc(strs[7],(bodyarr[i])[j]);
       }
          if(bodyarr[i][j].includes(strs[8])===true){
       bodys[i].style.display=calc(strs[8],(bodyarr[i])[j]);
       }
        if(bodyarr[i][j].includes(strs[9])===true){
       bodys[i].style.overflow=calc(strs[9],(bodyarr[i])[j]);
       }
        
        
        /*
         if(bodyarr[i][j].includes(strs[4])===true){
       bodys[i].style.margin=calc(strs[0],(bodyarr[i])[j] )+"px";
       }
         if(bodyarr[i][j].includes(strs[5])===true){
       bodys[i].style.margin=calc(strs[0],(bodyarr[i])[j] )+"px";
       }
         if(bodyarr[i][j].includes(strs[6])===true){
       bodys[i].style.margin=calc(strs[0],(bodyarr[i])[j] )+"px";
       }
       */
    }
    }

   
    
    
