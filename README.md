# react-components-kit
A collection of reusable React UI components

## Contributing
Make commits using `npm run commit` which uses [commitizen](https://github.com/commitizen/cz-cli)
helper to format the commit messages partly based on these [rules](https://gist.github.com/stephenparish/9941e89d80e2bc58a153).

This way [semantic-release](https://github.com/semantic-release/semantic-release)
knows how to bumb up the version number correctly.

In order to get `react-components-kit` UI components to work you have to link
the local npm package by first doing `npm link` here in the root of the project
and then cd to `/examples` and do `npm link react-components-kit` to add the
package to node_modules.
