var ColorScheme = require('color-scheme');
var program = require('commander');
 
program
  .version('0.1.0')
  .option('-s, --scheme <scheme>', 'Scheme type (mono, contrast, triade, tetrade, analogic)')
  .option('-v, --variation <variation>', 'Variation (default, pastel, soft, light, hard, pale)')
  .option('-d, --distance <i>', 'Distance')
  .option('-h, --from-hue <i>', 'From hue <hue>', parseInt)
  .option('-H, --from-hex [value]', 'From hex [value]')
  .parse(process.argv);
 

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