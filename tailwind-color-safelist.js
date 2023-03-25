const tailwindColors = require('tailwindcss/colors');

const deprecatedColorNames = [
  'lightBlue',
  'warmGray',
  'trueGray',
  'coolGray',
  'blueGray',
];
const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const colorOpacities = [
  0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100,
];
const colorClassNames = [];

for (const colorName in tailwindColors) {
  if (deprecatedColorNames.includes(colorName)) {
    continue;
  }

  const pallette = tailwindColors[colorName];
  if (typeof pallette === 'object') {
    colorShades.forEach(shade => {
      if (shade in pallette) {
        colorClassNames.push(`text-${colorName}-${shade}`);
        colorClassNames.push(`bg-${colorName}-${shade}`);
        colorClassNames.push(`ring-${colorName}-${shade}`);
        colorOpacities.forEach(opacity => {
          colorClassNames.push(`text-${colorName}-${shade}/${opacity}`);
          colorClassNames.push(`bg-${colorName}-${shade}/${opacity}`);
          colorClassNames.push(`ring-${colorName}-${shade}/${opacity}`);
        });
      }
    });
  }
}

module.exports = colorClassNames;
