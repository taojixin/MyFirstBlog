// 这里采用的是按需引入
import Vue from 'vue'
// 引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'

import {
  Message,
  Form,
  FormItem,
  Option,
  Select,
  Input,
  Button,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Table,
  TableColumn,
  Pagination,
  Descriptions,
  DescriptionsItem,
  Tag,
  Radio,
  RadioGroup,
  DatePicker,
  MessageBox,
  Tooltip,
  Dialog,
  Upload,
} from 'element-ui'

// 全局注册
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(Tooltip)
Vue.use(DatePicker)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Tag)
Vue.use(Descriptions)
Vue.use(DescriptionsItem)
Vue.use(Pagination)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Container)
Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(FormItem)
Vue.use(Form)

// 将Message放到Vue的原型上,后面可通过全局对象直接使用
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm