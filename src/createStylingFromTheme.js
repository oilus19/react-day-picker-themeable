import { createStyling } from 'react-base16-styling';

const cn = (...classNames) => classNames.filter(c => c).join(' ');

function getStylingFromBase16() {
  return {
    dayPicker: ({ style, className }, locale, interactionDisabled, customClassName) => ({
      style,
      className: cn(
        'DayPicker',
        locale && `DayPicker--${locale}`,
        interactionDisabled && 'DayPicker--interactionDisabled',
        customClassName,
        className
      ),
    }),

    navBar: 'DayPicker-NavBar',

    month: 'DayPicker-Month',

    wrapper: 'DayPicker-Body',

    week: 'DayPicker-Week',

    navButton: ({ style, className }, type) => ({
      style,
      className: cn(
        'DayPicker-NavButton',
        type && `DayPicker-NavButton--${type}`,
        className
      ),
    }),

    weekday: 'DayPicker-Weekday',

    weekdays: 'DayPicker-Weekdays',

    weekdaysRow: 'DayPicker-WeekdaysRow',

    caption: 'DayPicker-Caption',

    day: ({ style, className }, day, modifiers) => ({
      style,
      className: cn(
        'DayPicker-Day',
        modifiers.map(modifier => `DayPicker-Day--${modifier}`).join(' '),
        className
      ),
    }),
  };
}

export default createStyling(getStylingFromBase16, {});
