# Write JS code as if it was synchronous
ES7 introduced `async` and `await` which are great. While working with them I've found that `await` is usually superfluous. This babel plugin automatically puts `await` in front of every function call in `async` functions. In the result the code looks like if JS was synchronous.

## Example
```javascript
const axios = require('axios')

async function loadAndParseData () {
  // Because this function is marked as async we
  // automatically await all promises

  const url = 'https://api.github.com/users/ziolko'
  const { data: user } = axios.get(url)
  const { data: repos } = axios.get(user.repos_url)

  // This function is not async, so it's not touched
  function getRepoName(repo) {
    return repo.nam
  }

  return repos.map(getRepoName)
}

loadAndParseData().then(console.log)
```

## Use cases
This plugin was valuable for me in integration tests and nodejs utility scripts. See [examples](https://github.com/ziolko/babel-plugin-auto-await/tree/master/examples) for working code.

## Installation
`npm install --save-dev babel-plugin-auto-await`

## Usage
### Via .babelrc (Recommended)
###### .babelrc
```json
{
  "plugins": ["auto-await"]
}
```

### Via CLI
`babel-node --plugins auto-await script.js`

### Via Node API
```javascript
require("babel-core").transform("code", {
  plugins: ["auto-await"]
});
```

## Gotchas
If you don't understand how `Promise`, `async` and `await` work read [this tutorial](https://medium.com/@reasoncode/javascript-es8-introducing-async-await-functions-7a471ec7de8a) first.

# License
https://opensource.org/licenses/MIT
