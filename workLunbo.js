var timer;
var main=document.getElementById("main");
var a=document.getElementById("a");
var b=document.getElementById("b");
var c=document.getElementById("c");
var d=document.getElementById("d");
var e=document.getElementById("e");
function play(){
	timer=setInterval(next,6000);
}
function stop(){
	clearInterval(timer);
}var m;var right=document.getElementById("right");
function fun1(){m=1;
	funm();
}

function fun2(){m=2;funm();

	

}
function fun3(){m=3;
funm();
}
function fun4(){m=4;funm();
}
function fun5(){
	 m=5;funm();
}
play();
container.ontouchstart=stop;
container.ontouchend=play;
function next(){
	if(parseInt(a.style.top)==0){b.click();}
	if(parseInt(b.style.top)==0){fun3();}
	if(parseInt(c.style.top)==0){fun4();}
	if(parseInt(d.style.top)==0){fun5();}
	if(parseInt(e.style.top)==0){fun1();}
}
var x;
function funs(){for(var i=0;i<=4;i++)
    {
    	x=document.getElementById("main").children[i];
	if(parseInt(x.style.top)<25&&parseInt(x.style.top)>=0){	
	x.style.top=parseInt(x.style.top)-4+"%";
	x.style.width="100%";x.style.height="25.5%";x.style.left="0%";
    x.style.boxShadow="0 17px 13px rgba(0,0,0,0.1)";

	
		
 
    


}
else{x.style.top=parseInt(x.style.top)-3+"%";
if(parseInt(x.style.top)>=25){
x.style.boxShadow="0 0 0 0"}
if(parseInt(x.style.top)<0){

	x.style.width="75%";x.style.height="19%";x.style.left="12.5%";
}
}
}

}
function func(){
	if(parseInt(a.style.top)<-23.4){
	a.style.top="100%";
}
if(parseInt(c.style.top)<-23.4){
	c.style.top="100%";
}
if(parseInt(d.style.top)<-23.4){
	d.style.top="100%";
}
if(parseInt(b.style.top)<-23.4){
	b.style.top="100%";
}
if(parseInt(e.style.top)<-23.4){
	e.style.top="100%";
}
}
function funx(){
	for(i=0;i<=4;i++){if(i!=m-1){right.children[i].style.left="10%";right.children[i].style.transition="opacity 0s,left 0s";right.children[i].style.opacity="0";}}
}
function funt(){var t=document.getElementById("main").children[m-1];
	if(t.style.top!="0%"){
	funs();
	}func();
if(parseInt(t.style.top)<=0){
	
	t.style.top="0%";
	
}
if(parseInt(t.style.top)>0){if(parseInt(t.style.top)<25){
	right.children[m-1].style.left="0%";right.children[m-1].style.transition="opacity 0.5s,left 0.5s";right.children[m-1].style.opacity="1";

	
	
	}
	
			setTimeout(funt,25);
}else{

	
		t.style.top="0%";
       if(m>4){document.getElementById("main").children[m-5].style.top="29.8%"}
       	else{document.getElementById("main").children[m].style.top="29.8%"}
       		  if(m+1>4){document.getElementById("main").children[m+1-5].style.top="53.2%"}
       	else{document.getElementById("main").children[m+1].style.top="53.2%"}
       		  if(m+2>4){document.getElementById("main").children[m+2-5].style.top="76.6%"}
       	else{document.getElementById("main").children[m+2].style.top="76.6%"}
       		  if(m+3>4){document.getElementById("main").children[m+3-5].style.top="100%"}
       	else{document.getElementById("main").children[m+3].style.top="100%"}
	
}}
function funm(){
funx();stop();
	funt();play();
}