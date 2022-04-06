import * as React from 'react';
import { create } from 'react-test-renderer';
import { Label } from './label';

const defaultProps = { text: 'a' };

describe('Label', () => {
  it('should render text', () => {
    const tree = create((
      <Label {...defaultProps} />
    ));

    expect(tree.root.props.text)
      .toBe('a');
    expect(tree.root.findByType('span')).not.toBeNull();
  });

  it('should pass the rest property to the root element', () => {
    const tree = create(<Label {...defaultProps} custom="test" />);

    expect(tree.root.findByType('span').props.custom).toEqual('test');
  });

  it('should pass the className prop to the root element', () => {
    const tree = create((
      <Label {...defaultProps} className="custom-class">
        <div />
      </Label>
    ));

    expect(tree.root.findByType('span').props.className)
      .toBe('text-body ps-2 pe-2 custom-class');
  });
});
