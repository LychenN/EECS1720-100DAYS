// for Ex2 to Ex6, change the naMe of the following function properly
window.onload=function () {
    document.getElementById("butn").addEventListener("mouseover", function (event) {
   event.target.style.color="red";
    });
   
    document.getElementById("butn").addEventListener("mouseout", function (event) {
    event.target.style.color="black";
    });
   }

function ex0(){
    var a=parseInt(document.getElementById("number1").value);
    var originalA=a;
    if(a>0){
        while(true){
            if(a==0){
                document.getElementById("output").innerHTML="is divisible by 6";
                break;
            }else if(a<0){
                document.getElementById("output").innerHTML="is not divisible by 6";
                break;
            }else{
                a-=6;
            }
        }
    }else{
        while(true){
            if(a==0){
                document.getElementById("output").innerHTML="is divisible by 6";
                break;
            }else if(a>0){
                document.getElementById("output").innerHTML="is not divisible by 6";
                break;
            }else{
                a+=6;
            }
        }
    }

    if(originalA==0){
        document.getElementById("output").innerHTML+="<br>"+"program ended";
    }
    }
       


   //precondition: w, h belongs to real numbers
   //postcondition: perimeter is calculated and outputted
 
   

   
   /* in Ex2 to Ex6, you need to replace the following line 
       with some other formulas */
  
  
     
   /* in Ex2 to Ex6A, you need to rename "perimeter" to make it appropriate
      for those problems, you may also need to rename p to a better 
      variable that you might have in your formulas above */ 
 
   /* in Ex6A mappingA() do sth like
   var a = ...;
   if(a >= 90)
     answer = "A+";
   else if (a>=80)
     answer = "A";
   else if ....
   */
 
 
 
 
 
 /* in Ex6B for mappingB() , 
 function mappingB(){
 
   uncomment and complete this block
   var a = ...
   switch (true){
     case (a>=90): 
         answer="A+";
         break;
     case (a>=80): 
         answer="A";
         break;
         // you need to add more cases for other letter grades
     default:
         answer="F";
   }
   
 }*/