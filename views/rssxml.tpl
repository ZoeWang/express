{%extends 'rss_layout.tpl'%}

{%block content%}

	<section>

		{% for val in xml %}
		<article>
			<p class="title">{{val.title[0]}}</p>
			<p class="author">{{val.author[0]}}</p>
			<p class="description">{{val.description[0]}}</p>
			<p class="pubdate">{{val.pubDate[0]}}</p>
			<p class="link">{{val.link[0]}}</p>
		</article>
		{% endfor %}

	</section>

{%endblock%}