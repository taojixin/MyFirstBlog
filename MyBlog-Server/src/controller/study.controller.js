const service = require('../service/study.service')
const Conver = require('../utils/convert')
// 提取分类保存到数组中
const extractSort = require('../utils/extractSort')
class StudyController {
  // 获取所有笔记接口
  async getAllNote(req, res, next) {
    const result = await service.getAllNote()
    res.json(result)
  }
  // 获取笔记分类列表
  async getSortList(req, res, next) {
    const result = await service.getSortList()
    const newArray = extractSort(result[0])
    res.json({
      data: {
        sortArray: newArray
      },
      meta: {
        message: '获取分类列表成功！',
        status: 200
      }
    })
  }
  // 上传笔记接口
  uploadNote(req, res, next) {
    const noteMessage = req.body
    const result = service.uploadNote(noteMessage)
    result.then(resolve => {
      return res.json({
        data: 0,
        meta: {
          message: "上传成功！",
          status: 200
        }
      })
    }).catch(error => {
      return res.json({
        data: 1,
        meta: {
          message: "上传失败",
          status: 200
        }
      })
    })
  }
  // 删除笔记
  delteNote(req, res, next) {
    const note_id = req.body.id
    service.deleteNote(note_id).then(resolve => {
      res.json({
        meta: {
          message: '删除成功',
          status: 200
        }
      })
    }).catch(error => {
      res.json({
        meta: {
          message: '删除失败',
          status: 500
        }
      })
    })
  }
  // 根据条数和页数查询笔记
  async getSomeNote(req, res, next) {
    // 获取页数
    const page = req.body.note_page
    // 获取条数
    const num = req.body.note_num
    const result = await service.getSomeNote(num, page)
    res.json(result)

  }
  // 修改笔记（修改分类，表述等）
  async modifyNote(req, res, next) {
    // 获取需要修改的笔记的id
    const { id, note_title, note_describe, note_content, note_sort } = req.body
    console.log(id);
    await service.modifyNote(id, note_title, note_describe, note_content, note_sort)
    res.json("修改成功！")
  }
  // 根据id获取某个笔记信息
  async getOneNote(req, res, next) {
    const noteId = req.body.noteId
    console.log("djfls" + noteId);
    const data = await service.getOneNote(noteId)
    data.note_content = Conver(data.note_content)
    res.json(data)
  }

}


module.exports = new StudyController();