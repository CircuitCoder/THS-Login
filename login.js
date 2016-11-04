const request = require('request');
const path = require('path');
const md6 = require('./md6');

function tryLogin(u, p, ep, loc) {
  request
    .post('http://20.15.10.17:90/login')
    .form({
      login_type: 'login',
      username: u,
      password1: p,
      password: ep,
      terminal: 'pc',
      uri: loc,
      check_passwd: 0,
      read: 1,
      save_user: 1,
      save_pass: 1,
      show_assure: 'none',
      show_read: 'block',
      show_captcha: 'none',
      show_tip: 'block',
      show_change_password: 'none',
      short_message: 'none',
      assure_phone: '',
      captcha_value: '',
      retype_newpassword: '',
      new_password: '',
    }).on('response', (resp) => {
      resp.on('data', (d) => console.log(d.toString('utf8')));
    });
}

module.exports = (data) => {
  request({
    uri: 'http://20.15.10.17:90/login',
    followRedirect: false,
  }, (err, resp, body) => {
    if(err) return;
    if(resp.statusCode === 302) {
      // Try relogin
      const segs = resp.headers['location'].split('?');
      tryLogin(data.user, data.pass, md6(data.pass), segs[segs.length-1]);
    }
  });
}
