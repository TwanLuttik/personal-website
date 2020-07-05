/**
 * This script will convert svg into vue files and creates an Icon.vue as root component
 */
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const { exit } = require('process');

const ROOT_FOLDER = `./src/Icons`;
const SVG_FOLDER = `./src/assets/svg`;
const OUTPUT_FOLDER = `${ROOT_FOLDER}/GeneratedIcons`;

const ICON_TEMPLATE =
  `<template><div id="Icon"><component :style="{ height: size + 'px', width: size + 'px' }" class="img" :is="name" v-if="name"></component></div></template><script>const PATH = "./GeneratedIcons"; <<imports>> export default{props:["name", "size"],components:{<<components>>},data() {return {}}}</script><style lang="scss" scoped>#Icon{display: flex;}</style>`
let imports = "";
let components = "";


(async function () {
  console.clear();

  // Initizials WatchMan
  await chokidar
    .watch(path.resolve(SVG_FOLDER), {
      persistent: true,
      ignored: /(^|[\/\\])\../, // ignore dotfiles
      ignoreInitial: false,
      followSymlinks: false,
      cwd: path.resolve('.'),
      disableGlobbing: false,
      usePolling: true,
      interval: 100,
      binaryInterval: 300,
      alwaysStat: false,
      depth: 99,
      awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 100
      },
      ignorePermissionErrors: false,
      atomic: true // or a custom 'atomicity delay', in milliseconds (default 100)
    })
    .on('all', async (path) => {
      console.clear();
      await runV2();
    })

})()


// async function run() {
//   // Clear the variables before starting
//   imports = '';
//   components = '';

//   // Console log
//   console.log('Converting svg into vue svg components\n\n')

//   // Get all the svg's
//   let icons = await fs.readdirSync(SVG_FOLDER);

//   // Filter only for .svg extenstions
//   icons = icons.filter((item) => item.includes(".svg"));
//   // Loop trough the svg files

//   for await (let icon_item of icons) {

//     // Read the icon
//     let icon = await fs.readFileSync(`${SVG_FOLDER}/${icon_item}`, { encoding: "utf8" });

//     icon = await validateSVG(icon);
//     // icon.replace('class=""', "");

//     // Change extension from .svg to .vue
//     icon_item = icon_item.replace(".svg", ".vue");

//     // Wrap it inside a template
//     let parsed_icon = `<template>${icon}</template>`;

//     // Create vue file
//     await fs.writeFileSync(`${OUTPUT_FOLDER}/${icon_item}`, parsed_icon, { encoding: "utf8" });

//     // Console log
//     if (icons.length <= 10) console.log(`${icon_item} created`);

//     // Components string builder
//     components = components + icon_item.split(".vue")[0] + ",";

//     // imports string builder
//     imports = imports + `import ${icon_item.replace(".vue", "")} from './GeneratedIcons/${icon_item}';`;
//   }

//   //  Console log
//   if (icons.length >= 10) console.log('...')

//   // `build the new icon template
//   let new_icon_template = ICON_TEMPLATE.replace("${imports}", imports).replace("${components}", components);

//   // Build Icon file
//   await fs.writeFileSync(`${ROOT_FOLDER}/Icon.vue`, new_icon_template, { encoding: "utf8" });
//   console.log(`\n🌟 Generated ${icons.length + 1} files;\n\n`);
//   console.log(`Ready - ${new Date().toLocaleString()}`)
// };



/**
 * @description 
 */
async function runV2() {
  imports = '';
  components = '';

  // Remove the folder and create the folder
  await fs.rmdirSync(ROOT_FOLDER, { recursive: true });
  await fs.mkdirSync(ROOT_FOLDER);
  await fs.mkdirSync(OUTPUT_FOLDER);

  // get all svg files and filter only .svg files
  let svgs = await fs.readdirSync(SVG_FOLDER).filter((item) => item.includes('.svg'));

  for await (let svgFile of svgs) {
    // Read the svg file
    let iconContent = await fs.readFileSync(`${SVG_FOLDER}/${svgFile}`, { encoding: 'utf8' });

    // Change the extension name
    svgFile = svgFile.replace('.svg', '.vue');

    // Wrap the content in a template tag
    let template = `<template>${iconContent}</template>`;

    // Generate custom vue file
    await fs.writeFileSync(`${OUTPUT_FOLDER}/${svgFile}`, template, { encoding: 'utf8' });
    console.log(`${svgFile} created`);

    // String builder for the root component
    imports = imports + `import ${svgFile.split('.')[0]} from "./GeneratedIcons/${svgFile}";`
    components = components + svgFile.split('.')[0] + ',';
  }

  // Create the new component
  let new_component_template = ICON_TEMPLATE
    .replace('<<imports>>', imports)
    .replace('<<components>>', components);

  // Create the Root component
  await fs.writeFileSync(`${ROOT_FOLDER}/Icon.vue`, new_component_template, { encoding: 'utf8' });

  console.log(`\n🌟 Generated ${svgs.length + 1} files.\n\n`);
  console.log(`Ready - ${new Date().toLocaleString()}`)

  exit(0);
}

function validateSVG(icon) {
  return icon.replace('class=""', "");
}