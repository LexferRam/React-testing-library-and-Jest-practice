# Code Coverage

A metric that can help you understand how much of your software code is tested

* **Statement coverage**: how many of the statements is the software code have been executed
* **Branch coverage**: how many of the branches of each control structure(if statements for instance) have been executed 
* **Function coverage**: how many of the functions defined have been called
* **Line coverage**: how many of the lines of code have been tested

we should add this flags (--coverage --watchAll):

```js
"test": "react-scripts test --coverage --watchAll --collectCoverageFrom='src/components/**/*.{js,jsx}' --collectCoverageFrom='!src/components/**/*.{types,stories,constants,test,spec}.{js,jsx}'",
```

**el flag:** --collectCoverageFrom='src/components/**/*.{js,jsx}', es para indicarle los test a cubrir en code coverage.

**el flag:** --collectCoverageFrom='!src/components/**/*.{types,stories,constants,test,spec}.{js,jsx}', es para indicar los archivos a ignorar


Jest configuration in the package.json to define the minimum code coverage percentage to have:

```js
"jest": {
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": -10
      }
    }
}
``