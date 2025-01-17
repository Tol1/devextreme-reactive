import * as React from 'react';
import { shallow } from 'enzyme';
import { Row } from './row';

describe('TableGroupRow', () => {
  it('should pass rest props to the root element', () => {
    const tree = shallow((
      <Row
        data={{ a: 1 }}
      />
    ));

    expect(tree.prop('data'))
      .toEqual({ a: 1 });
  });

  it('should render children if any passed', () => {
    const tree = shallow((
      <Row>
        <span className="test" />
      </Row>
    ));

    expect(tree.find('.test').exists())
      .toBeTruthy();
  });

  it('should add the passed className to the root element', () => {
    const tree = shallow((
      <Row
        className="custom"
      />
    ));

    expect(tree.is('.dx-g-bs5-cursor-pointer.custom'))
      .toBeTruthy();
  });
});
