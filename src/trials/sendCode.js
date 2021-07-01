import { eventCodes, lang, audioCodes } from '../config/main'
import { photodiodeGhostBox, pdSpotEncode } from '../lib/markup/photodiode'
import { baseStimulus } from '../lib/markup/stimuli'
import { beep } from '../lib/utils'

const sendCode = (block, time, sound=false) => {
  let stimulus = baseStimulus(`<h1>${lang.prompt.heading[block]}</h1>`, true) + photodiodeGhostBox()

   return {
    type: 'html_keyboard_response',
    stimulus: stimulus,
    trial_duration: time,
    on_load: () => {
      pdSpotEncode(eventCodes[block])
      console.log(eventCodes[block])
      if (sound === true) {
        beep(audioCodes)
      }
    }
  }
}

export default sendCode
