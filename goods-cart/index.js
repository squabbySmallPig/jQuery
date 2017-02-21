(function ($) {
	$(function () {
		var goodsCount,aGoodsCount,money=0;
		
		if ($.cookie('goods-count') != undefined) {
			goodsCount = JSON.parse($.cookie('goods-count'));
			aGoodsCount = Number(goodsCount);
			$('#goodsSum').html(aGoodsCount); 
			$.cookie('goods-count',JSON.stringify(aGoodsCount),{expires:1,path:'/'});
		}else{		
			aGoodsCount = 0;
			$('#goodsSum').html(aGoodsCount); 
		}
		if ($.cookie('goods') != undefined) {

			var aGoods = JSON.parse($.cookie('goods'));
			aGoods.forEach(function (v) {
				var oLi = $('<li><input data-id='+ v.id +' type="checkbox" checked="checked" /><img src='+ v.url +'/><span>'+ v.title +'</span><span>'+ v.num +'</span><span>'+ v.price + '元' +'</span><span>'+ parseFloat(v.price)*v.num +'</span><i data-id='+ v.id +' class="iconfont">&#xe61b;</i></li>');
				$('.cart-main .cart-list').append(oLi);
			});
			$(aGoods).each(function (v,k) {
				var a = parseFloat(k.price)*k.num;
				money += a;
			})
			var aaaa = aGoods.length;
			$('#moneySum').html(money);
			$('#category').html(aGoods.length);
		}

		
		$('.cart-main .cart-list li i').click(function () {
			var aGoods = JSON.parse($.cookie('goods'));
			// 对商品进行循环，对指定的商品移除
			for(var i = 0; i < aGoods.length; i++) {
				if(aGoods[i].id === $(this).attr('data-id')) {
					goodsCount = JSON.parse($.cookie('goods-count'));
					aGoodsCount = Number(goodsCount);
					aGoodsCount -= Number(aGoods[i].num);
					$.cookie('goods-count',JSON.stringify(aGoodsCount),{expires:1,path:'/'});
					$('#goodsSum').html(aGoodsCount);
					
					
					aGoods.splice(i, 1);
					$('#category').html(aGoods.length);
					money = 0;
					$(aGoods).each(function (v,k) {
						var a = parseFloat(k.price)*k.num;
						money += a;
					})
					$('#moneySum').html(money);
					
					//将删除后的数组再存放到cookie里面去
					$.cookie('goods', JSON.stringify(aGoods),{expires:1,path:'/'});
					// 移除节点
					$(this.parentNode).animate({height:0,opacity:0},500,function () {
			 			$(this).remove();	
			 	})
					break;
				}
			}
		})
		$('.cart-main .cart-list li input').click(function () {
			if ($(this).prop('checked') === false) {
				var aGoods = JSON.parse($.cookie('goods'));
				// 对商品进行循环，对指定的商品移除
				for(var i = 0; i < aGoods.length; i++) {
					if(aGoods[i].id === $(this).attr('data-id')) {
						
						money -= Number(aGoods[i].num)*Number(aGoods[i].price);
						aGoodsCount -= Number(aGoods[i].num);
						$('#goodsSum').html(aGoodsCount);
						aaaa--;
						$('#category').html(aaaa);
						$('#moneySum').html(money);
						break;
					}
				}
			}else{
				var aGoods = JSON.parse($.cookie('goods'));
				// 对商品进行循环，对指定的商品移除
				for(var i = 0; i < aGoods.length; i++) {
					if(aGoods[i].id === $(this).attr('data-id')) {
						money += Number(aGoods[i].num)*Number(aGoods[i].price);
						aGoodsCount += Number(aGoods[i].num);
						$('#goodsSum').html(aGoodsCount);
						aaaa++;
						$('#category').html(aaaa);
						$('#moneySum').html(money);
						break;
					}
				}
			}
		})
		$('#cartListBottom').click(function () {
			if ($('#cartListBottom').prop('checked') === true) {
				var money = 0;
				$(aGoods).each(function (v,k) {
					var a = parseFloat(k.price)*k.num;
					money += a;
				})
				$('#moneySum').html(money);
				$('#category').html(aGoods.length);
				if ($.cookie('goods-count') != undefined) {
					goodsCount = JSON.parse($.cookie('goods-count'));
					aGoodsCount = Number(goodsCount);
				}
				$('#goodsSum').html(aGoodsCount);
				$('.cart-main input').prop('checked','checked');
			}else{
				$('#moneySum').html(0);
				$('#category').html(0);
				$('#goodsSum').html(0);
				$('.cart-main input').removeAttr("checked");
			}
		})
		$('#cartListHead').click(function () {
			if ($('#cartListHead').prop('checked') === true) {
				
				var money = 0;
				$(aGoods).each(function (v,k) {
					var a = parseFloat(k.price)*k.num;
					money += a;
				})
				$('#moneySum').html(money);
				$('#category').html(aGoods.length);
				if ($.cookie('goods-count') != undefined) {
					goodsCount = JSON.parse($.cookie('goods-count'));
					aGoodsCount = Number(goodsCount);
				}
				$('#goodsSum').html(aGoodsCount);
				$('.cart-main input').prop('checked','checked');
			}else{
				$('#moneySum').html(0);
				$('#category').html(0);
				$('#goodsSum').html(0);
				$('.cart-main input').removeAttr("checked");
			}
		})
		$('.cart-list input').click(function () {
				var btn = false;
				var MMM = $('.cart-list input')[0];
				for (var i = 1; i < MMM.length; i++) {
					if (MMM[i].getAttribute('checked') != 'checked') {
						btn = false;
						break;
					}else{
						btn = true;
					}
				}
			if (!btn) {
				$('#cartListHead,#cartListBottom').removeAttr("checked");
			}



		})
		if ($('#cartListBottom').prop('checked') === true || $('#cartListHead').prop('checked') === true) {
			$('#cartListDel').click(function () {
				$('.cart-main .cart-list').html('');
				$('#category,#goodsSum,#moneySum').html(0);
				$.cookie('goods-count','',{expires:-1,path:'/'});
				$.cookie('goods','',{expires:-1,path:'/'})
			})
		}
		
		if ($.cookie('registerUser') != undefined) {
				var user = JSON.parse($.cookie('registerUser'));
				var userName = user.name;
				$('.login').html(''+ userName +'' + " 欢迎您!<a id='indexOut' href='../index.html' style='color:red'> [退出]</a>");
		}else{
			$('.login').html("<a id='indexUser' href='../login/index.html'>您好，请登录</a><a href='../register/index.html'>免费注册</a>");			
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
		
//		$('#lastGiveMoney').click(function () {
//			$('.cart-list input').each(function (v,k) {
//				
//				if($(k).is(":checked") === false){
//					
//					aGoods.splice(v,1);
//					console.log(v)
//				}	
//			})
//			var aaaa = 0;
//			$(aGoods).each(function (v,k) {
//				aaaa += Number(k.num);
//			})
//				$.cookie('goods-count',JSON.stringify(aaaa),{expires:1,path:'/'});
//				$.cookie('goods',JSON.stringify(aGoods),{expires:1,path:'/'});
//		
//		})



		var aGoods1 = [];
		$('#lastGiveMoney').click(function () {
			$('.cart-list input').each(function (v,k) {
				if($(k).is(":checked") === false){	
					aGoods1.push(aGoods[v]);
					aGoods.splice(v,1);
				}	
			})
			var aaaa = 0;
			$(aGoods).each(function (v,k) {
				aaaa += Number(k.num);
			})
			
			var aGoodsCount1 = 0;
			$(aGoods1).each(function (v,k) {
				aGoodsCount1 += Number(k.num);
			})
			$.cookie('goods-count1',JSON.stringify(aGoodsCount1),{expires:5,path:'/'});
			$.cookie('goods1',JSON.stringify(aGoods1),{expires:5,path:'/'});
			
			$.cookie('goods-count',JSON.stringify(aaaa),{expires:1,path:'/'});
			$.cookie('goods',JSON.stringify(aGoods),{expires:1,path:'/'});
			window.location.href = '../payment/index.html';
		
		})
		
		
		
		
	})
})(jQuery);
