//JavaScript Document
function id(element) {
	return document.getElementById(element);
}
function bind(obj,ev,fn) {
	if(obj.addEventListener){ //判断是否有这个方法
		obj.addEventListener(ev,fn,false);
	} else{
		obj.attachEvent('on' + ev,function(){
			fn.call(obj);
		});
	}
}
function view(){
	return {
		w: document.documentElement.clienWidth,
		h: document.documentElement.clienHeight
	};
}
function addClass(obj,sClass) {
	var aClass = obj.className.split(' ');
	if(!obj.className) {
		obj.className = sClass;
		return;
	}
	for (var i = 0; i < aClass.length; i++){
		if(aClass[i] === sClass) return;
	}
	obj.className += ' ' + sClass;
}

function removeClass(obj,sClass){
	var aClass = obj.className.split(' ');
	if(!obj.className) return;
	for (var i = 0;i < aClass.length; i++){
		if(aClass[i] === sClass){
			aClass.splice(i,1);
			obj.className = aClass.join(' ');
				break;
		}
	}
}

/***首页*****/

var firstPage = id("firstPage");
var workPage = id("workPage");
var linkPage = id("linkPage");
var managePage = id("managePage");
var updatePage = id("updatePage");
var tag = 0;

function first(){
	var openBtn = id("openBtn");
	var mask1 = id("mask1");
	var login = id("login");
	var loginWrap = id("loginWrap");
	var close = id("close");
	var loginBtn = id("loginBtn");
	var backFirst = document.getElementsByClassName("icon-home");
	alert(backFirst.length)
	bind(openBtn,"touchstart",turn1);
	bind(login,"touchstart",show);
	bind(loginBtn,"touchstart",turnManage);
	// bind(backFirst,"touchstart",turnFirst);
	function iconChang(){
		// icon图标转换函数
	}
	function turn1(){
		// workPage.style.backgroundSize = "120%";
		removeClass(firstPage,"pageShow");
		addClass(workPage,"pageShow");
	}
	function show() {
		mask1.style.display = "block";
		loginWrap.style.height = "55%";
		loginWrap.style.width = "81.1%";
		loginWrap.style.opacity = "1";
		loginWrap.style.zIndex = "41";
		login.style.zIndex = "1";
		bind(close,"touchstart",dishow);
		bind(loginBtn, "touchstart",dishow);
		function dishow(){			
			mask1.style.display = "none";
			loginWrap.style.height = "50%";
			loginWrap.style.width = "70%";
			loginWrap.style.opacity = "0";
			loginWrap.style.zIndex = "1";
			login.style.zIndex = "50";	
		}
	}
	function turnManage(){
				removeClass(firstPage,"pageShow");
				addClass(managePage,"pageShow");
	}
	for(var i = 0;i<backFirst.length;i++){
		!function(i){
			backFirst[i].addEventListener("touchstart",function(){
				addClass(firstPage,"pageShow");
					removeClass(workPage,"pageShow");
					removeClass(linkPage,"pageShow");
					removeClass(managePage,"pageShow");
					removeClass(updatePage,"pageShow");
			});
		}(i);
	}
}
/***作品页****/
function second () {
	var linkBtn = id("linkBtn");
	bind(linkBtn,"touchstart",turn2);
	function turn2(){
		removeClass(workPage,"pageShow");
		addClass(linkPage,"pageShow");
	}
}
function three () {
	 var backFirstBtn = id("backFirstBtn");
	 bind(backFirstBtn,"touchstart",turn3);
	 function turn3(){
	 	removeClass(linkPage,"pageShow");
	 	addClass(firstPage,"pageShow");
	 	tag = 0;
	 }
}
/*****管理页***/
function four(){
	var uploadBtn = id("uploadBtn");
	bind(uploadBtn,"touchstart",turn4);
	function turn4(){
		removeClass(managePage,"pageShow");
		addClass(updatePage,"pageShow");
	}
}
/*****上传页*****/
function five(){
	var cancleBtn = id("cancleBtn");
	var mask2 = id("mask2");
	var remindWrap = id("remindWrap");
	var closeIf = id("closeIf");
	var noneBtn = id("noneBtn");
	var okBtn = id("okBtn");
	var giveupBtn = id("giveupBtn");
	bind(cancleBtn,"touchstart",showIf);
	function showIf(){
		mask2.style.display = "block";
		remindWrap.style.opacity = "1";
		remindWrap.style.zIndex = "41";
		bind(closeIf,"touchstart",dishowIf);
		bind(noneBtn,"touchstart",dishowIf);
		bind(okBtn,"touchstart",turn5);
		bind(giveupBtn,"touchstart",turn5);
		function dishowIf(){
		mask2.style.display = "none";
		remindWrap.style.opacity = "0";
		remindWrap.style.zIndex = "1";
		}
		function turn5(){
			removeClass(updatePage,"pageShow");
			addClass(managePage,"pageShow");
		}

	}
}
