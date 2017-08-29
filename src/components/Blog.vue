<template>
  <div class="blog">
      <h1>Ox00010111</h1>
      <section class="list-view">
        <div class="loading" v-if="loading">loading..</div>
        <div class="no-content" v-else-if="lists.length === 0">nothing..</div>
            <ol v-else class="list">
                <li v-for="{ title, sha, date } in lists" :key="sha" class="list-item">
                    <router-link :to="'/post/' + sha" class="item-title">
                        {{ title }}
                    </router-link>
                    <br>
                    <time pubdate="pubdate" :datetime="date | formatDate" :title="date | formatDate" class="item-date">{{ date | timeago }}</time>
                </li>
            </ol>
    </section>
  </div>
</template>

<script>
import api from '../api'
import conf from '../config'

export default {
  name: 'blog',
  data () {
    return {
      lists: [],
      loading: true
    }
  },

  created () {
    this.loadList()
  },

  methods: {
    loadList () {
      this.loading = true
      window.document.title = conf.blogTitle
      api.getList()
        .then(lists => {
          this.loading = false
          this.lists = lists
        })
        .catch(err => {
          this.loading = false
          console.error(err)
        })
    }
  }
}
</script>

<style scoped>
h1, h2, h3 {
  font-weight: normal;
}
</style>
