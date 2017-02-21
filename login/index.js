(function ($) {
	$(function () {
		$('#shouji').click(function () {
			$(this).addClass('active');
			$('#moren').removeClass('active');
			$('#loginForm1').stop(true);
			$('#loginForm').stop(true).animate({
				left:'-600px',
				opacity:0,
			},200,function () {			
				$('#loginForm1').stop(true).animate({
					left:'20px',
					opacity:1,
				},200)
			})
		})
		$('#moren').click(function () {
			$(this).addClass('active');
			$('#shouji').removeClass('active');
			$('#loginForm').stop(true);
			$('#loginForm1').stop(true).animate({
				left:'-600px',
				opacity:0,
			},200,function () {			
				$('#loginForm').stop(true).animate({
					left:'20px',
					opacity:1,
				},200)
			})
		})
		
		
		$('#autoLogin').click(function () {
			if($('#autoLogin').prop('checked') === true) {
				$('.login-main .mian em').css({opacity:0})
			}else{
				$('.login-main .mian em').css({opacity:1});
			}
		})
		//
		if ($.cookie('login') === '1' ) {
			location.href = '../index/index.html'; 
		}

		// 账号密码验证码   验证
		$('#loginbtn').click(function () {
			// 点击登录时判断复选框是否被选中，没有且有cookie的话删除cookie
//			if($('#autoLogin').prop('checked') === false) {
//				if ($.cookie('loginUser') != undefined) {
//					$.cookie('loginUser',null,{path:'/',expires:-1});
//				}
//			}	

			if ($.cookie('registerUser') != undefined) {
				var user = JSON.parse($.cookie('registerUser'));
				var userName = user.name;
				var userPassword = user.iPassword;
			}
			if($('#loginName').val() != userName) {
				$('#loginNameSpan').css({display:'block'});
//				return false;
			}else{
				$('#loginNameSpan').css({display:'none'});
				if($('#password').val() != userPassword) {
					$('#passwordSpan').css({display:'block'});
//					return false;
				}else{
					$('#loginNameSpan,#passwordSpan').css({display:'none'});
					if ($('#code').val().toLowerCase() != 'f582') {
						$('#codeSpan').css({display:'block'});
//						return false;
					}else{	
						// 登录成功且复选框被选中，写入cookie
						if($('#autoLogin').prop('checked') === true) {
							$.cookie('registerUser',JSON.stringify(user),{path:'/',expires:7});
//							return false;
						}else{
							$.cookie('registerUser',JSON.stringify(user),{path:'/'});
//							return false;
						}
						//跳转到主页
						window.location.href = '../index.html';
//						return false;
					}
				}
			}
//			return false;
		})
		if ($.cookie('registerUser') != undefined) {
				var user = JSON.parse($.cookie('registerUser'));
				var userName = user.name;
				var userPassword = user.iPassword;
			}
		
		$('#loginName').focus(function () {
			$('#loginNameSpan').css({display:'none'});
		})
		$('#password').focus(function () {
			$('#passwordSpan').css({display:'none'});
		})
		$('#code').focus(function () {
			$('#codeSpan').css({display:'none'});
		})
		
		
		$('#loginName').blur(function () {
			if($('#loginName').val() != userName) {
				$('#loginNameSpan').css({display:'block'});
			}
		})
		$('#password').blur(function () {
			if($('#password').val() != userPassword) {
				$('#passwordSpan').css({display:'block'});
			}
		})
		$('#code').blur(function () {
			if ($('#code').val().toLowerCase() != 'f582') {
				$('#codeSpan').css({display:'block'});
			}
		})
		
		
		
		// 手机号验证码动态码   验证
		$('#loginbtn1').click(function () {
			// 点击登录时判断复选框是否被选中，没有且有cookie的话删除cookie
			if($('#autoLogin').prop('checked') === false) {
				if ($.cookie('loginUser')) {
					$.cookie('loginUser','',{expires:-1,path:'/'})
				}
			}	
			if($('#loginName1').val() != '18762502464') {
				$('#loginNameSpan1').css({display:'block'});
				return false;
			}else{
				$('#loginNameSpan1').css({display:'none'});
				if($('#code1').val().toLowerCase() != 'dc2g') {
					$('#passwordSpan1').css({display:'block'});
					return false;
				}else{
					$('#loginNameSpan1,#passwordSpan1').css({display:'none'});
					if ($('#password1').val() != '123456') {
						$('#codeSpan1').css({display:'block'});
						return false;
					}else{	
						//跳转到主页
						window.location.href = '../index.html';
						return false;
					}
				}
			}
		})
		
		$('#loginName1').focus(function () {
			$('#loginNameSpan1').css({display:'none'});
		})
		$('#password1').focus(function () {
			$('#codeSpan1').css({display:'none'});
		})
		$('#code1').focus(function () {
			$('#passwordSpan1').css({display:'none'});
		})
		
	})
})(jQuery);
