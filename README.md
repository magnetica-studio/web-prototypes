# Web Prototypes

[![CircleCI](https://circleci.com/gh/magnetica-studio/prototypes.svg?style=svg)](https://circleci.com/gh/magnetica-studio/prototypes)

## About

Experiments, prototypes, ideas will be all stored here in a mono-repo-like-fashion.

## Production Site

[netlify](https://loving-almeida-c516ee.netlify.com/)

## Development

### Prerequisites

- Node  
  see `.node-version`
- yarn

### Build

1.

```bash
  yarn
```

2.

```bash
  yarn build
```

### Deployment

```bash
git push origin master
```

#### Local Preview

To preview locally,

1. Install `netlify-cli` by `npm i -g netlify-cli`
1. `netlify login` to login as you
1. `netlify link` to link to the existing site
1. `netlify dev` to preview
