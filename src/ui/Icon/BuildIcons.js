const fs = require('fs');

const SVG_FOLDER = './svg';
const BUILD_FOLDER = './icons';
// const ICON_BASE =
//   "import * as React from 'react';import styled, { ThemeContext } from 'styled-components';interface IconSVG_NAMEProps {color?: any;style?: any;}export const SVG_NAME: React.FunctionComponent<IconSVG_NAMEProps> = (props) => {const theme: any = React.useContext(ThemeContext);const {} = props;return (<SVG_NAMEBody style={{ ...props.style }} >SVG_CONTENT</SVG_NAMEBody>);};const SVG_NAMEBody = styled.div``;";

const ICON_BASE =
  "import * as React from 'react';import styled, { ThemeContext } from 'styled-components';interface IconSVG_NAMEProps {color?: any;style?: any;}export const SVG_NAME: React.FunctionComponent<IconSVG_NAMEProps> = (props) => {const theme: any = React.useContext(ThemeContext);const {} = props;return (SVG_CONTENT);};";

const MASTER_BASE = `import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
IMPORTS
interface IconProps {
  name: string;
  color?: any;
  size?: any;
  style?: React.CSSProperties;
  className?: any;
  onClick?: any;
}
export const Icon: React.FunctionComponent<IconProps> = (props) => {
  const theme: any = React.useContext(ThemeContext);
  const {style, className, onClick} = props;
  return (
    <IconBody className={className} style={{...style}} onClick={onClick}>
      IMPORTS2
    </IconBody>
  );
};
const IconBody = styled.div${'`display: flex;`'};
`;

(async function () {
  fs.rmdirSync(`${BUILD_FOLDER}`, { recursive: true });
  fs.mkdirSync(`${BUILD_FOLDER}`, { recursive: true });

  const svgs = fs.readdirSync(SVG_FOLDER, { encoding: 'utf8' });

  // loop trough the svg folder
  for await (let svg of svgs) {
    const svgTitleName = svg.split('.')[0].charAt(0).toUpperCase() + svg.split('.')[0].slice(1);

    // Read the contents
    const svgContent = fs
      .readFileSync(`${SVG_FOLDER}/${svg}`, { encoding: 'utf8' })
      .split('fill="currentColor"')
      .join('fill={props.color}')
      .replace('<svg', '<svg style={{ ...props.style }}');


    // Filter out properties we don't need
    let template = ICON_BASE.replace('SVG_CONTENT', svgContent);

    // update the namespace in the file
    template = template.split('SVG_NAME').join(svgTitleName);

    // Create file
    fs.writeFileSync(`${BUILD_FOLDER}/${svgTitleName}.tsx`, template, { encoding: 'utf8' });
  }

  // delete the Main component
  fs.rmdirSync(`./Icon.tsx`, { recursive: true });

  // Build the imports and the content for the component
  let imports = svgs
    .map(
      (v) =>
        `import { ${v.split('.')[0].charAt(0).toUpperCase() + v.split('.')[0].slice(1)} } from './icons/${
          v.split('.')[0].charAt(0).toUpperCase() + v.split('.')[0].slice(1)
        }';`
    )
    .join('');
  let content = svgs
    .map(
      (v) =>
        `{ props.name === '${v.split('.')[0]}' && <${
          v.split('.')[0].charAt(0).toUpperCase() + v.split('.')[0].slice(1)
        } color={props.color} style={{ width: props.size, height: props.size }} /> }`
    )
    .join('');

  // build file content
  let IconContent = MASTER_BASE.replace('IMPORTS', imports).replace('IMPORTS2', content);

  // Create file
  fs.writeFileSync(`./Icon.tsx`, IconContent, { encoding: 'utf8' });
})();
