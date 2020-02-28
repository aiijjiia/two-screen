var ope=['+','-','*','/','ʕ •ᴥ•ʔ'];
var index=0;
var index1=0;
var text=document.getElementById('ope');
var text1=document.getElementById('mb_ope');
var box=document.getElementsByClassName('box');
var box1=document.getElementsByClassName('mobile');
var height=window.screen.availHeight;
function init(){
	var t1=document.getElementsByClassName('pc_head');
	var t2=document.getElementsByClassName('pc_main');
	var t3=document.getElementsByClassName('pc_foot');
	console.log(t1)
	t1[0].style.height=height*0.25+"px";
	t2[0].style.height=height*0.5+"px";
	t3[0].style.height=height*0.25+"px";
	console.log()
}
function change(){
	index = (index+1)%5;
	text.value=ope[index];
	cal();
}
function change1(){
	
	index1 = (index1+1)%5;
	text1.value=ope[index1];
	cal1();
}
function cal_time(){
	var pc_time=document.getElementsByClassName('pc_time');
	var mb_time=document.getElementsByClassName('mb_time_box');
	var now=new Date();
	var flag;
	var hour=now.getHours();
	if(hour>=12)
		flag=" PM"
	else
		flag=" AM"
	var min=now.getMinutes();
	pc_time[0].innerText=hour.toString()+':'+min.toString()+flag;
	mb_time[0].innerText=hour.toString()+':'+min.toString()+flag;
}
function isnull(val) {
        var str = val.replace(/(^\s*)|(\s*$)/g, '');
        if (str == '' || str == undefined || str == null) {
            return true;
        } else {
            return false;
        }
}
function cal(){
	var a=document.getElementById('a');
	var b=document.getElementById('b');
	var c=document.getElementById('c');
	var aa=parseInt(a.value);
	var bb=parseInt(b.value);
	if(index==4){
		box[0].style.background="url(./img/pc2.gif)";
		box[0].style.backgroundSize="100% 100%"
	}
	else{
		box[0].style.background="url(./img/pc1.gif)";
		box[0].style.backgroundSize="100% 100%"
	}
	if(isnull(a.value)||isnull(b.value)){
		c.value="?"
	}
	else if(index==0){
		c.value=aa+bb;
	}else if(index==1){
		c.value=aa-bb;
	}else if(index==2){
		c.value=aa*bb;
	}else if(index==3){
		c.value=aa/bb;
	}else{
		c.value="0000";
	}
}
function cal1(){
	var a=document.getElementById('x');
	var b=document.getElementById('y');
	var c=document.getElementById('z');
	var aa=parseInt(x.value);
	var bb=parseInt(y.value);
	if(index1==4){
		box1[0].style.background="url(./img/mobile2.gif) no-repeat"
		box1[0].style.backgroundSize="100% 100%"
	}
	else{
		box1[0].style.background="url(./img/mobile1.gif) no-repeat"
		box1[0].style.backgroundSize="100% 100%"
	}
	if(isnull(a.value)||isnull(b.value)){
		c.value="?"
	}
	else if(index1==0){
		c.value=aa+bb;
	}else if(index1==1){
		c.value=aa-bb;
	}else if(index1==2){
		c.value=aa*bb;
	}else if(index1==3){
		c.value=aa/bb;
	}else{
		c.value="0000";
	}
}
cal_time();
init();