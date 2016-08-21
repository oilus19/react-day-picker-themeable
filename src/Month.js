import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';
import Weekdays from './Weekdays';
import { getWeekArray } from './Helpers';

export default function Month({
  month,
  locale,
  localeUtils,
  captionElement,
  onCaptionClick,
  children,
  firstDayOfWeek,
  styling,
  weekdayComponent,
  weekdayElement,
  fixedWeeks,
}) {
  const captionProps = {
    styling,
    date: month,
    localeUtils,
    locale,
    onClick: onCaptionClick ? e => onCaptionClick(e, month) : undefined,
    ...styling('caption', month, locale),
  };
  const weeks = getWeekArray(month, firstDayOfWeek, fixedWeeks);
  return (
    <div {...styling('month', locale)}>
      {React.cloneElement(captionElement, captionProps)}
      <Weekdays
        styling={styling}
        locale={locale}
        localeUtils={localeUtils}
        weekdayComponent={weekdayComponent}
        weekdayElement={weekdayElement}
      />
      <div {...styling('wrapper')} role="grid">
        {
          weeks.map((week, j) =>
            <div key={j} {...styling('week', j, locale)} role="gridcell">
              {week.map(day => children(day, month, styling))}
            </div>
        )}
      </div>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.instanceOf(Date).isRequired,
  captionElement: PropTypes.node.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired,
  locale: PropTypes.string.isRequired,
  localeUtils: DayPickerPropTypes.localeUtils.isRequired,
  onCaptionClick: PropTypes.func,
  children: PropTypes.func.isRequired,
  styling: PropTypes.func.isRequired,
  weekdayComponent: PropTypes.func,
  weekdayElement: PropTypes.element,
  fixedWeeks: PropTypes.bool,
};
