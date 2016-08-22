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

    dayPickerNavBar: 'DayPicker-NavBar',

    dayPickerMonth: 'DayPicker-Month',

    dayPickerMonthWrapper: 'DayPicker-Body',

    dayPickerWeek: 'DayPicker-Week',

    dayPickerNavButton: ({ style, className }, type) => ({
      style,
      className: cn(
        'DayPicker-NavButton',
        type && `DayPicker-NavButton--${type}`,
        className
      ),
    }),

    dayPickerWeekday: 'DayPicker-Weekday',

    dayPickerWeekdays: 'DayPicker-Weekdays',

    dayPickerWeekdaysRow: 'DayPicker-WeekdaysRow',

    dayPickerCaption: 'DayPicker-Caption',

    dayPickerDay: ({ style, className }, day, modifiers) => ({
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
