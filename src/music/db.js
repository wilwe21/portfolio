import MegaLowania from "./sound/sans.mp3";
import MegaLowaniaWave from "./vital/sans.vital";
import bMp3 from "./sound/b.mp3";
import quest from "./sound/quest.mp3";
import lulaby from "./sound/lulaby for dragon.mp3";

const musicDB = {
	short: [
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
			name: "B",
			sound: bMp3,
		},
		{
			name: "Lulaby for Dragon",
			sound: lulaby,
		}
	],
	medium: {},
	long: {},
}
export default musicDB;
