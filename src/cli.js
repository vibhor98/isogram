#!/usr/bin/env node

var isogram = require('../lib/isogram');

var program = require('commander');

program
	.version('@version')
  .usage('[characters (5 or more and 7 or less)] [options]')
	.option('-i, --id <tracking ID>', 'change tracking-ID')
	.option('-d, --domain-name <domain>', 'change domain')
	.option('-m, --minify', 'minify source')
	.parse(process.argv);

isogram(program.args[0], {
  id: program.id,
  domain: program.domainName,
  minify: program.minify,
  color: true
});
