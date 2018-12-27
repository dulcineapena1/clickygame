# clickyGame

_Game. Click on different cats to earn points or your score will set to 0!._

## To start🚀

_Install npm modules, in console_

```
npm install
```

_Run the aplication, in console_

```
yarn start
```

_It will automatically open in the browser_

```
localhost:3000
```

### How it works ⌨️

_Every cat has its owns ids that are stored in a state every time you click in one. Then it compares using "includes" method if the next clicks exist in the state, if they exist, the score will be set to 0, if not, to + 1. To see the images reorganized ramdomly, we add a "sort" method with Math.random to the "map"._


_How to deploy a React app to GitHub Pages:_

_Add to package.json a link to the homepage:_
```
"homepage": http://<yourGitHubName>.github.io/<yourApplicationName>
```

_Add in "scripts" in package.json, the next line:_
```
"deploy": "yarn build && gh-pages -d build"
```

_Run in console_
```
yarn deploy
```

_Go to your repository in GitHub, and switch the source to "gh-pages branch" in GitHub Pages._


## Built with 🛠️

* Javascript ES6
* Node.js
* React

## Deployed version 🛠️

* [GitHub Pages Deployed Version](https://dulcineapena1.github.io/clickygame/) 

---
⌨️ By [DulcineaPena1](https://github.com/dulcineapena1) 😊
