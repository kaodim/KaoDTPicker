<p align="center">
  <img alt="Gatsby" src="https://user-images.githubusercontent.com/3690421/102041303-09cda800-3e0a-11eb-8175-3e37fc28dfc5.png" height="60" />
</p>

---

<!-- # KaoDTPicker -->

[![<ORG_NAME>](https://circleci.com/gh/kaodim/KaoDTPicker.svg?style=svg)](LINK)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)]()

React DateTime Picker library
<!-- ![KaoDTPicker](https://user-images.githubusercontent.com/3690421/102041303-09cda800-3e0a-11eb-8175-3e37fc28dfc5.png) -->


## Getting Started

First, clone this project:

```shell
$ git clone https://github.com/kaodim/KaoDTPicker.git
$ cd KaoDTPicker
```

Then install dependencies by using specific node version:

```shell
$ nvm use
$ npm install # `yarn install` if using yarn
```

If everything works fine, you can use `npm run storybook` for development.

### Run Scripts Description
The following are the descriptions of `npm run <script>`
|`npm run <script>`|Description|
|------------------|-----------|
|`storybook`|Run Storybook at `localhost:6006` for development|
|`build`| Build the library and generate `dist` folder |
|`prebuild`| Remove `dist` folder |
|`test`| Run unit tests with Jest|
|`lint`| Lint files in `/src`|
|`build-storybook`| Build Storybook as a static web application _(Not using at the moment)_|

## Application Structure
```
.
├── .circleci                   # CircleCI scripts folder
├── .storybook                  # Storybook config folder
├── dist                        # Library main folder
│   └── index.js                # Library index file
├── src                         # Application source code
│   ├── index.js                # Kao-DTPicker main file
│   ├── components              # All React components folder
│   ├── constants               # Mock data constants
│   ├── modules                 # Re-usable modules
│   ├── styles                  # Application styles folder
│   │   ├── base                # Global base styles
│   │   └── components          # Component base styles
│   ├── svg                     # SVG assets
│   └── tests                   # Testing related folder
│       ├── components          # Component unit tests
│       │   └── __snapshots__   # Snapshots folder
│       ├── fixtures            # Mock constants for testing
│       ├── __mocks__           # Dependencies library mocks 
│       └── setupTests.js       # Jest unit test setting file
└── stories                     # Stories for Storybook
