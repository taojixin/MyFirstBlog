const connections = require('../app/database')
class IntroduceService {
  // 获取个人介绍接口
  async getIntroduce(queryKey) {
    if (queryKey === 'all') {
      const statement1 = `SELECT * FROM introduce;`
      const data = await connections.execute(statement1)
      return data[0][0]
    } else {
      const statement2 = `SELECT ${queryKey} FROM introduce;`
      const data = await connections.execute(statement2)
      return data[0][0]
    }
  }
  // 修改个人介绍接口
  async updateData(queryKey, updateData) {
    const statement = `UPDATE introduce SET ${queryKey}=? WHERE my_id=1;`
    const data = await connections.execute(statement, [updateData])
    return data
  }
  // 修改个人所有信息
  async updataAll(personalForm) {
    const {my_id,my_name,my_phone,my_sex,my_email,my_birthday,my_qq,my_address,my_koseki,my_education,my_school,my_professional,my_state,my_signature,my_hobbyies} = personalForm
    const statement = `UPDATE introduce SET my_id=?,my_name=?,my_phone=?,my_sex=?,my_email=?,my_birthday=?,my_qq=?,my_address=?,my_koseki=?,my_education=?,my_school=?,my_professional=?,my_state=?,my_signature=?,my_hobbyies=? WHERE my_id=1;`
    const data = connections.execute(statement, [my_id,my_name,my_phone,my_sex,my_email,my_birthday,my_qq,my_address,my_koseki,my_education,my_school,my_professional,my_state,my_signature,my_hobbyies])
    return data[0]
  }
}

module.exports = new IntroduceService();