import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'clsx';

export const GroupButton = ({
  disabled, onGroup, className, ...restProps
}) => (
  <div
    className={classNames({
      'dx-g-bs5-grouping-control': true,
    }, className)}
    onClick={(e) => {
      if (disabled) return;
      e.stopPropagation();
      onGroup();
    }}
    {...restProps}
  >
    <span
      className={classNames({
        'oi oi-list dx-g-bs5-grouping-control-icon': true,
        'dx-g-bs5-cursor-pointer': !disabled,
        'dx-g-bs5-inactive': disabled,
      })}
    />
  </div>
);

GroupButton.propTypes = {
  onGroup: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

GroupButton.defaultProps = {
  disabled: false,
  className: undefined,
};
