import * as React from 'react';

import EPaper from '../EPaper';
import SVG from '../SVG';
import Neumorphic from '../Neumorphic';

// export const navigationRef = React.createRef();

// export function navigate(name, params) {
//   navigationRef?.current?.navigate(name, params);
// }

export const tabs = [
  { name: 'EPaper', component: EPaper },
  { name: 'SVG', component: SVG },
  { name: 'Neumorphic', component: Neumorphic },
];