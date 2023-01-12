$(function(){
    var ua = navigator.userAgent;
    if((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){
        $('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1">');
    } else {
        $('head').prepend('<meta name="viewport" content="width=1150,user-scalable=no" >');
    }
});

$(document).ready(function(){
    //デバイス判定（タッチが有効か否か）
    var isTouchDevice = (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
    //デバイス判定によるイベントの決定
    var eventType = (isTouchDevice) ? 'touchend' : 'click';
    $('イベントを追加する要素').on(eventType, ファンクション名);
});



$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});

$('.rank_slider').slick({
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	touchThreshold:100,
	mobileFirst: true,
	swipeToSlide:true,
	prevArrow: false,
	nextArrow: false,
	responsive: [
		{
		breakpoint: 1120,
		settings: {
			centerMode: false,
			//centerPadding:'10%',
			slidesToShow: 5,
			dots: false,
			prevArrow: '<button class="slide-arrow prev-arrow"></button>',
			nextArrow: '<button class="slide-arrow next-arrow"></button>'
		}
	},
		{
		breakpoint: 769,
		settings: {
			centerMode: false,
			//centerPadding:'10%',
			slidesToShow: 4,
			dots: false,
			prevArrow: '<button class="slide-arrow prev-arrow"></button>',
			nextArrow: '<button class="slide-arrow next-arrow"></button>'
		}
	},
		{
		breakpoint: 640,
		settings: {
			centerMode: false,
			slidesToShow: 3,
			dots: false,
			prevArrow: '<button class="slide-arrow prev-arrow"></button>',
			nextArrow: '<button class="slide-arrow next-arrow"></button>'
		}
	}
]
});

$('.recommend_slider').slick({
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	touchThreshold:100,
	mobileFirst: true,
	swipeToSlide:true,
	prevArrow: false,
	nextArrow: false,
	responsive: [
		{
		breakpoint: 1120,
		settings: {
			centerMode: false,
			//centerPadding:'10%',
			slidesToShow: 4,
			dots: false,
			prevArrow: '<button class="slide-arrow prev-arrow"></button>',
			nextArrow: '<button class="slide-arrow next-arrow"></button>'
		}
	},
		{
		breakpoint: 769,
		settings: {
			centerMode: false,
			//centerPadding:'10%',
			slidesToShow: 4,
			dots: false,
			prevArrow: '<button class="slide-arrow prev-arrow"></button>',
			nextArrow: '<button class="slide-arrow next-arrow"></button>'
		}
	},
		{
		breakpoint: 640,
		settings: {
			centerMode: false,
			slidesToShow: 3,
			dots: false,
			prevArrow: '<button class="slide-arrow prev-arrow"></button>',
			nextArrow: '<button class="slide-arrow next-arrow"></button>'
		}
	}
]
});
