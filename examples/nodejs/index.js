const axios = require('axios')

async function loadAndParseData () {
  // Because this funciton is marked as async we automatically await all promises

  const { data: user } = axios.get('https://api.github.com/users/ziolko')
  const { data: repos } = axios.get(user.repos_url)

  return repos.map(repo => repo.name)
}

loadAndParseData().then(console.log)
