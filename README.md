# Todo List

[App link](https://todo-list-alenashashko.vercel.app)

Simple todo list for fast and comfortable tasks management. Main app features:

- create / edit / delete task
- tasks are stored in LocalStorage
- works *offline*
- 100% test coverage

## Develop

This command starts webpack dev server.

```
npm start
```

When you commit, husky runs `npm test` and then runs `eslint` and `prettier` only for git staged files.

## Build

At first, this command completely removes public folder. After that webpack generates bundle and puts it to the public folder.

```
npm run build
```

## Reports

### Generate bundle size report

When webpack generates `bundle.js` in production mode, it also generates `reports/bundle.html` file. Here you can find detailed information about bundle.

```
npm run build
```

![bundle size report](/docs/images/bundle.jpg)

### Generate tests html report

This command runs all project's tests, generates `reports/tests.html` report. Here you can find information about all passed tests for each component and their duration.

```
npm test
```

![tests report](/docs/images/tests.jpg)

### Generate test coverage report

This command runs all project's tests, generates coverage folder and puts it to the reports folder. Then you can find `reports/coverage/index.html` file with information about test coverage.

```
npm test
```

![coverage report](/docs/images/coverage.jpg)











