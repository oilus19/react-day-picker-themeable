import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';

export default function Weekday({ weekday, styling, localeUtils, locale }) {
  return (
    <div {...styling('weekday', weekday, locale)}>
      <abbr title={localeUtils.formatWeekdayLong(weekday, locale)}>
        {localeUtils.formatWeekdayShort(weekday, locale)}
      </abbr>
    </div>
  );
}

export const WeekdayPropTypes = {
  weekday: PropTypes.number,
  styling: PropTypes.func,
  locale: PropTypes.string,
  localeUtils: DayPickerPropTypes.localeUtils,
};

Weekday.propTypes = WeekdayPropTypes;
