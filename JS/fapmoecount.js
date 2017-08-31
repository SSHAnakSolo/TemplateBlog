<script src='https://cdn.firebase.com/v0/firebase.js' type='text/javascript'/> 
<script> 
$.each($(&#39;a[name]&#39;), function(i, e) { 
var elem = $(e).parent().find(&#39;#postviews&#39;); 
var blogStats = new Firebase(&quot;https://AIzaSyBI-tzewJDR6NYK2WwKpQYn8XdhFyrGmfM.firebaseio.com/pages/id/&quot; + $(e).attr(&#39;name&#39;)); 
blogStats.once(&#39;value&#39;, function(snapshot) { 
var data = snapshot.val(); 
var isnew = false; 
if(data == null) { 
data= {}; 
data.value = 0; 
data.url = window.location.href; 
data.id = $(e).attr(&#39;name&#39;); 
isnew = true; 
} 
elem.text(data.value); 
data.value++; 
if(window.location.pathname!=&#39;/&#39;) 
{ 
if(isnew) 
blogStats.set(data); 
else 
blogStats.child(&#39;value&#39;).set(data.value); 
} 
}); 
}); 
</script>