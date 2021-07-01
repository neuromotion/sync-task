import { lang } from '../config/main'
import { photodiodeGhostBox } from '../lib/markup/photodiode'
import { baseStimulus } from '../lib/markup/stimuli'

console.log(process.env)
let TASK_NAME = process.env.REACT_APP_TASK_NAME
const experimentStart = () => {
  let stimulus = baseStimulus(`<h1>${TASK_NAME}</h1>`, true) + photodiodeGhostBox()

   return {
    type: 'html_button_response',
    stimulus: stimulus,
    choices: [lang.prompt.continue]
  }
}

export default experimentStart
