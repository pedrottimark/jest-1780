# jest-1780

Snapshot with instrumentation code in it https://github.com/facebook/jest/issues/1780

Here is an attempt at a minimal reproducing case for the way I just saw this.

Based on the following issue and comment

* https://github.com/facebook/jest/issues/1683
* https://github.com/facebook/react/issues/7148#issuecomment-247212027

I decided to try a snapshot test of **shallow-rendered** output with TestUtils (no Enzyme).

Maybe a false start? In any case, see the following files:

* src/shallow.js
* src/shallow.test.js
* **src/__snapshots__/shallow.test.js.snap** has istanbul comments within the tag where you would expect the display name of a React component.

Steps I followed:

1. `create-react-app jest-1780`
2. make dependencies exact at 15.4.1
3. `npm test`
4. install `react-addons-test-utils` and make dependency exact at 15.4.1
5. add `shallow.js` and `shallow.test.js`
6. `npm test`
