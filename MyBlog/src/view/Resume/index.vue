<template>
  <div class="resume">
    <div class="bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/About' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>简历</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="box">
      <!-- 左侧 -->
      <div class="left">
        <div class="left_top">
          <div class="spot">
            <img src="@/assets/Headportrait.jpg" alt="" />
          </div>
        </div>
        <div class="left_bottom">
          <!-- 标题 -->
          <div class="title">
            <h1>个人简历</h1>
            <p>--CURRICULUM VITAE--</p>
          </div>
          <!-- 个人信息 -->
          <div class="information">
            <div class="top">
              <div class="border">
                <i class="iconfont icon-icon"></i>
              </div>
            </div>
            <div class="message">
              <h3>个人信息</h3>
              <ul>
                <li>
                  <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>{{personal.myName}}
                </li>
                <li>
                  <span>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：</span
                  >{{personal.phoneNumber}}
                </li>
                <li>
                  <span>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：</span>{{personal.myAge}}
                </li>
                <li>
                  <span>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</span
                  >{{personal.myAddress}}
                </li>
                <li><span>工作经验：</span>{{personal.workExperience}}</li>
              </ul>
            </div>
          </div>
          <!-- 求职意向 -->
          <div class="jobs">
            <div class="top">
              <div class="border">
                <i class="iconfont icon-browse"></i>
              </div>
            </div>
            <div class="message">
              <h3>实习意向</h3>
              <ul>
                <li><span>从事职业</span>{{jobIntention.professional}}</li>
                <li><span>期望薪资</span>{{jobIntention.salary}}</li>
              </ul>
            </div>
          </div>
          <!-- 教育背景 -->
          <div class="education">
            <div class="top">
              <div class="border">
                <i class="iconfont icon-jiaoyubeijing"></i>
              </div>
            </div>
            <div class="message">
              <h3>教育背景</h3>
              <ul>
                <li><span>学校名称：</span>{{education.schoolName}}</li>
                <li><span>就读时间：</span>{{education.startStudyTime}}</li>
                <li><span>所学专业：</span>{{education.major}}</li>
                <li><span>学历学位：</span>{{education.degree}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="right">
        <!-- 专业技能 -->
        <div class="expertise">
          <h4>专业技能</h4>
          <hr />
          <ul>
            <li v-for="item in skills" :key="item">{{ item }}</li>
          </ul>
        </div>
        <!-- 项目经验 -->
        <div class="project">
          <h4>项目经验</h4>
          <hr />
          <div v-for="item in projects" :key="item">
            <h5>{{item.title}}</h5>
            <ul>
              <li v-for="child in item.content" :key="child">{{child}}</li>
            </ul>
          </div>
        </div>
        <!-- 自我评价 -->
        <div class="assessment">
          <h4>自我评价</h4>
          <hr />
          <ul>
            <li v-for="item in evaluation" :key="item">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 专业技能
      skills: [
        "熟悉html、css、JavaScript基础知识，了解html5&css3；",
        "熟悉Ajax请求数据以及对axios的使用；",
        "熟悉es6新特性，能够模块化开发项目；",
        "掌握vue全家桶，能够使用vue全家桶构建项目；",
        "掌握node.js，能够编写登录注册等简单接口；",
        "了解JavaScript高级语法；",
        "了解移动端开发；",
      ],
      // 项目经验
      projects: [
        {
          title: "1.电商后台管理系统",
          content: [
            "通过vue构建项目模块化开发；",
            "使用Element-ui快速进行布局；",
            "使用axios访问后台数据；",
            "通过git管理代码并上传到远程仓库；",
          ],
        },
        {
          title: '2.个人博客',
          content: [
            "使用vue构建项目模块化开发；",
            "通过vue组件化开发，封装了自己的组件库；",
            "通过vuex管理状态以及存储信息；",
            "通过nginx代理服务器远程部署项目；",
            "访问地址: http://www.libertys.cn/"
          ]
        }
      ],
      // 自我评价
      evaluation: [
        '有较强的自制力，主动学习新技能，热爱技术，提升自我；',
        '踏实认真，有良好的学习协调能力和规划能力；',
        '善于独立思考，有良好的接受能力与学习能力，以及遇到问题的解决能力；',
        '缺少实际工作经验，不了解具体工作流程；'
      ],
      // 教育背景
      education: {
        schoolName: '四川工商学院',
        startStudyTime: '2020.07~2024.06',
        major: '软件工程',
        degree: '本科'
      },
      // 实习意向
      jobIntention: {
        professional: 'web前端开发',
        salary: '2.5K~5K'
      },
      // 个人信息
      personal: {
        myName: '陶继鑫',
        phoneNumber: '18581766104',
        myAge: '20',
        myAddress: '四川省成都市郫都区',
        workExperience: '暂无'
      }
    };
  },
};
</script>

<style lang="less" scoped>
.resume {
  position: relative;
  .bread {
    position: absolute;
  }
}

.box {
  display: block;
  margin: 5px auto;
  width: 730px;
  height: 740px;
  background: #e6e6e6;
  box-sizing: border-box;

  // 左侧
  .left {
    margin: 20px 0;
    width: 240px;
    height: 700px;
    overflow: hidden;
    float: left;
    box-sizing: border-box;
    border-right: 1px solid #a1a1a1;

    // 头像
    .left_top {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      text-align: center;

      .spot {
        // 水平垂直居中
        display: flex;
        justify-content: center;
        align-items: center;
        width: 140px;
        height: 140px;
        border-radius: 140px;
        border: 3px dashed #8f8f8f;

        img {
          width: 130px;
          height: 130px;
          border-radius: 130px;
        }
      }
    }

    // 左侧头像意外剩下的部分
    .left_bottom {
      box-sizing: border-box;
      height: 540px;

      // 标题：个人简历
      .title {
        height: 60px;

        h1 {
          margin: 0;
          text-align: center;
        }
        p {
          font-size: 12px;
          text-align: center;
          margin: 0;
          color: #a1a1a1;
        }
      }

      // 个人信息
      .information {
        margin-top: 8px;

        .top {
          height: 44px;

          .border {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 40px;
            border: 2px solid #a1a1a1;

            i {
              font-size: 25px;
            }
          }
        }

        .message {
          h3 {
            margin: 1px;
            text-align: center;
          }

          ul {
            margin: 5px 0;
            padding: 0 auto;

            li {
              font-size: 12px;

              margin: 3px 0;
            }
          }
        }
      }

      // 求职意向
      .jobs {
        margin-top: 20px;
        .top {
          height: 44px;

          .border {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 40px;
            border: 2px solid #a1a1a1;

            i {
              font-size: 35px;
            }
          }
        }

        .message {
          h3 {
            margin: 1px;
            text-align: center;
          }

          ul {
            margin: 5px 0;
            padding: 0 auto;

            li {
              font-size: 12px;

              margin: 3px 0;
            }
          }
        }
      }

      // 教育背景
      .education {
        margin-top: 20px;
        .top {
          height: 44px;

          .border {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 40px;
            border: 2px solid #a1a1a1;

            i {
              font-size: 40px;
            }
          }
        }

        .message {
          h3 {
            margin: 1px;
            text-align: center;
          }

          ul {
            margin: 5px 0;
            padding: 0 auto;

            li {
              font-size: 12px;
              margin: 3px 0;
            }
          }
        }
      }
    }
  }

  // 右侧
  .right {
    float: right;
    margin: 20px 0;
    width: 490px;
    height: 700px;
    box-sizing: border-box;

    h4,
    h5 {
      margin: 0;
    }
    hr {
      margin: 2px 0;
    }
    ul {
      list-style-type: disc;
      margin: 0;

      li {
        font-size: 15px;
        margin: 3px 0;
        color: #6e6767;
      }
    }

    // 专业技能
    .expertise {
      height: 200px;
      padding: 5px 10px;
    }

    // 项目经验
    .project {
      height: 300px;
      padding: 5px 10px;
      h5 {
        margin: 5px;
        font-size: 15px;
        text-indent: 20px;
      }
      .second {
        margin-top: 10px;
      }
      ul {
        padding-left: 25px;
      }
    }

    // 自我评价
    .assessment {
      height: 200px;
      padding: 5px 10px;

      ul {
        margin-top: 15px;
      }
    }
  }
}
</style>