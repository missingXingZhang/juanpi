// 引入Koa
let Koa = require('koa')
// 引入KoaRouter
let KoaRouter = require('koa-router')
// 实例化koa
let koa = new Koa()
// 实例化KoaRouter
let koaRouter = new KoaRouter()



// 定义接口返回数据
// 获取商品详情列表
let recommendList = require('./data/recommendList.json')
koaRouter.get('/reclist', (ctx, next) => {
  // 获取传过来的参数
  let req = ctx.query.req
  if (req) {
    console.log(req)
  }
  // 调用接口返回去的数据
  ctx.body = recommendList
})

// 获取
let recUsers = require('./data/recommend_users.json')
koaRouter.get('/recusers', (ctx, next) => {
  // 获取传过来的参数
  let req = ctx.query.req
  if (req) {
    console.log(req)
  }
  // 调用接口返回去的数据
  ctx.body = recUsers
})


// 获取热卖商品列表
let hotList = require('./data/hotList.json')
koaRouter.get('/hotlist', (ctx, next) => {
  // 获取传过来的参数
  let req = ctx.query.req
  if (req) {
    console.log(req)
  }
  // 调用接口返回去的数据
  ctx.body = hotList
})









// 声明使用所有的路由及方法
koa
  .use(koaRouter.routes())
  .use(koaRouter.allowedMethods())

// 监听端口，启动服务器
koa.listen('4000', () => {
  console.log('服务器启动成功了,访问网址:http://localhost:4000')
})