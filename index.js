const { escape } = require('escapify');

module.exports = (attributes) => {
	const attrs = [];
	const attrkeys = Object.keys(attributes);

	for (let attribute in attrkeys) {
		let name = attrkeys[attribute];
		let value = attributes[name];

		if (value === false)
			continue;

		if (Array.isArray(value))
			value = value.join(' ');

		attribute = escape(name);

		if (value !== true)
			attribute += `="${ escape(String(value)) }"`

		attrs.push(attribute);
	}

	return attrs.length <= 0 ? '' : attrs.join(' ');
};
