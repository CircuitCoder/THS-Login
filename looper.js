const login = require('./login');
const data = require('./credentials');

login(data);

setInterval(() => {
  login(data);
}, 1000 * 60 * 10)
