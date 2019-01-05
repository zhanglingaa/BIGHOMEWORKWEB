	var button2=document.getElementsByClassName("button2")[0];
			var button3=document.getElementsByClassName("button3")[0];
			var b=document.getElementsByClassName("b")[0];
			button2.onclick=function(){		
				button2.setAttribute("style","background:url(img/duigou.png) no-repeat 100% 100%; background-color:white;border:1px solid #fe0d4a;");
				button3.setAttribute("style","background-color:white;border:1px solid white;");
				b.innerHTML = "'150ml'";
			}
			button3.onclick=function(){		
				button3.setAttribute("style","background:url(img/duigou.png) no-repeat 100% 100%; background-color:white;border:1px solid #fe0d4a;");
				button2.setAttribute("style","background-color:white;border:1px solid white;");
				b.innerHTML = "'200ml'";
			}
			var input2 = document.getElementsByClassName("input2")[0];
			var input3 = document.getElementsByClassName("input3")[0];
			var input4 = document.getElementsByClassName("input4")[0];
			//-
			input2.onclick=function(){
				var num = parseInt(input3.value);						
				if(num>1 && num<6){				
				    input3.value =num-1;
				}
				if(num == 1){
					input2.setAttribute("style","cursor:not-allowed");
					input4.setAttribute("style","cursor:pointer");
				}else if(num == 5){
					input4.setAttribute("style","cursor:not-allowed");
					input2.setAttribute("style","cursor:pointer");
				}else{
					input4.setAttribute("style","cursor:pointer");
					input2.setAttribute("style","cursor:pointer");
				}			

			}
			//+
			input4.onclick=function(){
					var num = parseInt(input3.value);
					console.log(num)				
					if(num>0 && num<5){				
					    input3.value =num+1;
					}
					if(num == 1){
						input2.setAttribute("style","cursor:not-allowed");
						input4.setAttribute("style","cursor:pointer");
					}else if(num == 5){
						input4.setAttribute("style","cursor:not-allowed");
						input2.setAttribute("style","cursor:pointer");
					}else{
						input2.setAttribute("style","cursor:pointer");
						input4.setAttribute("style","cursor:pointer");
					}
			}
			var d= document.getElementsByClassName("d")[0];
			var i= document.getElementsByClassName("i")[0];
			var e= document.getElementsByClassName("e")[0];
			var f=document.getElementsByClassName("f")[0];
			var g= document.getElementsByClassName("g")[0];
			d.onclick=function(){
				i.setAttribute("id","bg");
				e.style.display="block";
			}
			f.onclick=function(){
				i.setAttribute("id","");
				e.style.display="none";
			}
			g.onclick=function(){
				i.setAttribute("id","");
				e.style.display="none";
			}
			var one=document.getElementById("one");
			var two=document.getElementById("two");
			var three=document.getElementById("three");
			var four=document.getElementById("four");
			var five = document.getElementsByClassName("five")[0];
			var nine =document.getElementById("nine");
			if(five.getAttribute('src') == "img/pp0.jpeg"){
				two.setAttribute("style","border:2px solid #ff9003;");
				three.setAttribute("style","");
			}else{
				three.setAttribute("style","border:2px solid #ff9003;");
				two.setAttribute("style","");
			}		
			two.onmouseover=function(){
				two.setAttribute("style","border:2px solid #ff9003;");
				three.setAttribute("style","");
				five.setAttribute("src","img/pp0.jpeg");
				nine.setAttribute("src","img/pp0.jpeg");
			}
			three.onmouseover=function(){
				three.setAttribute("style","border:2px solid #ff9003;");
				two.setAttribute("style","");
				five.setAttribute("src","img/pp1.jpeg");
				nine.setAttribute("src","img/pp1.jpeg");
			}
			one.onclick=function(){
				if(five.getAttribute("src")=="img/pp1.jpeg"){
					two.setAttribute("style","border:2px solid #ff9003;");
					three.setAttribute("style","");
					five.setAttribute("src","img/pp0.jpeg");
					nine.setAttribute("src","img/pp0.jpeg");
				}else{
					three.setAttribute("style","border:2px solid #ff9003;");
					two.setAttribute("style","");
					five.setAttribute("src","img/pp1.jpeg");
					nine.setAttribute("src","img/pp1.jpeg");
				}			
			}
			four.onclick=function(){
				if(five.getAttribute("src")=="img/pp1.jpeg"){
					two.setAttribute("style","border:2px solid #ff9003;");
					three.setAttribute("style","");
					five.setAttribute("src","img/pp0.jpeg");
					nine.setAttribute("src","img/pp0.jpeg");
				}else{
					three.setAttribute("style","border:2px solid #ff9003;");
					two.setAttribute("style","");
					five.setAttribute("src","img/pp1.jpeg");
					nine.setAttribute("src","img/pp1.jpeg");
				}
			}
			var box=document.getElementsByClassName("middle11")[0];		
			var six= document.getElementsByClassName("six")[0];
			var slider = document.getElementById("slider");
			var five = document.getElementsByClassName("five")[0];			
			var seven =document.getElementsByClassName("seven")[0];			
			var nine=document.getElementById("nine");
			//鼠标划进划出的操作
			slider.onmouseover=function(){
				slider.style.display="block";
				seven.style.display="block";
			}

			box.onmouseover=function(){			
				slider.style.display="block";
				seven.style.display="block";
			}
			box.onmouseout=function(){				
				slider.style.display="none";
				seven.style.display="none";
			}
				//移动
				box.onmousemove=function(ev){
				var ev = ev || window.event;
				var x = ev.clientX;
				var y = ev.clientY;
				var t = box.offsetTop;
				var l = box.offsetLeft;
				var left = x-l-five.offsetWidth/2;//遮盖层距离图片的左边的距离
				var top = y-t-five.offsetHeight/2;
				console.log(left);
				console.log(top);
				if(top<=0){//slider到达图片的顶部
					top=0;
				}
				if (top>box.offsetHeight-slider.offsetHeight){
				//到达图片最低端
					top=box.offsetHeight-slider.offsetHeight;
				}
				if(left<=0){//到达图片最左端
					left=0;
				}
				if(left>=five.offsetWidth-slider.offsetWidth){//到达图片最右端
					left=five.offsetWidth-slider.offsetWidth;
				}
				//设置slider的位置
				slider.style.left=left+'px';
				slider.style.top=top+'px';
				var w = left/(five.offsetWidth-slider.offsetWidth);
				var h = top/(five.offsetHeight-slider.offsetHeight);//求取比例
				nine.style.top=(-1)*(nine.offsetHeight-seven.offsetHeight)*h+'px';
				nine.style.left=(-1)*(nine.offsetWidth-seven.offsetWidth)*w+'px';
			}			


