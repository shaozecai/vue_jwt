var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const secret = 'zfjg';

router.get('/validate', (req, res) => {
    const token = req.headers.authorization;
    jwt.verify(token, secret, (err, decode) => { // 验证token的可靠性
      if (err) {
        return res.json({
          code: 1,
          data: 'token失效了',
        });
      }
      res.json({
        username: decode.username,
        code: 0, // 延长tokne的过期时间
        token: jwt.sign({ username: 'admin' }, secret, {
          expiresIn: 20,
        }),
      });
    });
  });
  

module.exports = router;
