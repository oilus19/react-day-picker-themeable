import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';

export default function Weekdays({
  locale,
  localeUtils,
  weekdayComponent,
  weekdayElement,
  styling,
}) {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const elementProps = {
      key: i,
      styling,
      weekday: i,
      localeUtils,
      locale,
    };
    const element = weekdayElement ?
      React.cloneElement(weekdayElement, { ...elementProps, ...styling('weekday', i, locale) }) :
      React.createElement(weekdayComponent, elementProps);
    days.push(element);
  }

  return (
    <div {...styling('weekdays', locale)} role="rowgroup">
      <div {...styling('weekdaysRow', locale)} role="columnheader">
        {days}
      </div>
    </div>
  );
}

Weekdays.propTypes = {
  locale: PropTypes.string.isRequired,
  localeUtils: DayPickerPropTypes.localeUtils.isRequired,
  weekdayComponent: PropTypes.func,
  weekdayElement: PropTypes.element,
  styling: PropTypes.func.isRequired,
};
