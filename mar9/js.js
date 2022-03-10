window.onload=function (){
    for(var i=0;i<7;i++){
        document.getElementsByTagName("button")[i].setAttribute
        ("onclick","ex"+(i+1)+"()");
    }
}

var op=document.querySelector(".output");

function ex1() {
    var num=parseInt(prompt("Please enter a number:",""));

    var prime=true;
    var d=2;
    console.log(d);
    while(prime===true && d<=num/2){
        if(num%d===0){
            prime=false;
        }
        d++;
        console.log(d);
    }

    if(prime===true){
        op.innerHTML=num+" is prime";
    }else{
        op.innerHTML=num+" is not prime";
    }
}

function ex2() {
    var p=0, n=0;
    do {
        var a = parseInt(prompt("Please enter a number: ",""));
        console.log("a="+a);
        if(a>0){
            p++;
            console.log("p="+p);
        }

        if(a<0){
            n++;
            console.log("n="+n);
        }
    }while (a!=0 && p<=2*n);

    op.innerHTML="p: "+p+", n: "+n;
}

function ex3(){
    var a = parseInt(prompt("Please enter a number: ",""));
    var bin='';
    var n=a;

    while(n!=0){
            if(n%2===0){
                bin=0+bin;
                console.log("bin"+bin);
            }else{
                bin=1+bin;
                console.log("bin"+bin);
            }
            n=Math.floor(n/2);
            console.log("n"+n);
    }

    op.innerHTML=a +" in binary: "+bin;
}

function ex4() {
    var cnt1=0, cnt2=0;
    var i;
    for(i=1;i<=4;i++){
        console.log("i"+i);
            var a = parseInt(prompt("Please enter a number: ",""));  
            console.log("num"+a);
            if(a<0){
                cnt1++;
                console.log("cnt1"+cnt1);
            }              
    }


    for(j=1;j<=4;j++){
            var a = parseInt(prompt("Please enter a number: ",""));  
            if(a<0){
                cnt2++;
                console.log("cnt2"+cnt2);
            }              
    }
    
    if(cnt1===cnt2){
        op.innerHTML="Yes";
    }else{
        op.innerHTML="No";
    }
}

function ex5(){
    var arr=[3,1,6,4,8,12];
    var sum=0;
    for(var i=0;i<arr.length;i++){
        console.log("i"+i);
        if(i%2===0){
            if(arr[i]%2===0){
                sum+=arr[i];
                console.log("sum"+sum);
            }
        }
    }

    op.innerHTML=sum;
}

function ex6(){
    var a = parseInt(prompt("Please enter a number: ", ""));

    for(var i=2;i<=a;i++){
            if(prime(i)===true){
                op.innerHTML+=i+", ";
                console.log("output "+i);
            }                
    }
}

function prime(num) {
    var flag=true;
    var d=2;
    console.log("flag "+flag);
    console.log("d "+d);
    console.log("num "+num);
    while(flag===true && d<=num/2){
            if(num%d===0){
                flag=false;
            }
            d++;
            console.log("d "+d);
        }
        console.log("output "+flag);
    return flag;
}

function ex7() {
    var arr=[27, 7, 13,17, 31, 37];

    for(var i=0;i<arr.length;i++){
        console.log("i "+i);
        if(prime(arr[i])===true){
            if(has7(arr[i])===true){
                console.log("output "+arr[i]);
                op.innerHTML+=arr[i]+", ";
            }
        }
    }
}

function has7(num) {
    var digit;
    var denominator=10;

    console.log("digit "+digit);
    console.log("denominator "+denominator);

    while(true){
        digit=parseInt((num%denominator)/(denominator/10));
        console.log("digit "+digit);
        if(digit===7){
            console.log("returned value "+true);
            return true;
        }
        if(num/denominator>1){
            denominator*=10;
            console.log("denominator "+denominator);
        }else{
            break;
        }
    }

    console.log("returned value "+true);
    return false;
}