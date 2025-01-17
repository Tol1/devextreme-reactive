import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { DragDropProvider, DragSource } from '@devexpress/dx-react-core';
import { setupConsole } from '@devexpress/dx-testing';

import { TableHeaderCell } from './table-header-cell';
import { ResizingControl } from './table-header-cell/resizing-control';

describe('TableHeaderCell', () => {
  let resetConsole;
  beforeAll(() => {
    resetConsole = setupConsole({ ignore: ['validateDOMNesting'] });
  });
  afterAll(() => {
    resetConsole();
  });

  it('should have correct classes when user interaction disallowed', () => {
    const tree = shallow((
      <TableHeaderCell
        column={{}}
      />
    ));

    expect(tree.dive().find('th').is('.dx-g-bs5-user-select-none.dx-g-bs5-cursor-pointer'))
      .toBeFalsy();
  });

  it('should have correct classes when dragging is allowed', () => {
    const getCellWidth = () => {};
    const tree = mount((
      <DragDropProvider>
        <TableHeaderCell
          column={{ name: 'a' }}
          draggingEnabled
          getCellWidth={getCellWidth}
        />
      </DragDropProvider>
    ));

    expect(tree.find('th').is('.dx-g-bs5-user-select-none.dx-g-bs5-cursor-pointer.position-relative'))
      .toBeTruthy();
  });

  it('should have correct classes when dragging', () => {
    const getCellWidth = () => {};
    const tree = mount((
      <DragDropProvider>
        <TableHeaderCell
          column={{ name: 'a' }}
          draggingEnabled
          getCellWidth={getCellWidth}
        />
      </DragDropProvider>
    ));

    expect(tree.find('th').is('.dx-g-bs5-inactive'))
      .toBeFalsy();

    tree.find(DragSource).prop('onStart')();
    tree.update();

    expect(tree.find('th').is('.dx-g-bs5-inactive'))
      .toBeTruthy();

    tree.find(DragSource).prop('onEnd')();
    tree.update();

    expect(tree.find('th').is('.dx-g-bs5-inactive'))
      .toBeFalsy();
  });

  it('should render resize control if resizing is allowed', () => {
    const onWidthChange = () => {};
    const onWidthDraft = () => {};
    const onWidthDraftCancel = () => {};

    const tree = shallow((
      <TableHeaderCell
        column={{}}
        resizingEnabled
        onWidthChange={onWidthChange}
        onWidthDraft={onWidthDraft}
        onWidthDraftCancel={onWidthDraftCancel}
      />
    ));

    const resizingControl = tree.dive().find(ResizingControl);
    expect(resizingControl.exists())
      .toBeTruthy();
    expect(resizingControl.prop('onWidthChange'))
      .toBe(onWidthChange);
    expect(resizingControl.prop('onWidthDraft'))
      .toBe(onWidthDraft);
    expect(resizingControl.prop('onWidthDraftCancel'))
      .toBe(onWidthDraftCancel);
  });

  it('should pass custom class to the root element', () => {
    const tree = shallow((
      <TableHeaderCell
        column={{ title: 'a' }}
        className="custom-class"
      />
    ));

    expect(tree.dive().find('th').is('.position-relative.dx-g-bs5-header-cell.custom-class'))
      .toBeTruthy();
  });

  it('should pass rest props to the root element', () => {
    const tree = shallow((
      <TableHeaderCell column={{ title: 'a' }} data={{ a: 1 }} />
    ));
    expect(tree.props().data)
      .toMatchObject({ a: 1 });
  });

  it('should consider the `wordWrapEnabled` property', () => {
    let tree = shallow(<TableHeaderCell />);
    expect(tree.dive().is('.text-nowrap'))
      .toBeTruthy();

    tree = shallow(<TableHeaderCell tableColumn={{ wordWrapEnabled: true }} />);
    expect(tree.dive().is('.text-nowrap'))
      .toBeFalsy();
  });
});
