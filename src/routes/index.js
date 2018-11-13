const fs = require('fs');
const express = require('express');
const router = express.Router();

/* 获得首页 */
router.use('/', function (req, res) {
  let indexFilePath = 'D:/code/git/node-sever/public/index.html'
  fs.readFile(indexFilePath, (err, data) => {
    if (err) {
      res.status(404)
      res.set('content-type', 'text/html;charset="utf-8"');
      res.send('<h1>404错误</h1><p>你要找的页面不存在</p>');
      res.end();
    } else {
      res.status(200)
      res.append('content-type', 'text/html;charset="utf-8"');
      res.send(data);
      res.end();
    }
  })
});

module.exports = router;