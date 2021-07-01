import { lang } from '../config/main'
import { getUserId } from '../lib/utils'
import { baseStimulus } from '../lib/markup/stimuli'

const userId = () => {
  const ipcRenderer = window.require('electron').ipcRenderer;
  const envPatientId = ipcRenderer.sendSync('syncPatientId')
  //const envPatientId = "temp"
    return {
      type: 'survey_text',
      questions: [
          {
            prompt: baseStimulus(`<h1>${lang.userid.set}</h1>`, true),
            value: envPatientId
          }
        ],
      on_finish: (data) => {
        getUserId(data)
      }
    }
}

export default userId
