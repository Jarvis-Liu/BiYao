$(function(){
	function imgAtive() {
	    var timer = null;
	    var cur = 0;
	    var len = $("#banner ol li").length;

	    //鼠标滑过容器停止播放
	    $("#banner-slider").hover(function(){
	        clearInterval(timer);
	    },function(){
	        showImg();
	    });
	    // 遍历所有圆点导航实现划过切换至对应的图片
	    $("#banner ol li").click(function(){
	    	console.log("aaa");
	        clearInterval(timer);
	        cur = $(this).index();
	        $(this).addClass("ora").siblings().removeClass("ora");
	        $("#banner-slider ul li").eq(cur).fadeIn(1000).siblings("li").fadeOut(1000);
	    });
	    $(".slider_left").click(function() {
	    	console.log("a");
	    	cur--;
	    	if( cur<0 ){ cur=len; }
	    	$("#banner ol li").eq( cur ).addClass("ora").siblings().removeClass("ora");
	    	$("#banner-slider ul li").eq(cur).fadeIn(1000).siblings("li").fadeOut(1000);
	    })
	    $(".slider_right").click(function() {
	    	console.log("a");
	    	cur++;
	    	if( cur>=len ){ cur=0; }
	    	$("#banner ol li").eq( cur ).addClass("ora").siblings().removeClass("ora");
	    	$("#banner-slider ul li").eq(cur).fadeIn(1000).siblings("li").fadeOut(1000);
	    })

	    //定义图片切换函数
	    function showImg(){
	        timer = setInterval(function(){
	            cur++;
	            if( cur>=len ){ cur=0; }
	            $("#banner-slider ul li").eq( cur ).fadeIn(1000).siblings("li").fadeOut(1000);
	            $("#banner ol li").eq( cur ).addClass("ora").siblings().removeClass("ora");

	        },2000);
	    }
	    showImg();
	}
	imgAtive();

	function imgHover() {
		var $culling = $(".culling");
		var $li = $(".culling li");
		var $i = $(".culling i");
		for (var i = 0; i < $li.length; i++) {
			$li[i].index = i;
			$li[i].onmouseenter = function() {
				for (var k = 0; k < $li.length; k++) {
					$li[k].style.width = "82px";
					$i[k].style.backgroundColor = "rgba(0,0,0,0.3)";
				}
				$i[this.index].style.backgroundColor = "rgba(255,255,255,0.1)";
				this.style.width = "620px";
				this.style.transition = "0.5s";
			}
		}
	}
	imgHover();
});