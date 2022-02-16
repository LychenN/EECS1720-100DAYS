// For: EECS 1012M, York University, Lassonde School of Engineering (LAS) 
// in Ex7 to Ex13, change the name of the following function properly

function problem_xx() {
  
    /* this statement defines an object reference to the 
       html element having an ID "output".
       Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");
  
    // this statement receives some data and parses it to integer
  
    var a = parseInt(prompt("Please enter a number: ", ""));

    outputObj.style.textAlign="left";

    outputObj.innerHTML+="number: "+a+"<br><br>";

    for(var i=0;i<a;i++){
        for(var j=0;j<=i;j++){
            outputObj.innerHTML+="[] ";
        }
        outputObj.innerHTML+="<br>"
    }


    // var resu=function factorial_A() {
    //     var result=1;
    //     for(var i=1;i<=a;i++){
    //         result*=i;
    //     }
    //     return result;
    // }
    // outputObj.innerHTML+="number: "+a+"<br><br>";
    // outputObj.innerHTML+=a+"!="+resu()+"(A)<br><br>";
    // outputObj.innerHTML+=a+"!="+this.factorial_B(a)+"(B)<br><br>";

    /* this statement add some message to our output Object used for Ex8
       you would need to change the message to be appropriate in Ex9 to E13 */
  
   
     //  outputObj.innerHTML = "number: " + a + "<br><br>its digits: "; // uncomment this line for Ex8
  
    // translate the rest of your flowcharts to js here:
    
    // factorial_B(a);  // for Ex11  call function factorial_B, passing a
    
     
    //the following statements inform the user that the program ended
    //and disable the button.  Ctrol+F5 to refresh the browser in order to start over
    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
  }


  
  // for Ex11   take input named num  and computer num!
    function factorial_B (num) {
      // num is the input, calculate factorial of num. Use num as variable name.
      if(num<=1)return 1;
      return num*factorial_B(num-1);
  }
  
  function fibonacci(n) {
     if(n==1 || n==2){
        return 1;
     }else{
        return fibonacci(n-1)+fibonacci(n-2);
     }
  }