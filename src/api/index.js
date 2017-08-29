import axios from 'axios'
import 'es6-promise/auto'

import { extractTitle, extractDate } from '../utils'

/**
 * Format Github api url for content list
 * @returns {string}
 */
function getListUrl () {
  let url = 'https://api.github.com/repos/bluenight1994/writeups/contents?ref=master'
  return url
}

export default {
  getList () {
    return axios.get(getListUrl())
      .then(res => res.data)
      .then(arr => {
        const list = arr.map(({name, sha, size}) => ({
          title: extractTitle(name),
          date: extractDate(name),
          sha,
          size
        }))
        return list
      })
  }
}
