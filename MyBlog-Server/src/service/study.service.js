const connections = require('../app/database')

class StudyService {
  // 获取所有笔记
  async getAllNote() {
    const statement = `SELECT id,note_title,note_describe,note_createtime,note_sort FROM notes_test;`
    const result = await connections.execute(statement)
    return result[0]
  }
  // 获取笔记分类列表
  async getSortList() {
    const statement = `SELECT * FROM sort;`
    const result = await connections.execute(statement)
    return result
  }
  // 上传笔记
  async uploadNote(noteMessage) {
    const statement = `INSERT INTO notes_test (note_title,note_describe,note_content,note_createtime,note_sort)
    VALUES (?,?,?,?,?);`
    const result = await connections.execute(statement,[noteMessage.title,noteMessage.describe,noteMessage.content,noteMessage.createtime,noteMessage.sort])
    return result
  }
  // 删除笔记
  async deleteNote(id) {
    const statement = `DELETE FROM notes_test WHERE id=?;`
    const result = await connections.execute(statement, [id])
    return result
  }
  // 根据条数和页数查询笔记
  async getSomeNote(num, page) {
    const fromNum = (page - 1) * num
    const statement = `SELECT id,note_title,note_describe,note_createtime,note_sort FROM notes_test LIMIT ?,?;`
    const result = await connections.execute(statement, [fromNum+'', num+''])
    return result[0]
  }
  // 修改笔记（修改分类，表述等）
  async modifyNote(id, note_title, note_describe, note_content, note_sort) {
    const statement = `UPDATE notes_test SET note_title=?,note_describe=?,note_content=?,note_sort=? WHERE id=?;`
    const data = await connections.execute(statement, [ note_title, note_describe, note_content, note_sort,id])
    return data[0]
  }
  // 根据id获取某个笔记信息
  async getOneNote(id) {
    const statement = `SELECT * FROM notes_test WHERE id=?;`
    const data = await connections.execute(statement, [id+''])
    return data[0][0]
  }
}

module.exports = new StudyService();