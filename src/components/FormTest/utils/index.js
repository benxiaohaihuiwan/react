/**
 * 表格增加一行添加唯一标识
 *
 * @param {Function} func 函数
 * @param {Object} delay 唯一标识
 * @returns {Array}
 */

 export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}