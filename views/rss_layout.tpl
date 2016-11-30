<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<link rel="stylesheet" type="text/css" href="stylesheets/bootstrap.min.css">
	<title>{{title}}</title>
	<style type="text/css">
		*{
			font-family:"PingFang SC", "Microsoft JhengHei";
		}
		body{
			background: #eee;
			font-size:16px;
		}
		section{
			padding:10px 10px;
		}
		article{
			padding:5px 8px;
			margin-bottom: 30px;
			border-top:1px solid #ccc;
			box-shadow: 0px 2px 5px #c1c1c1;
			border-radius: 2px;
			background: #fff;
		}
		img{
			width: 103%;
			margin-left:-1.5%;
		}
		.title{
			font-size: 20px;
			font-weight: 500;
			margin-top:15px;
			text-align: center;
		}
		.description{
			line-height:1.5;
		}
		.author{
			margin:15px 0;
			text-align: center;
		}
		.pubdate{
			margin-top:10px;
		}
		.link{
			margin-top:5px;
		}
		.pubdate,.link{
			text-align: center;
		}
	</style>
</head>
<body>
	{%block content%}
	{%endblock%}

</body>
</html>
