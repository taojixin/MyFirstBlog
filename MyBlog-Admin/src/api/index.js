// 对API进行统一管理
import requests from "./request";

// 登录模块
// 登录admin
const loginAdmin = async (name, password) => {
  return await requests({
    url: '/login', method: 'post', data: {
      name,
      password
    }
  })
}

// 笔记模块
// 获取笔记分类列表
const getSortList = async () => {
  return await requests.get('/getsortlist')
}
// 上传笔记
const uploadNote = async (noteMessage) => {
  return await requests({
    url: '/uploadnote',
    method: 'post',
    data: noteMessage
  })
}
// 获取全部笔记(不包括内容)
const getAllNote = async () => {
  return await requests.get('/getallnote')
}
// 根据页数条数查询笔记
const getSomeNote = async (num, page) => {
  return await requests({
    method: 'post',
    url: '/getsomenote',
    data: {
      note_page: page,
      note_num: num
    }
  })
}
// 删除笔记
const deleteNote = async (id) => {
  return await requests({
    method: 'delete',
    url: '/deletenote',
    data: {
      id
    }
  })
}
// 根据id查询某个笔记
const getOneNote = async (noteId) => {
  return requests({
    method: 'post',
    url: '/getonenote',
    data: {
      noteId
    }
  })
}
// 修改某个笔记
const modifyTheNote = async (id, note_title, note_describe, note_content, note_sort) => {
  return requests({
    method: 'post',
    url: '/modifynote',
    data: {
      id, note_title, note_describe, note_content, note_sort
    }
  })
}

// demo模块
// 获取全部demo信息
const getDemoAll = async () => {
  return await requests({
    method: 'post',
    url: '/getdemo',
    data: {
      getId: 0
    }
  })
}
// 查询某个demo信息
const getDemoSome = async (getId) => {
  return requests({
    method: 'post',
    url: '/getdemo',
    data: {
      getId
    }
  })
}
// 添加demo信息
const addDemo = async (addMessage) => {
  return requests({
    method: 'post',
    url: '/adddemo',
    data: {
      addMessage
    }
  })
}
// 删除demo
const deleteDemo = async (demoId) => {
  return requests({
    method: 'delete',
    url: '/deledemo',
    data: {
      demoId
    }
  })
}
// 修改demo
const modifyDemo = async (demoId, demo_describe, demo_knowledge, demo_code, path) => {
  return await requests({
    method: "post",
    url: '/modifydemo',
    data: {
      demoId,
      demo_describe,
      demo_knowledge,
      demo_code,
      path
    }
  })
}

// 个人介绍模块
// 获取个人所有信息
const getMyIntroduce = async (queryKey) => {
  return requests({
    method: 'post',
    url: '/getintroduce',
    data: {
      queryKey
    }
  })
}
// 修改个人全部信息
const updateAll = async (personalForm) => {
  return requests({
    method: 'post',
    url: '/updateallintro',
    data: {
      personalForm
    }
  })
}

// 评论模块
// 根据page与num获取
const getSomeComments = (page,num) => {
  return requests({
    method:'post',
    url: '/getsomecomments',
    data: {
      page,num
    }
  })
}
// 获取评论数量
const getCommentTotal = () => {
  return requests({
    method: 'get',
    url: '/getcommenttotal'
  })
}
// 删除某条评论
const deleteMes = (delId) => {
  return requests({
    method: 'delete',
    url: '/delsomecomment',
    data: {
      delId
    }
  })
}

export {
  loginAdmin,
  getSortList,
  uploadNote,
  getAllNote,
  deleteNote,
  getSomeNote,
  getDemoAll,
  addDemo,
  getMyIntroduce,
  updateAll,
  deleteDemo,
  getDemoSome,
  modifyDemo,
  getSomeComments,
  getCommentTotal,
  deleteMes,
  getOneNote,
  modifyTheNote
}