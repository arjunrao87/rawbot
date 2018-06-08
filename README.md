# Rawbot [![CircleCI](https://circleci.com/gh/arjunrao87/rawger.svg?style=svg)](https://circleci.com/gh/arjunrao87/rawger)

## Convert BLOB URLs of Github/Gitlab to their raw format

You can probably do this using the right APIs but this is a quick and dirty way to convert a blob ( binary large object ) link to a raw link

Note : For Gitlab the transformed link actually exists whereas for Github it results in a rerouting.

# Running tests

```
./node_modules/ava/cli.js index.test.js
```