function getStyle(obj,name){
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	} else {
		return getComputedStyle(obj,false)[name];
	}
}

		

function startMove(obj,attr,target) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var cur = 0;

		if(attr == 'opacity'){
			cur = Math.round(parseFloat(getStyle(obj,attr))*100);
		}else{
			cur = parseInt(getStyle(obj,attr));
		}

		var speed = (target - cur)/6;

		if (speed>0) {
			speed = Math.ceil(speed);
		} else {
			speed = Math.floor(speed);
		}

		if(target == cur){
			clearInterval(obj.timer);
		}else{
			if(attr =='opacity'){
				obj.style.filter = 'alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity = (cur + speed)/100;
			}else{
				obj.style[attr] = cur + speed + 'px';
			}
		}

	},30);
}