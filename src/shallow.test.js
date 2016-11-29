import React from 'react';
import TestUtils from 'react-addons-test-utils';

import J from './shallow';

describe('J as a stick figure', () => {

  const x1 =  1 /  2;
  const y1 = 29 / 63;
  const x2 =  1 /  4;
  const y2 =  7 /  8;
  const j = <J x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f7df1e" strokeWidth={6 / 63} />;

  it('consists of LineV and LineH components', () => {
    const shallowRenderer = TestUtils.createRenderer();
    const rendered = shallowRenderer.render(j);
    const output = shallowRenderer.getRenderOutput();
    expect(output).toMatchSnapshot();
  });

});
