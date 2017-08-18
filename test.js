import test from 'ava';
import attribute from './';

test('Generates attribute string', t => {
	const a = attribute({ href: 'https://google.com', src: 'test', html: true })

	t.is(a, 'href="https://google.com" src="test" html');
});

test('Removes false attributes', t => {
	const a = attribute({ no: false, yes: true })

	t.is(a, 'yes');
});

test('Escapes attributes', t => {
	const a = attribute({ text: '<p>text</p>' })

	t.is(a, 'text="&lt;p&gt;text&lt;/p&gt;"');
});

test('Generates empty attribute string', t => {
	t.is(attribute({ }), '');
});
