/**
 * get the title from file name
 *
 * @export
 * @param {string} title
 * @returns {string}
 */
export function extractTitle (title) {
  return title.replace(/\.md$/, '').replace(/^\d{4}-\d{1,2}-\d{1,2}-/, '')
}

/**
 * get public date from file name
 *
 * @export
 * @param {string} title
 * @returns {string}
 */

export function extractDate (title) {
  return /^\d{4}-\d{1,2}-\d{1,2}/.exec(title)[0]
}
