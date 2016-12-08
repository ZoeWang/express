<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=no">
	<title>{{title}}</title>
	<style type="text/css">
		*{
			margin:0;
			padding:0;
		}
		body{
			padding:0 10px;
		}
		hr{
			display: none;
		}
		.order{
			margin-left:5px;
			font-size: 20px;
		}
		h1,h2{
			margin-top:20px;
			margin-bottom: 20px;
		}
		.container img{
			width:106%;
			margin-left:-3%;
		}
		.container{
			margin-bottom: 20px;
		}
		.mask{
			display: none;
			z-index: 2;
			position: fixed;
			top:0;
			left:0;
			width: 100%;
			height: 100%;
			background: #127cc7;
		}
		.mask img{
			position: relative;
			top:50%;
			width: 100%;
			margin-top:-50%;
		}
	</style>
</head>
<body>
	<div class="mask"><img src="images/loading.gif"></div>
	<h1>Dgtle Reader</h1>
	<a href="javascript:;" id="renew">刷新文章</a>
	<a href="javascript:;" class="order">1</a>
	<a href="javascript:;" class="order">2</a>
	<a href="javascript:;" class="order">3</a>
	<a href="javascript:;" class="order">4</a>
	<a href="javascript:;" class="order">5</a>
	<a href="javascript:;" class="order">6</a>
	<a href="javascript:;" class="order">7</a>
	<a href="javascript:;" class="order">8</a>
	<a href="javascript:;" class="order">9</a>
	<a href="javascript:;" class="order">10</a>
	<div class="container">
		{{html}}
	</div>
	<a href="javascript:;" id="renew">刷新文章</a>
	<a href="javascript:;" class="order">1</a>
	<a href="javascript:;" class="order">2</a>
	<a href="javascript:;" class="order">3</a>
	<a href="javascript:;" class="order">4</a>
	<a href="javascript:;" class="order">5</a>
	<a href="javascript:;" class="order">6</a>
	<a href="javascript:;" class="order">7</a>
	<a href="javascript:;" class="order">8</a>
	<a href="javascript:;" class="order">9</a>
	<a href="javascript:;" class="order">10</a>
	
	<script type="text/javascript" src="javascripts/jquery.js"></script>
	<script type="text/javascript">
		
		function renew(){
			$('#renew').on('click',function(){
				$('.mask').fadeIn();
				$.ajax({
					type:"POST",
					url:'/renew',
					data:'',
					dataType:'json',
					success:function(res){
						setTimeout(function(){alert(res.message);location.reload()},1000)
					},
					error:function(res){
						alert('通讯失败');
					}
				})
			})
		}

		function initArticle(){
			$('.mask').fadeIn();
			$.ajax({
				type:"POST",
				url:'/init',
				data:'',
				dataType:'json',
				success:function(res){
					$('.container').html(res.content);
					$('.mask').fadeOut();
				},
				error:function(res){
					alert('通讯失败');
				}
			})
		}
		function getArticle(){
			$('.order').on('click',function(){
				var i = Number($(this).text());
				$.ajax({
					type:"POST",
					url:'/get',
					data:{
						'order':i
					},
					dataType:'json',
					success:function(res){
						$("html,body").animate({ scrollTop: 0},500);
						$('.container').html(res.content);
					},
					error:function(res){
						alert('通讯失败');
					}
				})
			})
		}
		renew();
		initArticle();
		getArticle();
	</script>
</body>
</html>