<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<title>hello world</title>
</head>
<body>
	<h1>{{ pagename|title }}</h1>
	<ul>
	{% for author in authors %}
  		<li{% if loop.first %} class="first"{% endif %}>
    	{{ author }}
  		</li>
	{% endfor %}
	</ul>
</body>
</html>
