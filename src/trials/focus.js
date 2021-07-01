import { lang } from '../config/main'
import { photodiodeGhostBox } from '../lib/markup/photodiode'
import { baseStimulus } from '../lib/markup/stimuli'

const focus = () => {
  let stimulus = baseStimulus(`<div><h2>${lang.prompt.focus}</h2></div>`, true) + photodiodeGhostBox()

   return {
    type: 'html_button_response',
    stimulus: stimulus,
    choices: [lang.prompt.continue]
  }
}

export default focus
