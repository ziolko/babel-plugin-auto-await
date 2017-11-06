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
This plugin was valuable for me in integration tests and nodejs utility scripts. See the `examples` directory for working code.

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
`babel --plugins auto-await script.js`

### Via Node API
```javascript
require("babel-core").transform("code", {
  plugins: ["auto-await"]
});
```

## Gotchas
With this plugin every `async` function behaves like a regular function in multithreaded programming languages. If you don't understand the consequences then this plugin is not for you. 

If you don't fully understand how `Promise`, `async` and `await` work then this plugin is not for you.

# License
https://opensource.org/licenses/MIT
