/*
 * @Author: mavon
 * @Date: 2021-11-15 17:35:32
 * @LastEditTime: 2021-11-19 09:58:19
 * @LastEditors: mavon
 * @Description: 
 */
export interface IVaiTab {
    title? : string,
    path? : string,
}

export interface IVaiMenu {
    component : string,
    path : string,
    meta : {
        title : string,
        icon : string,
        sideTab? : boolean
    },
    children : IVaiMenu[]
}