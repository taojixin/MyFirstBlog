const express = require('express')
const notesRouter = express.Router();
const { cssBasic } = require('../../notes/cssBasic')
const { gitBasic } = require('../../notes/gitBasic')
const { jqueryBasic } = require('../../notes/jqueryBasic')
const { vueBasic } = require('../../notes/vueBasic')

const {
  addNote,
  getSomeNote,
  getNoteContent,
  getAllNote
} = require('../../controller/notes.controller')
// admin端的（懒得再写一遍写用一下）
const {
  getSortList
} = require('../../controller/study.controller')

notesRouter.post('/addnote', addNote)

notesRouter.get('/vuebasic', vueBasic)
notesRouter.get('/cssbasic', cssBasic)
notesRouter.get('/gitbasic', gitBasic)
notesRouter.get('/jquerybasic', jqueryBasic)

// 获取笔记分类接口
notesRouter.get('/getsortlist', getSortList)
// 根据分类查询笔记
notesRouter.post('/getsomenote', getSomeNote)
// 根据id获取笔记内容
notesRouter.post('/getnotecontent', getNoteContent)
// 获取笔记（所有或者n条）接口(不含内容)
notesRouter.post('/getallnote', getAllNote)

module.exports = notesRouter;