// NOTE - these event codes must match what is in public/config/trigger.js
const eventCodes = {
	start: 1,
	stop: 2,
	open_task: process.env.REACT_APP_EVENT_CODE
}

// this is module.exports isntead of just exports as it is also imported into the electron app
module.exports = {
	eventCodes
}
