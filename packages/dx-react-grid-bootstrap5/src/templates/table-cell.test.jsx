import * as React from 'react';
import { shallow } from 'enzyme';
import { TableCell } from './table-cell';

describe('TableCell', () => {
  it('should have correct text alignment', () => {
    let tree = shallow(<TableCell />);
    expect(tree.find('td').is('.text-right'))
      .toBeFalsy();

    tree = shallow(<TableCell tableColumn={{ align: 'left' }} />);
    expect(tree.find('td').is('.text-right'))
      .toBeFalsy();

    tree = shallow(<TableCell tableColumn={{ align: 'right' }} />);
    expect(tree.find('td').is('.text-right.text-nowrap.dx-g-bs5-table-cell'))
      .toBeTruthy();

    tree = shallow(<TableCell tableColumn={{ align: 'center' }} />);
    expect(tree.find('td').is('.text-center.text-nowrap.dx-g-bs5-table-cell'))
      .toBeTruthy();
  });

  it('should consider the `wordWrapEnabled` property', () => {
    let tree = shallow(<TableCell />);
    expect(tree.find('td').is('.text-nowrap'))
      .toBeTruthy();

    tree = shallow(<TableCell tableColumn={{ wordWrapEnabled: true }} />);
    expect(tree.find('td').is('.text-nowrap'))
      .toBeFalsy();
  });

  it('should have correct text', () => {
    const tree = shallow(<TableCell value="text" />);
    expect(tree.find('td').text()).toBe('text');
  });

  it('should render children if passed', () => {
    const tree = shallow((
      <TableCell>
        <span className="test" />
      </TableCell>
    ));

    expect(tree.find('.test').exists())
      .toBeTruthy();
  });

  it('should pass custom class to the root element', () => {
    const tree = shallow((
      <TableCell className="custom-class" />
    ));

    expect(tree.is('.custom-class.text-nowrap.dx-g-bs5-table-cell'))
      .toBeTruthy();
  });

  it('should pass rest props to the root element', () => {
    const tree = shallow((
      <TableCell data={{ a: 1 }} />
    ));
    expect(tree.find('td').prop('data'))
      .toMatchObject({ a: 1 });
  });
});
