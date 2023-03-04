const _0x455e34 = (function () {
  let _0x1fe59b = true
  return function (_0x71c7c4, _0x667e9a) {
    const _0x265cef = _0x1fe59b
      ? function () {
        if (_0x667e9a) {
          const _0x9525fd = _0x667e9a.apply(_0x71c7c4, arguments)
          return (_0x667e9a = null), _0x9525fd
        }
      }
      : function () { }
    return (_0x1fe59b = false), _0x265cef
  }
})(),
  _0x1c65d4 = _0x455e34(this, function () {
    return _0x1c65d4
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x1c65d4)
      .search('(((.+)+)+)+$')
  })
_0x1c65d4()
const _0x3a2f1a = (function () {
  let _0x270a63 = true
  return function (_0xabcbd1, _0x3e5c36) {
    const _0x1061a6 = _0x270a63
      ? function () {
        if (_0x3e5c36) {
          const _0x2a050d = _0x3e5c36.apply(_0xabcbd1, arguments)
          return (_0x3e5c36 = null), _0x2a050d
        }
      }
      : function () { }
    return (_0x270a63 = false), _0x1061a6
  }
})()
  ; (function () {
    _0x3a2f1a(this, function () {
      const _0x16e6d0 = new RegExp('function *\\( *\\)'),
        _0x484ac8 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
        _0x4db6aa = _0x3051eb('init')
      if (
        !_0x16e6d0.test(_0x4db6aa + 'chain') ||
        !_0x484ac8.test(_0x4db6aa + 'input')
      ) {
        _0x4db6aa('0')
      } else {
        _0x3051eb()
      }
    })()
  })()
const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  getContentType,
  fetchLatestBaileysVersion,
  jidNormalizedUser,
  downloadContentFromMessage,
  Browsers,
  jidDecode,
} = require('@adiwajshing/baileys')
const { sms } = require('./lib/message'),
  { writeFile } = require('fs/promises'),
  {
    imageToWebp,
    videoToWebp,
    writeExif,
    downloadMediaMessage,
  } = require('./lib/stic'),
  ffmpeg = require('fluent-ffmpeg'),
  { mediafire } = require('./lib/mediafire.js'),
  fetch = require('node-fetch'),
  { fetchJson } = require('./lib/myfunc.js')
const {
  getVideoWithTubeMp3,
  getAudioWithTubeMp3,
} = require('./lib/tubemp3-biz.js'),
  { ytdl } = require('whatsapp-bot-pack'),
  comboapk = require('apkcombo-scraper'),
  fs = require('fs'),
  videotime = 6000,
  dlsize = 70,
  os = require('os'),
  { wiki } = require('./lib/wiki.js')
let yts = require('yt-search')
const jimp = require('jimp'),
  xa = require('xfarr-api'),
  { File } = require('megajs'),
  pino = require('pino'),
  { Youtube } = require('./lib/y2mate'),
  ytdnew = new Youtube(),
  cheerio = require('cheerio'),
  ttss = require('soundoftext-js'),
  qrcode = require('qrcode-terminal'),
  FileType = require('file-type'),
  util = require('util'),
  config = require('./config'),
  axios = require('axios'),
  { dbM } = require('postgres_dbm'),
  {
    redeploy,
    getvar,
    delvar,
    getallvar,
    change_env,
    get_deployments,
  } = require('./lib/koyeb_port.js'),
  {
    ogwhatsapp,
    waplus,
    gbwa,
    fmwa,
    yowa,
    goldwa,
    aerowa,
  } = require('./lib/whatsappinstalling-scraper.js'),
  l = console.log
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
} = require('./lib/functions'),
  { logjs } = require('./lib/log')
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
  const sessdata = config.SESSION_ID.replace('ASTRO=', ''),
    filer = File.fromURL('https://mega.nz/file/' + sessdata)
  filer.download((_0x2e13e1, _0x1d29a5) => {
    if (_0x2e13e1) {
      throw _0x2e13e1
    }
    fs.writeFile(__dirname + '/auth_info_baileys/creds.json', _0x1d29a5, () => {
      console.log('Vesrion : ' + require('./package.json').version)
    })
  })
}
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8000,
  prefix = '.',
  owner = ['9412448370']
fs.existsSync('./Language/' + config.LANG + '.json')
  ? (lang = require('./Language/' + config.LANG + '.json'))
  : (lang = require('./Language/EN.json'))
  ; (function () {
    const _0x3fc885 = function () {
      let _0x228dcc
      try {
        _0x228dcc = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x391edb) {
        _0x228dcc = window
      }
      return _0x228dcc
    },
      _0x5a1d67 = _0x3fc885()
    _0x5a1d67.setInterval(_0x3051eb, 4000)
  })()
async function connectToWA() {
  console.log('Syncing Database')
  const { state: _0x494f47, saveCreds: _0x2f8a69 } =
    await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
  const _0x351799 = makeWASocket({
    logger: pino({ level: 'silent' }),
    printQRInTerminal: true,
    auth: _0x494f47,
    patchMessageBeforeSending: (_0x577748) => {
      const _0x46c944 = !!(
        _0x577748.buttonsMessage ||
        _0x577748.templateMessage ||
        _0x577748.listMessage
      )
      if (_0x46c944) {
        const _0x2c0c1f = {
          deviceListMetadataVersion: 2,
          deviceListMetadata: {},
        }
        _0x577748 = {
          viewOnceMessage: {
            message: {
              messageContextInfo: _0x2c0c1f,
              ..._0x577748,
            },
          },
        }
      }
      return _0x577748
    },
  })
  _0x351799.ev.on('connection.update', async (_0x47c5c5) => {
    const { connection: _0x565023, lastDisconnect: _0x565ea7 } = _0x47c5c5
    if (_0x565023 === 'close') {
      _0x565ea7.error.output.statusCode !== DisconnectReason.loggedOut &&
        connectToWA()
    } else {
      if (_0x565023 === 'open') {
        logjs()
        const _0xc88298 = jidNormalizedUser(_0x351799.user.id)
        let _0x48ba82 = require('./package.json').version,
          _0x5f3292 =
            '*● ═══════════════════ ●*\n_*PEACE-MD Connected Successful  ☑️*_\n*● ═══════════════════ ●*\n\n*Version :* ' +
            _0x48ba82 +
            '\n*Host on :* ' +
            config.HOST +
            '\n*Device :* Android\n*Language :* ' +
            config.LANG +
            '\n\n\n*' +
            lang.CONNECTED +
            ' 💗*'
        const _0x2ce752 = {
          displayText:
            '👨‍🔧 Join support group 👨‍🔧',
        }
        const _0x43e55b = {
          buttonId: prefix + 'joinsup',
          buttonText: _0x2ce752,
          type: 1,
        }
        let _0x4a72d2 = [_0x43e55b]
        const _0x4e6a81 = { url: config.ALIVE_LOGO }
        const _0x4000f7 = {
          image: _0x4e6a81,
          caption: _0x5f3292,
          footer: config.FOOTER,
          headerType: 4,
          buttons: _0x4a72d2,
        }
        let _0x3edbfb = _0x4000f7
        await _0x351799.sendMessage(_0xc88298, _0x3edbfb)
      }
    }
  })
  _0x351799.ev.on('creds.update', _0x2f8a69)
  _0x351799.ev.on('messages.upsert', async (_0x3aec85) => {
    try {
      _0x3aec85 = _0x3aec85.messages[0]
      if (!_0x3aec85.message) {
        return
      }
      _0x3aec85.message =
        getContentType(_0x3aec85.message) === 'ephemeralMessage'
          ? _0x3aec85.message.ephemeralMessage.message
          : _0x3aec85.message
      if (_0x3aec85.key && _0x3aec85.key.remoteJid === 'status@broadcast') {
        return
      }
      const _0x217ebe = getContentType(_0x3aec85.message),
        _0x290bbb = JSON.stringify(_0x3aec85.message),
        _0x25807e = _0x3aec85.key.remoteJid,
        _0x3b0c55 =
          _0x217ebe == 'extendedTextMessage' &&
            _0x3aec85.message.extendedTextMessage.contextInfo != null
            ? _0x3aec85.message.extendedTextMessage.contextInfo.quotedMessage ||
            []
            : [],
        _0x12adbd =
          _0x217ebe === 'conversation'
            ? _0x3aec85.message.conversation
            : _0x217ebe === 'extendedTextMessage'
              ? _0x3aec85.message.extendedTextMessage.text
              : _0x217ebe == 'imageMessage' &&
                _0x3aec85.message.imageMessage.caption
                ? _0x3aec85.message.imageMessage.caption
                : _0x217ebe == 'listResponseMessage' &&
                  _0x3aec85.message.listResponseMessage.singleSelectReply
                    .selectedRowId
                  ? _0x3aec85.message.listResponseMessage.singleSelectReply
                    .selectedRowId
                  : _0x217ebe == 'buttonsResponseMessage' &&
                    _0x3aec85.message.buttonsResponseMessage.selectedButtonId
                    ? _0x3aec85.message.buttonsResponseMessage.selectedButtonId
                    : _0x217ebe == 'templateButtonReplyMessage' &&
                      _0x3aec85.message.templateButtonReplyMessage.selectedId
                      ? _0x3aec85.message.templateButtonReplyMessage.selectedId
                      : _0x217ebe == 'videoMessage' &&
                        _0x3aec85.message.videoMessage.caption
                        ? _0x3aec85.message.videoMessage.caption
                        : '',
        _0x5b787c = _0x12adbd.startsWith(prefix),
        _0x22742f = _0x5b787c
          ? _0x12adbd
            .slice(prefix.length)
            .trim()
            .split(' ')
            .shift()
            .toLowerCase()
          : '',
        _0x69067b = _0x12adbd.trim().split(/ +/).slice(1),
        _0x524ab0 = _0x69067b.join(' '),
        _0x1671f3 = _0x25807e.endsWith('@g.us'),
        _0x29425c = _0x3aec85.key.fromMe
          ? _0x351799.user.id.split(':')[0] + '@s.whatsapp.net' ||
          _0x351799.user.id
          : _0x3aec85.key.participant || _0x3aec85.key.remoteJid,
        _0x3a57d3 = _0x29425c.split('@')[0],
        _0x39de1d = _0x351799.user.id.split(':')[0],
        _0x58e654 = _0x3aec85.pushName || 'Sin Nombre',
        _0x5571c6 = _0x39de1d.includes(_0x3a57d3),
        _0x21e8ba = owner.includes(_0x3a57d3) || _0x5571c6,
        _0x2371ba = (_0x5d615a) => {
          const _0x26ada9 = { text: _0x5d615a }
          const _0x5554a4 = { quoted: _0x3aec85 }
          _0x351799.sendMessage(_0x25807e, _0x26ada9, _0x5554a4)
        },
        _0x2deb9b = _0x3aec85.isGroup
          ? await _0x351799
            .groupMetadata(_0x3aec85.chat)
            .catch((_0xab9547) => { })
          : '',
        _0x59564b = _0x3aec85.isGroup ? _0x2deb9b.subject : '',
        _0x11109f = _0x3aec85.isGroup ? await _0x2deb9b.participants : '',
        _0x2edb02 = _0x3aec85.isGroup
          ? await _0x11109f
            .filter((_0x3c353e) => _0x3c353e.admin !== null)
            .map((_0x1883ce) => _0x1883ce.id)
          : '',
        _0x1f6d97 = _0x3aec85.isGroup ? _0x2deb9b.owner : '',
        _0x34a5ff = _0x3aec85.isGroup ? _0x2edb02.includes(_0x39de1d) : false,
        _0x33d96a = _0x3aec85.isGroup
          ? _0x2edb02.includes(_0x3aec85.sender)
          : false,
        {
          youtubedl: _0x707a01,
          youtubedlv2: _0x262445,
          youtubedlv3: _0x300baa,
        } = require('@bochilteam/scraper')
      if (!_0x21e8ba && _0x12adbd.includes('chat.whatsapp.com')) {
        const _0x43b067 = { delete: _0x3aec85.key }
        await _0x351799.sendMessage(_0x25807e, _0x43b067)
      }
      if (_0x5b787c && !_0x1671f3 && config.ONLY_GROUP == 'true') {
        return _0x2371ba(config.INBOX_BL_MSG)
      }
      if (_0x25807e === '120363025246125888@g.us') {
        return
      }
      if (_0x25807e === '120363028440299317@g.us') {
        return
      }
      if (_0x25807e === '120363043598019970@g.us') {
        return
      }
      _0x351799.sendFileUrl = async (
        _0x520ec2,
        _0x412abf,
        _0x56ff7b,
        _0x5da967,
        _0x173d27 = {}
      ) => {
        let _0x20186c = '',
          _0x9b3eab = await axios.head(_0x412abf)
        _0x20186c = _0x9b3eab.headers['content-type']
        if (_0x20186c.split('/')[1] === 'gif') {
          return _0x351799.sendMessage(
            _0x520ec2,
            {
              video: await getBuffer(_0x412abf),
              caption: _0x56ff7b,
              gifPlayback: true,
              ..._0x173d27,
            },
            {
              quoted: _0x5da967,
              ..._0x173d27,
            }
          )
        }
        let _0x549270 = _0x20186c.split('/')[0] + 'Message'
        if (_0x20186c === 'application/pdf') {
          return _0x351799.sendMessage(
            _0x520ec2,
            {
              document: await getBuffer(_0x412abf),
              mimetype: 'application/pdf',
              caption: _0x56ff7b,
              ..._0x173d27,
            },
            {
              quoted: _0x5da967,
              ..._0x173d27,
            }
          )
        }
        if (_0x20186c.split('/')[0] === 'image') {
          return _0x351799.sendMessage(
            _0x520ec2,
            {
              image: await getBuffer(_0x412abf),
              caption: _0x56ff7b,
              ..._0x173d27,
            },
            {
              quoted: _0x5da967,
              ..._0x173d27,
            }
          )
        }
        if (_0x20186c.split('/')[0] === 'video') {
          return _0x351799.sendMessage(
            _0x520ec2,
            {
              video: await getBuffer(_0x412abf),
              caption: _0x56ff7b,
              mimetype: 'video/mp4',
              ..._0x173d27,
            },
            {
              quoted: _0x5da967,
              ..._0x173d27,
            }
          )
        }
        if (_0x20186c.split('/')[0] === 'audio') {
          return _0x351799.sendMessage(
            _0x520ec2,
            {
              audio: await getBuffer(_0x412abf),
              caption: _0x56ff7b,
              mimetype: 'audio/mpeg',
              ..._0x173d27,
            },
            {
              quoted: _0x5da967,
              ..._0x173d27,
            }
          )
        }
      }
      const {
        readFileSync: _0x2c4526,
        existsSync: _0x1e9454,
        mkdirSync: _0x5a0af7,
        createWriteStream: _0x4b6724,
      } = require('fs'),
        {
          Innertube: _0x8d492f,
          UniversalCache: _0x104690,
        } = require('youtubei.js'),
        {
          streamToIterable: _0x2ed74c,
        } = require('youtubei.js/dist/src/utils/Utils')
      async function _0x119db(_0xb0d8d8) {
        const _0x5c9e72 = await _0x8d492f.create({ cache: new _0x104690() }),
          _0x300a0b = await _0x5c9e72.getBasicInfo(_0xb0d8d8)
        return _0x300a0b.basic_info.title
      }
      async function _0x329635(_0x461310) {
        const _0x24648c = await _0x8d492f.create({ cache: new _0x104690() }),
          _0x530d75 = await _0x24648c.resolveURL(_0x461310)
        return _0x530d75
      }
      async function _0x2ca70a(_0x1c9b70, _0x2e5590 = '360p') {
        const _0xf487ff = await _0x8d492f.create({ cache: new _0x104690() }),
          _0x231e6c = new Date().getTime(),
          _0x4c5b37 = {
            type: 'video+audio',
            quality: _0x2e5590,
            format: 'mp4',
          }
        const _0x7d1272 = await _0xf487ff.download(_0x1c9b70, _0x4c5b37),
          _0x2f5ee7 = _0x4b6724('./ytv.mp4')
        for await (const _0x35bef7 of _0x2ed74c(_0x7d1272)) {
          _0x2f5ee7.write(_0x35bef7)
        }
        return './ytv.mp4'
      }
      async function _0x1e96df(_0x3ff14e, _0x1cdca8 = '360p') {
        const _0x2c2b46 = await _0x8d492f.create({ cache: new _0x104690() }),
          _0x52803f = new Date().getTime(),
          _0x28079c = {
            type: 'video+audio',
            quality: _0x1cdca8,
            format: 'mp4',
          }
        const _0x4c510e = await _0x2c2b46.download(_0x3ff14e, _0x28079c),
          _0x381532 = _0x4b6724('./ytv1.mp4')
        for await (const _0x30436a of _0x2ed74c(_0x4c510e)) {
          _0x381532.write(_0x30436a)
        }
        return './ytv1.mp4'
      }
      async function _0x2fb19f(_0x495590) {
        const _0x207bfe = await _0x8d492f.create({ cache: new _0x104690() }),
          _0x58e06c = {
            type: 'audio',
            quality: 'best',
            format: 'mp4',
          }
        const _0x1047f1 = await _0x207bfe.download(_0x495590, _0x58e06c),
          _0x284508 = _0x4b6724('./song.mp3')
        for await (const _0xf46914 of _0x2ed74c(_0x1047f1)) {
          _0x284508.write(_0xf46914)
        }
        return './song.mp3'
      }
      config.HOST == 'KOYEB' ? (dlmbsize = 35) : (dlmbsize = 100)
      config.HOST == 'KOYEB' ? (dlmbsize2 = 40000) : (dlmbsize2 = 100000)
      switch (_0x22742f) {
        case 'joinsup':
          {
            let _0x4a9c42 = await axios.get(
              'https://raw.githubusercontent.com/CharithPramodyaSenanayake/reqforbot/main/bios'
            )
            await _0x351799
              .groupAcceptInvite(_0x4a9c42.data.gclink)
              .then((_0xf2cfc8) => _0x2371ba('joined support group ✅'))
              .catch((_0x4fc019) => _0x2371ba('Try again later !'))
          }
          break
        case 'downmenu':
          try {
            const _0x4c05ca = {
              text: '⬇️',
              key: _0x3aec85.key,
            }
            const _0xeac00a = { react: _0x4c05ca }
            _0x351799.sendMessage(_0x25807e, _0xeac00a)
            let _0xa0b347 =
              '*● ═════════════════ ●*\n_*PEACEMD DOWNLOAD MENU*_\n*● ═════════════════ ●*\n\n*👨🏼‍🚀Command :* .song\n*💭Desc :* Download yt songs.\n*🙇🏻‍♂️Use:* .song bombe motayi\n\n*👨🏼‍🚀Command :* .video\n*💭Desc :* Download yt videos.\n*🙇🏻‍♂️Use:* .video bombe motayi\n\n*👨🏼‍🚀Command :* .yt \n*💭Desc :* Download yt videos/songs.\n*🙇🏻‍♂️Use:* .yt bombe motayi\n\n*👨🏼‍🚀Command :* .fb\n*💭Desc :* Download fb videos.\n*🙇🏻‍♂️Use:* .fb <Fb video link>\n\n*👨🏼‍🚀Command :* .mediafire\n*💭Desc :* Download mediafire files.\n*🙇🏻‍♂️Use:* .mediafire <mediafire link>\n\n*👨🏼‍🚀Command :* .gdrive\n*💭Desc :* Download google drive files.\n*🙇🏻‍♂️Use:* .gdrive <Google drive link>\n\n*👨🏼‍🚀Command :* .img\n*💭Desc :* Download google images.\n*🙇🏻‍♂️Use:* .img car\n\n*👨🏼‍🚀Command :* .tiktok\n*💭Desc :* Download tiktok videos.\n*🙇🏻‍♂️Use:* .tiktok <Tiktok link>\n\n*👨🏼‍🚀Command :* .ig\n*💭Desc :* Download instagram videos/photos.\n*🙇🏻‍♂️Use:* .tiktok <Instagram link>\n\n*👨🏼‍🚀Command :* .git\n*💭Desc :* Download git repoes.\n*🙇🏻‍♂️Use:* .git <Github repo link>\n'
            const _0x2be225 = { displayText: '✨ Rate us ✨' }
            const _0x4cf481 = {
              buttonId: prefix + 'rate',
              buttonText: _0x2be225,
              type: 1,
            }
            const _0xd0bf27 = {
              displayText: '📚 Script 📚',
            }
            const _0x229fab = {
              buttonId: prefix + 'owner',
              buttonText: _0xd0bf27,
              type: 1,
            }
            let _0xda7f6b = [_0x4cf481, _0x229fab]
            const _0x22ccc8 = { url: config.ALIVE_LOGO }
            const _0x48bed0 = {
              image: _0x22ccc8,
              caption: _0xa0b347,
              footer: config.FOOTER,
              headerType: 4,
              buttons: _0xda7f6b,
            }
            let _0x218b49 = _0x48bed0
            const _0x28ac2f = { quoted: _0x3aec85 }
            return await _0x351799.sendMessage(_0x25807e, _0x218b49, _0x28ac2f)
          } catch (_0x3a8140) {
            l(_0x3a8140)
            const _0x309fad = { quoted: _0x3aec85 }
            _0x351799.sendMessage(
              _0x25807e,
              { text: 'err' + _0x3a8140 },
              _0x309fad
            )
          }
          break
        case 'searchmenu':
          try {
            const _0x6db5ec = {
              text: '🕵🏻',
              key: _0x3aec85.key,
            }
            const _0x225f49 = { react: _0x6db5ec }
            _0x351799.sendMessage(_0x25807e, _0x225f49)
            let _0x11b6c6 =
              '*● ══════════════ ●*\n_*PEACEMD SEARCH MENU*_\n*● ══════════════ ●*\n\n*👨🏼‍🚀Command :* .yts\n*💭Desc :* Search youtube links.\n*🙇🏻‍♂️Use:* .yts bombe motayi\n\n*👨🏼‍🚀Command :* .npm\n*💭Desc :* Search npm packages.\n*🙇🏻‍♂️Use:* .npm baileys\n\n*👨🏼‍🚀Command :* .lyrics \n*💭Desc :* Search lyrics.\n*🙇🏻‍♂️Use:* .lyrics alone\n\n*👨🏼‍🚀Command :* .weather\n*💭Desc :* Get details of weather.\n*🙇🏻‍♂️Use:* .weather colombo\n\n*👨🏼‍🚀Command :* .planet\n*💭Desc :* Get planets details.\n*🙇🏻‍♂️Use:* .planet\n\n*👨🏼‍🚀Command :* .quote\n*💭Desc :* Get random quotes.\n*🙇🏻‍♂️Use:* .quote\n\n*👨🏼‍🚀Command :* .wiki\n*💭Desc :* Get details from wikipedia.\n*🙇🏻‍♂️Use:* .wiki telephone\n\n*👨🏼‍🚀Command :* .ff\n*💭Desc :* Get nickname of given id.\n*🙇🏻‍♂️Use:* .ff 1821481021\n\n*👨🏼‍🚀Command :* .sig\n*💭Desc :* Search instagram users.\n*🙇🏻‍♂️Use:* .sig helloweenofficial\n\n*👨🏼‍🚀Command :* .stiktok\n*💭Desc :* Search tiktok users.\n*🙇🏻‍♂️Use:* .stiktok vihanga_yt\n\n*👨🏼‍🚀Command :* .stw\n*💭Desc :* Search twitter users.\n*🙇🏻‍♂️Use:* .stw WhatsApp \n\n*👨🏼‍🚀Command :* .ip\n*💭Desc :* Get details from ip.\n*🙇🏻‍♂️Use:* .ip 66.249.66.40\n\n*👨🏼‍🚀Command :* .movie\n*💭Desc :* Search movies.\n*🙇🏻‍♂️Use:* .movie avatar\n\n*👨🏼‍🚀Command :* .joke\n*💭Desc :* Get random english jokes.\n*🙇🏻‍♂️Use:* .joke\n\n*👨🏼‍🚀Command :* .findsong\n*💭Desc :* Get details of song.\n*🙇🏻‍♂️Use:* .findsong <Reply to song>\n'
            const _0xbdaf31 = { displayText: '✨ Rate us ✨' }
            const _0x1c5011 = {
              buttonId: prefix + 'rate',
              buttonText: _0xbdaf31,
              type: 1,
            }
            const _0x41ab1b = {
              displayText: '📚 Script 📚',
            }
            const _0x3735c2 = {
              buttonId: prefix + 'owner',
              buttonText: _0x41ab1b,
              type: 1,
            }
            let _0x35d932 = [_0x1c5011, _0x3735c2]
            const _0x1b5db8 = { url: config.ALIVE_LOGO }
            const _0x235c29 = {
              image: _0x1b5db8,
              caption: _0x11b6c6,
              footer: config.FOOTER,
              headerType: 4,
              buttons: _0x35d932,
            }
            let _0x3d8ef2 = _0x235c29
            const _0x37699b = { quoted: _0x3aec85 }
            return await _0x351799.sendMessage(_0x25807e, _0x3d8ef2, _0x37699b)
          } catch (_0x128e5a) {
            l(_0x128e5a)
            const _0x25cd6e = { quoted: _0x3aec85 }
            _0x351799.sendMessage(
              _0x25807e,
              { text: 'err' + _0x128e5a },
              _0x25cd6e
            )
          }
          break
        case 'convertmenu':
          try {
            const _0x11ed42 = {
              text: '🔄',
              key: _0x3aec85.key,
            }
            const _0x1cef88 = { react: _0x11ed42 }
            _0x351799.sendMessage(_0x25807e, _0x1cef88)
            let _0xb7a88c =
              '*● ══════════════ ●*\n_*PEACEMD CONVERT MENU*_\n*● ══════════════ ●*\n\n*👨🏼‍🚀Command :* .sticker\n*💭Desc :* Convers image to whatsapp sticker.\n*🙇🏻‍♂️Use:* .sticker <Reply to image>\n\n*👨🏼‍🚀Command :* .readmore\n*💭Desc :* Convert text to whatsapp readmore msg.\n*🙇🏻‍♂️Use:* .readmore hi\n\n*👨🏼‍🚀Command :* .flip \n*💭Desc :* Flip any text.\n*🙇🏻‍♂️Use:* .flip im good boy\n\n*👨🏼‍🚀Command :* .tinyurl\n*💭Desc :* Convert url to tinyurl.\n*🙇🏻‍♂️Use:* .tinyurl <Any link>\n\n*👨🏼‍🚀Command :* .emix\n*💭Desc :* Mix given two emojies.\n*🙇🏻‍♂️Use:* .emix \uD83E\uDD14,\uD83D\uDE0A\n\n*👨🏼‍🚀Command :* .attp\n*💭Desc :* Convers text to defferent stickers.\n*🙇🏻‍♂️Use:* .attp hello\n\n*👨🏼‍🚀Command :* .ttp\n*💭Desc :* Convers text to defferent stickers.\n*🙇🏻‍♂️Use:* .ttp hello\n\n*👨🏼‍🚀Command :* .tts\n*💭Desc :* Convert text to voice.\n*🙇🏻‍♂️Use:* .tts hello im bot\n\n*👨🏼‍🚀Command :* .ss\n*💭Desc :* Get screenshot of given link.\n*🙇🏻‍♂️Use:* .ss <Any link>\n\n*👨🏼‍🚀Command :* .ss2\n*💭Desc :* Get screenshot of given link.\n*🙇🏻‍♂️Use:* .ss2 <Any link>\n\n*👨🏼‍🚀Command :* .qr\n*💭Desc :* Convert text to qr code.\n*🙇🏻‍♂️Use:* .qr hello \n\n*👨🏼‍🚀Command :* .removebg\n*💭Desc :* Remove background.\n*🙇🏻‍♂️Use:* .removebg <Reply to image>\n'
            const _0x1a1418 = { displayText: '✨ Rate us ✨' }
            const _0x25a876 = {
              buttonId: prefix + 'rate',
              buttonText: _0x1a1418,
              type: 1,
            }
            const _0x13ee8a = {
              displayText: '📚 Script 📚',
            }
            const _0x522f2b = {
              buttonId: prefix + 'owner',
              buttonText: _0x13ee8a,
              type: 1,
            }
            let _0x2be8b4 = [_0x25a876, _0x522f2b]
            const _0x37095e = { url: config.ALIVE_LOGO }
            const _0x587b27 = {
              image: _0x37095e,
              caption: _0xb7a88c,
              footer: config.FOOTER,
              headerType: 4,
              buttons: _0x2be8b4,
            }
            let _0x4b421d = _0x587b27
            const _0x1282ef = { quoted: _0x3aec85 }
            return await _0x351799.sendMessage(_0x25807e, _0x4b421d, _0x1282ef)
          } catch (_0x5b6112) {
            l(_0x5b6112)
            const _0x192002 = { quoted: _0x3aec85 }
            _0x351799.sendMessage(
              _0x25807e,
              { text: 'err' + _0x5b6112 },
              _0x192002
            )
          }
          break
        case 'othermenu':
          try {
            const _0x4bd74d = {
              text: '👾',
              key: _0x3aec85.key,
            }
            const _0x5e2bc4 = { react: _0x4bd74d }
            _0x351799.sendMessage(_0x25807e, _0x5e2bc4)
            let _0x12da88 =
              "*● ══════════════ ●*\n_*PEACEMD OTHER MENU*_\n*● ══════════════ ●*\n\n*👨🏼‍🚀Command :* .alive\n*💭Desc :* Check bot online or no.\n*🙇🏻‍♂️Use:* .alive\n\n*👨🏼‍🚀Command :* .update\n*💭Desc :* Update youre bot.\n*🙇🏻‍♂️Use:* .update\n\n*👨🏼‍🚀Command :* .runtime \n*💭Desc :* Get bot's uptime.\n*🙇🏻‍♂️Use:* .runtime\n\n*👨🏼‍🚀Command :* .ping\n*💭Desc :* Check bot's speed.\n*🙇🏻‍♂️Use:* .tinyurl <Any link>\n"
            const _0x49f20e = { displayText: '✨ Rate us ✨' }
            const _0x48fd2e = {
              buttonId: prefix + 'rate',
              buttonText: _0x49f20e,
              type: 1,
            }
            const _0x32374c = {
              displayText: '📚 Script 📚',
            }
            const _0x44fe96 = {
              buttonId: prefix + 'owner',
              buttonText: _0x32374c,
              type: 1,
            }
            let _0x1a7ee9 = [_0x48fd2e, _0x44fe96]
            const _0x198717 = { url: config.ALIVE_LOGO }
            const _0x25b0d3 = {
              image: _0x198717,
              caption: _0x12da88,
              footer: config.FOOTER,
              headerType: 4,
              buttons: _0x1a7ee9,
            }
            let _0x336ade = _0x25b0d3
            const _0x547759 = { quoted: _0x3aec85 }
            return await _0x351799.sendMessage(_0x25807e, _0x336ade, _0x547759)
          } catch (_0x488f92) {
            l(_0x488f92)
            const _0x339c35 = { quoted: _0x3aec85 }
            _0x351799.sendMessage(
              _0x25807e,
              { text: 'err' + _0x488f92 },
              _0x339c35
            )
          }
          break
        case 'adminmenu':
          try {
            const _0x3489bf = {
              text: '👾',
              key: _0x3aec85.key,
            }
            const _0x46180d = { react: _0x3489bf }
            _0x351799.sendMessage(_0x25807e, _0x46180d)
            let _0x379547 =
              '*● ══════════════ ●*\n_*PEACE ADMIN MENU*_\n*● ══════════════ ●*\n\n*👨🏼‍🚀Command :* .\n*💭Desc :* .\n*🙇🏻‍♂️Use:* .\n'
            const _0x3b5894 = { displayText: '✨ Rate us ✨' }
            const _0x4ea2ea = {
              buttonId: prefix + 'rate',
              buttonText: _0x3b5894,
              type: 1,
            }
            const _0x6c9377 = {
              displayText: '📚 Script 📚',
            }
            const _0x28f5bd = {
              buttonId: prefix + 'owner',
              buttonText: _0x6c9377,
              type: 1,
            }
            let _0x473394 = [_0x4ea2ea, _0x28f5bd]
            const _0x283783 = { url: config.ALIVE_LOGO }
            const _0x55984a = {
              image: _0x283783,
              caption: _0x379547,
              footer: config.FOOTER,
              headerType: 4,
              buttons: _0x473394,
            }
            let _0x4b3076 = _0x55984a
            const _0x4cbf4c = { quoted: _0x3aec85 }
            return await _0x351799.sendMessage(_0x25807e, _0x4b3076, _0x4cbf4c)
          } catch (_0x5d3095) {
            l(_0x5d3095)
            const _0x41291e = { quoted: _0x3aec85 }
            _0x351799.sendMessage(
              _0x25807e,
              { text: 'err' + _0x5d3095 },
              _0x41291e
            )
          }
          break
        case 'menu':
        case 'help':
        case 'pannel':
        case 'list':
          {
            const _0xd6dad = {
              text: '📋',
              key: _0x3aec85.key,
            }
            const _0x328bfb = { react: _0xd6dad }
            _0x351799.sendMessage(_0x25807e, _0x328bfb)
            const _0x1ff8d4 = [
              {
                title: 'Section 1',
                rows: [
                  {
                    title: 'DOWNLOADING COMMANDS MENU',
                    rowId: prefix + 'downmenu',
                  },
                  {
                    title: 'SEARCHING COMMANDS MENU',
                    rowId: prefix + 'searchmenu',
                  },
                  {
                    title: 'CONVERTING COMMANDS MENU',
                    rowId: prefix + 'convertmenu',
                  },
                  {
                    title: 'ADMIN COMMANDS MENU',
                    rowId: prefix + 'adminmenu',
                  },
                  {
                    title: 'OTHER COMMANDS MENU',
                    rowId: prefix + 'othermenu',
                  },
                ],
              },
            ]
            let _0x222c84 =
              '*● ═════════════════ ●*\n_*PEACE-MD COMMANDS MENU*_\n*● ═════════════════ ●*\n\n*🔌 Os:* ' +
              os.platform() +
              '\n*🎲 Platform:* ' +
              config.HOST +
              '\n*🏃🏻 Runtime:* ' +
              runtime(process.uptime()) +
              '\n*🖥️ Memory:* ' +
              (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
              'MB / ' +
              Math.round(require('os').totalmem / 1024 / 1024) +
              'MB\n*📲 Version:* ' +
              require('./package.json').version +
              '\n\n_*Please select menu category from here ⤵️*_'
            const _0x32f919 = {
              text: _0x222c84,
              footer: config.FOOTER,
              title: '',
              buttonText: 'Select Category',
              sections: _0x1ff8d4,
            }
            const _0x5e1427 = _0x32f919,
              _0x49ea7f = { quoted: _0x3aec85 }
            const _0x40274f = await _0x351799.sendMessage(
              _0x25807e,
              _0x5e1427,
              _0x49ea7f
            )
          }
          break
        case 'ping':
          {
            const _0x31cba2 = {
              text: '📟',
              key: _0x3aec85.key,
            }
            const _0x444775 = { react: _0x31cba2 }
            _0x351799.sendMessage(_0x25807e, _0x444775)
            var _0x3be07d = new Date().getTime()
            const _0x589399 = { text: '```Pinging To index.js!!!```' }
            const _0x27aaf3 = { quoted: _0x3aec85 }
            let _0x34b3b8 = await _0x351799.sendMessage(
              _0x25807e,
              _0x589399,
              _0x27aaf3
            )
            var _0xa7063c = new Date().getTime()
            const _0x13de2d = { delete: _0x34b3b8.key }
            await _0x351799.sendMessage(_0x25807e, _0x13de2d)
            const _0x4ce4b9 = { quoted: _0x3aec85 }
            return await _0x351799.sendMessage(
              _0x25807e,
              { text: '*Pong*\n *' + (_0xa7063c - _0x3be07d) + ' ms* ' },
              _0x4ce4b9
            )
          }
          break
        case 'alive':
          try {
            const _0x4b380c = {
              text: '✌',
              key: _0x3aec85.key,
            }
            const _0x368fb5 = { react: _0x4b380c }
            _0x351799.sendMessage(_0x25807e, _0x368fb5)
            let _0x5d3053 =
              '_HI ' +
              _0x58e654 +
              '._ \n_Im Alive Now ✌..._\n\n*Uptime:* ' +
              runtime(process.uptime()) +
              '\n*Os:* ' +
              os.platform() +
              '\n*Memory:* ' +
              (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
              'MB / ' +
              Math.round(require('os').totalmem / 1024 / 1024) +
              'MB\n*Version:* ' +
              require('./package.json').version +
              '\n\n*_Thanks for using PEACEMD BOT..._*'
            const _0x1b8584 = { displayText: 'MENU' }
            const _0x24f977 = {
              buttonId: prefix + 'menu',
              buttonText: _0x1b8584,
              type: 1,
            }
            const _0x5f4ad2 = { displayText: 'SPEED' }
            const _0x58b418 = {
              buttonId: prefix + 'ping',
              buttonText: _0x5f4ad2,
              type: 1,
            }
            let _0x5d67df = [_0x24f977, _0x58b418]
            const _0x504519 = { url: config.ALIVE_LOGO }
            const _0x64efbb = {
              image: _0x504519,
              caption: _0x5d3053,
              footer: config.FOOTER,
              headerType: 4,
              buttons: _0x5d67df,
            }
            let _0x5b38c6 = _0x64efbb
            const _0x29098b = { quoted: _0x3aec85 }
            return await _0x351799.sendMessage(_0x25807e, _0x5b38c6, _0x29098b)
          } catch (_0x4ee0d4) {
            l(_0x4ee0d4)
            const _0xfdf07e = { quoted: _0x3aec85 }
            _0x351799.sendMessage(
              _0x25807e,
              { text: 'err' + _0x4ee0d4 },
              _0xfdf07e
            )
          }
          break
        case 'readmore':
          {
            if (!_0x524ab0) {
              return _0x2371ba(lang.NEED)
            }
            _0x2371ba(
              '​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​' +
              _0x524ab0
            )
          }
          break
        case 'npm':
          {
            const _0x27f078 = {
              text: '📦',
              key: _0x3aec85.key,
            }
            const _0x365ed0 = { react: _0x27f078 }
            _0x351799.sendMessage(_0x25807e, _0x365ed0)
            if (!_0x524ab0) {
              return _0x2371ba(lang.NEED_N)
            }
            axios
              .get('https://api.npms.io/v2/search?q=' + _0x524ab0)
              .then(({ data: _0x35a0ef }) => {
                let _0x5f4ad7 = _0x35a0ef.results
                  .map(
                    ({ package: _0x378fe9 }) =>
                      '*' +
                      _0x378fe9.name +
                      '* (v' +
                      _0x378fe9.version +
                      ')\n_' +
                      _0x378fe9.links.npm +
                      '_\n_' +
                      _0x378fe9.description +
                      '_'
                  )
                  .join('\n\n')
                _0x2371ba(_0x5f4ad7)
              })
          }
          break
        case 'lyrics':
          try {
            const _0x20e44a = {
              text: '✍️',
              key: _0x3aec85.key,
            }
            const _0xe21f78 = { react: _0x20e44a }
            _0x351799.sendMessage(_0x25807e, _0xe21f78)
            if (!_0x524ab0) {
              return _0x2371ba(lang.NEED_N)
            }
            const _0x5f2a6f = await fetchJson(
              'https://api.sdbots.tk//lyrics?song=' + _0x524ab0
            )
            if (_0x5f2a6f.lyrics.includes('undefin')) {
              return _0x2371ba('*Not Found !*')
            }
            const _0x42d364 =
              '*✍️ Artist :* ' +
              _0x5f2a6f.artist +
              '\n*Title :* ' +
              _0x5f2a6f.title +
              '\n\n' +
              _0x5f2a6f.lyrics +
              '\n'
            _0x2371ba(_0x42d364)
          } catch (_0x5595cb) {
            _0x2371ba('*Not Found !*')
          }
          break
        case 'flip':
          {
            const _0x362d6f = {
              text: '♻️',
              key: _0x3aec85.key,
            }
            const _0x5aa583 = { react: _0x362d6f }
            _0x351799.sendMessage(_0x25807e, _0x5aa583)
            if (!_0x524ab0) {
              return _0x2371ba(lang.NEED)
            }
            flipe = _0x524ab0.split('').reverse().join('')
            _0x2371ba(
              '*Given text :*\n' + _0x524ab0 + '\n*Fliped text :*\n' + flipe
            )
          }
          break
        case 'joke':
          {
            const _0x4dfb5d = {
              text: '😆',
              key: _0x3aec85.key,
            }
            const _0x719a20 = { react: _0x4dfb5d }
            _0x351799.sendMessage(_0x25807e, _0x719a20)
            let _0x197c9e = await axios.get(
              'https:https://official-joke-api.appspot.com/random_joke'
            )
            _0x2371ba(
              '*🗣️ JOKE* ```' +
              _0x197c9e.setup +
              '```\n\n' +
              '*😆' +
              'PUNCHLINE' +
              '* ```' +
              _0x197c9e.punchline +
              '```\n'
            )
          }
          break
        case 'git':
        case 'sc':
        case 'script':
        case 'repo':
          {
            const _0x2958d9 = {
              text: '🏷️',
              key: _0x3aec85.key,
            }
            const _0x3d5805 = { react: _0x2958d9 }
            _0x351799.sendMessage(_0x25807e, _0x3d5805)
            let { data: _0x26612c } = await axios.get(
              'https://api.github.com/repos/CharithPramodyaSenanayake/PEACEMD'
            ),
              _0x4f6e8a =
                '*⭐ Total Stars:* _' +
                _0x26612c.stargazers_count +
                ' stars_\n*🍽️ Forks:* _' +
                _0x26612c.forks_count +
                ' forks_\n*🍁 Repo:* _github.com/CharithPramodyaSenanayake/PEACEMD_'
            _0x2371ba(_0x4f6e8a)
          }
          break
        case 'tinyurl':
        case 'shorturl':
          {
            const _0x4189cd = {
              text: '🛡️',
              key: _0x3aec85.key,
            }
            const _0x4fc0c5 = { react: _0x4189cd }
            _0x351799.sendMessage(_0x25807e, _0x4fc0c5)
            if (!_0x524ab0) {
              return _0x2371ba(lang.NEED_L)
            }
            try {
              const _0x5a16db = _0x524ab0.split(' ')[0],
                _0x112719 = await axios.get(
                  'https://tinyurl.com/api-create.php?url=' + _0x5a16db
                )
              _0x2371ba(
                '*🛡️Your Shortened URL*\n\n*Tinyurl:* ' +
                _0x112719.data
              )
            } catch (_0x1c5b12) {
              l(_0x1c5b12), _0x2371ba('*Error*')
            }
          }
          break
        case 'update':
        case 'updatenow':
          {
            if (!_0x5571c6) {
              return _0x2371ba(lang.OWNER)
            }
            const _0x386eb4 = {
              text: '⬆️',
              key: _0x3aec85.key,
            }
            const _0x359025 = { react: _0x386eb4 }
            _0x351799.sendMessage(_0x25807e, _0x359025)
            let _0x4d0a20 = await redeploy()
            return _0x2371ba(_0x4d0a20)
          }
          break
        case 'memory':
          {
            const _0x2f79a6 = {
              text: '📋',
              key: _0x3aec85.key,
            }
            const _0x4445b4 = { react: _0x2f79a6 }
            _0x351799.sendMessage(_0x25807e, _0x4445b4)
            const _0x2b36dd =
              (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
              'MB / ' +
              Math.round(require('os').totalmem / 1024 / 1024) +
              'MB',
              _0x1474d4 = { text: '```Getting Storage Status!!!```' }
            const _0x5b9581 = { quoted: _0x3aec85 }
            let _0x22012c = await _0x351799.sendMessage(
              _0x25807e,
              _0x1474d4,
              _0x5b9581
            )
            const _0x692bee = { delete: _0x22012c.key }
            await _0x351799.sendMessage(_0x25807e, _0x692bee)
            const _0x2e9704 = { quoted: _0x3aec85 }
            return await _0x351799.sendMessage(
              _0x25807e,
              { text: '*' + _0x2b36dd + '*' },
              _0x2e9704
            )
          }
          break
        case 'runtime':
          {
            const _0x25eef4 = {
              text: '📟',
              key: _0x3aec85.key,
            }
            const _0x511748 = { react: _0x25eef4 }
            _0x351799.sendMessage(_0x25807e, _0x511748)
            const _0x1ac0c4 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(
              _0x25807e,
              { text: runtime(process.uptime()) },
              _0x1ac0c4
            )
          }
          break
        case 'gdrive':
          {
            const _0x1f454c = {
              text: '📑',
              key: _0x3aec85.key,
            }
            const _0x2127d6 = { react: _0x1f454c }
            _0x351799.sendMessage(_0x25807e, _0x2127d6)
            const _0x3d94f8 = require('api-dylux')
            let _0x40e7f7 = await _0x3d94f8.GDriveDl(_0x524ab0)
            _0x2371ba(
              '*📃 File name:*  ' +
              _0x40e7f7.fileName +
              '\n*💈 File Size:* ' +
              _0x40e7f7.fileSize +
              '\n*🕹️ File type:* ' +
              _0x40e7f7.mimetype
            )
            const _0x468b5d = { url: _0x40e7f7.downloadUrl }
            const _0x57c05f = {
              document: _0x468b5d,
              fileName: _0x40e7f7.fileName,
              mimetype: _0x40e7f7.mimetype,
            }
            const _0x4e49e0 = { quoted: _0x3aec85 }
            _0x351799.sendMessage(_0x25807e, _0x57c05f, _0x4e49e0)
          }
          break
        case 'tts':
        case 'tta':
          {
            const _0x1f5af4 = {
              text: '🎙️',
              key: _0x3aec85.key,
            }
            const _0x1828d4 = { react: _0x1f5af4 }
            _0x351799.sendMessage(_0x25807e, _0x1828d4)
            const _0x124cf1 = {
              text: _0x524ab0,
              voice: 'en-US',
            }
            ttss.sounds
              .create(_0x124cf1)
              .then((_0xc78cc1) => {
                const _0x20506b = { url: _0xc78cc1 }
                const _0x52f304 = {
                  audio: _0x20506b,
                  mimetype: 'audio/mp4',
                  ptt: true,
                }
                const _0x2c936b = { quoted: _0x3aec85 }
                _0x351799.sendMessage(_0x25807e, _0x52f304, _0x2c936b)
              })
              .catch((_0x3234bb) => {
                _0x2371ba(lang.ERROR)
              })
          }
          break
        case 'emix':
          {
            const _0x25cef9 = {
              text: '🔄',
              key: _0x3aec85.key,
            }
            const _0x2bbc16 = { react: _0x25cef9 }
            _0x351799.sendMessage(_0x25807e, _0x2bbc16)
            if (!_0x524ab0) {
              return _0x2371ba(
                '*' +
                lang.EG +
                ':* ' +
                prefix +
                'emix 😅,🤔'
              )
            }
            let [_0x528274, _0x2ad12f] = _0x524ab0.split`,`,
              _0x503b37 = await fetchJson(
                'https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=' +
                encodeURIComponent(_0x528274) +
                '_' +
                encodeURIComponent(_0x2ad12f)
              )
            const {
              Sticker: _0x10b517,
              createSticker: _0x171354,
              StickerTypes: _0x189674,
            } = require('wa-sticker-formatter')
            for (let _0x53e02c of _0x503b37.results) {
              let _0x17eba9 = new _0x10b517(_0x53e02c.url, {
                pack: _0x58e654,
                author: '',
                type: _0x524ab0.includes('--crop' || '-c')
                  ? _0x189674.CROPPED
                  : _0x189674.FULL,
                categories: ['🤩', '🎉'],
                id: '12345',
                quality: 75,
                background: 'transparent',
              })
              const _0x2e624b = await _0x17eba9.toBuffer(),
                _0x545012 = { sticker: _0x2e624b }
              const _0x599576 = {}
              return (
                (_0x599576.quoted = _0x3aec85),
                _0x351799.sendMessage(_0x25807e, _0x545012, _0x599576)
              )
            }
          }
          break
        case 'sticker':
        case 's':
        case 'stic':
          try {
            const _0x232fbf = {
              text: '🔮',
              key: _0x3aec85.key,
            }
            const _0x41ea51 = { react: _0x232fbf }
            _0x351799.sendMessage(_0x25807e, _0x41ea51)
            const _0x4b60c5 = sms(_0x351799, _0x3aec85),
              {
                Sticker: _0x330384,
                createSticker: _0x1b0156,
                StickerTypes: _0x4f04ec,
              } = require('wa-sticker-formatter')
            if (_0x3b0c55) {
              var _0x200ae6 = getRandom('')
              let _0x3441ef =
                (await _0x4b60c5.quoted.download(_0x200ae6)) ||
                (await _0x4b60c5.download(_0x200ae6)),
                _0xd0a9c4 = new _0x330384(_0x3441ef, {
                  pack: _0x58e654,
                  author: '',
                  type: _0x524ab0.includes('--crop' || '-c')
                    ? _0x4f04ec.CROPPED
                    : _0x4f04ec.FULL,
                  categories: ['🤩', '🎉'],
                  id: '12345',
                  quality: 75,
                  background: 'transparent',
                })
              const _0x115c57 = await _0xd0a9c4.toBuffer(),
                _0x1088ce = { sticker: _0x115c57 }
              const _0x230389 = {}
              return (
                (_0x230389.quoted = _0x3aec85),
                _0x351799.sendMessage(_0x25807e, _0x1088ce, _0x230389)
              )
            } else {
              _0x2371ba(lang.IMG)
            }
          } catch (_0x1e53bb) {
            _0x2371ba(lang.IMG)
          }
          break
        case 'removebg':
        case 'rmbg':
          try {
            const _0x35f6ea = sms(_0x351799, _0x3aec85)
            _0x2371ba(lang.WAIT)
            const _0x2a5058 = require('file-type')
            var _0x200ae6 = getRandom('')
            let _0x292be1 = await _0x35f6ea.quoted.download(_0x200ae6),
              _0x1ab082 = await _0x2a5058.fromBuffer(_0x292be1)
            await fs.promises.writeFile('./media' + _0x1ab082.ext, _0x292be1)
            const { link: _0x536784 } = await require('raganork-bot').upload(
              './media' + _0x1ab082.ext
            ),
              _0x32edc0 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(
              _0x25807e,
              {
                image: {
                  url: 'https://raganork.ml/api/removebg?url=' + _0x536784,
                },
                caption: config.CAPTION,
              },
              _0x32edc0
            )
          } catch (_0xe36ce8) {
            const _0x3d7591 = sms(_0x351799, _0x3aec85),
              _0x4e14b0 = require('file-type')
            var _0x200ae6 = getRandom('')
            let _0x14757f = await _0x3d7591.download(_0x200ae6),
              _0x5d85c0 = await _0x4e14b0.fromBuffer(_0x14757f)
            await fs.promises.writeFile('./media' + _0x5d85c0.ext, _0x14757f)
            const { link: _0x1dbf87 } = await require('raganork-bot').upload(
              './media' + _0x5d85c0.ext
            ),
              _0x518184 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(
              _0x25807e,
              {
                image: {
                  url: 'https://raganork.ml/api/removebg?url=' + _0x1dbf87,
                },
                caption: config.CAPTION,
              },
              _0x518184
            )
          }
          break
        case 'urdw':
          try {
            const _0x535eae = {
              text: '🎥',
              key: _0x3aec85.key,
            }
            const _0x178a8b = { react: _0x535eae }
            _0x351799.sendMessage(_0x25807e, _0x178a8b)
            const _0x51c217 = {
              url: 'https://replit.com/@astromdqr/db-store#hi.mp3',
            }
            const _0x110b88 = {
              audio: _0x51c217,
              mimetype: 'audio/mpeg',
              fileName: 'h.mp3',
            }
            const _0x12de61 = { quoted: _0x3aec85 }
            let _0x26bb42 = await _0x351799.sendMessage(
              _0x25807e,
              _0x110b88,
              _0x12de61
            )
          } catch (_0x27cca0) {
            l(_0x27cca0)
            const _0x8e7bd9 = { text: lang.ERROR }
            const _0x11dfb1 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x8e7bd9, _0x11dfb1)
          }
          break
        case 'ytmp4':
          try {
            const _0x20b7ff = {
              text: '🎥',
              key: _0x3aec85.key,
            }
            const _0x2bde99 = { react: _0x20b7ff }
            _0x351799.sendMessage(_0x25807e, _0x2bde99)
            const _0x2277ae = { text: lang.NEED_L }
            const _0x3359fa = { quoted: _0x3aec85 }
            if (!_0x524ab0.includes('https')) {
              return _0x351799.sendMessage(_0x25807e, _0x2277ae, _0x3359fa)
            }
            const _0x258a22 = await getVideoWithTubeMp3(_0x524ab0),
              _0x2f1e78 = await _0x262445(_0x524ab0),
              _0x40c8ae = { text: lang.SIZE }
            const _0xd3b4c2 = { quoted: _0x3aec85 }
            if (_0x2f1e78.video['360p'].fileSize >= dlmbsize2) {
              return _0x351799.sendMessage(_0x25807e, _0x40c8ae, _0xd3b4c2)
            }
            const _0x385fc5 = { url: _0x258a22[1].url }
            const _0x160246 = {
              video: _0x385fc5,
              caption: '',
            }
            const _0xceafb6 = { quoted: _0x3aec85 }
            let _0x321b5d = await _0x351799.sendMessage(
              _0x25807e,
              _0x160246,
              _0xceafb6
            )
            const _0x36ba7d = {
              text: '🎥',
              key: _0x321b5d.key,
            }
            const _0x3eb962 = { react: _0x36ba7d }
            await _0x351799.sendMessage(_0x25807e, _0x3eb962)
            const _0x52f743 = {
              text: '✅',
              key: _0x3aec85.key,
            }
            const _0x3f62b3 = { react: _0x52f743 }
            await _0x351799.sendMessage(_0x25807e, _0x3f62b3)
          } catch (_0x3c789a) {
            l(_0x3c789a)
          }
          break
        case 'ytmp42':
          try {
            const _0x27210a = {
              text: '🎥',
              key: _0x3aec85.key,
            }
            const _0x5e30a5 = { react: _0x27210a }
            _0x351799.sendMessage(_0x25807e, _0x5e30a5)
            const _0x467bbc = { text: lang.NEED_L }
            const _0x51e846 = { quoted: _0x3aec85 }
            if (!_0x524ab0.includes('https')) {
              return _0x351799.sendMessage(_0x25807e, _0x467bbc, _0x51e846)
            }
            const _0x5d1624 = await getVideoWithTubeMp3(_0x524ab0),
              _0x319789 = await _0x262445(_0x524ab0),
              _0x527ae1 = { text: lang.SIZE }
            const _0x326305 = { quoted: _0x3aec85 }
            if (_0x319789.video['360p'].fileSize >= dlmbsize2) {
              return _0x351799.sendMessage(_0x25807e, _0x527ae1, _0x326305)
            }
            const _0x578414 = { url: _0x5d1624[0].url }
            const _0x2de319 = {
              video: _0x578414,
              caption: '',
            }
            const _0x310b05 = { quoted: _0x3aec85 }
            let _0x367be3 = await _0x351799.sendMessage(
              _0x25807e,
              _0x2de319,
              _0x310b05
            )
            const _0x2a00bd = {
              text: '🎥',
              key: _0x367be3.key,
            }
            const _0x390640 = { react: _0x2a00bd }
            await _0x351799.sendMessage(_0x25807e, _0x390640)
            const _0x29ba9a = {
              text: '✅',
              key: _0x3aec85.key,
            }
            const _0x3f6124 = { react: _0x29ba9a }
            await _0x351799.sendMessage(_0x25807e, _0x3f6124)
          } catch (_0x40e38a) {
            l(_0x40e38a)
          }
          break
        case 'ytmp3':
          try {
            const _0x5773fc = {
              text: '🎼',
              key: _0x3aec85.key,
            }
            const _0x159d66 = { react: _0x5773fc }
            _0x351799.sendMessage(_0x25807e, _0x159d66)
            const _0x257234 = { text: lang.NEED_L }
            const _0x3b5fd4 = { quoted: _0x3aec85 }
            if (!_0x524ab0.includes('https')) {
              return _0x351799.sendMessage(_0x25807e, _0x257234, _0x3b5fd4)
            }
            const _0x238f30 = await _0x329635(_0x524ab0),
              _0x1aa02c = _0x238f30.payload.videoId,
              _0x37869b = await _0x262445(_0x524ab0),
              _0x25c3cd = { text: lang.SIZE }
            const _0x415882 = { quoted: _0x3aec85 }
            if (_0x37869b.audio['128kbps'].fileSize >= dlmbsize2) {
              return _0x351799.sendMessage(_0x25807e, _0x25c3cd, _0x415882)
            }
            const _0x156422 = await _0x2fb19f(_0x1aa02c),
              _0x15ad3 = { quoted: _0x3aec85 }
            let _0x24bf80 = await _0x351799.sendMessage(
              _0x25807e,
              {
                audio: fs.readFileSync(_0x156422),
                mimetype: 'audio/mpeg',
                fileName: _0x37869b.title + '.mp3',
              },
              _0x15ad3
            )
            const _0x15ae8e = {
              text: '🎼',
              key: _0x24bf80.key,
            }
            const _0x757b21 = { react: _0x15ae8e }
            await _0x351799.sendMessage(_0x25807e, _0x757b21)
            const _0x2863c1 = {
              text: '✅',
              key: _0x3aec85.key,
            }
            const _0x34e9df = { react: _0x2863c1 }
            await _0x351799.sendMessage(_0x25807e, _0x34e9df)
          } catch (_0x265489) {
            l(_0x265489)
            const _0xf3f58d = { text: lang.ERROR }
            const _0x786001 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0xf3f58d, _0x786001)
          }
          break
        case 'ytdoc':
          try {
            const _0x409fee = {
              text: '🎼',
              key: _0x3aec85.key,
            }
            const _0x238df7 = { react: _0x409fee }
            _0x351799.sendMessage(_0x25807e, _0x238df7)
            const _0x21c071 = await _0x329635(_0x524ab0),
              _0x139512 = _0x21c071.payload.videoId,
              _0xa3b2cb = await _0x262445(_0x524ab0),
              _0x5a03f5 = { text: lang.SIZE }
            const _0x11fd94 = { quoted: _0x3aec85 }
            if (_0xa3b2cb.audio['128kbps'].fileSize >= dlmbsize2) {
              return _0x351799.sendMessage(_0x25807e, _0x5a03f5, _0x11fd94)
            }
            const _0x5e80ee = await _0x2fb19f(_0x139512),
              _0x137fc5 = { quoted: _0x3aec85 }
            let _0x24d81f = await _0x351799.sendMessage(
              _0x25807e,
              {
                document: fs.readFileSync(_0x5e80ee),
                mimetype: 'audio/mpeg',
                fileName: _0xa3b2cb.title + '.mp3',
                caption: '',
              },
              _0x137fc5
            )
            const _0x59cd56 = {
              text: '🎼',
              key: _0x24d81f.key,
            }
            const _0x575a66 = { react: _0x59cd56 }
            await _0x351799.sendMessage(_0x25807e, _0x575a66)
            const _0x48acd8 = {
              text: '✅',
              key: _0x3aec85.key,
            }
            const _0x4a3a6a = { react: _0x48acd8 }
            await _0x351799.sendMessage(_0x25807e, _0x4a3a6a)
          } catch (_0x350a9a) {
            l(_0x350a9a)
            const _0x2dda57 = { text: lang.ERROR }
            const _0x25dc20 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x2dda57, _0x25dc20)
          }
          break
        case 'play':
        case 'yt':
          try {
            const _0x4fe71b = {
              text: '🔍',
              key: _0x3aec85.key,
            }
            const _0x11caf9 = { react: _0x4fe71b }
            _0x351799.sendMessage(_0x25807e, _0x11caf9)
            if (!_0x524ab0) {
              return _0x2371ba(lang.EG + ': ' + prefix + _0x22742f + ' bombe motayi')
            }
            let _0x5d52c5 = require('yt-search'),
              _0x1b61b3 = await _0x5d52c5(_0x524ab0),
              _0x281b40 = _0x1b61b3.videos[0]
            const _0xf75a09 =
              '*● ═════════════ ●*\n _*🇵​​​​​🇪​​​​​🇦​​​​​🇨​​​​​🇪​​​​​🇲​​​​​🇩​​​​​ 🇾​​​​​🇹​​​​​ 🇩​​​​​🇴​​​​​🇼​​​​​🇳​​​​​🇱​​​​​🇴​​​​​🇦​​​​​🇩​​​​​🇪​​​​​🇷​​​​​*_\n*● ═════════════ ●*\n\n*📃 Title:* ' +
              _0x281b40.title +
              '\n*📺 Views:* ' +
              _0x281b40.views +
              '\n*🕹️ Duration:* ' +
              _0x281b40.timestamp +
              '\n*🔗 Url:* ' +
              _0x281b40.url
            let _0x3a80d3 = [
              {
                buttonId: prefix + 'ytmp4 ' + _0x281b40.url,
                buttonText: { displayText: 'VIDEO' },
                type: 1,
              },
              {
                buttonId: '.ytmp3 ' + _0x281b40.url,
                buttonText: { displayText: 'AUDIO' },
                type: 1,
              },
            ]
            const _0x1db796 = { url: _0x281b40.thumbnail }
            const _0x5ea085 = {
              image: _0x1db796,
              caption: _0xf75a09,
              footer: 'sᴇʟᴇᴄᴛ ꜰᴏʀᴍᴀᴛ:',
              buttons: _0x3a80d3,
              headerType: 4,
            }
            let _0x4a4074 = _0x5ea085
            const _0x46d779 = { quoted: _0x3aec85 }
            _0x351799.sendMessage(_0x25807e, _0x4a4074, _0x46d779)
          } catch (_0x2824cf) {
            _0x2371ba('*Not Found !*')
          }
          break
        case 'song':
          {
            const _0x313bd2 = {
              text: '🎧',
              key: _0x3aec85.key,
            }
            const _0x886ba4 = { react: _0x313bd2 }
            _0x351799.sendMessage(_0x25807e, _0x886ba4)
            if (!_0x524ab0) {
              return _0x2371ba(lang.EG + ': ' + prefix + _0x22742f + ' bombe motayi')
            }
            let _0x1560a9 = require('yt-search'),
              _0x1a0f69 = await _0x1560a9(_0x524ab0),
              _0x12f4e1 = _0x1a0f69.videos[0]
            const _0x4aa8a9 =
              '*\● ═══════════════ ●*\n_*🇵​​​​​🇪​​​​​🇦​​​​​🇨​​​​​🇪​​​​​🇲​​​​​🇩​​​​​ 🇸​​​​​🇴​​​​​🇳​​​​​🇬​​​​​ 🇩​​​​​🇴​​​​​🇼​​​​​🇳​​​​​🇱​​​​​🇴​​​​​🇦​​​​​🇩​​​​​🇪​​​​​🇷​​​​​*_\n*\● ═══════════════ ●*\n\n*📃 Title:* ' +
              _0x12f4e1.title +
              '\n*📺 Views:* ' +
              _0x12f4e1.views +
              '\n*🕹️ Duration:* ' +
              _0x12f4e1.timestamp +
              '\n*🔗 Url:* ' +
              _0x12f4e1.url
            let _0x36089a = [
              {
                buttonId: prefix + 'ytdoc ' + _0x12f4e1.url,
                buttonText: { displayText: 'DOCUMENT' },
                type: 1,
              },
              {
                buttonId: prefix + 'ytmp3 ' + _0x12f4e1.url,
                buttonText: { displayText: 'AUDIO' },
                type: 1,
              },
            ]
            const _0x2bc146 = { url: _0x12f4e1.thumbnail }
            const _0x29e04b = {
              image: _0x2bc146,
              caption: _0x4aa8a9,
              footer: 'sᴇʟᴇᴄᴛ ꜰᴏʀᴍᴀᴛ:',
              buttons: _0x36089a,
              headerType: 4,
            }
            let _0x7da289 = _0x29e04b
            const _0x1fbbbe = { quoted: _0x3aec85 }
            _0x351799.sendMessage(_0x25807e, _0x7da289, _0x1fbbbe)
          }
          break
        case 'video':
          {
            const _0x49c64e = {
              text: '📽️',
              key: _0x3aec85.key,
            }
            const _0x4c45da = { react: _0x49c64e }
            _0x351799.sendMessage(_0x25807e, _0x4c45da)
            if (!_0x524ab0) {
              return _0x2371ba(lang.EG + ': ' + prefix + _0x22742f + ' bombe motayi')
            }
            let _0x12c511 = require('yt-search'),
              _0x9540db = await _0x12c511(_0x524ab0),
              _0x11a4b2 = _0x9540db.videos[0]
            const _0x34e655 =
              '*\● ═══════════════ ●*\n_*🇵​​​​​🇪​​​​​🇦​​​​​🇨​​​​​🇪​​​​​🇲​​​​​🇩​​​​​ 🇻​​​​​🇮​​​​​🇩​​​​​🇪​​​​​🇴​​​​​ 🇩​​​​​🇴​​​​​🇼​​​​​🇳​​​​​🇱​​​​​🇴​​​​​🇦​​​​​🇩​​​​​🇪​​​​​🇷​​​​​*_\n*\● ═══════════════ ●*\n\n*📃 Title:* ' +
              _0x11a4b2.title +
              '\n*📺 Views:* ' +
              _0x11a4b2.views +
              '\n*🕹️ Duration:* ' +
              _0x11a4b2.timestamp +
              '\n*🔗 Url:* ' +
              _0x11a4b2.url
            let _0x49178c = [
              {
                buttonId: prefix + 'ytmp4 ' + _0x11a4b2.url,
                buttonText: { displayText: '360p' },
                type: 1,
              },
              {
                buttonId: prefix + 'ytmp42 ' + _0x11a4b2.url,
                buttonText: { displayText: '720p' },
                type: 1,
              },
            ]
            const _0x49e87a = { url: _0x11a4b2.thumbnail }
            const _0x520a41 = {
              image: _0x49e87a,
              caption: _0x34e655,
              footer: 'sᴇʟᴇᴄᴛ Qᴜᴀʟɪᴛʏ:',
              buttons: _0x49178c,
              headerType: 4,
            }
            let _0x3eed73 = _0x520a41
            const _0x5537ab = { quoted: _0x3aec85 }
            _0x351799.sendMessage(_0x25807e, _0x3eed73, _0x5537ab)
          }
          break
        case 'true':
        case 'truecaller':
          {
            const _0xcc62f5 = {
              text: '📞',
              key: _0x3aec85.key,
            }
            const _0x51e2e8 = { react: _0xcc62f5 }
            _0x351799.sendMessage(_0x25807e, _0x51e2e8)
            const _0x257e2c = {
              text: '📱',
              key: _0x3aec85.key,
            }
            const _0x2ab239 = { react: _0x257e2c }
            await _0x351799.sendMessage(_0x25807e, _0x2ab239)
            if (!_0x524ab0) {
              return _0x2371ba(lang.NEED_NO)
            }
            let _0x273af9 = await fetchJson(
              'https://inrl-web.vercel.app/api/truecaller?number=' + _0x524ab0
            ),
              _0x23f53a =
                '*\● ═══════════════ ●*\n_*🇵​​​​​🇪​​​​​🇦​​​​​🇨​​​​​🇪​​​​​🇲​​​​​🇩​​​​​ 🇹​​​​​🇷​​​​​🇺​​​​​🇪​​​​​ 🇨​​​​​🇦​​​​​🇱​​​​​🇱​​​​​🇪​​​​​🇷​​​​​*_\n*\● ═══════════════ ●*\n\n*📃 Name:* ' +
                _0x273af9.name +
                '\n*🕹️ Type:* ' +
                _0x273af9.type +
                '\n*🌎 Country:* ' +
                _0x273af9.country +
                '\n*💼 Carrier:* ' +
                _0x273af9.carrier +
                '\n*⏰ TimeZone:*' +
                _0x273af9.timeZone
            _0x2371ba(_0x23f53a)
          }
          break
        case 'git':
        case 'github':
          {
            if (!_0x69067b[0]) {
              return _0x2371ba(
                lang.EG + ': ' + 'https://github.com/CharithPramodyaSenanayake/PEACEMD'
              )
            }
            if (
              !/(?:https?|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i.test(
                _0x69067b[0]
              )
            ) {
              return _0x2371ba('Invalid URL')
            }
            let [, _0x5ecf2a, _0x362dd2] =
              _0x69067b[0].match(
                /(?:https?|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
              ) || []
            _0x362dd2 = _0x362dd2.replace(/.git$/, '')
            let _0x359997 =
              'https://api.github.com/repos/' +
              _0x5ecf2a +
              '/' +
              _0x362dd2 +
              '/zipball',
              _0x4fa99b = await fetch(_0x359997, { method: 'head' })
            if (_0x4fa99b.status !== 200) {
              return _0x2371ba(_0x4fa99b.statusText)
            }
            let _0x1dc53d = _0x4fa99b.headers
              .get('content-disposition')
              .match(/attachment; filename=(.*)/)[1],
              _0x46b787 = _0x4fa99b.headers.get('content-type')
            _0x2371ba(lang.WAIT)
            const _0x3cf179 = { url: _0x359997 }
            const _0x557497 = {
              document: _0x3cf179,
              fileName: _0x1dc53d,
              mimetype: _0x46b787,
            }
            const _0x18f02d = { quoted: _0x3aec85 }
            _0x351799.sendMessage(_0x25807e, _0x557497, _0x18f02d)
          }
          break
        case 'whether':
        case 'weather':
          {
            if (!_0x524ab0) {
              return _0x2371ba(lang.EG + ': ' + '.weather colombo')
            }
            const _0x4071f5 = {
              text: '\uD83C\uDF21️',
              key: _0x3aec85.key,
            }
            const _0x433f63 = { react: _0x4071f5 }
            _0x351799.sendMessage(_0x25807e, _0x433f63)
            try {
              const _0x551741 = axios.get(
                'https://api.openweathermap.org/data/2.5/weather?q=' +
                _0x524ab0 +
                '&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273'
              ),
                _0x5b6cfa = await _0x551741,
                _0x1c27bb = _0x5b6cfa.data.name,
                _0x1822f3 = _0x5b6cfa.data.sys.country,
                _0xa9c49f = _0x5b6cfa.data.weather[0].description,
                _0x7b17db = _0x5b6cfa.data.main.temp + '\xB0C',
                _0x445f15 = _0x5b6cfa.data.main.temp_min + '\xB0C',
                _0x3421e9 = _0x5b6cfa.data.main.temp_max + '\xB0C',
                _0x80416e = _0x5b6cfa.data.main.humidity + '%',
                _0x26c911 = _0x5b6cfa.data.wind.speed + 'km/h',
                _0x3610e8 =
                  '*● ══════════════ ●*\n_*🇵​​​​​🇪​​​​​🇦​​​​​🇨​​​​​🇪​​​​​🇲​​​​​🇩​​​​​ 🇼​​​​​🇪​​​​​🇦​​​​​🇹​​​​​🇭​​​​​🇪​​​​​🇷​​​​​*_\n*● ══════════════ ●*\n\n*📍 Place:* ' +
                  _0x1c27bb +
                  '\n*🗺️ Country:* ' +
                  _0x1822f3 +
                  '\n*🌤️ Weather:* ' +
                  _0xa9c49f +
                  '\n*🌡️ Temperature:* ' +
                  _0x7b17db +
                  '\n*💠 Minimum Temperature:* ' +
                  _0x445f15 +
                  '\n*📛 Maximum Temperature:* ' +
                  _0x3421e9 +
                  '\n*💦 Humidity:* ' +
                  _0x80416e +
                  '\n*🌬 Wind:* ' +
                  _0x26c911,
                _0x3bf83d = { text: _0x3610e8 }
              const _0x1bcf43 = { quoted: _0x3aec85 }
              const _0x52c1d6 = await _0x351799.sendMessage(
                _0x25807e,
                _0x3bf83d,
                _0x1bcf43
              )
            } catch (_0x506231) {
              _0x2371ba(lang.N_FOUND)
            }
          }
          break
        case 'Quote':
        case 'quote':
          {
            const _0x37e94b = {
              text: '💬',
              key: _0x3aec85.key,
            }
            const _0x45b58f = { react: _0x37e94b }
            _0x351799.sendMessage(_0x25807e, _0x45b58f)
            const _0x384ea9 = await fetchJson('https://api.quotable.io/random'),
              _0x153baf =
                '*💬 Quote:* ' +
                _0x384ea9.content +
                '\n*✍️ Author:* ' +
                _0x384ea9.author,
              _0x15fb6b = { text: _0x153baf }
            const _0x4bc4b0 = { quoted: _0x3aec85 }
            const _0x1df7b3 = await _0x351799.sendMessage(
              _0x25807e,
              _0x15fb6b,
              _0x4bc4b0
            )
          }
          break
        case 'ip':
        case 'checkip':
          try {
            const _0x3ca411 = {
              text: '🔴',
              key: _0x3aec85.key,
            }
            const _0x5227fd = { react: _0x3ca411 }
            _0x351799.sendMessage(_0x25807e, _0x5227fd)
            if (!_0x524ab0) {
              return _0x2371ba(lang.NEED_IP)
            }
            if (!_0x524ab0.includes('.')) {
              return _0x2371ba(lang.NEED_IP)
            }
            const _0x3eb4f1 = 'IP :',
              _0x510981 = 'STATUS :',
              _0x4bd7a8 = 'CONTINENT :',
              _0x141e1b = 'COUNTRY :',
              _0x43b77a = 'COUNTRYCODE :',
              _0x2ee1cb = 'REGIONNAME :',
              _0x371a63 = 'CITY :',
              _0x375881 = 'ZIP :',
              _0x5c1336 = 'CURRENCY :',
              _0x39c211 = 'ISP :',
              _0x2b0717 = 'MOBILE :',
              _0x37a869 = 'PROXY :',
              _0x47fc8e = await fetchJson(
                'https://api.techniknews.net/ipgeo/' + _0x524ab0
              ),
              _0xb8a306 =
                '*● ═══════════ ●*\n_*🇵​​​​​🇪​​​​​🇦​​​​​🇨​​​​​🇪​​​​​🇲​​​​​🇩​​​​​ 🇮​​​​​🇵​​​​​ 🇸​​​​​🇪​​​​​🇦​​​​​🇷​​​​​🇨​​​​​🇭​​​​​*_\n*● ═══════════ ●*\n\n*🔴 ' +
                _0x3eb4f1 +
                '* ```' +
                _0x524ab0 +
                '```\n' +
                '*✅' +
                _0x510981 +
                '* ```' +
                _0x47fc8e.status +
                '```\n' +
                '*🌐' +
                _0x4bd7a8 +
                '* ```' +
                _0x47fc8e.continent +
                '```\n' +
                '*🗺' +
                _0x141e1b +
                '* ```' +
                _0x47fc8e.country +
                '```\n' +
                '*🔢' +
                _0x43b77a +
                '* ```' +
                _0x47fc8e.countryCode +
                '```\n' +
                '*🌍' +
                _0x2ee1cb +
                '* ```' +
                _0x47fc8e.regionName +
                '```\n' +
                '*🚩' +
                _0x371a63 +
                '* ```' +
                _0x47fc8e.city +
                '```\n' +
                '*🏛' +
                _0x375881 +
                '* ```' +
                _0x47fc8e.zip +
                '```\n' +
                '*💸' +
                _0x5c1336 +
                '* ```' +
                _0x47fc8e.currency +
                '```\n\n' +
                '*📡' +
                _0x39c211 +
                '* ```' +
                _0x47fc8e.isp +
                '```\n' +
                '*🛡' +
                _0x37a869 +
                '* ```' +
                _0x47fc8e.proxy +
                '```\n' +
                '*📱' +
                _0x2b0717 +
                '* ```' +
                _0x47fc8e.mobile +
                '```\n',
              _0x3b22ce = { text: _0xb8a306 }
            const _0x5aca01 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x3b22ce, _0x5aca01)
          } catch (_0x2c55c6) {
            _0x2371ba(lang.N_FOUND)
          }
          break
        case 'movie':
        case 'searchmovie':
          try {
            const _0x8371dd = {
              text: '🎬',
              key: _0x3aec85.key,
            }
            const _0x3af4c8 = { react: _0x8371dd }
            _0x351799.sendMessage(_0x25807e, _0x3af4c8)
            if (!_0x524ab0) {
              return _0x2371ba(lang.NEED_N)
            }
            const _0x57f8ff = await fetchJson(
              'https://www.omdbapi.com/?apikey=b809472c&t' +
              _0x524ab0 +
              '&plot=full'
            )
            let _0x2fada8 = ''
            _0x2fada8 +=
              '*● ═══════════ ●*\n_*🇵​​​​​🇪​​​​​🇦​​​​​🇨​​​​​🇪​​​​​🇲​​​​​🇩​​​​​ 🇲​​​​​🇴​​​​​🇻​​​​​🇮​​​​​🇪​​​​​ 🇸​​​​​🇪​​​​​🇦​​​​​🇷​​​​​🇨​​​​​🇭​​​​​*_\n*● ═══════════ ●*\n\n'
            _0x2fada8 +=
              '*🎞Title:* ```' + _0x57f8ff.Title + '```' + '\n'
            _0x2fada8 +=
              '*🏷Year:* ```' + _0x57f8ff.Year + '```' + '\n'
            _0x2fada8 += '*⭐️Rated:* ```' + _0x57f8ff.Rated + '```' + '\n'
            _0x2fada8 +=
              '*🎁Released:* ```' + _0x57f8ff.Released + '```' + '\n'
            _0x2fada8 +=
              '*🕐Runtime:* ```' + _0x57f8ff.Runtime + '```' + '\n'
            _0x2fada8 +=
              '*🎈Genre:* ```' + _0x57f8ff.Genre + '```' + '\n'
            _0x2fada8 +=
              '*📽Director:* ```' + _0x57f8ff.Director + '```' + '\n'
            _0x2fada8 +=
              '*📃Writer:* ```' + _0x57f8ff.Writer + '```' + '\n'
            _0x2fada8 +=
              '*🦸🏻‍♂️Actors:* ```' +
              _0x57f8ff.Actors +
              '```' +
              '\n'
            _0x2fada8 +=
              '*👀Plot:* ```' + _0x57f8ff.Plot + '```' + '\n'
            _0x2fada8 +=
              '*💬Language:* ```' + _0x57f8ff.Language + '```' + '\n'
            _0x2fada8 +=
              '*🏳️‍🌈Country:* ```' +
              _0x57f8ff.Country +
              '```' +
              '\n'
            _0x2fada8 +=
              '*🏆Awards:* ```' + _0x57f8ff.Awards + '```' + '\n'
            _0x2fada8 +=
              '*💵BoxOffice:* ```' +
              _0x57f8ff.BoxOffice +
              '```' +
              '\n'
            _0x2fada8 +=
              '*🎬Production:* ```' +
              _0x57f8ff.Production +
              '```' +
              '\n'
            _0x2fada8 +=
              '*🧚🏻‍♀️imdbRating:* ```' +
              _0x57f8ff.imdbRating +
              '```' +
              '\n'
            _0x2fada8 +=
              '*👌🏻imdbVotes:* ```' +
              _0x57f8ff.imdbVotes +
              '```' +
              '\n'
            const _0x30a0a6 = { text: _0x2fada8 }
            const _0x3980f9 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x30a0a6, _0x3980f9)
          } catch (_0x30e2f3) {
            _0x2371ba(lang.N_FOUND)
          }
          break
        case 'wiki':
        case 'wikipedia':
          try {
            const _0x2f7ed2 = {
              text: '📧',
              key: _0x3aec85.key,
            }
            const _0x46db66 = { react: _0x2f7ed2 }
            _0x351799.sendMessage(_0x25807e, _0x46db66)
            const _0x560540 = await wiki(_0x524ab0),
              _0x4e548c = '*💬 Wiki:* ' + _0x560540[0].wiki,
              _0x438b49 = { url: _0x560540[0].thumb }
            const _0x40ecd5 = {
              image: _0x438b49,
              caption: _0x4e548c,
            }
            const _0xb90288 = { quoted: _0x3aec85 }
            _0x351799.sendMessage(_0x25807e, _0x40ecd5, _0xb90288)
          } catch (_0x203711) {
            _0x2371ba(lang.ERROR)
          }
          break
        case 'news':
        case 'hiru':
        case 'hirunews':
          try {
            const _0x482b4b = {
              text: '📰',
              key: _0x3aec85.key,
            }
            const _0xe8d843 = { react: _0x482b4b }
            _0x351799.sendMessage(_0x25807e, _0xe8d843)
            const _0x47e06f = await fetchJson('https://api.sdbots.tk/hirunews'),
              _0x10ea8a = { url: _0x47e06f.img }
            const _0x422fdb = {
              image: _0x10ea8a,
              caption:
                '*' +
                _0x47e06f.title +
                '*\n\n🗞️ *විස්තරය* - ' +
                _0x47e06f.description +
                '\n\n*_🔗 Link -_* ' +
                _0x47e06f.link,
            }
            _0x351799.sendMessage(_0x25807e, _0x422fdb)
          } catch (_0x467863) {
            _0x2371ba(lang.ERROR)
          }
          break
        case 'fb':
          try {
            const _0x5ced00 = {
              text: '#️⃣',
              key: _0x3aec85.key,
            }
            const _0x3e823a = { react: _0x5ced00 }
            _0x351799.sendMessage(_0x25807e, _0x3e823a)
            if (!_0x524ab0) {
              return _0x2371ba(lang.EG + ': ' + (prefix + _0x22742f + ' link'))
            }
            let _0x3f3b62 = await fetchJson(
              'https://api.akuari.my.id/downloader/fbdl?link=' + _0x524ab0
            ),
              _0x4b97a6 = _0x3f3b62,
              _0x284e1b =
                '*● ═══════════ ●*\n_*🇵​​​​​🇪​​​​​🇦​​​​​🇨​​​​​🇪​​​​​🇲​​​​​🇩​​​​​ 🇫​​​​​🇧​​​​​ 🇩​​​​​🇴​​​​​🇼​​​​​🇳​​​​​🇱​​​​​🇴​​​​​🇦​​​​​🇩​​​​​*_\n*● ═══════════ ●*\n\n*📃 Title:* ' +
                _0x4b97a6.info.title +
                '\n*\u23F1️ Duration:* ' +
                _0x4b97a6.info.duration +
                '\n*\uD83D\uDCCE Url:* ' +
                _0x4b97a6.info.source,
              _0x17475a = [
                {
                  buttonId: prefix + 'dvid2 ' + _0x4b97a6.url.url,
                  buttonText: {
                    displayText: 'VIDEO DOWNLOAD ' + _0x4b97a6.url.subname,
                  },
                  type: 1,
                },
              ]
            const _0x11ac1d = {
              url: 'https://knowtechie.com/wp-content/uploads/2020/08/facebook-logo.jpg',
            }
            const _0x1f6b3c = {
              image: _0x11ac1d,
              caption: _0x284e1b,
              footer: config.FOOTER,
              headerType: 4,
              buttons: _0x17475a,
            }
            let _0x8c677a = _0x1f6b3c
            const _0x5013b4 = { quoted: _0x3aec85 }
            return await _0x351799.sendMessage(_0x25807e, _0x8c677a, _0x5013b4)
          } catch (_0x3338be) {
            l(_0x3338be)
            const _0x3136ec = { text: lang.ERROR }
            const _0x3ee4e6 = { quoted: _0x3aec85 }
            _0x351799.sendMessage(_0x25807e, _0x3136ec, _0x3ee4e6)
          }
          break
        case 'dvid2':
          try {
            const _0xcfd4c5 = {
              text: '#️⃣',
              key: _0x3aec85.key,
            }
            const _0x34bd36 = { react: _0xcfd4c5 }
            _0x351799.sendMessage(_0x25807e, _0x34bd36)
            const _0x2e2342 = { text: lang.UP_V }
            const _0x5a5c90 = { quoted: _0x3aec85 }
            const _0x2eaa25 = await _0x351799.sendMessage(
              _0x25807e,
              _0x2e2342,
              _0x5a5c90
            ),
              _0x18551d = { delete: _0x2eaa25.key }
            await _0x351799.sendMessage(_0x25807e, _0x18551d)
            const _0x1017cd = { text: lang.D_V }
            const _0x5ba6af = { quoted: _0x3aec85 }
            const _0x3d6fa5 = await _0x351799.sendMessage(
              _0x25807e,
              _0x1017cd,
              _0x5ba6af
            ),
              _0x137afb = { url: _0x524ab0 }
            const _0x4be5df = {
              video: _0x137afb,
              caption: config.CAPTION,
            }
            const _0x20274a = { quoted: _0x3aec85 }
            _0x351799.sendMessage(_0x25807e, _0x4be5df, _0x20274a)
            const _0x45be65 = { delete: _0x3d6fa5.key }
            await _0x351799.sendMessage(_0x25807e, _0x45be65)
          } catch (_0x46c868) {
            l(_0x46c868)
            const _0x37fb73 = { text: lang.ERROR }
            const _0x47b411 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x37fb73, _0x47b411)
          }
          break
        case 'dau2':
          try {
            let [_0x4ecc9b, _0x6d5958] = _0x524ab0.split`+`
            const _0x3556c2 = {
              text: '#️⃣',
              key: _0x3aec85.key,
            }
            const _0x44fa20 = { react: _0x3556c2 }
            _0x351799.sendMessage(_0x25807e, _0x44fa20)
            const _0x185240 = { text: lang.UP_S }
            const _0xb763b2 = { quoted: _0x3aec85 }
            const _0x2b1e36 = await _0x351799.sendMessage(
              _0x25807e,
              _0x185240,
              _0xb763b2
            ),
              _0x572c61 = { delete: _0x2b1e36.key }
            await _0x351799.sendMessage(_0x25807e, _0x572c61)
            const _0x25acc5 = { text: lang.D_S }
            const _0x3154f5 = { quoted: _0x3aec85 }
            const _0x1fd458 = await _0x351799.sendMessage(
              _0x25807e,
              _0x25acc5,
              _0x3154f5
            ),
              _0x5823aa = { url: _0x4ecc9b }
            const _0x2a8d19 = { quoted: _0x3aec85 }
            _0x351799.sendMessage(
              _0x25807e,
              {
                document: _0x5823aa,
                mimetype: 'audio/mpeg',
                fileName: _0x6d5958 + '.mp3',
                caption: '',
              },
              _0x2a8d19
            )
            const _0x136ce2 = { delete: _0x1fd458.key }
            await _0x351799.sendMessage(_0x25807e, _0x136ce2)
          } catch (_0x1c3e72) {
            l(_0x1c3e72)
            const _0x2bcd70 = { text: lang.ERROR }
            const _0x71fd38 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x2bcd70, _0x71fd38)
          }
          break
        case 'tiktok':
          try {
            const _0x43cdd7 = {
              text: '🏷️',
              key: _0x3aec85.key,
            }
            const _0x49af04 = { react: _0x43cdd7 }
            _0x351799.sendMessage(_0x25807e, _0x49af04)
            if (!_0x524ab0) {
              return _0x2371ba(lang.EG + ': ' + (prefix + _0x22742f + ' link'))
            }
            if (!_0x524ab0.includes('tiktok')) {
              return _0x2371ba(lang.I_LINK)
            }
            let _0x25240b = await fetchJson(
              'https://saipulanuar.ga/api/download/tiktok?url=' + _0x524ab0
            ),
              _0x467071 = _0x25240b.result,
              _0x584a55 =
                '*● ═══════════ ●*\n_*🇵​​​​​🇪​​​​​🇦​​​​​🇨​​​​​🇪​​​​​🇲​​​​​🇩​​​​​ 🇹​​​​​🇮​​​​​🇰​​​​​🇹​​​​​🇴​​​​​🇰​​​​​ 🇩​​​​​🇴​​​​​🇼​​​​​🇳​​​​​🇱​​​​​🇴​​​​​🇦​​​​​🇩​​​​​*_\n*● ═══════════ ●*\n\n*👤 Username:* ' +
                _0x467071.username +
                '\n*💬 Description:* ' +
                _0x467071.description
            const _0x291a1a = { displayText: 'VIDEO DOWNLOAD' }
            const _0x190958 = {
              buttonId: prefix + 'dvid ' + _0x467071.video_original,
              buttonText: _0x291a1a,
              type: 1,
            }
            const _0x22215e = { displayText: 'AUDIO DOWNLOAD' }
            const _0x2a05e9 = {
              buttonId: prefix + 'dau ' + _0x467071.audio,
              buttonText: _0x22215e,
              type: 1,
            }
            let _0x2b05de = [_0x190958, _0x2a05e9]
            const _0x46d5ca = { url: _0x467071.pp }
            const _0x1ee2ee = {
              image: _0x46d5ca,
              caption: _0x584a55,
              footer: config.FOOTER,
              headerType: 4,
              buttons: _0x2b05de,
            }
            let _0x5dfce9 = _0x1ee2ee
            const _0x49526a = { quoted: _0x3aec85 }
            return await _0x351799.sendMessage(_0x25807e, _0x5dfce9, _0x49526a)
          } catch (_0x5bbab1) {
            l(_0x5bbab1)
            const _0x3350bd = { text: lang.ERROR }
            const _0x1a7f57 = { quoted: _0x3aec85 }
            _0x351799.sendMessage(_0x25807e, _0x3350bd, _0x1a7f57)
          }
          break
        case 'dvid':
          try {
            const _0x1b83cb = {
              text: '🏷️',
              key: _0x3aec85.key,
            }
            const _0x4c4f4c = { react: _0x1b83cb }
            _0x351799.sendMessage(_0x25807e, _0x4c4f4c)
            const _0x8b842e = { text: lang.UP_V }
            const _0x230534 = { quoted: _0x3aec85 }
            const _0x28ee57 = await _0x351799.sendMessage(
              _0x25807e,
              _0x8b842e,
              _0x230534
            ),
              _0x1f7450 = { delete: _0x28ee57.key }
            await _0x351799.sendMessage(_0x25807e, _0x1f7450)
            const _0x3858ee = { text: lang.D_V }
            const _0x54aaf7 = { quoted: _0x3aec85 }
            const _0x5c91b8 = await _0x351799.sendMessage(
              _0x25807e,
              _0x3858ee,
              _0x54aaf7
            ),
              _0x197901 = { url: _0x524ab0 }
            const _0x584fc0 = {
              video: _0x197901,
              caption: config.CAPTION,
            }
            const _0x4baf09 = { quoted: _0x3aec85 }
            _0x351799.sendMessage(_0x25807e, _0x584fc0, _0x4baf09)
            const _0x2df7a6 = { delete: _0x5c91b8.key }
            await _0x351799.sendMessage(_0x25807e, _0x2df7a6)
          } catch (_0x528cff) {
            l(_0x528cff)
            const _0x4edc0b = { text: lang.ERROR }
            const _0x2082da = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x4edc0b, _0x2082da)
          }
          break
        case 'dau':
          try {
            const _0x1f2779 = {
              text: '🏷️',
              key: _0x3aec85.key,
            }
            const _0x503753 = { react: _0x1f2779 }
            _0x351799.sendMessage(_0x25807e, _0x503753)
            const _0x52fc59 = { text: lang.UP_S }
            const _0x117ef3 = { quoted: _0x3aec85 }
            const _0x43535f = await _0x351799.sendMessage(
              _0x25807e,
              _0x52fc59,
              _0x117ef3
            ),
              _0x24e9a2 = { delete: _0x43535f.key }
            await _0x351799.sendMessage(_0x25807e, _0x24e9a2)
            const _0x2a80d0 = { text: lang.D_S }
            const _0x29cebe = { quoted: _0x3aec85 }
            const _0xfd6cc1 = await _0x351799.sendMessage(
              _0x25807e,
              _0x2a80d0,
              _0x29cebe
            ),
              _0x11855e = { url: _0x524ab0 }
            const _0x5e7ead = { quoted: _0x3aec85 }
            _0x351799.sendMessage(
              _0x25807e,
              {
                document: _0x11855e,
                mimetype: 'audio/mpeg',
                fileName: 'TikTok Audio.mp3',
                caption: '',
              },
              _0x5e7ead
            )
            const _0x37a50d = { delete: _0xfd6cc1.key }
            await _0x351799.sendMessage(_0x25807e, _0x37a50d)
          } catch (_0x27970c) {
            l(_0x27970c)
            const _0x16f585 = { text: lang.ERROR }
            const _0x7c9d05 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x16f585, _0x7c9d05)
          }
          break
        case 'ig':
          try {
            const _0x5af714 = {
              text: '🎀',
              key: _0x3aec85.key,
            }
            const _0x48122b = { react: _0x5af714 }
            _0x351799.sendMessage(_0x25807e, _0x48122b)
            if (!_0x524ab0) {
              return _0x2371ba(lang.EG + ': ' + (prefix + _0x22742f + ' link'))
            }
            const _0x53ccee = require('instagram-url-direct')
            let _0x5ce6a5 = await _0x53ccee(_0x524ab0)
            const _0x37cc66 = { text: lang.UP_V }
            const _0x23c14f = { quoted: _0x3aec85 }
            const _0x292891 = await _0x351799.sendMessage(
              _0x25807e,
              _0x37cc66,
              _0x23c14f
            )
            for (
              let _0x12e96d = 0;
              _0x12e96d < _0x5ce6a5.url_list.length;
              _0x12e96d++
            ) {
              const _0x328282 = { delete: _0x292891.key }
              await _0x351799.sendMessage(_0x25807e, _0x328282)
              const _0x4a1daa = { text: lang.D_V }
              const _0x25b0c7 = { quoted: _0x3aec85 }
              const _0x512b8f = await _0x351799.sendMessage(
                _0x25807e,
                _0x4a1daa,
                _0x25b0c7
              )
              await _0x351799.sendFileUrl(
                _0x25807e,
                _0x5ce6a5.url_list[_0x12e96d],
                config.CAPTION,
                _0x3aec85
              )
              const _0x12dcd5 = { delete: _0x512b8f.key }
              await _0x351799.sendMessage(_0x25807e, _0x12dcd5)
            }
          } catch (_0x242b2e) {
            const _0x2923a0 = { text: lang.ERROR }
            const _0x2eb907 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x2923a0, _0x2eb907)
          }
          break
        case 'mediafire':
        case 'mfire':
          try {
            const _0x21468a = {
              text: '📁',
              key: _0x3aec85.key,
            }
            const _0x466fb2 = { react: _0x21468a }
            _0x351799.sendMessage(_0x25807e, _0x466fb2)
            if (!_0x524ab0) {
              return _0x2371ba(lang.NEED_L)
            }
            if (!_0x524ab0.includes('mediafire.com')) {
              return _0x2371ba(lang.I_LINK)
            }
            if (!_0x524ab0.includes('/file')) {
              return _0x2371ba(lang.I_LINK)
            }
            let { mediafireDl: _0x3c72f1 } = require('./lib/mediafire.js')
            const _0x42a3a3 = await _0x3c72f1(_0x524ab0)
            if (_0x42a3a3[0].size.includes('KB')) {
              const _0x196a36 = { url: _0x42a3a3[0].link }
              const _0x4d1848 = {
                document: _0x196a36,
                fileName: _0x42a3a3[0].nama,
                mimetype: _0x42a3a3[0].mime,
                caption:
                  '*🧸 Name* : ' +
                  _0x42a3a3[0].nama +
                  '\n*📊 Size* : ' +
                  _0x42a3a3[0].size +
                  '\n*🕹️ Mime* : ' +
                  _0x42a3a3[0].mime +
                  '\n*🔗 Link* : ' +
                  _0x42a3a3[0].link,
              }
              const _0x8fc229 = { quoted: _0x3aec85 }
              _0x351799.sendMessage(_0x25807e, _0x4d1848, _0x8fc229)
            }
            if (_0x42a3a3[0].size.includes('GB')) {
              return _0x2371ba(lang.SIZE)
            }
            if (_0x42a3a3[0].size.split('MB')[0] >= dlmbsize) {
              return _0x2371ba(lang.SIZE)
            }
            const _0x23d4f0 = { text: lang.D_F }
            const _0x2d00cf = { quoted: _0x3aec85 }
            const _0xec3459 = await _0x351799.sendMessage(
              _0x25807e,
              _0x23d4f0,
              _0x2d00cf
            ),
              _0xb230cf = { delete: _0xec3459.key }
            await _0x351799.sendMessage(_0x25807e, _0xb230cf)
            const _0x34363f = { text: lang.UP_F }
            const _0x58f5e4 = { quoted: _0x3aec85 }
            const _0x466ead = await _0x351799.sendMessage(
              _0x25807e,
              _0x34363f,
              _0x58f5e4
            ),
              _0xe12b2b = { url: _0x42a3a3[0].link }
            const _0x152c17 = {
              document: _0xe12b2b,
              fileName: _0x42a3a3[0].nama,
              mimetype: _0x42a3a3[0].mime,
              caption:
                '*🧸 Name* : ' +
                _0x42a3a3[0].nama +
                '\n*📊 Size* : ' +
                _0x42a3a3[0].size +
                '\n*🕹️ Mime* : ' +
                _0x42a3a3[0].mime +
                '\n*🔗 Link* : ' +
                _0x42a3a3[0].link,
            }
            const _0x3e695b = { quoted: _0x3aec85 }
            const _0x4a3076 = _0x351799.sendMessage(
              _0x25807e,
              _0x152c17,
              _0x3e695b
            ),
              _0x350758 = { delete: _0x466ead.key }
            await _0x351799.sendMessage(_0x25807e, _0x350758)
          } catch (_0x4c6c2c) {
            const _0x2c263c = { text: lang.ERROR }
            const _0x213ec0 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x2c263c, _0x213ec0)
          }
          break
        case 'img':
          try {
            const _0x34fcc5 = {
              text: '🖼️',
              key: _0x3aec85.key,
            }
            const _0xaafd3a = { react: _0x34fcc5 }
            await _0x351799.sendMessage(_0x25807e, _0xaafd3a)
            if (!_0x524ab0) {
              return _0x2371ba(lang.NEED_N)
            }
            _0x2371ba(lang.WAIT)
            let _0x174a0e = require('g-i-s')
            _0x174a0e(_0x69067b.join(' '), async (_0x11ee77, _0xc04164) => {
              n = _0xc04164
              img1 = n[0].url
              img2 = n[1].url
              img3 = n[2].url
              img4 = n[3].url
              img5 = n[4].url
              const _0x1747bd = { url: img1 }
              const _0x5489be = {}
              _0x5489be.image = _0x1747bd
              _0x5489be.caption = ''
              const _0x333a87 = {}
              _0x333a87.quoted = _0x3aec85
              _0x351799.sendMessage(_0x25807e, _0x5489be, _0x333a87)
              const _0x2dd927 = { url: img2 }
              const _0x52274b = {}
              _0x52274b.image = _0x2dd927
              _0x52274b.caption = ''
              const _0x227f9c = {}
              _0x227f9c.quoted = _0x3aec85
              _0x351799.sendMessage(_0x25807e, _0x52274b, _0x227f9c)
              const _0x493b72 = { url: img3 }
              const _0x57b465 = {}
              _0x57b465.image = _0x493b72
              _0x57b465.caption = ''
              const _0x5ab0c6 = {}
              _0x5ab0c6.quoted = _0x3aec85
              _0x351799.sendMessage(_0x25807e, _0x57b465, _0x5ab0c6)
              const _0x469304 = { url: img4 }
              const _0x18bbc8 = {}
              _0x18bbc8.image = _0x469304
              _0x18bbc8.caption = ''
              const _0x2201d8 = {}
              _0x2201d8.quoted = _0x3aec85
              _0x351799.sendMessage(_0x25807e, _0x18bbc8, _0x2201d8)
              const _0x498243 = { url: img5 }
              const _0xd39c3c = {}
              _0xd39c3c.image = _0x498243
              _0xd39c3c.caption = ''
              const _0x2f4f69 = {}
              _0x2f4f69.quoted = _0x3aec85
              _0x351799.sendMessage(_0x25807e, _0xd39c3c, _0x2f4f69)
            })
          } catch (_0x475ded) {
            const _0x593185 = { text: lang.ERROR }
            const _0x16f46d = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x593185, _0x16f46d)
          }
          break
        case 'planet':
          {
            const _0x381f71 = {
              text: '🪐',
              key: _0x3aec85.key,
            }
            const _0x912291 = { react: _0x381f71 }
            await _0x351799.sendMessage(_0x25807e, _0x912291)
            let _0x17f55e = await fetchJson(
              'https://api.nasa.gov/planetary/apod?api_key=HoipzgD4rUP0oGmaVFDNNRn82zIIwHGKovXKcN4Z'
            ),
              _0xe89c22 = _0x17f55e.date,
              _0xce410c = _0x17f55e.explanation,
              _0x193319 = _0x17f55e.url,
              _0x1b6f8d = _0x17f55e.title
            const _0x26ecc4 = { url: _0x193319 }
            const _0x56e09b = {
              image: _0x26ecc4,
              caption: '*🪐 Desc:* ' + _0xce410c,
            }
            const _0x36da68 = { quoted: _0x3aec85 }
            _0x351799.sendMessage(_0x25807e, _0x56e09b, _0x36da68)
          }
          break
        case 'ss':
        case 'ssweb':
        case 'sspc':
          {
            const _0x3c7de3 = {
              text: '📱',
              key: _0x3aec85.key,
            }
            const _0x3cb820 = { react: _0x3c7de3 }
            _0x351799.sendMessage(_0x25807e, _0x3cb820)
            if (!_0x524ab0.includes('htt')) {
              return _0x2371ba(lang.NEED_L)
            }
            let _0x15448b =
              'https://saipulanuar.ga/api/download/ssweb?url=' + _0x524ab0
            const _0x4bf245 = { url: _0x15448b }
            const _0x4bf76c = {
              image: _0x4bf245,
              caption: config.CAPTION,
            }
            const _0x101a92 = { quoted: _0x3aec85 }
            _0x351799.sendMessage(_0x25807e, _0x4bf76c, _0x101a92)
          }
          break
        case 'ss2':
        case 'ssphone':
          {
            const _0x8a4500 = {
              text: '📱',
              key: _0x3aec85.key,
            }
            const _0x12514d = { react: _0x8a4500 }
            _0x351799.sendMessage(_0x25807e, _0x12514d)
            if (!_0x524ab0.includes('htt')) {
              return _0x2371ba(lang.NEED_L)
            }
            let _0x32cbdb =
              'https://saipulanuar.ga/api/download/ssweb2?url=' + _0x524ab0
            const _0x3806dd = { url: _0x32cbdb }
            const _0x53b849 = {
              image: _0x3806dd,
              caption: config.CAPTION,
            }
            const _0x485cd7 = { quoted: _0x3aec85 }
            _0x351799.sendMessage(_0x25807e, _0x53b849, _0x485cd7)
          }
          break
        case 'qr':
        case 'qrcode':
        case 'getqr':
          {
            const _0x4abc2c = {
              text: '📲',
              key: _0x3aec85.key,
            }
            const _0x109f8b = { react: _0x4abc2c }
            _0x351799.sendMessage(_0x25807e, _0x109f8b)
            if (!_0x524ab0) {
              return _0x2371ba(lang.NEED)
            }
            let _0x2210be =
              'https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=' +
              _0x524ab0
            const _0x351f22 = { url: _0x2210be }
            const _0x2a4c60 = {
              image: _0x351f22,
              caption: config.CAPTION,
            }
            const _0x34b749 = { quoted: _0x3aec85 }
            _0x351799.sendMessage(_0x25807e, _0x2a4c60, _0x34b749)
          }
          break
        case 'tikstalker':
        case 'tiktokstalker':
        case 'stiktok':
          try {
            const _0xd8397e = {
              text: '🌐',
              key: _0x3aec85.key,
            }
            const _0x3eef64 = { react: _0xd8397e }
            _0x351799.sendMessage(_0x25807e, _0x3eef64)
            if (!_0x524ab0) {
              return _0x2371ba(lang.NEED_N)
            }
            let _0x1be5ed = await fetchJson(
              'https://saipulanuar.ga/api/download/tiktokstalk?username=' +
              _0x524ab0
            ),
              _0x3e93d7 = _0x1be5ed.result,
              _0x48491a =
                '*● ═══════════ ●*\n_*🇵​​​​​🇪​​​​​🇦​​​​​🇨​​​​​🇪​​​​​🇲​​​​​🇩​​​​​ 🇹​​​​​🇮​​​​​🇰​​​​​🇹​​​​​🇴​​​​​🇰​​​​​ 🇸​​​​​🇹​​​​​🇦​​​​​🇱​​​​​🇰​​​​​🇪​​​​​🇷​​​​​*_\n*● ═══════════ ●*\n\n*👤 Username:* ' +
                _0x3e93d7.username +
                '\n*🧸 Nickname:* ' +
                _0x3e93d7.nickname +
                '\n*👥 Followers:* ' +
                _0x3e93d7.followers +
                '\n*🚶🏽 Following:* ' +
                _0x3e93d7.following +
                '\n*🙇🏾‍♀️ Likes:* ' +
                _0x3e93d7.likes +
                '\n*📽️ Videos:* ' +
                _0x3e93d7.videos
            const _0x274667 = { url: _0x1be5ed.result.ppurl }
            const _0x1c6847 = {
              image: _0x274667,
              caption: _0x48491a,
            }
            const _0x382894 = { quoted: _0x3aec85 }
            _0x351799.sendMessage(_0x25807e, _0x1c6847, _0x382894)
          } catch (_0xaeaead) {
            l(_0xaeaead)
            const _0x340778 = { text: lang.N_FOUND }
            const _0x1e444c = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x340778, _0x1e444c)
          }
          break
        case 'igstalk':
        case 'instargramstalker':
        case 'sig':
          try {
            const _0x218e9e = {
              text: '📹',
              key: _0x3aec85.key,
            }
            const _0x21d3df = { react: _0x218e9e }
            _0x351799.sendMessage(_0x25807e, _0x21d3df)
            if (!_0x524ab0) {
              return _0x2371ba(lang.NEED_N)
            }
            let _0x14e057 = await igstalker(_0x524ab0),
              _0x2d78ac = _0x14e057,
              _0x59bea7 =
                '*● ═══════════ ●*\n_*🇵​​​​​🇪​​​​​🇦​​​​​🇨​​​​​🇪​​​​​🇲​​​​​🇩​​​​​ 🇮​​​​​🇳​​​​​🇸​​​​​🇹​​​​​🇦​​​​​🇷​​​​​🇬​​​​​🇷​​​​​🇦​​​​​🇲​​​​​ 🇸​​​​​🇹​​​​​🇦​​​​​🇱​​​​​🇰​​​​​🇪​​​​​🇷​​​​​*_\n*● ═══════════ ●*\n*👤 Username:* ' +
                _0x2d78ac.username +
                '\n*🧸 Nickname:* ' +
                _0x2d78ac.fullName +
                '\n*🌱 Bio:* ' +
                _0x2d78ac.bio +
                '\n*👥 Followers:* ' +
                _0x2d78ac.followers +
                '\n*🚶🏽 Following::* ' +
                _0x2d78ac.following +
                '\n*📬 PostsCount:* ' +
                _0x2d78ac.postcount
            const _0x297c94 = { url: _0x14e057.img }
            const _0x18e8a3 = {
              image: _0x297c94,
              caption: _0x59bea7,
            }
            const _0x4982f7 = { quoted: _0x3aec85 }
            _0x351799.sendMessage(_0x25807e, _0x18e8a3, _0x4982f7)
          } catch (_0x2bef67) {
            l(_0x2bef67)
            const _0x305176 = { text: lang.N_FOUND }
            const _0x3871f1 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x305176, _0x3871f1)
          }
          break
        case 'twstalker':
        case 'twitterstalker':
        case 'stw':
          try {
            const _0x200eb1 = {
              text: '📹',
              key: _0x3aec85.key,
            }
            const _0x4b8827 = { react: _0x200eb1 }
            _0x351799.sendMessage(_0x25807e, _0x4b8827)
            if (!_0x524ab0) {
              return _0x2371ba(lang.NEED_N)
            }
            let _0x4b5700 = await fetchJson(
              'https://raw.githubusercontent.com/CharithPramodyaSenanayake/reqforbot/main/bios'
            ),
              _0x3b1d37 = await fetchJson(
                'https://api.lolhuman.xyz/api/twitter/' +
                _0x524ab0 +
                '?apikey=' +
                _0x4b5700.api
              ),
              _0x107a03 = _0x3b1d37.result,
              _0x36d415 =
                '*● ═══════════ ●*\n_*🇵​​​​​🇪​​​​​🇦​​​​​🇨​​​​​🇪​​​​​🇲​​​​​🇩​​​​​ 🇹​​​​​🇼​​​​​🇮​​​​​🇹​​​​​🇹​​​​​🇪​​​​​🇷​​​​​ 🇸​​​​​🇹​​​​​🇦​​​​​🇱​​​​​🇰​​​​​🇪​​​​​🇷​​​​​*_\n*● ═══════════ ●*\n\n*👤 Name:* ' +
                _0x107a03.name +
                '\n*🧸 Screen_name:* ' +
                _0x107a03.screen_name +
                '\n*💬 Description:* ' +
                _0x107a03.description +
                '\n*👥 Followers:* ' +
                _0x107a03.followers +
                '\n*🚶🏽 Following::* ' +
                _0x107a03.following +
                '\n*🐤 TweetCount:* ' +
                _0x107a03.tweet +
                '\n*⛓ Joined:* ' +
                _0x107a03.joined
            const _0x4df0e9 = { url: _0x3b1d37.result.profile_picture }
            const _0x5b9894 = {
              image: _0x4df0e9,
              caption: _0x36d415,
            }
            const _0x68874a = { quoted: _0x3aec85 }
            _0x351799.sendMessage(_0x25807e, _0x5b9894, _0x68874a)
          } catch (_0x372eca) {
            l(_0x372eca)
            const _0x1c48d7 = { text: lang.N_FOUND }
            const _0x5caa32 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x1c48d7, _0x5caa32)
          }
          break
        case 'ff':
        case 'freefire':
        case 'ffstalker':
          try {
            const _0x7956e0 = {
              text: '🎮',
              key: _0x3aec85.key,
            }
            const _0x2797bd = { react: _0x7956e0 }
            _0x351799.sendMessage(_0x25807e, _0x2797bd)
            if (!_0x524ab0) {
              return _0x2371ba(lang.NEED)
            }
            let _0x949f46 = await fetchJson(
              'https://saipulanuar.ga/api/stalk/epep?id=' + _0x524ab0
            )
            const _0x4d9a81 = {
              text:
                '*🎲 Id:* ' +
                _0x949f46.result.id +
                '\n*🕹️ Nickname:* ' +
                _0x949f46.result.id,
            }
            const _0x15f151 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x4d9a81, _0x15f151)
          } catch (_0xc04aa4) {
            const _0x4d9cf7 = { text: lang.ERROR }
            const _0x9dfa09 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x4d9cf7, _0x9dfa09)
          }
          break
        case 'og':
          try {
            const _0x2fbf34 = {
              text: '🎮',
              key: _0x3aec85.key,
            }
            const _0x3e32b0 = { react: _0x2fbf34 }
            _0x351799.sendMessage(_0x25807e, _0x3e32b0)
            let _0x3279c5 = await ogwhatsapp()
            const _0x5d4d3c = { text: _0x3279c5[0].link }
            const _0x13289c = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x5d4d3c, _0x13289c)
          } catch (_0x273ae5) {
            l(_0x273ae5)
          }
          break
        case 'wamod':
          try {
            const _0x346253 = {
              text: '💫',
              key: _0x3aec85.key,
            }
            const _0x5a2a95 = { react: _0x346253 }
            _0x351799.sendMessage(_0x25807e, _0x5a2a95)
            let _0xe2d409 = await ogwhatsapp(),
              _0x25dd64 = await waplus(),
              _0x1b6cf1 = await gbwa(),
              _0x4a8256 = await fmwa(),
              _0x2ac4fa = await yowa(),
              _0x25a0cf = await goldwa(),
              _0x267661 = await aerowa()
            const _0x1d33d5 = [
              {
                title: 'FMWA Last Versions',
                rows: [
                  {
                    title: 'Mod name: Og-Whatsapp',
                    rowId: '.downmod ' + _0xe2d409[0].link,
                  },
                  {
                    title: 'Mod name: Plus-Whatsapp',
                    rowId: '.downmod ' + _0x25dd64[0].link,
                  },
                  {
                    title: 'Mod name: Gb-Whatsapp',
                    rowId: '.downmod ' + _0x1b6cf1[0].link,
                  },
                  {
                    title: 'Mod name: Fm-Whatsapp',
                    rowId: '.downmod ' + _0x4a8256[0].link,
                  },
                  {
                    title: 'Mod name: Yo-Whatsapp',
                    rowId: '.downmod ' + _0x2ac4fa[0].link,
                  },
                  {
                    title: 'Mod name: Gold-Whatsapp',
                    rowId: '.downmod ' + _0x25a0cf[0].link,
                  },
                  {
                    title: 'Mod name: Aero-Whatsapp',
                    rowId: '.downmod ' + _0x267661[0].link,
                  },
                ],
              },
            ],
              _0x48d3f1 = {
                text: '*Whatsapp mods downloader*\n\n_Download Lastest Mod-Whatsapps_\n\n*Results from:* _whatsappinstalling.com_',
                footer: config.FOOTER,
                title: '',
                buttonText: 'Results',
                sections: _0x1d33d5,
              }
            const _0x32df83 = _0x48d3f1,
              _0x4b499f = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x32df83, _0x4b499f)
          } catch (_0x486914) {
            l(_0x486914)
            const _0x2894ac = { text: lang.ERROR }
            const _0x1b804d = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x2894ac, _0x1b804d)
          }
          break
        case 'downmod':
          {
            const _0x4bfcdd = {
              text: '📥',
              key: _0x3aec85.key,
            }
            const _0x22a8c1 = { react: _0x4bfcdd }
            await _0x351799.sendMessage(_0x25807e, _0x22a8c1)
            const _0x473178 = { url: _0x524ab0 }
            const _0x890309 = { quoted: _0x3aec85 }
            _0x351799.sendMessage(
              _0x25807e,
              {
                document: _0x473178,
                fileName: 'namee.apk',
                mimetype: 'application/vnd.android.package-archive',
              },
              _0x890309
            )
          }
          break
        case 'dgn':
          {
            const _0x464070 = {
              text: '📥',
              key: _0x3aec85.key,
            }
            const _0x57208b = { react: _0x464070 }
            await _0x351799.sendMessage(_0x25807e, _0x57208b)
            const _0xbe427b = {
              url: 'https://dl.whatsappinstalling.com/wp-content/uploads/2023/01/WhatsApp_Aero_v9.52.apk',
            }
            const _0x14fdd0 = { quoted: _0x3aec85 }
            _0x351799.sendMessage(
              _0x25807e,
              {
                document: _0xbe427b,
                fileName: 'namee.apk',
                mimetype: 'application/vnd.android.package-archive',
              },
              _0x14fdd0
            )
          }
          break
        case 'attp':
        case 'ttp':
          if (!_0x524ab0) {
            return _0x2371ba(lang.NEED)
          }
          try {
            const _0x3b1b26 = {
              text: '💫',
              key: _0x3aec85.key,
            }
            const _0x122826 = { react: _0x3b1b26 }
            _0x351799.sendMessage(_0x25807e, _0x122826)
            const _0x197085 = {
              title: 'Select Your ttp Design',
              rows: [
                {
                  title: '1.Name: comics',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=comics-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '2.Name: 3d',
                  rowId:
                    '.dattp https://api.flamihttps://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=3d-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '3.Name: water',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=water-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120aleHeight=120',
                },
                {
                  title: '4.Name: blackbird',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=blackbird-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '5.Name: smurfs',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=smurfs-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '6.Name: style',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=style-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '7.Name: runner',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=runner-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '8.Name: fluffy',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=fluffy-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '9.Name: neon',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=neon-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '10.Name: world-cup-2014',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=world-cup-2014-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '11.Name: alien-glow (animation)',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=alien-glow-anim-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '12.Name: clan',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=clan-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '13.Name: fabulous',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=fabulous-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '14.Name: memories (animation)',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=memories-anim-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '15.Name: graffiti-3d',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=graffiti-3d-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '16.Name: graffiti-burn',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=graffiti-burn-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '17.Name: glow',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=glow-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '18.Name: april-fools',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=april-fools-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '19.Name: fire',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=fire-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '20.Name: amped',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=amped-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '21.Name: chrominium',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=chrominium-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '22.Name: crafts',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=crafts-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '23.Name: supermarket',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=supermarket-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '24.Name: roman',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=roman-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '25.Name: birthday-fun',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=birthday-fun-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '26.Name: colored2',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=colored2-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '27.Name: horizon',
                  rowId:
                    '.dattp https:https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=horizon&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '28.Name: glitter (animation)',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=glitter-anim-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120&fontname=kinkie',
                },
                {
                  title: '29.Name: cereal',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=cereal-logo&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
                {
                  title: '30.Name: blue-fire (animation)',
                  rowId:
                    '.dattp https://api.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=blue-fire&text=' +
                    _0x524ab0 +
                    '&doScale=true&scaleWidth=240&scaleHeight=120',
                },
              ],
            }
            const _0x457f62 = [_0x197085],
              _0x6f05ca = {
                text: "*Select Your Attp/Ttp Logo*",
                footer: config.FOOTER,
                title: '',
                buttonText: 'Results',
                sections: _0x457f62,
              }
            const _0x3aa535 = _0x6f05ca,
              _0x37b995 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x3aa535, _0x37b995)
          } catch (_0x5af82d) {
            l(_0x5af82d)
            const _0x2f3662 = { text: lang.ERROR }
            const _0x3e5198 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x2f3662, _0x3e5198)
          }
          break
        case 'dattp':
          {
            const _0x38a9ae = {
              text: '💠',
              key: _0x3aec85.key,
            }
            const _0x3295cd = { react: _0x38a9ae }
            _0x351799.sendMessage(_0x25807e, _0x3295cd)
            const {
              Sticker: _0x506458,
              createSticker: _0x3e07aa,
              StickerTypes: _0x320fd4,
            } = require('wa-sticker-formatter')
            let _0x246ae0 = new _0x506458(_0x524ab0, {
              pack: _0x58e654,
              author: '',
              type: _0x524ab0.includes('--crop' || '-c')
                ? _0x320fd4.CROPPED
                : _0x320fd4.FULL,
              categories: ['🤩', '🎉'],
              id: '12345',
              quality: 75,
              background: 'transparent',
            })
            const _0x1946a6 = await _0x246ae0.toBuffer(),
              _0x60780 = { sticker: _0x1946a6 }
            const _0x4f1269 = { quoted: _0x3aec85 }
            return _0x351799.sendMessage(_0x25807e, _0x60780, _0x4f1269)
          }
          break
        case 'findsong':
          try {
            const _0x4c38f3 = {
              text: '🎶',
              key: _0x3aec85.key,
            }
            const _0x54baf1 = { react: _0x4c38f3 }
            _0x351799.sendMessage(_0x25807e, _0x54baf1)
            const _0x544145 = sms(_0x351799, _0x3aec85),
              _0x5b519b = (_0x3b0c55.msg || _0x3b0c55).mimetype || ''
            if (/video|audio/.test(_0x5b519b)) {
              const _0x589790 = require('acrcloud'),
                _0xccb1aa = {
                  host: 'identify-eu-west-1.acrcloud.com',
                  access_key: 'a7982a1f271fc390f3a69cb5bac04498',
                  access_secret: 'QPbD6UOnfawRtUiH88lzKx7edUaX20I0erUWCoCW',
                }
              const _0xcdd01e = new _0x589790(_0xccb1aa)
              let _0x5cfb45 = await _0x544145.quoted.download()
              _0xcdd01e.identify(_0x5cfb45).then(async (_0x188514) => {
                const _0x3db005 =
                  '*\● ═══════════════ ●*\n_*🇵​​​​​🇪​​​​​🇦​​​​​🇨​​​​​🇪​​​​​🇲​​​​​🇩​​​​​ 🇸​​​​​🇴​​​​​🇳​​​​​🇬​​​​​ 🇫​​​​​🇮​​​​​🇳​​​​​🇩​​​​​🇪​​​​​🇷​​​​​​​​​​*_\n*\● ═══════════════ ●*\n\n*Song Name 🎶:* ' +
                  _0x188514.metadata.music[0].title +
                  '\n' +
                  ('*🎤 Artist:* ' +
                    _0x188514.metadata.music[0].artists[0].name +
                    '\n') +
                  ('*💽 Album:* ' +
                    _0x188514.metadata.music[0].album.name +
                    '\n') +
                  ('*📆 Released Date:* ' +
                    _0x188514.metadata.music[0].release_date)
                const _0x38f2f1 = { text: _0x3db005 }
                const _0x3466b1 = { quoted: _0x3aec85 }
                await _0x351799.sendMessage(_0x25807e, _0x38f2f1, _0x3466b1)
              })
            } else {
              return _0x2371ba(lang.SZ)
            }
          } catch (_0x453504) {
            console.log(_0x453504)
            const _0x53b7ba = { text: lang.N_FOUND }
            const _0x49e3e1 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x53b7ba, _0x49e3e1)
          }
          break
        case 'apk':
        case 'findapk':
          try {
            const _0x1c8f65 = {
              text: '📱',
              key: _0x3aec85.key,
            }
            const _0x37d63d = { react: _0x1c8f65 }
            await _0x351799.sendMessage(_0x25807e, _0x37d63d)
            const _0x45081b = { text: lang.NEED_N }
            const _0x3d0e07 = { quoted: _0x3aec85 }
            if (!_0x524ab0) {
              return await _0x351799.sendMessage(
                _0x25807e,
                _0x45081b,
                _0x3d0e07
              )
            }
            const _0x155552 = await comboapk.search(_0x524ab0),
              _0x22fa09 = _0x155552,
              _0x474c70 = { text: lang.N_FOUND }
            const _0x4b7b66 = { quoted: _0x3aec85 }
            if (_0x22fa09.length < 1) {
              return await _0x351799.sendMessage(
                _0x25807e,
                _0x474c70,
                _0x4b7b66
              )
            }
            var _0x28ffed = []
            for (var _0x1ef0d2 = 0; _0x1ef0d2 < _0x22fa09.length; _0x1ef0d2++) {
              _0x28ffed.push({
                title: _0x22fa09[_0x1ef0d2].name,
                description: '',
                rowId: prefix + 'dapk ' + _0x22fa09[_0x1ef0d2].link,
              })
            }
            const _0x4b97aa = {
              title: '📱 Select any apk 📱',
              rows: _0x28ffed,
            }
            const _0x51f95a = [_0x4b97aa],
              _0x5e2d16 = {
                text:
                  '*● ═════════════ ●*\n_*🇵​​​​​🇪​​​​​🇦​​​​​🇨​​​​​🇪​​​​​🇲​​​​​🇩​​​​​ 🇦​​​​​🇵​​​​​🇰​​​​​ 🇩​​​​​🇴​​​​​🇼​​​​​🇳​​​​​🇱​​​​​🇴​​​​​🇦​​​​​🇩​​​​​🇪​​​​​🇷​​​​​*_\n*● ═════════════ ●*\n\n*📱 Apk Name:* ' +
                  _0x524ab0,
                footer: config.FOOTER,
                title: '',
                buttonText: 'Select Apk',
                sections: _0x51f95a,
              }
            const _0x2e5c75 = _0x5e2d16,
              _0x1095c9 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x2e5c75, _0x1095c9)
          } catch (_0x145d7a) {
            l(_0x145d7a)
            const _0x530cfc = { text: lang.ERROR }
            const _0xffb062 = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x530cfc, _0xffb062)
          }
          break
        case 'dapk':
          try {
            const _0x4ca183 = {
              text: '📥',
              key: _0x3aec85.key,
            }
            const _0x7e9f82 = { react: _0x4ca183 }
            await _0x351799.sendMessage(_0x25807e, _0x7e9f82)
            const _0x507f80 = { text: lang.NEED_L }
            const _0x367e5d = { quoted: _0x3aec85 }
            if (!_0x524ab0) {
              return await _0x351799.sendMessage(
                _0x25807e,
                _0x507f80,
                _0x367e5d
              )
            }
            const _0x1db16c = await fetchJson(
              'https://astro-api-v1-2.astromdqr.repl.co/combodl?url=' +
              _0x524ab0
            )
            let _0x1fb54a =
              '*📚 Name :* ' +
              _0x1db16c.appname +
              '\n*👨‍💻 Developer :* ' +
              _0x1db16c.developer +
              '\n*📁 Package :* ' +
              _0x1db16c.id +
              '\n*⬇️ Downloads :* ' +
              _0x1db16c.downloads +
              '\n*🗃️ Category :* ' +
              _0x1db16c.category +
              '\n*📅 Updated on :* ' +
              _0x1db16c.update +
              '\n*🧰 Version :* ' +
              _0x1db16c.version +
              '\n*📦 Size :* ' +
              _0x1db16c.size +
              '\n*📃 Description:*​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ' +
              _0x1db16c.description
            const _0x557b4e = { text: lang.SIZE }
            const _0x1f5446 = { quoted: _0x3aec85 }
            if (_0x1db16c.size.replace(' MB', '') > dlmbsize) {
              return await _0x351799.sendMessage(
                _0x25807e,
                _0x557b4e,
                _0x1f5446
              )
            }
            const _0x39dadc = { text: lang.SIZE }
            const _0x50a3af = { quoted: _0x3aec85 }
            if (_0x1db16c.size.includes(' GB')) {
              return await _0x351799.sendMessage(
                _0x25807e,
                _0x39dadc,
                _0x50a3af
              )
            }
            !_0x1db16c.link.includes('https://')
              ? (dlink = 'https://apkcombo.com/' + _0x1db16c.link)
              : (dlink = _0x1db16c.link)
            if (dlink.includes('undefined&')) {
              return _0x2371ba(lang.N_FOUND)
            }
            const _0x18567f = { quoted: _0x3aec85 }
            let _0x270899 = await _0x351799.sendMessage(
              _0x25807e,
              {
                document: {
                  url:
                    'https://translate.google.com/translate?sl=en&tl=fr&hl=en&u=' +
                    encodeURIComponent(dlink) +
                    '&client=webapp',
                },
                mimetype: 'application/vnd.android.package-archive',
                fileName: _0x1db16c.appname + '.' + _0x1db16c.mime,
                caption: _0x1fb54a,
              },
              _0x18567f
            )
            const _0x5263d2 = {
              text: '📁',
              key: _0x270899.key,
            }
            const _0xf97115 = { react: _0x5263d2 }
            await _0x351799.sendMessage(_0x25807e, _0xf97115)
            const _0x358bbc = {
              text: '✔',
              key: _0x3aec85.key,
            }
            const _0x49ad30 = { react: _0x358bbc }
            await _0x351799.sendMessage(_0x25807e, _0x49ad30)
          } catch (_0x1548d3) {
            l(_0x1548d3)
            const _0x4edb51 = { text: lang.ERROR }
            const _0x48d16c = { quoted: _0x3aec85 }
            await _0x351799.sendMessage(_0x25807e, _0x4edb51, _0x48d16c)
          }
          break
        default:
          if (_0x21e8ba && _0x12adbd.startsWith('>')) {
            try {
              await _0x2371ba(
                util.format(
                  await eval('(async () => {' + _0x12adbd.slice(1) + '})()')
                )
              )
            } catch (_0x2f1501) {
              await _0x2371ba(util.format(_0x2f1501))
            }
          }
      }
    } catch (_0x129b41) {
      const _0x2e71f7 = String(_0x129b41)
      console.log(_0x2e71f7)
    }
  })
}
app.get('/', (_0x16bd53, _0x963e04) => {
  _0x963e04.send('📟 PEACE Working successfully!')
})
app.listen(port, () =>
  console.log('PEACE Server listening on port http://localhost:' + port)
)
setTimeout(() => {
  connectToWA()
}, 3000)
function _0x3051eb(_0xb92770) {
  function _0x4586e8(_0x2b5639) {
    if (typeof _0x2b5639 === 'string') {
      return function (_0x2773c6) { }
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ; ('' + _0x2b5639 / _0x2b5639).length !== 1 || _0x2b5639 % 20 === 0
        ? function () {
          return true
        }
          .constructor('debugger')
          .call('action')
        : function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject')
    }
    _0x4586e8(++_0x2b5639)
  }
  try {
    if (_0xb92770) {
      return _0x4586e8
    } else {
      _0x4586e8(0)
    }
  } catch (_0x4404ad) { }
}
