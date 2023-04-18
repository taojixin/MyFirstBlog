const express = require('express')
const parser = require('body-parser')

// 导入pc端接口路由相关信息
const notesRouter = require('../router/pc/notes.router')
const commentRouter = require('../router/pc/comment.router')
const resumeRouter = require('../router/pc/resume.router')
const introduceRouterPC = require('../router/pc/introduce.router')
const demoRouterPC = require('../router/pc/demo.router')
// const introduceRouter = require('../router/pc/introduce.router')

// 导入后台管理系统接口路由相关信息
const loginRouter = require('../router/bg/login.router')
const studyRouter = require('../router/bg/study.router')
const demoRouter = require('../router/bg/demo.router')
const introduceRouter = require('../router/bg/introduce.router')
const commentRouterBG = require('../router/bg/comment.router')
const fileRouter = require('../router/bg/file.router')


const app = express();

// 解析前端传过来的数据
app.use(parser.json())
app.use(parser.urlencoded({extended:true}))

// 客户端
// 笔记的数据请求
app.use('/api/notes', notesRouter);
// 评论的接口
app.use('/api/comment', commentRouter)
// 简历接口
app.use('/api/resume', resumeRouter)
// 自我介绍接口
app.use('/api/introduce', introduceRouterPC)
// demo接口
app.use('/api/demo', demoRouterPC)

// 后台管理系统
app.use('/admin/login', loginRouter)
app.use('/admin', studyRouter)
app.use('/admin', demoRouter)
app.use('/admin', introduceRouter)
app.use('/admin', commentRouterBG)
// 文件上传
app.use('/admin', fileRouter)



module.exports = app;