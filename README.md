# react-components-kit
A collection of reusable and themable React UI components built with [styled-components](https://styled-components.com).

[![travis build](https://img.shields.io/travis/TaitoUnited/react-components-kit.svg)](https://travis-ci.org/TaitoUnited/rreact-components-kit)
[![version](https://img.shields.io/npm/v/react-components-kit.svg)](https://www.npmjs.com/package/react-components-kit)
[![MIT License](https://img.shields.io/npm/l/react-components-kit.svg)](https://opensource.org/licenses/MIT)

## Install
```
npm install --save react-components-kit
```

## Component showcase
Live demo available: https://taitounited.github.io/react-components-kit/

You can also test the components locally by cloning this repo and doing the following steps:
```
cd docs
npm install
npm start
```
And then open localhost:3000 in a browser.

## Usage
```javascript
import React from 'react';

// Import some components
import { Tooltip, Spinner } from 'react-components-kit';

const Example = () => {
  return (
    <Tooltip content="Hello World" />
    <Spinner color="tomato" lg />
  );
}
```

Check out the more detailed [documentation](src/README.md) describing the individual components
in more detail.

## Development
In order to get **react-components-kit** UI components to work in the docs project
you have to link the local npm package by first doing:

```
npm link
```

in the root of the project and then cd to `/docs` and do:

```
npm link react-components-kit
```
to add the package to node_modules in docs' create-react-app project.

Then you can start developing and continuously building your changes by running:

```
npm run watch:build:lib
```

This way you can easily test your changes in the docs pages.

After done with changes add them with:
```
git add .
```

and commit with
```
npm run commit
```

which uses [commitizen](https://github.com/commitizen/cz-cli)
helper to format the commit messages partly based on these [rules](https://gist.github.com/stephenparish/9941e89d80e2bc58a153).

This way [semantic-release](https://github.com/semantic-release/semantic-release)
knows how to bumb up the version number correctly when we finally push the code to master and Travis CI builds our package.

You can see the Travis CI builds [here](https://travis-ci.org/TaitoUnited/react-components-kit)
