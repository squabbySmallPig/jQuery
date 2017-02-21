
(function ($) {
	$(function () {
		// 获取用户名cookie显示到页面
		
		
		
		
		
		
		
		
		
		// 轮播图
		$('.banner .bottom').hover(function () {
			$('#left,#right').stop(true).show(100);
		},function () {
			$('#left,#right').stop(true).hide(100);
		})
		var abc = true;// 来回自动轮播判断按钮
		var index = 2;
		var iTimer = null;
		// 自动轮播
		function autoMove() {	
			iTimer = setInterval(function () {
				if (abc) {
					$('#right').click();
					if (index === 4) {abc = false}
				}else{
					$('#left').click();
					if (index === 0) {abc = true}
				}
			},1500)
		}
		autoMove();
		$('.banner .bottom').hover(function () {clearInterval(iTimer)} , function () {autoMove()})
		$('#left').click(function () {
			abc = false;
			index--;
			move();
		})
		$('#right').click(function () {
			abc = true;
			index++;
			move();
		})
		$('#banner-btn a').mouseenter(function () {
			index = $(this).index();
			move();
		})
		// 运动过程函数
		function move() {
			index < 0 ? index = 4 : index;
			index > 4 ? index = 0 : index;
			$('.banner-list li').fadeOut(400)
			$('#banner-btn a').removeClass('active').eq(index).addClass('active');
			$($('.banner-list li')[index]).stop(1,1).fadeIn(400)
		}
		// banner4轮播
		var iIndex4 = 1;
		var iPre = 339;
		var iTimer4 = null;
		function autoMove4() {
			iTimer4 = setInterval(function () {
				$('#banner4-left').click();
			},2000)
		}
		autoMove4();
		$('.banner4').mouseenter(function () {
			clearInterval(iTimer4);
			$('#banner4-left,#banner4-right').show();
		})
		$('.banner4').mouseleave(function () {
			autoMove4();
			$('#banner4-left,#banner4-right').hide();
		})
		$('#banner4-left').click(function () {
			iIndex4++;
			if (iIndex4 > 6) {
				$('#banner4-list1').css('left','-339px');
				$('#banner4-list2').css('left','-339px');
				iIndex4 = 2;
				$('#banner4-list1').stop(true).animate({left:''+ -iIndex4*iPre +'px'});
				$('#banner4-list2').stop(true).animate({left:''+ -iIndex4*iPre +'px'});
			}else{
				$('#banner4-list1').stop(true).animate({left:''+ -iIndex4*iPre +'px'})
				$('#banner4-list2').stop(true).animate({left:''+ -iIndex4*iPre +'px'})
			}
		})
		$('#banner4-right').click(function () {
			iIndex4--;
			if (iIndex4 < 0) {
				$('#banner4-list1').css('left','-1695px');
				$('#banner4-list2').css('left','-1695px');
				iIndex4 = 5;
				$('#banner4-list1').stop(true).animate({left:''+ -iIndex4*iPre +'px'});
				$('#banner4-list2').stop(true).animate({left:''+ -iIndex4*iPre +'px'});
			}else{
				$('#banner4-list1').stop(true).animate({left:''+ -iIndex4*iPre +'px'})
				$('#banner4-list2').stop(true).animate({left:''+ -iIndex4*iPre +'px'})
			}
		})
		// main4 选项卡
		$('.main4 .subnav ul li').hover(function () {
			$('.main4 .subnav ul li').removeClass('active');
			$(this).addClass('active');
			if ($('.main4 .subnav ul li').index(this) === 1) {
				$('.main4 .main').removeClass('active');
				$('.main4 .hide1').addClass('active');
			}
			if ($('.main4 .subnav ul li').index(this) === 2) {
				$('.main4 .main').removeClass('active');
				$('.main4 .hide2').addClass('active');
			}
			if ($('.main4 .subnav ul li').index(this) === 3) {
				$('.main4 .main').removeClass('active');
				$('.main4 .hide3').addClass('active');
			}
			if ($('.main4 .subnav ul li').index(this) === 0) {
				$('.main4 .main').removeClass('active');
				$('.main4 .hide0').addClass('active');
			}
		})
		
		$('.main4 .hide li').mouseenter(function () {
			$('.main4 .hide li').stop(true).animate({opacity:.4},300);
			$(this).stop(true).animate({opacity:1},300);
		})
		$('.main4 .hide li').mouseleave(function () {
			$('.main4 .hide li').stop(true).animate({opacity:1},300);
		})
		
		
		
		// main5轮播图
		var iIndex5 = 1;
		var iPre5 = 339;
		var iTimer5 = null;
		function autoMove5() {
			iTimer5 = setInterval(function () {
				$('#banner5-left').click();
			},2000)
		}
		autoMove5();
		$('.banner5').mouseenter(function () {
			clearInterval(iTimer5);
			$('#banner5-left,#banner5-right').show();
		})
		$('.banner5').mouseleave(function () {
			autoMove5();
			$('#banner5-left,#banner5-right').hide();
		})
		$('#banner5-left').click(function () {
			iIndex5++;
			if (iIndex5 > 6) {
				$('#banner5-list1').css('left','-339px');
				$('#banner5-list2').css('left','-339px');
				iIndex5 = 2;
				$('#banner5-list1').stop(true).animate({left:''+ -iIndex5*iPre5 +'px'});
				$('#banner5-list2').stop(true).animate({left:''+ -iIndex5*iPre5 +'px'});
			}else{
				$('#banner5-list1').stop(true).animate({left:''+ -iIndex5*iPre5 +'px'})
				$('#banner5-list2').stop(true).animate({left:''+ -iIndex5*iPre5 +'px'})
			}
		})
		$('#banner5-right').click(function () {
			iIndex5--;
			if (iIndex5 < 0) {
				$('#banner5-list1').css('left','-1695px');
				$('#banner5-list2').css('left','-1695px');
				iIndex5 = 5;
				$('#banner5-list1').stop(true).animate({left:''+ -iIndex5*iPre5 +'px'});
				$('#banner5-list2').stop(true).animate({left:''+ -iIndex5*iPre5 +'px'});
			}else{
				$('#banner5-list1').stop(true).animate({left:''+ -iIndex5*iPre5 +'px'})
				$('#banner5-list2').stop(true).animate({left:''+ -iIndex5*iPre5 +'px'})
			}
		})
		// main5 选项卡
		$('.main5 .subnav ul li').hover(function () {
			$('.main5 .subnav ul li').removeClass('active');
			$(this).addClass('active');
			if ($('.main5 .subnav ul li').index(this) === 1) {
				$('.main5 .main').removeClass('active');
				$('.main5 .hide1').addClass('active');
			}
			if ($('.main5 .subnav ul li').index(this) === 2) {
				$('.main5 .main').removeClass('active');
				$('.main5 .hide2').addClass('active');
			}
			if ($('.main5 .subnav ul li').index(this) === 0) {
				$('.main5 .main').removeClass('active');
				$('.main5 .hide0').addClass('active');
			}
		})
		
		$('.main5 .hide li').mouseenter(function () {
			$('.main5 .hide li').stop(true).animate({opacity:.4},300);
			$(this).stop(true).animate({opacity:1},300);
		})
		$('.main5 .hide li').mouseleave(function () {
			$('.main5 .hide li').stop(true).animate({opacity:1},300);
		})
		
		
		
		
		// main6轮播图
		var iIndex6 = 1;
		var iPre6 = 339;
		var iTimer6 = null;
		function autoMove6() {
			iTimer6 = setInterval(function () {
				$('#banner6-left').click();
			},2000)
		}
		autoMove6();
		$('.banner6').mouseenter(function () {
			clearInterval(iTimer6);
			$('#banner6-left,#banner6-right').show();
		})
		$('.banner6').mouseleave(function () {
			autoMove6();
			$('#banner6-left,#banner6-right').hide();
		})
		$('#banner6-left').click(function () {
			iIndex6++;
			if (iIndex6 > 6) {
				$('#banner6-list1').css('left','-339px');
				$('#banner6-list2').css('left','-339px');
				iIndex6 = 2;
				$('#banner6-list1').stop(true).animate({left:''+ -iIndex6*iPre6 +'px'});
				$('#banner6-list2').stop(true).animate({left:''+ -iIndex6*iPre6 +'px'});
			}else{
				$('#banner6-list1').stop(true).animate({left:''+ -iIndex6*iPre6 +'px'})
				$('#banner6-list2').stop(true).animate({left:''+ -iIndex6*iPre6 +'px'})
			}
		})
		$('#banner6-right').click(function () {
			iIndex6--;
			if (iIndex6 < 0) {
				$('#banner6-list1').css('left','-1695px');
				$('#banner6-list2').css('left','-1695px');
				iIndex6 = 5;
				$('#banner6-list1').stop(true).animate({left:''+ -iIndex6*iPre6 +'px'});
				$('#banner6-list2').stop(true).animate({left:''+ -iIndex6*iPre6 +'px'});
			}else{
				$('#banner6-list1').stop(true).animate({left:''+ -iIndex6*iPre6 +'px'})
				$('#banner6-list2').stop(true).animate({left:''+ -iIndex6*iPre6 +'px'})
			}
		})
		// main6选项卡
		$('.main6 .subnav ul li').hover(function () {
			$('.main6 .subnav ul li').removeClass('active');
			$(this).addClass('active');
			if ($('.main6 .subnav ul li').index(this) === 1) {
				$('.main6 .main').removeClass('active');
				$('.main6 .hide1').addClass('active');
			}
			if ($('.main6 .subnav ul li').index(this) === 2) {
				$('.main6 .main').removeClass('active');
				$('.main6 .hide2').addClass('active');
			}
			if ($('.main6 .subnav ul li').index(this) === 0) {
				$('.main6 .main').removeClass('active');
				$('.main6 .hide0').addClass('active');
			}
		})
		
		$('.main6 .hide li').mouseenter(function () {
			$('.main6 .hide li').stop(true).animate({opacity:.4},300);
			$(this).stop(true).animate({opacity:1},300);
		})
		$('.main6 .hide li').mouseleave(function () {
			$('.main6 .hide li').stop(true).animate({opacity:1},300);
		})
		
		
		
		
		// main7轮播
		var iIndex7 = 1;
		var iPre7 = 442;
		var iTimer7 = null;
		function autoMove7() {
			iTimer7 = setInterval(function () {
				$('#banner7-left').click();
			},2000)
		}
		autoMove7();
		$('.banner7').mouseenter(function () {
			clearInterval(iTimer7);
			$('#banner7-left,#banner7-right').show();
		})
		$('.banner7').mouseleave(function () {
			autoMove7();
			$('#banner7-left,#banner7-right').hide();
		})
		$('#banner7-left').click(function () {
			iIndex7++;
			if (iIndex7 > 6) {
				$('#banner7-list1').css('left','-442px');
				$('#banner7-list2').css('left','-442px');
				iIndex7 = 2;
				$('#banner7-list1').stop(true).animate({left:''+ -iIndex7*iPre7 +'px'});
				$('#banner7-list2').stop(true).animate({left:''+ -iIndex7*iPre7 +'px'});
			}else{
				$('#banner7-list1').stop(true).animate({left:''+ -iIndex7*iPre7 +'px'})
				$('#banner7-list2').stop(true).animate({left:''+ -iIndex7*iPre7 +'px'})
			}
		})
		$('#banner7-right').click(function () {
			iIndex7--;
			if (iIndex7 < 0) {
				$('#banner7-list1').css('left','-1695px');
				$('#banner7-list2').css('left','-1695px');
				iIndex7 = 5;
				$('#banner7-list1').stop(true).animate({left:''+ -iIndex7*iPre7 +'px'});
				$('#banner7-list2').stop(true).animate({left:''+ -iIndex7*iPre7 +'px'});
			}else{
				$('#banner7-list1').stop(true).animate({left:''+ -iIndex7*iPre7 +'px'})
				$('#banner7-list2').stop(true).animate({left:''+ -iIndex7*iPre7 +'px'})
			}
		})
		// main7 选项卡
		$('.main7 .subnav ul li').hover(function () {
			$('.main7 .subnav ul li').removeClass('active');
			$(this).addClass('active');
			if ($('.main7 .subnav ul li').index(this) === 1) {
				$('.main7 .main').removeClass('active');
				$('.main7 .hide1').addClass('active');
			}
			if ($('.main7 .subnav ul li').index(this) === 2) {
				$('.main7 .main').removeClass('active');
				$('.main7 .hide2').addClass('active');
			}
			if ($('.main7 .subnav ul li').index(this) === 3) {
				$('.main7 .main').removeClass('active');
				$('.main7 .hide3').addClass('active');
			}
			if ($('.main7 .subnav ul li').index(this) === 0) {
				$('.main7 .main').removeClass('active');
				$('.main7 .hide0').addClass('active');
			}
		})
		
		$('.main7 .hide li').mouseenter(function () {
			$('.main7 .hide li').stop(true).animate({opacity:.4},300);
			$(this).stop(true).animate({opacity:1},300);
		})
		$('.main7 .hide li').mouseleave(function () {
			$('.main7 .hide li').stop(true).animate({opacity:1},300);
		})
		
		
		// main8轮播
		var iIndex8 = 1;
		var iPre8 = 442;
		var iTimer8 = null;
		function autoMove8() {
			iTimer8 = setInterval(function () {
				$('#banner8-left').click();
			},2000)
		}
		autoMove8();
		$('.banner8').mouseenter(function () {
			clearInterval(iTimer8);
			$('#banner8-left,#banner8-right').show();
		})
		$('.banner8').mouseleave(function () {
			autoMove8();
			$('#banner8-left,#banner8-right').hide();
		})
		$('#banner8-left').click(function () {
			iIndex8++;
			if (iIndex8 > 6) {
				$('#banner8-list1').css('left','-442px');
				$('#banner8-list2').css('left','-442px');
				iIndex8 = 2;
				$('#banner8-list1').stop(true).animate({left:''+ -iIndex8*iPre8 +'px'});
				$('#banner8-list2').stop(true).animate({left:''+ -iIndex8*iPre8 +'px'});
			}else{
				$('#banner8-list1').stop(true).animate({left:''+ -iIndex8*iPre8 +'px'})
				$('#banner8-list2').stop(true).animate({left:''+ -iIndex8*iPre8 +'px'})
			}
		})
		$('#banner8-right').click(function () {
			iIndex8--;
			if (iIndex8 < 0) {
				$('#banner8-list1').css('left','-1695px');
				$('#banner8-list2').css('left','-1695px');
				iIndex8 = 5;
				$('#banner8-list1').stop(true).animate({left:''+ -iIndex8*iPre8 +'px'});
				$('#banner8-list2').stop(true).animate({left:''+ -iIndex8*iPre8 +'px'});
			}else{
				$('#banner8-list1').stop(true).animate({left:''+ -iIndex8*iPre7 +'px'})
				$('#banner8-list2').stop(true).animate({left:''+ -iIndex8*iPre7 +'px'})
			}
		})
		// main4 选项卡
		$('.main8 .subnav ul li').hover(function () {
			$('.main8 .subnav ul li').removeClass('active');
			$(this).addClass('active');
			if ($('.main8 .subnav ul li').index(this) === 1) {
				$('.main8 .main').removeClass('active');
				$('.main8 .hide1').addClass('active');
			}
			if ($('.main8 .subnav ul li').index(this) === 2) {
				$('.main8 .main').removeClass('active');
				$('.main8 .hide2').addClass('active');
			}
			if ($('.main8 .subnav ul li').index(this) === 3) {
				$('.main8 .main').removeClass('active');
				$('.main8 .hide3').addClass('active');
			}
			if ($('.main8 .subnav ul li').index(this) === 0) {
				$('.main8 .main').removeClass('active');
				$('.main8 .hide0').addClass('active');
			}
		})
		
		$('.main8 .hide li').mouseenter(function () {
			$('.main8 .hide li').stop(true).animate({opacity:.4},300);
			$(this).stop(true).animate({opacity:1},300);
		})
		$('.main8 .hide li').mouseleave(function () {
			$('.main8 .hide li').stop(true).animate({opacity:1},300);
		})
		
		//                                                                                                 左侧隐藏框
		$(window).scroll(function () {
			if ($(window).scrollTop() >= 850) {
				$('#hide-left').stop(true).animate({height:'441px'},500);
			}else{
				$('#hide-left').stop(true).animate({height:0},500);
			}
		})
		$('#left-backtop,#right-backtop').click(function () {
			$('html,body').animate({scrollTop:0})
		})
		$('#hide1').click(function () {
			$('html,body').animate({scrollTop:850})
		})
		$('#hide2').click(function () {
			$('html,body').animate({scrollTop:1534})
		})
		$('#hide3').click(function () {
			$('html,body').animate({scrollTop:2130})
		})
		$('#hide4').click(function () {
			$('html,body').animate({scrollTop:2762})
		})
		$('#hide5').click(function () {
			$('html,body').animate({scrollTop:3322})
		})
		$('#hide6').click(function () {
			$('html,body').animate({scrollTop:3918})
		})
		$(window).scroll(function () {
			
			if ($('html').scrollTop() >= 850) {
				$('#hide-left .aaaaa').removeClass('active');
				$('#hide1').addClass('active');
			}
			if ($(document).scrollTop() >= 1534) {
				$('#hide-left .aaaaa').removeClass('active');
				$('#hide2').addClass('active');
			}
			if ($(document).scrollTop() >= 2130) {
				$('#hide-left .aaaaa').removeClass('active');
				$('#hide3').addClass('active');
			}
			if ($(document).scrollTop() >= 2762) {
				$('#hide-left .aaaaa').removeClass('active');
				$('#hide4').addClass('active');
			}
			if ($(document).scrollTop() >= 3322) {
				$('#hide-left .aaaaa').removeClass('active');
				$('#hide5').addClass('active');
			}
			if ($(document).scrollTop() >= 3918) {
				$('#hide-left .aaaaa').removeClass('active');
				$('#hide6').addClass('active');
			}
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
		$('.main4 .hide1 .add').click(function () {
			
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
		
		
		
		$('.my-cart').hover(function () {
			
			if ($.cookie('goods') != undefined && $.cookie('goods-count') != 0) {
				$('.my-cart .goods-list').css({display:'none'});
				$('.my-cart .money,.my-cart #giveMoney').css({display:'block'});
			}else{
				$('.my-cart .money').css({display:'none'});
				$('.my-cart #giveMoney').css({display:'none'});
				$('.my-cart .goods-list').css({display:'block'});
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
		$('#giveMoney,#gowuche').click(function () {
			window.location.href = 'goods-cart/index.html';
		})
		



		if ($.cookie('registerUser') != undefined) {
				var user = JSON.parse($.cookie('registerUser'));
				var userName = user.name;
				$('.login').html(''+ userName +'' + " 欢迎您!<a id='indexOut' href='index.html' style='color:red'> [退出]</a>");
				$('.user-info').html(''+ userName + '' + '欢迎您！');
		}else{
			$('.login').html("<a id='indexUser' href='login/index.html'>您好，请登录</a><a href='register/index.html'>免费注册</a>");			
			$('.user-info').html('<a href="../login/index.html">您好，请登录</a>');
		}
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
		// 																						购物车弹出窗关闭
		$('#alertOut').click(function () {
			$('#alert,#largeHide').css({display:'none'});
		})
		
		$('#cartAlertOut,#cartAlertOut1').click(function () {
			$('#cartAlert').css({display:'none'});
		})
		
		
		
		
		$('#sousuo').click(function () {
			window.location.href = '../goods-list/index.html'
		})
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	})
})(jQuery);
