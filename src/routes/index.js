var express = require('express');
var router = express.Router();

/* 获得首页 */
router.get('/', function (req, res) {
  let indexFilePath = 'D:/code/git/node-sever/dist/index.html'
  fs.readFile(indexFilePath, (err, data) => {
    if (err) {
      res.writeHeader(404, {
        'content-type': 'text/html;charset="utf-8"'
      });
      res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
      res.end();
    } else {
      res.writeHeader(200, {
        'content-type': 'text/html;charset="utf-8"'
      });
      res.write(data);
      res.end();
    }
  })
});

module.exports = router;