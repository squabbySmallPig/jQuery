(function ($) {
	$(function () {
		
		
		
		
		// registerForm 验证
		var reg = /^1\d{10}/;
		$('#next').click(function () {	
			if($('#tel').val() === '18762502464') {
				$('#telSpan').css({display:'block'});
				return false;
			}
			if(!reg.test($('#tel').val())) {
				$('#telSpan1').css({display:'block'});
				return false;
			}else{
				$('#telSpan,#telSpan1').css({display:'none'});
				if($('#code').val().toLowerCase() != 'pn27') {
					$('#codeSpan').css({display:'block'});
					return false;
				}else{
					$('#telSpan,#telSpan1,#codeSpan').css({display:'none'});
					if ($('#xieyi').prop('checked') === true) {
						$('#registerForm').css({display:'none'});
						$('#registerForm1').css({display:'block'});
						$('.firstRegister .right').css({
							top:'-254px'
						})
						return false;
					}else{
						$('#xieyiSpan').css({opacity:1});
						return false;
					}
				}
			}
			return false;
		})
		// 判断是否同意协议
		$('#xieyi').click(function () {
			if($('#xieyi').prop('checked') === true) {
				$('#xieyiSpan').css({opacity:0})
			}else{
				$('#xieyiSpan').css({opacity:1});
			}
		})
		
		$('#tel').focus(function () {
			$('#telSpan,#telSpan1').css({display:'none'});
		})
		$('#code').focus(function () {
			$('#codeSpan').css({display:'none'});
		})
		$('#moveCode').focus(function () {
			$('#moveCodeSpan').css({opacity:0});
		})
		$('#code1').focus(function () {
			$('#codeSpan1').css({opacity:0});
		})
		$('#userName').focus(function () {
			$('#userNameSpan').css({opacity:0});
		})
		$('#password').focus(function () {
			$('#passwordSpan').css({opacity:0});
		})
		$('#againPasswod').focus(function () {
			$('#passwordSpan1').css({opacity:0});
		})
		
		
		$('#tel').blur(function () {
			if($('#tel').val() === '18762502464') {
				$('#telSpan').css({display:'block'});
			}
			if(!reg.test($('#tel').val())) {
				$('#telSpan1').css({display:'block'});
			}
		})
		$('#code').blur(function () {
			if($('#code').val().toLowerCase() != 'pn27') {
					$('#codeSpan').css({display:'block'});
			}
		})
		$('#moveCode').blur(function () {
			if($('#moveCode').val().toLowerCase() != '123456') {
				$('#moveCodeSpan').css({opacity:1})
			}
		})
		$('#code1').blur(function () {
			if($('#code1').val().toLowerCase() != '7dfm') {
				$('#codeSpan1').css({opacity:1})
			}
		})
		$('#userName').blur(function () {
			if (reg1.test($('#userName').val()) === false) {
				$('#userNameSpan').css({opacity:1});
			}
		})
		$('#password').blur(function () {
			if (reg1.test($('#password').val()) === false) {
				$('#passwordSpan').css({opacity:1});
			}
		})
		$('#againPasswod').blur(function () {
			if (reg1.test($('#againPasswod').val()) === false) {
				$('#passwordSpan1').css({opacity:1});
			}
		})
		
		
		//registerForm1 验证
		var reg1 = /^[A-Za-z]{1}[A-Za-z0-9]{5,19}$/;
		$('#nowRegister').click(function () {
			if ($('#moveCode').val() != '123456') {
				$('#moveCodeSpan').css({opacity:1})
				return false;
			}else{
				$('#moveCodeSpan').css({opacity:0});
				if ($('#code1').val().toLowerCase() != '7dfm') {
					$('#codeSpan1').css({opacity:1});
					return false;
				}else{
					$('#moveCodeSpan,#codeSpan1').css({opacity:0});
					if (reg1.test($('#userName').val()) === false) {
						$('#userNameSpan').css({opacity:1});
						return false;
					}else{
						$('#moveCodeSpan,#codeSpan1,#userNameSpan').css({opacity:0});
						if (reg1.test($('#password').val()) === false) {
							$('#passwordSpan').css({opacity:1});
							return false;
						}else{
							$('#passwordSpan').css({opacity:0});
							if (reg1.test($('#againPasswod').val()) === false || $('#password').val() !== $('#againPasswod').val()) {
								$('#passwordSpan1').css({opacity:1});
								return false;
							}else{
								$('#passwordSpan1').css({opacity:0});
								$('.firstRegister').stop(true).animate({
									width:'0px',
									height:'0px',
									opacity:0
								},100,function () {
									$('#success').css({display:'block'})
									$('#behind').css({display:'block'})
								})
								return false;
							}
						}
					}
				}
			}
			return false;
		})
		// 		回到主页

		$('#backIndex').click(function () {
			var oUser = document.getElementById('userName');
			var oPassword = document.getElementById('userName');
			var user = {
				name:oUser.value,
				iPassword:oPassword.value
			}
			
			$.cookie('registerUser',JSON.stringify(user),{expires:1,path:'/'});
			window.location.href = '../login/index.html';
		})
		
		
		
	})
})(jQuery);
