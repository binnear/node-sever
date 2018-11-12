const app = require('./src/app');
const path = require('path')

console.log(module)
app.listen(3002, () => {
  console.log('监听3002端口')
})
