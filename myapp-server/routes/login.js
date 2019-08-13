var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const secret = 'zfjg';

router.post('/login', (req, res) => {
  const { username } = req.body;
  if (username === 'admin') { // 如果访问的是admin 种植cookie
    res.json({
      code: 0,
      username: 'admin',
      token: jwt.sign({ username: 'admin' }, secret, {
        expiresIn: 20,
      }),
    });
  } else {
    res.json({
      code: 1,
      data: '用户名不存在',
    });
  }
});


module.exports = router;
