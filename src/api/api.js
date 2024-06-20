/**
 * 接口
 */
import request from "../utils/http";
//NBA队伍新增接口
export const nbaTeam_Add = (params) => {
  return request({
    url: '/team/add',
    method: 'post',
    data: params
  })
}
// 产业链涨跌幅 产业下公司 接口
// export const productIncrease_searchCompanyList = (params) => {
//   return request({
//     url: '/productIncrease/searchCompanyList',
//     method: 'post',
//     data: params
//   })
// }