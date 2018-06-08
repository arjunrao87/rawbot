var rawger = require('./index');
var test = require('ava');

test('check valid blob url', t => {
	t.is(rawger.toRaw("https://github.com/arjunrao87/the-one/blob/master/App.js"), "https://github.com/arjunrao87/the-one/raw/master/App.js")
});

test('check valid non-blob url', t => {
	t.is(rawger.toRaw("https://www.lipsum.com/"), "https://www.lipsum.com/")
});


test('check empty url', t => {
	t.falsy(rawger.toRaw(""));
});

test('check null url', t => {
	t.falsy(rawger.toRaw(null));
});

test('check undefined url', t => {
	t.falsy(rawger.toRaw(undefined));
});