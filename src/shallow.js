import React from 'react';

const LineH = ({ x1, x2, y }) => (
  <line x1={x1} x2={x2} y1={y} y2={y} />
);
LineH.displayName = 'LineH';

const LineV = ({ x, y1, y2 }) => (
  <line x1={x} x2={x} y1={y1} y2={y2} />
);
LineV.displayName = 'LineV';

// J of the JavaScript community logo as a stick figure
const J = ({ x1, y1, x2, y2, stroke, strokeWidth }) => (
  <g stroke={stroke} strokeWidth={strokeWidth}>
  <LineV x={x1} y1={y1} y2={y2} />
  <LineH x1={x1} x2={x2} y={y2} />
  </g>
);
J.displayName = 'J';

export default J;
