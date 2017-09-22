#! /usr/bin/env node

var ColorScheme = require('color-scheme');
var program = require('commander');
 
program
  .version('0.1.0')
  .option('-h, --from-hue <i>', 'From hue <hue>', clamp360)
  .option('-H, --from-hex [value]', 'From hex [value]', validateHex)
  .option('-s, --scheme <scheme>', 'Scheme type (mono, contrast, triade, tetrade, analogic)', validateScheme)
  .option('-v, --variation <variation>', 'Variation (default, pastel, soft, light, hard, pale)', validateVariation)
  .option('-d, --distance <i>', 'Distance (0-1)', clamp01)
  .parse(process.argv);
 
function clamp01 (value) {
	value = parseFloat(value);
	return Math.max(Math.min(value, 1), 0);
}
function clamp360 (value) {
	value = parseInt(value);
	return (value > 360) ? value % 360 : value;
}
function validateHex (value) {
	return value
		.match(/^([0-9a-fA-F]){6}$/) ? value : null;
}
function validateScheme (value) {
	return "mono contrast triade tetrade analogic"
		.indexOf(value) >= 0 ? value : null;
}
function validateVariation (value) {
	return "default pastel soft light hard pale"
		.indexOf(value) >= 0 ? value : null;
}


console.log("")

if (program.scheme)
	console.log("	Scheme:		%s", program.scheme)
if (program.variation)
	console.log("	Variation:	%s", program.variation)
if (program.distance)
	console.log("	Distance:	%s", program.distance)
if (program.fromHue)
	console.log("	Hue:		%s", program.fromHue)
if (program.fromHex)
	console.log("	Hex:		%s", program.fromHex)

console.log("")
console.log("	-----------------------")
console.log("")

var s = new ColorScheme;

	s.from_hue(program.fromHue || 0);

	if (program.fromHex) {
		if (program.fromHex.toString().length) {
			s.from_hex(program.fromHex);
		}
	}

	s.scheme(program.scheme || 'mono').variation(program.variation || 'default');

	if (program.distance && program.scheme) {
		if ("triade tetrade analogic".indexOf(program.scheme) >= 0) {
			s.distance(program.distance);
		}
	}

	var i = 0;
	s.colors().forEach(function(color) {
		console.log("	Color %j: 	#%s", ++i, color);
	});


console.log("")