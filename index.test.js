var rawbot = require('./index');
var test = require('ava');

test('check valid blob url', t => {
	t.is(rawbot.toRaw("https://github.com/arjunrao87/the-one/blob/master/App.js"), "https://github.com/arjunrao87/the-one/raw/master/App.js")
});

test('check valid non-blob url', t => {
	t.is(rawbot.toRaw("https://www.lipsum.com/"), "https://www.lipsum.com/")
});


test('check empty url', t => {
	t.falsy(rawbot.toRaw(""));
});

test('check null url', t => {
	t.falsy(rawbot.toRaw(null));
});

test('check undefined url', t => {
	t.falsy(rawbot.toRaw(undefined));
});