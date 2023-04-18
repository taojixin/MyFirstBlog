const path = require('path')
const fs = require('fs')
const md = require('markdown-it')()

const cssBasic = (req, res, next) => {
  let mdPath = path.join(__dirname, 'CSS.md')
  fs.readFile(mdPath, 'utf-8', (err, data) => {
    if (err) return;
    else {
      let result = md.render(data);
      res.end(result)
    }
  })
}

module.exports = {
  cssBasic
}
