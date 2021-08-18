const os = require('os')
const path = require('path')


// infos about the user
const user = os.userInfo()
console.log(user);

// method return the systeme uptime in second
const time = os.uptime()
os.freemem()
console.log(`the systeme s uptime for ${time} seconds`);

// separator 
console.log(path.sep);