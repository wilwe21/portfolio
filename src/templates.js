const date = new Date();
const templates = {
	braill: {
		name: "Braill",
		logo: "duolingo for blind",
		smem: "Your streak gone",
		streak: {
  			count: 0,
			data: date,
		},
		type: "lang",
		lvl: 0,
		exp: 0,
		hard: false,
		sound: true,
		lives: 5,
		maxlives: 5,
		ldat: null,
		length: 5,
		lern: {"a": "⠁","b": "⠃","c": "⠉","d": "⠙","e": "⠑","f": "⠋","g": "⠛","h": "⠓","i": "⠊","j": "⠚","k": "⠅","l": "⠇","m": "⠍","n": "⠝","o": "⠕","p": "⠏","q": "⠟","r": "⠗","s": "⠎","t": "⠞","u": "⠥","v": "⠧","w": "⠺","x": "⠭","y": "⠽","z": "⠵","ą":"⠡","ć":"⠩","ę":"⠱","ł":"⠣","ń":"⠹","ó":"⠬","ś":"⠪","ż":"⠯","ź":"⠮","0":"⠼⠚","1":"⠼⠁","2":"⠼⠃","3":"⠼⠉","4":"⠼⠙","5":"⠼⠑","6":"⠼⠋","7":"⠼⠛","8":"⠼⠓","9":"⠼⠊","-": "⠒",".": "⠲","'": "⡀",",": "⠂"}
	},
	illuminati: {
		name: "Illuminati",
		logo: "duolingo for illuminati member",
		smem: "Your streak gone",
		streak: {
	  		count: 0,
			data: date,
		},
		type: "lang",
		lvl: 0,
		exp: 0,
		hard: false,
		sound: true,
		lives: 5,
		maxlives: 5,
		ldat: null,
		length: 5,
		lern: {'a': "ꚛ",'b': "✡",'c': "⌜",'d': "↧",'e': "⌟",'f': "♂",'g': ']','h': ".",'i': "+",'j': "Δ",'k': "☿",'l': "⌞",'m': "ɪ",'n': "H",'o': "T",'p': ':','q': "┴",'r': "X",'s': "◇",'t': "⸷",'u': "⸶",'v': "♃",'w': "⌧",'x': "⼟",'y': "︙",'z': "𝒩"}
	},
	enchant: {
		name: 'Enchanting Table',
		logo: 'duolingo for Minecraft Player',
		smem: 'Your streak gone',
		streak: {
	  		count: 0,
			data: date,
		},
		type: 'lang',
		lvl: 0,
		exp: 0,
		hard: false,
		sound: true,
		lives: 5,
		maxlives: 5,
		ldat: null,
		length: 5,
		lern: {'a': 'ᔑ', 'b': 'ʖ', 'c': 'ᓵ', 'd': '↸', 'e': 'ᒷ', 'f': '⎓', 'g': '⊣', 'h': '⍑', 'i': '╎', 'j': '⋮', 'k': 'ꖌ', 'l': 'ꖎ', 'm': 'ᒲ', 'n': 'リ', 'o': '𝙹', 'p': '!¡', 'q': 'ᑑ', 'r': '∷', 's': 'ᓭ', 't': 'ℸ ̣', 'u': '⚍', 'v': '⍊', 'w': '∴','x': ' ̇/','y': '||','z': '⨅'}
	}
}

export default { templates };
