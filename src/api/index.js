// 引入ajax
import ajax from './ajax'

const BASE = '/api'
// 获取商品
export const reqShopList = () => ajax.get(BASE + '/shop_list')