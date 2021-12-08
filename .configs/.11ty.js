const prism   = require("@11ty/eleventy-plugin-syntaxhighlight");
const mdIt    = require('markdown-it');
const mdAttrs = require('markdown-it-attrs');

module.exports = function(cnf) {

	cnf.addPassthroughCopy('src/assets');
	cnf.setUseGitIgnore(true);

	cnf.addPlugin(prism, {

    templateFormats: ["*"],

    init: function({ Prism }) {
      Prism.languages.myCustomLanguage = 'md';
    },

    alwaysWrapLineHighlights: true,
    trim: true,
    lineSeparator: "<br>",
    preAttributes: { tabindex: 0 },
    codeAttributes: {},

  });

	cnf.setBrowserSyncConfig({

		server: {
			baseDir: [
				'docs',
			]
		},
		files: [
			'src/sass/**/*.*',
			'src/js/**/*.*'
		],

		ghostMode: false,
		watch: true,
		notify: false,
		ui: false,
		open: true

	});


	let markdownLibrary = mdIt({

		html: true,
		breaks: true,
		linkify: true,

		highlight: function(str, lang) {

			const content = markdownLibrary.utils.escapeHtml(str)

			return lang
				? `<pre data-lang="${lang}"><code>${content}</code></pre>`
				: `<pre>${content}</pre>`

		}

		}).use(mdAttrs, {
			// optional, these are default options
			leftDelimiter: '{',
			rightDelimiter: '}',
			allowedAttributes: []  // empty array = all attributes are allowed
		});

		cnf.setLibrary('md', markdownLibrary);

		return {

		dir: {

			input: 'src',
			output: 'docs',
			includes: 'njk/includes/',
			layouts: 'njk/layouts/',
			data: "data"

		},

		templateFormats: ['md', 'njk'],
		// markdownTemplateEngine: "njk",
		htmlTemplateEngine: 'njk',
		passthroughFileCopy: true,
		jsDataFileSuffix: ".data"

	}

}