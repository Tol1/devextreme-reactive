import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'clsx';

export const BandedHeaderCell = ({
  component: HeaderCellComponent, className, beforeBorder, ...restProps
}) => (
  <HeaderCellComponent
    className={classNames({
      'dx-g-bs5-banded-header-cell border-end': true,
      'border-start': beforeBorder,
    }, className)}
    {...restProps}
  />
);

BandedHeaderCell.propTypes = {
  component: PropTypes.func.isRequired,
  className: PropTypes.string,
  beforeBorder: PropTypes.bool,
};

BandedHeaderCell.defaultProps = {
  className: undefined,
  beforeBorder: false,
};
