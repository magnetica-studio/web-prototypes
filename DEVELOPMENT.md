# Development Guide

## Before you begin...

This project is maintained as a monorepo.
If you are not familiar with monorepo development,
read the following:

[lerna-with-yarn](https://doppelmutzi.github.io/monorepo-lerna-yarn-workspaces/)

## Starting a new prototype

1. create a directory under `packages/`.
1. `cd` into the new workspace, and `yarn init`. Or, you can use generators like `create-react-app` to do the same.
1. create your prototype.
1. make sure your prototype has a `build` command.
1. add a link to your new prototype in the root `index.html`.
1. make sure that your app can be viewed in production. To check this, `netlify dev` command is recommended.
1. create a pull request on [github](https://github.com/magnetica-studio/prototypes).
