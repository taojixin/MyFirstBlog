const vueBasic = require('../notes/vueBasic')
const cssBasic = require('../notes/cssBasic')
const gitBasic = require('../notes/gitBasic')
const jqueryBasic = require('../notes/jqueryBasic')

const service = require('../service/notes.service')
const Conver = require('../utils/convert')
class NotesController {
  // 留言
  addNote(req, res, next) {
    const mesarray = req.body.mesarray
    service.addNote(mesarray).then(resolve => {
      res.end("存入成功")
    }).catch(error => {
      res.end("存入失败")
    })
  }
  // 根据分类查询笔记
  async getSomeNote(req, res, next) {
    const sort = req.body.sort
    const result = await service.getSomeNote(sort)
    res.json({
      data: {
        notes: result
      },
      meta: {
        message: '获取成功！',
        status: 200
      }
    })
  }
  // 根据id获取笔记内容
  async getNoteContent(req, res, next) {
    const noteId = req.body.noteId
    const result = await service.getNoteContent(noteId)
    const data = Conver(result.note_content)
    res.json({
      data: {
        content: data
      },
      meta: {
        message: '查询成功',
        status: 200
      }
    })
  }
  // 获取笔记（所有或者n条）接口(不含内容)
  async getAllNote(req, res, next) {
    const num = req.body.number
    const result = await service.getAllNote(num)
    res.json({
      data: {
        content: result
      },
      meta: {
        message: '获取成功！',
        status: 200
      }
    })
  }
}

module.exports = new NotesController();