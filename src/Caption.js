import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';

export default function Caption({ date, locale, localeUtils, onClick, styling }) {
  return (
    <div {...styling('dayPickerCaption', date, locale)} onClick={onClick} role="heading">
      {localeUtils.formatMonthTitle(date, locale)}
    </div>
  );
}

Caption.propTypes = {
  date: PropTypes.instanceOf(Date),
  locale: PropTypes.string,
  localeUtils: DayPickerPropTypes.localeUtils,
  onClick: PropTypes.func,
  styling: PropTypes.func,
};
