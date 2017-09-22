# color-scheme-cli.js

Generate pleasant color schemes (sets of colors).

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Schemes](#schemes)
  - [mono](#mono-monochromatic)
  - [contrast](#contrast)
  - [triade](#triade)
  - [tetrade](#tetrade)
  - [analogic](#analogic)
- [Variations](#variations)
  - [pastel](#pastel)
  - [soft](#soft)
  - [light](#light)
  - [hard](#hard)
  - [pale](#pale)
- [Methods](#methods)

## Description

This module is a NodeJS command line interface for the JavaScript implementation of the Perl implementation of Color Schemes
2 ([http://wellstyled.com/tools/colorscheme2](http://wellstyled.com/tools/colorscheme2)), a color scheme generator.
Start by visitng the Color Schemes 2 web site and playing with the colors.
When you want to generate those schemes on the fly, begin using this modoule.
The descriptions herein don't make too much sense without actually seeing the
colorful results.

Henceforth, paragraphs in quotes denote documentation copied from Color Schemes 2.

*"Important note: **This tool doesn't use the standard HSV or HSB model** (the
same HSV/HSB values ie. in Photoshop describe different colors!). The color
wheel used here differs from the RGB spectre used on computer screens, it's
more in accordance with the classical color theory. This is also why some
colors (especially shades of blue) make less bright shades than the basic
colors of the RGB-model. In plus, the RGB-model uses red-green-blue as primary
colors, but the red-yellow-blue combination is used here. This deformation also
causes incompatibility in color conversions from RGB-values. Therefore, the RGB
input (eg. the HTML hex values like #F854A9) is not exact, the conversion is
rough and sometimes may produce slightly different color."*

## Usage

### From the terminal

Gotta install it first:

```
npm install -g color-scheme-cli
```

Usage example (run color-scheme -h for detailed usage options)

```
color-scheme -s triade -d 30 -H 660bfa
```

## Schemes

There are five color schemes.

### mono (monochromatic)

The monochromatic scheme is based on selecting a single hue on the color wheel, then adding more colors by varying the source color's saturation and brightness.

Four colors will be produced.

### contrast

Contrast supplements the selected hue with its complement (the color opposite it on the color wheel) as another source color.

8 colors will be produced.

### triade

Triade takes the selected hue and adds two more source colors that are both a certain distance from the initial hue.

The distance method can be used to specify how far additional source colors will be from the initial hue.

12 colors will be produced.

### tetrade

Tetrade adds another yet source color, meaning four total sources.

16 colors will be produced.

### analogic

Analogic produces colors that are "analogous", or next to each other on the color wheel.

Increasing the distance will push the colors away from each other. *"Values between 0.25 and 0.5 (15-30 degrees on the wheel) are optimal."*

12 colors will be produced.

## Variations

These variations will alter the produced colors. They basically work exactly like filters would in any image editing program.

### default

The default variation. No change to the colors.

### pastel

Produces pastel colors, which have in HSV high value and low-intermediate saturation.

### soft

Produces darker pastel colors.

### light

Very light, almost washed-out colors.

### hard

Deeper, very saturated colors.

### pale

Colors with more gray; less saturated.