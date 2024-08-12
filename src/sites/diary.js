import TopBar from "../modules/topbar.js"
import Back from "../modules/back.js"
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const mark = `
- [X] mark
- [ ] down
- [ ] test
`

function Diary() {
	return (
		<div>
			<TopBar left={Back()} middle="Diary" right="" />
			<Markdown remarkPlugins={[remarkGfm]}>{mark}</Markdown>
		</div>
	)
}

export default Diary;
