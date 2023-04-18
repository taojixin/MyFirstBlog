const connections = require('../app/database')

class NotesService {
  // 添加笔记
  addNote(mesarray) {
    const statement = `INSERT INTO notes_test (note_title,note_describe,note_content,note_createtime,note_sort)
    VALUES (?,?,?,?,?);
    `
    const result = connections.execute(statement, [mesarray])
    return result
  }
  // 根据分类获取笔记
  async getSomeNote(sort) {
    const statement = `SELECT id,note_title,note_describe,note_createtime,note_sort FROM notes_test WHERE note_sort=?;`
    const result = await connections.execute(statement, [sort])
    return result[0]
  }
  // 根据id获取内容
  async getNoteContent(id) {
    const statement = `SELECT note_content FROM notes_test WHERE id=?;`
    const result = await connections.execute(statement, [id+''])
    return result[0][0]
  }
  // 
  async getAllNote(num) {
    // 查询所有
    const statement1 = `SELECT id,note_title,note_describe,note_createtime,note_sort FROM notes_test;`
    // 根据数量num查询笔记上传时间的前num条数
    const statement2 = `SELECT id,note_title,note_describe,note_createtime,note_sort FROM notes_test 
    ORDER BY id DESC LIMIT ?;
    `
    if (num === 0) {
      const result = await connections.execute(statement1)
      return result[0]
    } else {
      const result = await connections.execute(statement2, [num+''])
      return result[0]
    }
  }
}

module.exports = new NotesService();