window.onload = function (){
    let testJS = document.getElementById("butt");
   // let ret = testJS.getBoundingClientRect();
   // alert("Top: "+ret.top+"; Left: "+ret.left);
   testJS.onmouseover = function(){
    this.style.color = "red";
   }
   testJS.onmouseout = function(){
    this.style.color = "";
   }


}