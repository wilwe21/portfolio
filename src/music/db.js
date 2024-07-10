import MegaLowania from "./sound/sans.mp3";
import MegaLowaniaWave from "./vital/sans.vital";
import bMp3 from "./sound/b.mp3";
import quest from "./sound/quest.mp3";
import lulaby from "./sound/lulaby for dragon.mp3";
import trumpet from "./sound/i broke my trumpet.mp3";
import ballad from "./sound/ballad from horses.mp3";
import GambleDylan from "./sound/gambledylan.mp3";
import afk from "./sound/A.F.K.mp3";

const musicDB = {
	Random: [
		{
			name: "Megalowania but slow",
			sound: MegaLowania,
			addown: MegaLowaniaWave,
		},
		{
			name: "???",
			sound: quest,
		},
		{
			name: "A.F.K",
			sound: afk,
		},
		{
			name: "B",
			sound: bMp3,
		},
		{
			name: "Lulaby for Dragon",
			sound: lulaby,
		},
		{
			name: "I broke my trumpet",
			sound: trumpet,
		},
		{
			name: "Ballad from horses that want to kill you",
			sound: ballad,
		},
		{
			name: "Dylan GambleCore",
			sound: GambleDylan,
		}
	],
	sus: [
		{
			name: "Dylan GambleCore",
			sound: GambleDylan,
		}
	]
}
export default musicDB;
