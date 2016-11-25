{%extends 'layout.tpl'%}

{%block content%}

	<div id="content">
		{% for val in xml %}
			{{val.title[0]}}
		{% endfor %}
	</div>

	<div id="content">
		{% for val in xml %}
			{{val.description[0]}}
		{% endfor %}
	</div>

{%endblock%}