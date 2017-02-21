(function ($) {
	$(function () {
		// 账单读取
		if ($.cookie('goods-count') != undefined) {
			goodsCount = JSON.parse($.cookie('goods-count'));
			aGoodsCount = Number(goodsCount);
			$('.bottomPay .span5').html(aGoodsCount); 
		}
		var money = 0;
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
			$('.bottomPayLast .span11,.bottomPayLast .span14').html(money);
			$('.bottomPay .p1 .span2').html(aGoods.length);
		}
		
		
		
		
		//    显示用户名
		if ($.cookie('registerUser') != undefined) {
				var user = JSON.parse($.cookie('registerUser'));
				var userName = user.name;
				$('.login').html(''+ userName +'' + " 欢迎您!<a id='indexOut' href='index.html' style='color:red'> [退出]</a>");
		}else{
			$('.login').html("<a id='indexUser' href='../login/index.html'>您好，请登录</a><a href='../register/index.html'>免费注册</a>");			
		}
		//     退出登录，清空cookie
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
		
		
		
	
		
		//   																						增加收货地址
		$('#yesBtn').click(function () {
			var aa = $('#zsxm').val(),
				bb = $("#area1").find("option:selected").text(),
				cc = $("#area2").find("option:selected").text(),
				dd = $("#area3").find("option:selected").text(),
				ee = $('#jddz').val(),
				ff = $('#sjhm').val();
			var oLi = $('<li><p class="p1">收货人信息<a href="javascript:;" class="newAdd">[新增收货地址]</a><a href="javascript:;" class="newChange">[修改]</a></p><div class="address"><input type="radio" name="changeAddress" /><span class="span3">'+ aa +'</span><span class="span1">'+ bb +''+ cc +''+ dd +''+ ee +'</span><span class="span2"><i class="iconfont">&#xe625;</i>'+ ff +'</span><a href="javascript:;" class="change">[编辑]</a><a href="javascript:;" class="del">[删除]</a><p class="control">保存收货人信息</p></div></li>');
			$('.pmain2 ul').prepend(oLi);
			$('#bigChange,#largeHide').fadeOut();
		})
		$('#noBtn').click(function () {
			$('#bigChange,#largeHide').fadeOut();
		})

			// 				地址修改
		
		$('.pmain2 ul').click(function (ev) {
			 var target = ev.target || ev.srcElement;
			 if (target.className == 'newChange') {
			 	
			 	$(target).parent().siblings('div').children('p').fadeIn();
			$(target).siblings('a').fadeIn();
			$(target).fadeOut();
			$(target).parent().parent().css({background: 'rgba(255,245,204,0.25)'});
			$(target).parent().siblings('.address').children('input,a').toggle();
			 }
		})
		
		$('.pmain2 ul').click(function (ev) {
			 var target = ev.target || ev.srcElement;
			if (target.className == 'control') {
				$(target).fadeOut();
				$(target).siblings('input,a').fadeOut();
				$(target).parent().parent().css({background:'#fff'});
				$(target).parent().siblings('p').children('.newAdd').fadeOut();
				$(target).parent().siblings('p').children('.newChange').fadeIn();
			}
		})
		
		
		$('.pmain2 ul').click(function (ev) {
			 var target = ev.target || ev.srcElement;
			if (target.className == 'newAdd') {
				$('#bigChange,#largeHide').fadeIn();
//				$('#bigChange').html('<div id="bigChange"><h4>新增地址<a href="javascript:;" id="bigChangeOut">×</a></h4><dl><dt><span style="color: red; font-size: 20px; line-height: 28px;position: relative;top: 6px;">*</span>收货人：</dt><dd><input id="zsxm" class="input" type="text" placeholder="请填写您的真实姓名" /></dd></dl><dl><dt><span style="color: red; font-size: 20px; line-height: 28px;position: relative;top: 6px;">*</span>所在地区：</dt><dd><select name="sheng" id="area1"></select><select name="shi" id="area2"></select><select name="xian" id="area3"></select></dd></dl><dl><dt><span style="color: red; font-size: 20px; line-height: 28px;position: relative;top: 6px;">*</span>街道地址：</dt><dd><input id="jddz" class="input"  type="text" placeholder="不必重复填写地区" /></dd></dl><dl><dt><span style="color: red; font-size: 20px; line-height: 28px;position: relative;top: 6px;">*</span>手机号码：</dt><dd><input id="sjhm" class="input"  type="text" placeholder="请输入正确的手机号" /></dd></dl><dl><dt>电话号码：</dt><dd><input class="input"  type="text" placeholder="区号-电话号码-分机" /></dd></dl><dl><dt>默认：</dt><dd><input type="checkbox"/> 设置为默认地址</dd></dl><p><a id="noBtn" href="javascript:;">放弃操作</a><a id="yesBtn" href="javascript:;">确认提交</a></p></div>')
			}
		})
		//         修改
		$('.pmain2 ul').click(function (ev) {
			 var target = ev.target || ev.srcElement;
			if (target.className == 'change') {
				$('#bigChange,#largeHide').fadeIn();
				$('#zsxm').attr('value',$(target).siblings('.span3').html());
				$('#sjhm').attr('value',$(target).siblings('.span2').html());
				$('#jddz').attr('value',$(target).siblings('.span6').html());
				$("#area1").find("option:selected").text($(target).siblings('.span1').html());
				$("#area2").find("option:selected").text($(target).siblings('.span4').html());
				$("#area3").find("option:selected").text($(target).siblings('.span5').html());
			}
		})
		//     删除
		$('.pmain2 ul').click(function (ev) {
			 var target = ev.target || ev.srcElement;
			if (target.className == 'del') {
				$(target).parent().parent().css({display:'none'});
			}
		})
		
		$('#bigChangeOut').click(function () {
			$('#bigChange,#largeHide').fadeOut();
		})
		
		
		$('#payChange').click(function () {
			$(this).fadeOut();
			$('.baocun').fadeIn();
			$('.pay .d1').fadeIn();
			$('.pay .d2').fadeIn();
			$('.pay').css({background: 'rgba(255,245,204,0.25)'});
		})
		
		$('.baocun').click(function () {
			$(this).fadeOut();
			$('#payChange').fadeIn();
			$('.pay .d1').fadeOut();
			$('.pay .d2').fadeOut();
			$('.pay').css({background: '#fff'});
		})
		$('#inputA').click(function () {
			$('.pay .chance').html('货到付款');
		})
		$('#inputB').click(function () {
			$('.pay .chance').html('在线支付');
		})
		
		
		$('#userMenu').click(function () {
			if ($.cookie('goods-count1') != undefined) {
				goodsCount1 = JSON.parse($.cookie('goods-count1'));
				aGoodsCount1 = Number(goodsCount1);
				$.cookie('goods-count',JSON.stringify(aGoodsCount1),{expires:1,path:'/'});
			}
			var money = 0;
			if ($.cookie('goods1') != undefined) {
				var aGoods1 = JSON.parse($.cookie('goods1'));
				$.cookie('goods',JSON.stringify(aGoods1),{expires:1,path:'/'});
			}
			$('#largeHide,#payAlert').fadeIn();
			countdown();

		})
		$('#guanbi').click(function () {
			$('#largeHide,#payAlert').fadeOut();
		})
		
		// 倒计时
	var oHour = document.getElementById('hour');
	var oMinute = document.getElementById('minute');
	var oSeconds = document.getElementById('seconds');
	var h = 1;
	var m = 59;
	var s = 59;
	function countdown() {
		--s;
		if (s < 0) {
			--m;
			s = 59;
		}
		if (m < 0) {
			--h;
			m = 59;
		}
		if (h < 0) {
			m = 0;
			s = 0;
		}
		if (s < 10) {
			oSeconds.innerHTML = '0' + s;
		}else{
			oSeconds.innerHTML = s;
		}
		if (m < 10) {
			oMinute.innerHTML = '0' + m;
		}else{
			oMinute.innerHTML = m;
		}
		if (h < 10) {
			oHour.innerHTML = '0' + h;
		}else{
			oHour.innerHTML = h;
		}
		setTimeout(function () {countdown()},1000);
	}
	


		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	})
})(jQuery);
