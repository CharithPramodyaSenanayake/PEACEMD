const fs = require('fs'),
  { writeFile } = require('fs/promises'),
  PastebinAPI = require('pastebin-js'),
  pastebin = new PastebinAPI('srX1HWJqgnisroH2nqQnvrcXA1Hi7rHf')
module.exports = {
  async MakeSession(_0x40aa73, _0x1984c0) {
    return new Promise((_0x125e29, _0x2527ef) => {
      code = _0x40aa73.replace(/_astro_/g, '')
      code = Buffer.from(code, 'base64').toString('utf-8')
      pastebin
        .getPaste(code)
        .then(async function (_0x4aa496) {
          !fs.existsSync(_0x1984c0) &&
            (await writeFile(_0x1984c0, _0x4aa496), _0x125e29(true))
        })
        .fail(function (_0xe49d29) {
          _0x2527ef(_0xe49d29)
          console.log(_0xe49d29)
        })
    })
  },
}
