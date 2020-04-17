const fs = require('fs')

const INPUT_FOLDER = './svg';
const OUTPUT_FOLDER = './GeneratedIcons';
const VUE_TEMPLATE = ''


async function main() {


  // Get all the svg's
  let icons = await fs.readdirSync('./svg');

  // Filter only for .svg extenstions
  icons = icons.filter((item) => item.includes('.svg'));

  // Loop trough the svg files
  for (let icon_item of icons) {

    // Read the icon
    let icon = await fs.readFileSync(`./svg/${icon_item}`, { encoding: 'utf8' });

    // Change extension from .svg to .vue
    icon_item = icon_item.replace('.svg', '.vue');

    // Wrap it inside a template
    let parsed_icon = `<template>${icon}</template>`

    let customFile = await fs.writeFileSync(`${OUTPUT_FOLDER}/${icon_item}` , parsed_icon, { encoding: 'utf8' })
    console.log(`created ${icon_item}`);

  }


  // console.log(icons);
}


main();
  
