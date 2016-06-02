var assert    = require('assert');
var fs        = require('fs');
var postcss   = require('postcss');
var classPrfx = require('..');

function fixture(name) {
  return fs.readFileSync('test/fixtures/' + name, 'utf8').trim();
}

describe('postcss-class-prefix', function() {
  it('prefixes all classes', function() {
    var output = postcss()
                .use(classPrfx('prfx-'))
                .process(fixture('source.css')).css;
    var expected = fixture('source.expected.css');

    assert.equal(output, expected);
  });
});
