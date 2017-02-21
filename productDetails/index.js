(function ($) {
	$(function () {

		
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
		
		// 																																放大镜
		var index = 0;
		$('.smallImgList li img').mouseenter(function () {
			$('.smallImgList li img').removeClass('active');
			$(this).addClass('active');
			$('#middleImg').attr('src',$(this).attr('src'));
			$('#hideLarge img').attr('src',$(this).attr('src'));
			$('#hideLarge1 img').attr('src',$(this).attr('src'));
			index = $(this).index();
		})
		
		$('.details-good .left .top').mouseenter(function () {
			$('#zoom').css({display:'block'});
			$('#hideLarge').css({display:'block'});
		})
		$('.details-good .left .top').mouseleave(function () {
			$('#zoom').css({display:'none'});
			$('#hideLarge').css({display:'none'});
		})
		
		var oDis = getOffset($('.details-good .left .top')[0]);
		$('.details-good .left .top').mousemove(function (ev) {
			var ev = ev || window.event,
			iL = ev.pageX - oDis.left - $('#zoom').width()/2,
			iT = ev.pageY - oDis.top - $('#zoom').height()/2;
			console.log(oDis.top)
			// 范围判断
			if(iL < 0) {
				iL = 0;
			}
			if(iT < 0) {
				iT = 0;
			}
			if(iL > $(this).width() - $('#zoom').width()) {
				iL = $(this).width() - $('#zoom').width();
			}
			if(iT > $(this).height() - $('#zoom').height()) {
				iT = $(this).height() - $('#zoom').height();
			}
			
			$('#zoom').css({left:iL,top:iT,});
			$('#hideLarge img').css({left:-2*iL,top:-2*iT,});
				
		})

			// 循环获取元素距离文档左侧和顶部的距离
			function getOffset(obj) {
				var oDis = {left: 0, top: 0};
		
				do{
					oDis.left += obj.offsetLeft;
					oDis.top  += obj.offsetTop;
					obj = obj.offsetParent;
				}while(obj);
		
				return oDis;
			}
		
		
		
		// 																														隐藏的轮播图
		
		$('.details-good .left .top').click(function () {
			$('#hideLarge').css({display:'none'});
			$('#hideLarge1').css({border: '1px solid #333333'})
			$('#hideLarge1').stop(true).animate({
				width:550,
				height:550,
				left:380,
				top:0,
				opacity:1,
			})
		})
		$('#hideI3').click(function () {
			$('#hideLarge1').css({border: 'none'})
			$('#hideLarge1').stop(true).animate({
				width:360,
				height:360,
				left:0,
				top:0,
				opacity:0,
			})
		})
		
		$('#hideI1').click(function () {
			index--;
			if (index < 0) {
				index = 4;
			}
			$('#hideLarge1 img').attr('src',$('.smallImgList li img').eq(index).attr('src'));
		})
		$('#hideI2').click(function () {
			index++;
			if (index > 4) {
				index = 0;
			}
			$('#hideLarge1 img').attr('src',$('.smallImgList li img').eq(index).attr('src'));
		})
		
		
		//  右下角返回顶部
		$('#right-backtop').click(function () {
			$('html,body').animate({scrollTop:0})
		})
		
		// 商品详情选项卡
		$('#headList li').click(function () {
			$('#headList li').removeClass('active')
			$(this).addClass('active');
			$('#contentList .hide').removeClass('active1');
			$($('#contentList .hide').eq($(this).index())).addClass('active1');
		})
		
		
		// 商品数量加减
		var goodNum = Number($('#goodNum').val());
		if (goodNum >= 1) {
			$('#jianhao').click(function () {
				goodNum--;
				if (goodNum === 0) {goodNum = 1}
				$('#goodNum').attr('value',goodNum);
			})
			$('#jiahao').click(function () {
				goodNum++;
				$('#goodNum').attr('value',goodNum);
			})
		}
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
		$('#adddd').click(function () {
			
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
		
		
		
		
		
		
		
		
		
		
		
		
		
	})
})(jQuery);
