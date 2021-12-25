var sitejs={
	'addPlayBox':function(str){
		$("#player").append('<iframe id="playframe" width="100%" height="100%" frameborder="0" scrolling="no" src="./dplay.html?url='+str+'"></iframe>');
	},
	'chanageColor':function(){
		$(".nav-link").first().addClass("vurlidactive");
		$(".nav-link").click(function(){  //点击下面的按钮触发事件;
			$(this).addClass("vurlidactive").siblings().removeClass("vurlidactive");
		})  
	},
	'chooseVurl':function(n,vurls){
		vurls = Base64.decode(vinfos);
		var vurlarr = vurls.split('#');
		var num = vurlarr.length;
		switch(num){
			case(num):
				for (var i = 0; i < vurlarr.length; i++) {
					var n = i++;
					vurl = vurlarr[n].split('$')[1];
				}
			break;
			case(1):
				vurl = vurlarr[0].split('$')[1];
			break;
			default:
				vurl = vurls;
			break;
		}
		return vurl
	},
	'changeVurl':function(urlid){
		vurls = Base64.decode(vinfos);
		vurl = sitejs.chooseVurl(urlid,vurls);
		sitejs.chanageColor();
		$("#playframe").remove();
		sitejs.addPlayBox(vurl);
	},
	'defaultVurl':function(){
		vurls = Base64.decode(vinfos);
		vurlfenge = vurls.split(/#/);
		if (vurlfenge.length >= 1) {
			vurl = vurlfenge[0].split('$')[1];//console.log(vurl);
		} else{
			vurl = vurls;//console.log(vurl);
		}
		sitejs.chanageColor();
		sitejs.addPlayBox(vurl);
	}
}
$(function(){
	sitejs.defaultVurl();
})