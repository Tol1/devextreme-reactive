import { Axis } from '@devexpress/dx-react-chart';
import { withClassName } from '../utils';

export const Label = withClassName(
  'dx-c-bs5-fill-current-color', 'dx-c-bs5-label', 'text-muted',
)(Axis.Label);
