// 当前这个模块：API进行统一管理
import requests from "./request";

// 获取笔记分类接口
const getNoteSort = () => {
  return requests.get('/notes/getsortlist')
}
// 根据笔记分类获取笔记
const getSomeNote = (sort) => {
  return requests({
    url: '/notes/getsomenote',
    method: 'post',
    data: {
      sort
    }
  })
}
// 根据id获取笔记内容
const getNoteContent = (id) => {
  return requests({
    url: '/notes/getnotecontent',
    method: 'post',
    data: {
      noteId: id
    }
  })
}
// 获取所有笔记信息
const getAllNotes = (num) => {
  return requests({
    method: 'post',
    url: '/notes/getallnote',
    data: {
      number: num
    }
  })
}

// 获取个人介绍全部内容
const getMyIntroduce = () => {
  return requests({
    method: 'post',
    url: '/introduce/getintroduce',
    data: {
      queryKey: 'all'
    }
  })
}

// 获取demo信息
const getDemoMes = (demo_id) => {
  return requests({
    method: 'post',
    url: '/demo/getalldemo',
    data: {
      getId: demo_id
    }
  })
}

export {
  getNoteSort,
  getSomeNote,
  getNoteContent,
  getAllNotes,
  getMyIntroduce,
  getDemoMes
}
