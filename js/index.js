$(function () {
	function slidActive() {
		var timer01;
		var q_li = $("#banner-slider ul li");
		var q_spanL = $(".slider_left");
		var q_spanR = $(".slider_right");
		var q_oli = $("#banner ol li");
		var i = 0;
		timer01 = setInterval(active,2000);
		$("#banner-slider ul").mouseenter(function() {
			clearInterval(timer01);
		})
		$("#banner-slider ul").mouseleave(function() {
			timer01 = setInterval(active,2000)
		})
		q_spanL.click(function() {
				i -= 1;
				if (i < 0) {
					i = 5;
				}
				$(".show").toggleClass("show");
				q_li.eq(i).toggleClass("show");
				$(".ora").toggleClass("ora");
				q_oli.eq(i).toggleClass("ora");
				timer01 = setInterval(active,2000)
		})
		q_spanR.click(function() {
				i += 1;
				if (i > 5) {
					i = 0;
				}
				$(".show").toggleClass("show");
				q_li.eq(i).toggleClass("show");
				timer01 = setInterval(active,2000)
		})
		function active() {
			i = $(".show").index();
			$(".show").animate({opacity : "0"},1000);
			$(".ora").toggleClass("ora");
			if (i >= 5) {
				i = -1;
			}
			q_oli.eq(i + 1).toggleClass("ora");
			q_li.eq(i + 1).animate({opacity : "1"},1000);
			if ($(".show").css("opacity") == 0) {
				$(".show").toggleClass("show");
				if (i < 5) {
					i++;
				}else {
					i = 0;
				}
				q_li.eq(i).toggleClass("show");
			}
		}
	}
	slidActive();
})