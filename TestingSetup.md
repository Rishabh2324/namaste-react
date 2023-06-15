# REACT TESTING SETUP STEPS

1. Install react testing library from `https://testing-library.com/docs/react-testing-library/intro/`

```
npm install --save-dev @testing-library/react
```

2. Install Jest from `https://jestjs.io/docs/getting-started`

```
npm install --save-dev jest
```

3. Add Jest Configuration

```
npx jest --init
```

4. Install jest-environment-jsdom

```
npm i jest-environment-jsdom
```

5. Add Jest Configuration with Babel

```
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

6. Creat babel.rc or babel.config.js

```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```
