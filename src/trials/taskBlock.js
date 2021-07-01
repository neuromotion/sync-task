import { lang } from '../config/main'
import { photodiodeGhostBox } from '../lib/markup/photodiode'
import { baseStimulus } from '../lib/markup/stimuli'

const prompt = (block) => {
  let stimulus = baseStimulus(`<div><h2>${lang.instructions[block]}</h2></div>`, true) + photodiodeGhostBox()

   return {
    type: 'html_button_response',
    stimulus: stimulus,
    choices: [lang.prompt[block]]
  }
}

  
  export default prompt
