import { baseStimulus } from '../lib/markup/stimuli'
import { lang } from '../config/main'

const message = (message) => {
    const stimulus = baseStimulus(`
    <div class='instructions'>
    <h1>${message}</h1>
    </div>
    `, true)
    
    return {
        type: 'html_button_response',
        stimulus: stimulus,
        choices: [lang.prompt.continue],
        response_ends_trial: true
    }
}

export default message