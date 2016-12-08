<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=no">
	<link rel="stylesheet" type="text/css" href="stylesheets/bootstrap.min.css">
	<title>{{title}}</title>
	<style type="text/css">
		*{
			font-family:"PingFang SC", "Microsoft JhengHei";
			margin:0;
			padding:0;
		}
		body{
			padding:0 10px;
			padding-bottom: 40px;
		}
		hr{
			display: none;
		}
		.order,.order2{
			margin-left:5px;
			font-size: 20px;
		}
		h1,h2{
			margin-top:20px;
			margin-bottom: 20px;
		}
		h2{
			text-align: center;
			padding-bottom: 10px;
			border-bottom:1px solid #ccc;
		}
		h2 a{
			color:#333;
			text-decoration: none;
		}
		.container img{
			width:106%;
			margin-left:-3%;
			margin-top:10px;
			margin-bottom:10px;
		}
		.container{
			margin-bottom: 20px;
		}
		.mask{
			display: block;
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
		.active{
			color:#35b558;
		}
	</style>
</head>
<body>
	<div class="mask"><img src="images/loading.gif"></div>
	<h1>Dgtle Reader</h1>
	<a href="javascript:;" class="order order1 active">1</a>
	<a href="javascript:;" class="order order1">2</a>
	<a href="javascript:;" class="order order1">3</a>
	<a href="javascript:;" class="order order1">4</a>
	<a href="javascript:;" class="order order1">5</a>
	<a href="javascript:;" class="order order1">6</a>
	<a href="javascript:;" class="order order1">7</a>
	<a href="javascript:;" class="order order1">8</a>
	<a href="javascript:;" class="order order1">9</a>
	<a href="javascript:;" class="order order1">10</a>
	<div class="container">
		{{html}}
	</div>
	<a href="javascript:;" class="order order2 active">1</a>
	<a href="javascript:;" class="order order2">2</a>
	<a href="javascript:;" class="order order2">3</a>
	<a href="javascript:;" class="order order2">4</a>
	<a href="javascript:;" class="order order2">5</a>
	<a href="javascript:;" class="order order2">6</a>
	<a href="javascript:;" class="order order2">7</a>
	<a href="javascript:;" class="order order2">8</a>
	<a href="javascript:;" class="order order2">9</a>
	<a href="javascript:;" class="order order2">10</a>
	
	<script type="text/javascript" src="javascripts/jquery.js"></script>
	<script type="text/javascript">

		function initArticle(){
			$.ajax({
				type:"POST",
				url:'/init',
				data:'',
				dataType:'json',
				success:function(res){
					console.log(res.message);
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
				$('.order').removeClass('active');
				$('.mask').show();
				var i = Number($(this).text());
				$.ajax({
					type:"POST",
					url:'/get',
					data:{
						'order':i
					},
					dataType:'json',
					success:function(res){
						$("html,body").animate({ scrollTop: 0},200);
						$('.container').html(res.content);
						if ($('.container h2').text() == 'null') {
							$('.container h2').text('爬不到了~ヽ(ˋДˊ)ノ')
						}
						if ($('.main').text() == 'null') {
							$('.main').text('这个也爬不到ヽ(ˋДˊ)ノ');
						}
						var index = Number(res.number - 1);
						$('.order1').eq(index).addClass('active');
						$('.order2').eq(index).addClass('active');
						$('.mask').fadeOut(300);
					},
					error:function(res){
						alert('通讯失败');
					}
				})
			})
		}
		initArticle();
		getArticle();
	</script>
</body>
</html>
