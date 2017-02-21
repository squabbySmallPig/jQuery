(function ($) {
	$(function () {
		//  										显示登录账号
		if ($.cookie('registerUser') != undefined) {
				var user = JSON.parse($.cookie('registerUser'));
				var userName = user.name;
				$('.login').html(''+ userName +'' + " 欢迎您!<a id='indexOut' href='index.html' style='color:red'> [退出]</a>");
				$('.user-info').html(''+ userName + '' + '欢迎您！');
		}else{
			$('.login').html("<a id='indexUser' href='../login/index.html'>您好，请登录</a><a href='../register/index.html'>免费注册</a>");			
			$('.user-info').html('<a href="../login/index.html">您好，请登录</a>');
		}
		//                                           退出登录清空cookie
		$('#indexOut').click(function () {
			if ($.cookie('registerUser') != undefined) {
				$.cookie('registerUser','',{expires:-1,path:'/'})
			}
			if ($.cookie('goods-count') != undefined) {
				$.cookie('goods-count','',{expires:-1,path:'/'})
			}
			if ($.cookie('goods') != undefined) {
				$.cookie('goods','',{expires:-1,path:'/'})
			}
		})
		
		//                                                               购物车账单
		$('.my-cart').hover(function () {
			
			if ($.cookie('goods') != undefined && $.cookie('goods-count') != 0) {
				$('.my-cart .goods-list').css({display:'none'});
				$('.my-cart .money,.my-cart #giveMoney').css({display:'block'});
			}else{
				$('.my-cart .goods-list').css({display:'block'});
				$('.my-cart .money,.my-cart #giveMoney').css({display:'none'});
			}
			$('#newgoods-list').html('');
			var aGoods = JSON.parse($.cookie('goods'));
			var money = 0;
			aGoods.forEach(function (v) {
				money += parseFloat(v.price)*v.num.toFixed(2);
				var oLi = $('<li><img src='+ v.url +'/><a href="javascript:;">'+ v.title +'</a><span>'+ v.price + ' × ' + '<em>'+ v.num +'</em></span></li>');
				$('#newgoods-list').append(oLi);
			});
			$('#money').html(''+ money.toFixed(2) + '元' +'')
		})
		$('#giveMoney').click(function () {
			window.location.href = '../goods-cart/index.html';
		})
		
		//                                                          右侧购物车数量显示
		if ($.cookie('goods-count') != undefined) {
			
			goodsCount = JSON.parse($.cookie('goods-count'));
			aGoodsCount = Number(goodsCount);
			$('#goods-count,#cartAlertNum').html(aGoodsCount); 
		
		}
		
		//  右下角返回顶部
		$('#right-backtop').click(function () {
			$('html,body').animate({scrollTop:0})
		})
		
		// 搜索框跨域
		$('#dp').click(function () {
			if ($('#searchbb').html() === '宝贝') {		
				$('#dp').html('宝贝');
				$('#searchbb').html('店铺');
			}else{
				$('#dp').html('店铺');
				$('#searchbb').html('宝贝');
			}
		})
		$('#searchbox').bind('input propertychange', function() {
			$('#searchlist').html('')
   			$.getJSON('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+ $(this).val() +'&json=1&p=3&sid=1451_21095_17001_22035_20930&bs=jquery%20%E7%99%BE%E5%BA%A6%E8%B7%A8%E5%9F%9F&pbs=jquery%20%E7%99%BE%E5%BA%A6%E8%B7%A8%E5%9F%9F&csor=10&pwd=111111111&cb=?&_=1487036214786',function (data) {
   				$(data.g).each(function (v,k) {
   					var oLi = $('<li>' + k.q + '</li>');
   					oLi.addClass('active');
   					$('#searchlist').append(oLi);
   				})
   				$('#searchlist li').click(function () {
					$('#searchbox').val(''+ $(this).text() +'');
					$('#searchlist').html('');
				})
   			})
		});
		
	
	
	
	//     																														 显示更多选项
		$('#moreBtn,#moreBtn1').mouseenter(function () {
			$('.goodsDl').css({
				borderBottom:'1px solid red'
			})
		}) 
		$('#moreBtn,#moreBtn1').mouseleave(function () {
			$('.goodsDl').css({
				borderBottom:'1px solid #e6e6e6'
			})
		}) 	
	
		$('#moreBtn').click(function () {
			$(this).toggle();
			$('#moreBtn1').toggle();
			$('.hideBox').stop(true).animate({
				height:200
			})
		})
		$('#moreBtn1').click(function () {
			$(this).toggle();
			$('#moreBtn').toggle();
			$('.hideBox').stop(true).animate({
				height:0
			})
		})
		
		$('.moreChange').click(function () {
			$(this).siblings().children('input').toggle();
			$(this).siblings('div').toggle();
		})
		$('.hideDD .no,.hideDD .yes').click(function () {
			$(this).parent().siblings().children('input').toggle();
			$(this).parent().toggle();
		})
		
	//     选择价格范围
	$('.changePrice input').focus(function () {
		$(this).parent().css({background:'#fff'});
		$(this).siblings('a').css({opacity:1})
	})
	$('#changePriceBtn').click(function () {
		$(this).parent().css({background:'#f5f5f5'});
		$(this).css({opacity:0})
	})
		
	$('.changePrice input').blur(function () {
		$(this).parent().css({background:'#f5f5f5'});
		$('#changePriceBtn').css({opacity:0})
	})	
		
		
		
		$('.goodsListMain li img').mouseenter(function () {
			$(this).parent().children('.div1').css({display:'none'});
			$(this).parent().children('.div2').css({display:'block'});
		})
		$('.goodsListMain li img').mouseleave(function () {
			$(this).parent().children('.div1').css({display:'block'});
			$(this).parent().children('.div2').css({display:'none'});
		})

		
		
		
		
		
		



	// 购物车本页面刷新(cookie)
		
		var goodsCount,aGoodsCount;
		
		if ($.cookie('goods-count') != undefined) {
			
			goodsCount = JSON.parse($.cookie('goods-count'));
			aGoodsCount = Number(goodsCount);
			$('#goods-count,#cartAlertNum').html(aGoodsCount); 
			var aGoods = JSON.parse($.cookie('goods'));
			var money = 0;
			aGoods.forEach(function (v) {
				money += parseFloat(v.price)*v.num.toFixed(2);
				var oLi = $('<li><img src='+ v.url +'/><a href="javascript:;">'+ v.title +'</a><span>'+ v.price + ' × ' + '<em>'+ v.num +'</em></span></li>');
				$('#newgoods-list').append(oLi);
			});
			$('#cartAlertMoney').html(''+ money.toFixed(2) +'')
		}else{
			
			aGoodsCount = 0;
			$('#goods-count').html(aGoodsCount); 
		}
		$('.goodsListMain .a1').click(function () {
			
			if ($.cookie('registerUser') == undefined && $.cookie('registerUser') == null) {
				$('#alert,#largeHide').css({display:'block'});
			}else{
				$('#cartAlert').css({display:'block'});
				aGoodsCount++;
				$('.my-cart .goods-list').css({display:'none'});
				var dataPrice = $(this).attr('data-price'),
					dataId    = $(this).attr('data-id'),
					dataUrl   = $(this).attr('data-url'),
					dataTitle = $(this).attr('data-title'),
					dataNum   = 1;
				var aGoods = $.cookie('goods');
				if(aGoods === undefined) {
					var aGoods = []; // aGoods相当于购物车
				}else{
					aGoods = JSON.parse(aGoods);
					
				}
				var isExist = false; // 假设该商品不存在
				aGoods.forEach(function (v) {
					if(v.id == dataId) {
						v.num++;
						isExist = true;
					}
				});
				if(isExist === false) {
					var oGoods = {
						id: dataId,
						title: dataTitle,
						url: dataUrl,
						price: dataPrice,
						num: dataNum
					};
					aGoods.push(oGoods);
				}
				// 将数据添加到cookie中
				$.cookie('goods', JSON.stringify(aGoods), {path:'/',expires:1});
				$.cookie('goods-count',JSON.stringify(aGoodsCount),{path:'/',expires:1});
				goodsCount = JSON.parse($.cookie('goods-count'));
				aGoodsCount = Number(goodsCount);
				$('#goods-count,#cartAlertNum').html(aGoodsCount); 
				// 购物车弹出窗总价
				var aGoods = JSON.parse($.cookie('goods'));
				var money = 0;
				aGoods.forEach(function (v) {
					money += parseFloat(v.price)*v.num.toFixed(2);
					var oLi = $('<li><img src='+ v.url +'/><a href="javascript:;">'+ v.title +'</a><span>'+ v.price + ' × ' + '<em>'+ v.num +'</em></span></li>');
					$('#newgoods-list').append(oLi);
				});
				$('#cartAlertMoney').html(''+ money.toFixed(2) + '元' +'')
			}
			
			
		})
		
		//   购物车弹窗关闭
		$('#cartAlertOut,#cartAlertOut1').click(function () {
			$('#cartAlert').css({display:'none'});
		})
		
		//   页面切换  
		
		$('.moye,.span2').click(function () {
			$('html,body').animate({scrollTop:512})
			$('#second').fadeIn();
			$('#first').fadeOut();
			$('.span1').removeClass('active');
			$('.span2').addClass('active');
		})
		$('.shouye,.span1').click(function () {
			$('#second').fadeOut();
			$('#first').fadeIn();
			$('html,body').animate({scrollTop:512});
			$('.span1').addClass('active');
			$('.span2').removeClass('active');
		})
		
		//																浏览记录
		var index = 2;
		var iPre = 1200;
		$('#lastLeftBtn').click(function () {
			console.log(index)
			index--;
			if (index < 0) {
				$('.gmain4 ul').css({left:-3600});
				index = 2;
				$('.gmain4 ul').stop(true).animate({
					left:-iPre*index
				})
			}else {
				$('.gmain4 ul').stop(true).animate({
					left:-iPre*index
				},function () {
					if (index === 0) {
						$('.gmain4 ul').css({left:-3600});
						index = 3;
					}
				})
				
			}
			
		})
		
		$('#lastRightBtn').click(function () {
			index++;
			if (index > 4) {
				$('.gmain4 ul').css({left:-1200});
				index =2;
				$('.gmain4 ul').stop(true).animate({
					left:-iPre*index
				})
			}else {
				$('.gmain4 ul').stop(true).animate({
					left:-iPre*index
				},function () {
					if (index === 4) {
						$('.gmain4 ul').css({left:-1200});
						index = 1;
					}
				})
				
			}
			
		})
		var aaa = null;
		function autoMove() {
			aaa = setInterval(function () {
				$('#lastLeftBtn').click()
			},1000)
		}
		autoMove();
		$('.gmain4').mouseenter(function () {
			clearInterval(aaa);
		})
		$('.gmain4').mouseleave(function () {
			autoMove();
		})
		
		
		
		
	})
})(jQuery);
