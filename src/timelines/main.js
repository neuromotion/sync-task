import experimentEnd from '../trials/experimentEnd'
import sendCode from '../trials/sendCode'
import prompt from '../trials/taskBlock'
import preamble from './preamble'

export const tl = [
        preamble,
        prompt('start'),
        sendCode('start', 500),
        prompt('stop'),
        sendCode('stop', 500),
        experimentEnd(5000)
        ]

