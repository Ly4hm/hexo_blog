[200~
	2
	3
	4
	5
	6
	7
	8
	9
	10
	11
	12
	13
	14
	15
	16
	17
	18
	19
	20
	21
	22
	23
	24
	25
	26
	27
	28
	29
	30
	31
	32
	33
	34
	35
	36
	37
	38
	39
	40
	41
	42
	43
	(function($){
		    $.fn.snow = function(options){
			        var $flake = $('').css({'position': 'absolute','z-index':'9999', 'top': '-50px'}).html('❄'),
				        documentHeight 	= $(document).height(),
				        documentWidth	= $(document).width(),
				        defaults = {
						        minSize		: 10,
						        maxSize		: 20,
						        newOn		: 1000,
						        flakeColor	: "#AFDAEF" 
						    },
				        options	= $.extend({}, defaults, options);
			        var interval= setInterval( function(){
					    var startPositionLeft = Math.random() * documentWidth - 100,
						    startOpacity = 0.5 + Math.random(),
						    sizeFlake = options.minSize + Math.random() * options.maxSize,
						    endPositionTop = documentHeight - 200,
						    endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
						    durationFall = documentHeight * 10 + Math.random() * 5000;
					    $flake.clone().appendTo('body').css({
						            left: startPositionLeft,
						            opacity: startOpacity,
						            'font-size': sizeFlake,
						            color: options.flakeColor
						        }).animate({
								        top: endPositionTop,
								        left: endPositionLeft,
								        opacity: 0.2
								    },durationFall,'linear',function(){
									            $(this).remove()
									        });
					    }, options.newOn);
			        };
	})(jQuery);
$(function(){
	    $.fn.snow({ 
		            minSize: 5, /* 定义雪花最小尺寸 */
		            maxSize: 50,/* 定义雪花最大尺寸 */
		            newOn: 300  /* 定义密集程度，数字越小越密集 */
		        });
});
