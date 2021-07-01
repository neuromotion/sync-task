import experimentStart from "../trials/experimentStart";
import startCode from "../trials/startCode";
import holdUpMarker from "../trials/holdUpMarker";
import { config } from "../config/main";
import adjustVolume from "../trials/adjustVolume";
import camera from "../trials/camera";


let tl = [experimentStart()];
if (config.USE_VOLUME) {
  tl.push(adjustVolume());
}
if (config.USE_EEG) {
  tl.push(holdUpMarker());
  tl.push(startCode());
}
if (config.USE_CAMERA) {
  tl.push(camera());
}

const preamble = {
  type: "html_keyboard_response",
  stimulus: "",
  timeline: tl,
};

export default preamble;
