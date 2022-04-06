import * as React from 'react';
import { withClassName } from '../utils';

export const Label = withClassName('text-body', 'ps-2', 'pe-2')(
  ({ text, ...restProps }) => (<span {...restProps}>{text}</span>),
);
