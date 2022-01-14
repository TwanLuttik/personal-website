const fs = require('fs');

const SVG_FOLDER = './svg';
const BUILD_FOLDER = './icons';

const ICON_BASE =
	'import * as React from \'react\';interface IconSVG_NAMEProps {color?: string;style?: any;}export const SVG_NAME: React.FC<IconSVG_NAMEProps> = ({ color, style }) => {return (SVG_CONTENT);};';

const MASTER_BASE = `import * as React from 'react';
import styled, { CSSProperties } from 'styled-components';

IMPORTS
interface IconProps {
  name: string;
  color?: string;
  size?: number;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
}
export const Icon: React.FC<IconProps> = ({ style, className, onClick, size, name, color }) => {
  return (
    <IconBody className={className} style={style} onClick={onClick}>
      IMPORTS2
    </IconBody>
  );
};
const IconBody = styled.div${'`display: flex;width: fit-content;`'};
`;

(async function() {
	fs.rmSync(`${BUILD_FOLDER}`, { recursive: true, force: true });
	fs.mkdirSync(`${BUILD_FOLDER}`, { recursive: true });

	const svgs = fs.readdirSync(SVG_FOLDER, { encoding: 'utf8' });
	let _imports = '';
	let _render = '';
	let count = 0;

	// loop trough the svg folder
	for await (let svg of svgs) {
		let svgTitleName = svg.split('.')[0].charAt(0).toUpperCase() + svg.split('.')[0].slice(1);

		// If there is a dash included, parse the svg title
		if (svgTitleName.includes('-'))
			svgTitleName = svgTitleName.split('-')[0] + svgTitleName.split('-')[1].charAt(0).toUpperCase() + svgTitleName.split('-')[1].slice(1);

		// Read the contents
		let svgContent = fs.readFileSync(`${SVG_FOLDER}/${svg}`, { encoding: 'utf8' }).replace('<svg', '<svg style={style}');

		svgContent = parsePropertiesNames(svgContent);
		svgContent = parseColorNames(svgContent);
		svgContent = removeProperties(svgContent);

		// Filter out properties we don't need
		let template = ICON_BASE.replace('SVG_CONTENT', svgContent);

		// update the namespace in the file
		template = template.split('SVG_NAME').join(svgTitleName);

		// Create file
		fs.writeFileSync(`${BUILD_FOLDER}/${svgTitleName}.tsx`, template, { encoding: 'utf8' });

		// Build the imports and the content for the component
		_imports = _imports + `import{${svgTitleName}}from'./icons/${svgTitleName}';`;
		_render =
			_render +
			`{ name === '${
				svg.split('.')[0].charAt(0) + svg.split('.')[0].slice(1)
			}' && <${svgTitleName} color={color} style={{ width: size, height: size }} /> }`;
		count++;
	}

	// delete the Main component
	fs.rmSync(`./Icon.tsx`, { recursive: true, force: true });

	// build file content
	let IconContent = MASTER_BASE.replace('IMPORTS', _imports).replace('IMPORTS2', _render);

	// Create file
	fs.writeFileSync(`./Icon.tsx`, IconContent, { encoding: 'utf8' });
	console.log(`\n🔥 Processed ${count} icons\n`);
})();

const parsePropertiesNames = (text) => {
	text = text.replaceAll(/(enable-width=)/g, 'enableWidth=');
	text = text.replaceAll(/(enable-linecap=)/g, 'strokeLinecap=');
	text = text.replaceAll(/(enable-linejoin=)/g, 'strokeLinejoin=');
	text = text.replaceAll(/(enable-background=)/g, 'enableBackground=');
	text = text.replaceAll(/(clip-rule=)/g, 'clipRule=');
	text = text.replaceAll(/(clip-path=)/g, 'clipPath=');
	text = text.replaceAll(/(clip-rule=)/g, 'fillRule=');
	text = text.replaceAll(/(stroke-width=)/g, 'strokeWidth=');
	return text;
};

const parseColorNames = (text) => {
	text = text.replaceAll(/(fill=)"(.+?|)"()/g, 'fill={color}');
	return text;
};

const removeProperties = (text) => {
	text = text.replaceAll(/(class=)"(.+?|)"()/g, '');
	return text;
};