const theme = mot => {
	const b = document.getElementById('body')
	const n = document.getElementById('name')
	const c = document.getElementById('con')
	const k = document.getElementById('back')
	var cssId = 'myCss';
	var head  = document.getElementsByTagName('head')[0];
	if (mot == 'CM') {
    		var link  = document.createElement('link');
    		link.id = cssId;
    		link.rel = 'stylesheet';
    		link.type = 'text/css';
    		link.href = './css/CM.css';
    		link.media = 'all';
    		head.appendChild(link);
	} else if ( mot == 'CL'){
    		var link  = document.createElement('link');
    		link.id = cssId;
    		link.rel = 'stylesheet';
    		link.type = 'text/css';
    		link.href = './css/CL.css';
    		link.media = 'all';
    		head.appendChild(link);
	} else if ( mot == 'FSM'){
    		var link  = document.createElement('link');
    		link.id = cssId;
    		link.rel = 'stylesheet';
    		link.type = 'text/css';
    		link.href = './css/FSM.css';
    		link.media = 'all';
    		head.appendChild(link);
	} else if ( mot == 'MLP'){
    		var link  = document.createElement('link');
    		link.id = cssId;
    		link.rel = 'stylesheet';
    		link.type = 'text/css';
    		link.href = './css/MLP.css';
    		link.media = 'all';
    		head.appendChild(link);
	} else if ( mot == 'PCM'){
    		var link  = document.createElement('link');
    		link.id = cssId;
    		link.rel = 'stylesheet';
    		link.type = 'text/css';
    		link.href = './css/PCM.css';
    		link.media = 'all';
    		head.appendChild(link);
	} else if ( mot == 'Wi'){
    		var link  = document.createElement('link');
    		link.id = cssId;
    		link.rel = 'stylesheet';
    		link.type = 'text/css';
    		link.href = './css/Wi.css';
    		link.media = 'all';
    		head.appendChild(link);
	} else if ( mot == 'TLM'){
    		var link  = document.createElement('link');
    		link.id = cssId;
    		link.rel = 'stylesheet';
    		link.type = 'text/css';
    		link.href = './css/TLM.css';
    		link.media = 'all';
    		head.appendChild(link);
	} else if ( mot == 'JP'){
    		var link  = document.createElement('link');
    		link.id = cssId;
    		link.rel = 'stylesheet';
    		link.type = 'text/css';
    		link.href = './css/JP.css';
    		link.media = 'all';
    		head.appendChild(link);
	} else if ( mot == 'FF'){
    		var link  = document.createElement('link');
    		link.id = cssId;
    		link.rel = 'stylesheet';
    		link.type = 'text/css';
    		link.href = './css/FF.css';
    		link.media = 'all';
    		head.appendChild(link);
	} else if ( mot == 'FU'){
    		var link  = document.createElement('link');
    		link.id = cssId;
    		link.rel = 'stylesheet';
    		link.type = 'text/css';
    		link.href = './css/FU.css';
    		link.media = 'all';
    		head.appendChild(link);
	}
};
const about = () => {
	theme('CM')
	document.getElementById('name').innerHTML = "About"
  	document.getElementById("con").innerHTML = "\
  	<h1>My Aylurs gtk shell config</h1></br>\
  	<div class='line'>I'm making it by my own <div class='lt'>with some stolen code</div>. Configured to look and work as i want it to work. In top right corner you have link to GitHub with all code and hyprland config, themes, wallpapers and others. I'm creating it to be as customizable as possible.</div></br></br></br></br>\
  	<h2>Working: working. Bloated: working</h2>"
};
const macchiato = () => {
	theme('CM')
	document.getElementById('name').innerHTML = "Catppuccin Macchiato theme"
  	document.getElementById("con").innerHTML = "\
  	<div class='macchiato'></div>\
  	<h3>Main Theme that i think look the best<h3>"
};
const latte = () => {
	theme('CL')
	document.getElementById('name').innerHTML = "Catppuccin Latte theme"
  	document.getElementById("con").innerHTML = "\
  	<div class='latte'></div>\
  	<h3>Light theme that use a deer-fox wallpaper</h3>"
};
const spaghett = () => {
	theme('FSM')
	document.getElementById('name').innerHTML = "Flying Spaghetti Monster theme"
  	document.getElementById("con").innerHTML = "\
  	<div class='spaghett'></div>\
  	<h3>Best religion ever</h3>"
};
const mlp = () => {
	theme('MLP')
	document.getElementById('name').innerHTML = "My Little Pony theme"
  	document.getElementById("con").innerHTML = "\
  	<div class='mlp'></div>\
  	<h3>Pony in a jar, lyra plush or smth i don't watch series</h3>"
};
const pacman = () => {
	theme('PCM')
	document.getElementById('name').innerHTML = "Pacman theme"
  	document.getElementById("con").innerHTML = "\
  	<div class='pacman'></div>\
  	<h3>Pacman in space. Windows borders look like a pacman maze</h3>"
};
const weirdmagedon = () => {
	theme('Wi')
	document.getElementById('name').innerHTML = "Weirdmagedon theme"
  	document.getElementById("con").innerHTML = "\
  	<div class='wg'></div>\
  	<h3>Theme inspired by Gravity Falls weirdmagedon</h3>"
};
const kgb = () => {
	theme('TLM')
	document.getElementById('name').innerHTML = "The Land of Mushrooms theme"
  	document.getElementById("con").innerHTML = "\
  	<div class='kgb'></div>\
  	<h3>Awesome look to a mushroom land. the moon show actual moon phase</h3>"
};
const jp2 = () => {
	theme('JP')
	document.getElementById('name').innerHTML = "John Paul II theme"
  	document.getElementById("con").innerHTML = "\
  	<div class='jp'></div>\
  	<h3>The Lord once stood by the shore, He was looking for people ready to follow Him; To catch hearts With the truth of God's words. Ref: O Lord, it is you who have looked upon me, Your lips have spoken my name today. I leave my barge on the shore, I'll start a new fishery with you today. 2 I am a poor man, My treasure is my hands ready To work with you And a pure heart. Ref: O Lord, you have looked upon me, Your lips have spoken my name today. I leave my barge on the shore, I'll start a new fishery with you today. 3 You, you need my hands, ♪ My heart that's young and fervent ♪ My drops of sweat And loneliness. Ref: O Lord, you have looked upon me, Your lips have spoken my name today. I leave my barge on the shore, I'll start a new fishery with you today. 4. Today we set sail together To catch hearts on the seas of human souls With the net of your truth And the word of life. Ref.: O Lord, you have looked upon me, Your lips have spoken my name today. I leave my barge on the shore, I'll start a new fishery with you today</h3>"
};
const fnaf = () => {
	theme('FF')
	document.getElementById('name').innerHTML = "Freddy FNAF theme"
  	document.getElementById("con").innerHTML = "\
  	<div class='fnaf'></div>\
  	<h3>Freddy FNAF. Freddy nose work as intended</h3>"
};
const fuck = () => {
	theme('FU')
	document.getElementById('name').innerHTML = "Fucked Up Theme"
  	document.getElementById("con").innerHTML = "\
  	<div class='fuck'></div>\
  	<h3>My name is UI designer</h3>"
};
const widgets = () => {
	theme('CM')
	document.getElementById('name').innerHTML = "Widgets"
	document.getElementById('con').innerHTML = "\
	<div class='center'>\
	<h3>Quicksettings</h3>\
	<div class='quicksettings'></div>\
	<h4>Quick setup to adjust volume, brightness, wifi and theme</h4></br>\
	<h3>DashBoard</h3>\
	<div class='dashboard'></div>\
	<h4>Shows notifications and calendar with current weather</h4></br>\
	<h3>AppLauncher</h3>\
	<div class='applauncher'></div>\
	<h4>Show apps and media player or avatar with sentence</h4></br>\
	<h3>Power Menu</h3>\
	<div class='powermenu'></div>\
	<h4>Quick setup to turn off or reboot</h4></br>\
	<h3>Music Widget</h3>\
	<div class='music'></div>\
	<h4>Show media player on top of full screen and you can change the volume</h4></br>\
	<h3>Media indicator</h3>\
	<div class='media'></div>\
	<h4>Showing every time while video has changed</h4></br>\
	</div>"
};
const shorts = () => {
	theme('CM')
	document.getElementById('name').innerHTML = "Shortcuts"
	document.getElementById('con').innerHTML ="\
	<b>Super + Q</b> = run Terminal</br>\
	<b>Super + X</b> = run Audio Visualizer</br>\
	<b>Super + C</b> = close current focused app</br>\
	<b>Alt + F4</b> = close current focused app</br>\
	<b>Super + E</b> = run File Explorer</br>\
	<b>Super + v</b> = Toggle Floating</br>\
	<b>Super + F</b> = Fullscreen</br>\
	<b>Super + S</b> = open Applauncher</br>\
	<b>Super + A</b> = open Dashboard</br>\
	<b>Super + Tab</b> = show Workspaces</br>\
	<b>Super + Escape</b> = show Powermenu</br>\
	<b>Super + Shift + Q</b> = show Music Widget</br>\
	<b>Super + W</b> = show Quick Settings</br>\
	<b>Super + Shift + Z</b> = show Media Indicator</br>\
	<b>Super + Shift + Escape</b> = Lockscreen</br>\
	<b>Super + P</b> = Pseudo tile window</br>\
	<b>Super + J</b> = Toggle Split</br>\
	<b>Super + B</b> = run Web Launcher</br>\
	<b>Super + Shift + S</b> = Screenshot tool</br>\
	<b>Super + F1</b> = Mute audio</br>\
	<b>Super + F2</b> = Decrese volume by 5%</br>\
	<b>Super + F3</b> = Increse volume by 5%</br>\
	<b>Super + F12</b> = run calculator</br>\
	<b>Super + F5</b> = Decrese brightness by 5</br>\
	<b>Super + F6</b> = Increse brightness by 5</br>\
	<b>Super + Z</b> = Toggle AGS</br>\
	<b>Super + P</b> = Pin floating window</br>\
	<b>Super + Alt + S</b> = Turn of text to speech</br>\
	<b>Super + G</b> = run Desktop GitHub app</br>\
	<b>Home</b> = Pause actual playing video player</br>\
	<b>Super + Shift + F1</b> = Pause actual playing video player</br>\
	<b>Super + Space</b> = Pause actual playing video player</br>\
	<b>Super + T</b> = run Text editor</br>\
	<b>Super + R</b> = run Colorpicker</br>\
	<b>Super + D</b> = run  System monitor</br>\
	<b>Super + F4</b> = Toggle Microphone</br>\
	<b>Super + Left</b> = Move focus to left window</br>\
	<b>Super + Right</b> = Move Focus to right window</br>\
	<b>Super + Up</b> = Move focus to up window</br>\
	<b>Super + Down</b> = Move Focus to down window</br>\
	<b>Super + Shift + Left</b> = Resize window by 20 to left</br>\
	<b>Super + Shift + Right</b> = Resize window by 20 to right</br>\
	<b>Super + Shift + Up</b> = Resize window by 20 to up</br>\
	<b>Super + Shift + Down</b> = Resize window by 20 to down</br>\
	<b>Super + 0-9</b> = Switch workspace</br>\
	<b>Super + Shift + 0-9</b> = Move window to workspace</br>\
	<b>Super + Mouse Up</b> = Switch to workspace 1 higher</br>\
	<b>Super + Mouse Down</b> = Switch to workspace 1 lower</br>\
	<b>Super + Left Click</b> = Move Window</br>\
	<b>Super + Right Click</b> = Resize Window</br>\
	<b>Super + Shift + Right Click</b> = Resize Window keep floting window aspectratio"
};
const desk = () => {
	theme('CM')
	document.getElementById('name').innerHTML = "Desktop Widgets"
	document.getElementById('con').innerHTML = "\
	<div class='center'>\
	<h3>Clock</h3>\
	<a class='link' onclick='clockopt()'>Configurable options</a></br>\
	<div class='clock'></div>\
	<h3>Media Player</h3>\
	<a class='link' onclick='medplopt()'>Configurable options</a></br>\
	<div class='play'></div>\
	<h3>Moon widget</h3>\
	<a class='link' onclick='moonopt()'>Configurable options</a></br>\
	<div class='moon'></div>\
	<h3>Top layer</h3>\
	<a class='link' onclick='tplopt()'>Configurable options</a></br>\
	<h3>Sound Button</h3>\
	<a class='link' onclick='sbopt()'>Configurable options</a></br>\
	</div>"
};
const apps = () => {
	theme('CM')
	document.getElementById('name').innerHTML = 'Apps'
	document.getElementById('con').innerHTML = "<h3>\
	linux-zen</br>\
	Hyprland</br>\
	Aylur-gtk-shell</br>\
	swww</br>\
	sway-lock</br>\
	brightnessctl</br>\
	pipewire-pulse</br>\
	yay</br>\
	pamac-manager</br>\
	nautilus</br>\
	gnome-system-monitor</br>\
	gnome-calculator</br>\
	gnome-disk-utility</br>\
	gnome-text-editor</br>\
	kdeconnect</br>\
	networking-manager</br>\
	nm-applet</br>\
	polkit-gnome-authentication-agent</br>\
	xdg-desktop-portal</br>\
	hyprpicker</br>\
	tgpt</br>\
	</h3>"
};
const clockopt = () => {
	theme('CM')
	document.getElementById('name').innerHTML = "Clock Widget Options";
	document.getElementById('con').innerHTML = "<h3>\
	clock.main = Set up a clock format. Default is %H:%M</br>\
	clock.visible = Set visiblity of the clock. Default is false</br>\
	clock.font = Look for fonts 'cus type font don't work idk why</br>\
	clock.monofont = Define clock font. Default is Concert One Mono(custom made by my)</br>\
	clock.fontsize = Regulate font size. Default is 10</br>\
	clock.layer = Define layer of the widget. Default is background</br>\
	clock.color = Give your clock a color. Default is #ffffff</br>\
	clock.background = Choose a background type. Default is transparent</br>\
	clock.bg_color = Set background color or gradient. Default is $bg-color</br>\
	clock.bg_size = Set background size if it is an image. Default is cover</br>\
	clock.bg_pos = Set background position if it is an image. Default is center</br>\
	clock.bg_rape = Define background image repeting pattern. Default is no-repeat</br>\
	clock.border = Turn on and of border around clock. Default is false</br>\
	clock.width = Set a clock width for bigger background or shadow. Default is $clock-size</br>\
	clock.height = Set a clock height. Default is $clock-size</br>\
	clock.shadow = Set clock shadow. Default is 2px 2px 4px #000000</br>\
	clock.anchor = Set anchor position. Default is ['top', 'left']</br>\
	clock.margins = Set margins top/botom and left/right. Default is ['0', '0']</h3>";
}
const medplopt = () => {
	theme('CM')
	document.getElementById('name').innerHTML = "Media Widget Options";
	document.getElementById('con').innerHTML = "<h3>\
	music.visible = Turn widget on and off. Default is false</br>\
	music.anchor = Set anchor position. Default is ['top', 'left']</br>\
	music.margins = Set margins top/botom and left/right. Default is ['0', '0']</br>\
	music.layer = Define widget layer. Default is bottom</br>\
	music.box = Define background type. Default is blurred</br>\
	music.box_color = Set background color or gradient</br>\
	music.bg_size = Set background size for image. Default is cover</br>\
	music.bg_pos = Set background position for image. Default is center</br>\
	music.bg_rape = Set image repeting. Default is no-repeat</br>\
	music.border = Toggle border. Default is true</br>\
	music.volume = Toggle volume slider. Default is true</br>\
	music.vertical = Set widget order to vertical. Default is false</br>\
	music.titlejustification = Set title justification. Default is left</br>\
	music.artistjustification = Set artist justification. Default is left</br>\
	music.cover.visible = Toggle cover visibility. Default is true</br>\
	music.cover.hpack = Set position of cover. Default is start</br>\
	music.footer.position = Set visibility for position slider. Default is true</br>\
	music.footer.controls = Set visibility for controls. Default is true</br>\
	music.footer.box_visible = Set background type for footer. Default is transpareent</br>\
	music.footer.box_color = Set background color or gradient for footer. Default is $bg-color</br>\
	music.footer.border = Toggel border around the footer. Default is false</br>\
	music.text.visible = Set background type for text. Default is transparent</br>\
	music.text.bg_color = Set background color or gradient for text. Default is $bg-color</br>\
	music.text.color = Set text color. Default is $fg-color</br>\
	music.text.border = Toggle border around text. Default is false</br>\
	music.Title = Toggle visibility of title. Default is true</br>\
	music.Artist = Toggle visibility of artist. Default is true</br>\
	music.min_width = minimum width of widget. Default is 500</br>\
	msuic.min_height = minimum height of widget. Default is 200</br>\
	music.cover_width = Set width of cover image. Default is 150</br>\
	music.cover_height = Set height of cover image. Default is 150</h3>";
}
const moonopt = () => {
	theme('CM')
	document.getElementById('name').innerHTML = "Moon Widget Options";
	document.getElementById('con').innerHTML = "<h3>\
	moon.path = Define path to folder with moon images for all moon phases. Default is ' '</br>\
	moon.visible = Define widget visibility. Default is false</br>\
	moon.size = Set moon size. Default is 0</br>\
	moon.layer = Define widget layer. Default is background</br>\
	moon.anchor = Set anchor position. Default is ['top', 'left']</br>\
	moon.margins = Set margins top/botom and left/right. Default is ['0', '0']</h3>";
}
const tplopt = () => {
	theme('CM')
	document.getElementById('name').innerHTML = "Top Layer Options";
	document.getElementById('con').innerHTML = "<h3>\
	bgtop.image = Set top image. Default is ' '</br>\
	bgtop.layer = Define widget layer. Default is bottom</br>\
	bgtop.visible = Turn widget on and off. Default is false</br>\
	bgtop.size = Set widget size. Default is 0</br>\
	bgtop.anchor = Set anchor position. Default is ['top', 'left']</br>\
	bgtop.margins = Set margins top/botom and left/right. Default is ['0', '0']</h3>";
}
const sbopt = () => {
	theme('CM')
	document.getElementById('name').innerHTML = "Sound Button Options";
	document.getElementById('con').innerHTML = "<h3>\
	sound.sound = Define sound of a button. Default is ' '</br>\
	sound.layer = Define widget layer. Default is background</br>\
	sound.visible = Turn widget on and off. Default is false</br>\
	sound.size = Set widget size. Default is 0</br>\
	sound.icon = Set optional icon. Default is ' '</br>\
	sound.anchor = Set anchor position. Default is ['top', 'left']</br>\
	sound.margins = Set margins top/botom and left/right. Default is ['0', '0']</h3>";
}
