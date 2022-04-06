import { Axis } from '@devexpress/dx-react-chart';
import { withClassName } from '../utils';

export const Grid = withClassName(
  'dx-c-bs5-stroke-current-color', 'dx-c-bs5-crisp-edges', 'dx-c-bs5-axis-opacity',
)(Axis.Grid);
