import { Axis } from '@devexpress/dx-react-chart';
import { withClassName } from '../utils';

export const Line = withClassName(
  'dx-c-bs5-stroke-current-color', 'dx-c-bs5-axis-opacity',
)(Axis.Line);
