//직선의 방정식 일반형→표준형
function t1p1() {
var num1=document.getElementById("a").value;
var num2=document.getElementById("b").value;
var num3=document.getElementById("c").value;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("숫자만 입력하세요!");
        return;
    }

var a=Number(num1);
var b=Number(num2);
var c=Number(num3);
var m=-a/b;
var n=-c/b;

document.getElementById("result").innerHTML = "y="+m+"x+("+n+")";
}

//직선의 방정식 표준형→일반형
function t1p2() {
var num1=document.getElementById("m").value;
var num2=document.getElementById("n").value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("숫자만 입력하세요!");
        return;
    }

var m=Number(num1);
var n=Number(num2);

if (m>0) {
	var a=m;
	var c=n;
	
	document.getElementById("result").innerHTML = a+"x"+"-y"+"+("+c+")=0";
} else {
if (m<0) {
	var a=-m;
	var c=-n;
	
	document.getElementById("result").innerHTML = a+"x"+"+y"+"+("+c+")=0";
} else {
	var c=-n;
	document.getElementById("result").innerHTML = "y+("+c+")=0";
}
}

}

//이차함수 일반형→표준형
function t2p1() {
var num1=document.getElementById("a").value;
var num2=document.getElementById("b").value;
var num3=document.getElementById("c").value;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("숫자만 입력하세요!");
        return;
    }

var a=Number(num1);
var b=Number(num2);
var c=Number(num3);
var p=b/(2*a);
	p=Math.round(p*10000000000)/10000000000;	
var q=c-(b*b)/(4*a);
	q=Math.round(q*10000000000)/10000000000;	

if (p>0) {
	document.getElementById("result").innerHTML = "y="+a+"(x+"+p+")²+("+q+")";
} else {
if (p<0) {
	document.getElementById("result").innerHTML = "y="+a+"(x"+p+")²+("+q+")";
} else {
	document.getElementById("result").innerHTML = "y="+a+"x²+("+q+")";
}
}
}

//이차함수 표준형→일반형
function t2p2() {
var num1=document.getElementById("a").value;
var num2=document.getElementById("p").value;
var num3=document.getElementById("q").value;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("숫자만 입력하세요!");
        return;
    }

var a=Number(num1);
var p=Number(num2);
var q=Number(num3);
var b=2*a*p;
var c=a*p*p+q;
	c=Math.round(c*10000000000)/10000000000;	

document.getElementById("result").innerHTML = "y="+a+"x²+("+b+")x+("+c+")";
}

//원의 방정식 일반형→표준형
function t3p1() {
var num1=document.getElementById("A").value;
var num2=document.getElementById("B").value;
var num3=document.getElementById("C").value;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("숫자만 입력하세요!");
        return;
    }

var A=Number(num1);
var B=Number(num2);
var C=Number(num3);
var a=A/2;
var b=B/2;
var rsquared=-C+(A*A)/4+(B*B)/4;
	rsquared=Math.round(rsquared*10000000000)/10000000000;	

document.getElementById("result").innerHTML = "{x+("+a+")}²+{y+("+b+")}²="+rsquared;
}

//원의 방정식 표준형→일반형
function t3p2() {
var num1=document.getElementById("a").value;
var num2=document.getElementById("b").value;
var num3=document.getElementById("rsquared").value;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("숫자만 입력하세요!");
        return;
    }

var a=Number(num1);
var b=Number(num2);
var rsquared=Number(num3);
var A=2*a;
var B=2*b;
var C=a*a+b*b-rsquared;
	C=Math.round(C*10000000000)/10000000000;	

document.getElementById("result").innerHTML = "x²+y²+("+A+")x+("+B+")y+("+C+")=0";
}

//유리함수(분수함수) 일반형→표준형
function t4p1() {
var num1=document.getElementById("a").value;
var num2=document.getElementById("b").value;
var num3=document.getElementById("c").value;
var num4=document.getElementById("d").value;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        alert("숫자만 입력하세요!");
        return;
    }

var a=Number(num1);
var b=Number(num2);
var c=Number(num3);
var d=Number(num4);
var p=d/c;
var k=b/c-a*d/c/c;
	k=Math.round(k*10000000000)/10000000000;	
var q=a/c;

document.getElementById("result").innerHTML = "y= (분자)"+k+"&nbsp;&nbsp;&nbsp;(q=)"+q+"<br/>&nbsp;&nbsp;&nbsp;&nbsp;(분모)x+("+p+")";
}

//유리함수(분수함수) 표준형→일반형
function t4p2() {
var num1=document.getElementById("k").value;
var num2=document.getElementById("p").value;
var num3=document.getElementById("q").value;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("숫자만 입력하세요!");
        return;
    }

var k=Number(num1);
var p=Number(num2);
var q=Number(num3);
var a=q;
var b=k+p*q;
	b=Math.round(b*10000000000)/10000000000;	
var d=p;

document.getElementById("result").innerHTML = "y= (분자)"+a+"x+("+b+")<br/>&nbsp;&nbsp;&nbsp;&nbsp;(분모)x+("+d+")";
}

//무리함수 일반형→표준형
function t5p1() {
var num1=document.getElementById("a").value;
var num2=document.getElementById("b").value;
var num3=document.getElementById("c").value;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("숫자만 입력하세요!");
        return;
    }

var a=Number(num1);
var b=Number(num2);
var c=Number(num3);
var p=b/a;
var q=c;

document.getElementById("result").innerHTML = "y=(무리식)<br/>근호 안의 식: "+a+"{x+("+p+")}<br>근호 밖의 식: "+q;
}

//무리함수 표준형→일반형
function t5p2() {
var num1=document.getElementById("a").value;
var num2=document.getElementById("p").value;
var num3=document.getElementById("q").value;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("숫자만 입력하세요!");
        return;
    }

var a=Number(num1);
var p=Number(num2);
var q=Number(num3);
var b=a*p;
var c=q;

document.getElementById("result").innerHTML = "y=(무리식)<br/>근호 안의 식: "+a+"x+("+b+")}<br>근호 밖의 식: "+c;
}

//6-1. 이차곡선 일반형→표준형
function t6p1() {
var num1=document.getElementById("A").value;
var num2=document.getElementById("B").value;
var num3=document.getElementById("C").value;
var num4=document.getElementById("D").value;
var num5=document.getElementById("E").value;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        alert("숫자만 입력하세요!");
        return;
    }

var A=Number(num1);
var B=Number(num2);
var C=Number(num3);
var D=Number(num4);
var E=Number(num5);

	if(A==B){ //if1) 원
		var a=C/(2*A);
		a=Math.round(a*10000000000)/10000000000;
		var b=D/(2*B);
		b=Math.round(b*10000000000)/10000000000;
		var rsquared=-E/A+C*C/(4*A*A)+D*D/(4*B*B);
		rsquared=Math.round(rsquared*10000000000)/10000000000;
		document.getElementById("result").innerHTML = "원 {x+("+a+")}²+{y+("+b+")}²="+rsquared;
	}
	else if(A==0 && B*C!=0){ //if2
		var n=D/(2*B);
			n=Math.round(n*10000000000)/10000000000;
		var P=-C/B;
			P=Math.round(P*10000000000)/10000000000;
		var m=E/C-D*D/(4*B*C);
			m=Math.round(m*10000000000)/10000000000;
		document.getElementById("result").innerHTML = "포물선 {y+("+n+")}²="+P+"{x+("+m+")}";
	}
	else if(B==0 && A*D!=0){ //if3
		var m=C/(2*A);
			m=Math.round(m*10000000000)/10000000000;
		var P=-D/A;
			P=Math.round(P*10000000000)/10000000000;
		var n=E/D-C*C/(4*A*D);
			n=Math.round(n*10000000000)/10000000000;
		document.getElementById("result").innerHTML = "포물선 {x+("+m+")}²="+P+"{y+("+n+")}";
	}
	else if(A*B>0 && A!=B){ //if4)타원
		var right=-E+C*C/(4*A)+D*D/(4*B);
			right==Math.round(right*10000000000)/10000000000;
		var asquared=right/A;
			asquared=Math.round(asquared*10000000000)/10000000000;
		var bsquared=right/B;
			bsquared=Math.round(bsquared*10000000000)/10000000000;
		var m=C/(2*A);
			m=Math.round(m*10000000000)/10000000000;
		var n=D/(2*B);
			n=Math.round(n*10000000000)/10000000000;
		document.getElementById("result").innerHTML = "타원 {x+("+m+")}²/"+asquared+"+{y+("+n+")}²/"+bsquared+"=1";
	}
	else if(A*B<0){  //if5~6)쌍곡선
		var right=-E+C*C/(4*A)+D*D/(4*B);
			right==Math.round(right*10000000000)/10000000000;
		var asquared=right/A;
			asquared=Math.round(asquared*10000000000)/10000000000;
		var bsquared=-right/B;
			bsquared=Math.round(bsquared*10000000000)/10000000000;
		var m=C/(2*A);
			m=Math.round(m*10000000000)/10000000000;
		var n=D/(2*B);
			n=Math.round(n*10000000000)/10000000000;
		if(asquared>0){  //좌우쌍곡선
			document.getElementById("result").innerHTML = "쌍곡선 {x+("+m+")}²/"+asquared+"-{y+("+n+")}²/"+bsquared+"=1";
		}
		else{  //상하쌍곡선
			asquared=-asquared;
			bsquared=-bsquared;
			document.getElementById("result").innerHTML = "쌍곡선 {x+("+m+")}²/"+asquared+"-{y+("+n+")}²/"+bsquared+"=-1";
		}
	}
	else{
		document.getElementById("result").innerHTML = "지원하지 않는 이차곡선입니다.";
	}
}

//6-2. 원 표준형→일반형
function t6p2() {
var num1=document.getElementById("a").value;
var num2=document.getElementById("b").value;
var num3=document.getElementById("rsquared").value;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("숫자만 입력하세요!");
        return;
    }

var a=Number(num1);
var b=Number(num2);
var rsquared=Number(num3);
var A=2*a;
var B=2*b;
var C=a*a+b*b-rsquared;
	C=Math.round(C*10000000000)/10000000000;	

document.getElementById("result").innerHTML = "x²+y²+("+A+")x+("+B+")y+("+C+")=0";
}

//6-3. 포물선 표준형→일반형
function t6p3() {
var num1=document.getElementById("n").value;
var num2=document.getElementById("P").value;
var num3=document.getElementById("m").value;

	if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("숫자만 입력하세요!");
        return;
    }
	
var n=Number(num1);
var P=Number(num2);
var m=Number(num3);
var C=-P;
var D=2*n;
var E=n*n-P*m;
	E=Math.round(E*10000000000)/10000000000;

document.getElementById("result").innerHTML = "y²+("+C+")x+("+D+")y+("+E+")=0";

}

//6-4. 포물선 표준형→일반형
function t6p4() {
var num1=document.getElementById("m").value;
var num2=document.getElementById("P").value;
var num3=document.getElementById("n").value;

	if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("숫자만 입력하세요!");
        return;
    }
	
var m=Number(num1);
var P=Number(num2);
var n=Number(num3);
var C=2*m;
var D=-P;
var E=m*m-P*m;
	E=Math.round(E*10000000000)/10000000000;

document.getElementById("result").innerHTML = "x²+("+C+")x+("+D+")y+("+E+")=0";

}

//6-5. 타원 표준형→일반형
function t6p5() {
var num1=document.getElementById("m").value;
var num2=document.getElementById("asquared").value;
var num3=document.getElementById("n").value;
var num4=document.getElementById("bsquared").value;

	if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        alert("숫자만 입력하세요!");
        return;
    }
	
var m=Number(num1);
var asquared=Number(num2);
var n=Number(num3);
var bsquared=Number(num4);
var A=bsquared;
	A=Math.round(A*10000000000)/10000000000;
var B=asquared;
	B=Math.round(B*10000000000)/10000000000;
var C=2*bsquared*m;
	C=Math.round(C*10000000000)/10000000000;
var D=2*asquared*n;
	D=Math.round(D*10000000000)/10000000000;
var E=bsquared*m*m+asquared*n*n-asquared*bsquared;
	E=Math.round(E*10000000000)/10000000000;
	
document.getElementById("result").innerHTML = A+"x²+("+B+")y²+("+C+")x+("+D+")y+("+E+")=0";
}

//6-6. 좌우쌍곡선 표준형→일반형
function t6p6() {
var num1=document.getElementById("m").value;
var num2=document.getElementById("asquared").value;
var num3=document.getElementById("n").value;
var num4=document.getElementById("bsquared").value;

	if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        alert("숫자만 입력하세요!");
        return;
    }
	
var m=Number(num1);
var asquared=Number(num2);
var n=Number(num3);
var bsquared=Number(num4);
var A=bsquared;
var B=-asquared;
var C=2*bsquared*m;
	C=Math.round(C*10000000000)/10000000000;
var D=-2*asquared*n;
	D=Math.round(D*10000000000)/10000000000;
var E=bsquared*m*m-asquared*n*n-asquared*bsquared;
	E=Math.round(E*10000000000)/10000000000;
	
document.getElementById("result").innerHTML = A+"x²+("+B+")y²+("+C+")x+("+D+")y+("+E+")=0";
}

//6-7. 상하쌍곡선 표준형→일반형
function t6p7() {
var num1=document.getElementById("m").value;
var num2=document.getElementById("asquared").value;
var num3=document.getElementById("n").value;
var num4=document.getElementById("bsquared").value;

	if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        alert("숫자만 입력하세요!");
        return;
    }
	
var m=Number(num1);
var asquared=Number(num2);
var n=Number(num3);
var bsquared=Number(num4);
var A=bsquared;
var B=-asquared;
var C=2*bsquared*m;
	C=Math.round(C*10000000000)/10000000000;
var D=-2*asquared*n;
	D=Math.round(D*10000000000)/10000000000;
var E=bsquared*m*m-asquared*n*n+asquared*bsquared;
	E=Math.round(E*10000000000)/10000000000;
	
document.getElementById("result").innerHTML = A+"x²+("+B+")y²+("+C+")x+("+D+")y+("+E+")=0";
}