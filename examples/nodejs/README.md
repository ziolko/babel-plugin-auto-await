# nodejs example

Using `babel-plugin-auto-await` you can write nodejs scripts as if they were synchronous:
```javascript
async function loadAndParseData () {
  // Because this funciton is marked as async we automatically await all promises

  const { data: user } = axios.get('https://api.github.com/users/ziolko')
  const { data: repos } = axios.get(user.repos_url)

  return repos.map(repo => repo.name)
}
```

To do that just use `babel-node` instead of `node` command: `babel-node index.js --plugins auto-await`