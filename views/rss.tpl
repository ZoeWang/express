{%extends 'layout.tpl'%}

{%block content%}

	<div id="feed-control">loading...</div>

	<script type="text/javascript" src="javascripts/rss/jsapi.js"></script>
	<script type="text/javascript" src="javascripts/rss/gfdynamicfeedcontrol.js"></script>

	<link rel="stylesheet" type="text/css" href="stylesheets/rss/default.css">
	
	<script>
		function loaddynamicfeedcontrol() { 
		    var feeds = [
		    	{title: 'Dgtle', url: 'http://www.dgtle.com/rss/dgtle.xml' }
		    ]; 
		    var options = { 
		        numResults : 20, 
		        displayTime : 10000, 
		        fadeOutTime : 500, 
		        scrollOnFadeOut : true, 
		        pauseOnHover : true,
		        stacked : false,
		        horizontal : false, 
		        title : 'Dgtle' 
		    }
		    new GFdynamicFeedControl(feeds, 'feed-control', options); 
		} 
		google.load('feeds', '1'); 
		google.setOnLoadCallback(loaddynamicfeedcontrol); 
	</script>
	
{%endblock%}