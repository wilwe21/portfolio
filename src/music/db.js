import MegaLowania from "./sound/sans.mp3";
import bMp3 from "./sound/b.mp3";
import MegaLowaniaWave from "./vital/sans.vital";
const musicDB = {
	short: [
		{
			name: "Megalowania but slow",
			sound: MegaLowania,
			addown: MegaLowaniaWave,
		},
		{
			name: "B",
			sound: bMp3,
		}
	],
	medium: {},
	long: {},
}
export default musicDB;
