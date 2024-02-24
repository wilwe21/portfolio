const begin = () => {
	document.getElementById('name').innerHTML = "Lore"
  	document.getElementById("con").innerHTML = "\
  	<h1>The Story of a little Lamb</h1>\
  	<h3 class='line'>Once upona time on a planet milions light years from earth theres a planet called <a class='line' onclick='ovisa()'>„Ovisa”</a> lives a little lamb. That lamb was very good at learning thins and he was the chosen one who is needed to bring peace in the entire multiverse. The lamb invent a multi dimensional portal device, and he thinking he was ready to discover new dimensions but no one ever was been.</h3>"
};
const ovisa = () => {
    document.getElementById('name').innerHTML = "Ovisa"
    document.getElementById('con').innerHTML = "\
    <h1>Ovisa</h1>\
    <h3>Planet very similiar to earth with one exception. On this planet lives population of anthropomorphic sheeps with higher inteligence than human</h3>"
};
