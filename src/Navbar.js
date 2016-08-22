import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';

import createStylingFromTheme from './createStylingFromTheme';

export default function Navbar({
  styling,
  showPreviousButton,
  showNextButton,
  onPreviousClick,
  onNextClick,
  dir,
  theme,
  invertTheme,
}) {
  const previousClickHandler = dir === 'rtl' ? onNextClick : onPreviousClick;
  const nextClickHandler = dir === 'rtl' ? onPreviousClick : onNextClick;

  const navBarStyling = styling || createStylingFromTheme(theme, invertTheme);

  const previousButton = showPreviousButton &&
    <span
      role="button"
      key="previous"
      {...navBarStyling('dayPickerNavButton', 'prev')}
      onClick={() => previousClickHandler()}
    />;

  const nextButton = showNextButton &&
    <span
      role="button"
      key="right"
      {...navBarStyling('dayPickerNavButton', 'next')}
      onClick={() => nextClickHandler()}
    />;

  return (
    <div {...navBarStyling('dayPickerNavBar', dir)}>
      {dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]}
    </div>
  );
}

export const NavbarPropTypes = {
  styling: PropTypes.func,
  theme: PropTypes.any,
  invertTheme: PropTypes.bool,
  nextMonth: PropTypes.instanceOf(Date),
  previousMonth: PropTypes.instanceOf(Date),
  showPreviousButton: PropTypes.bool,
  showNextButton: PropTypes.bool,
  onPreviousClick: PropTypes.func,
  onNextClick: PropTypes.func,
  dir: PropTypes.string,
  locale: PropTypes.string,
  localeUtils: DayPickerPropTypes.localeUtils,
};

Navbar.propTypes = NavbarPropTypes;

Navbar.defaultProps = {
  dir: 'ltr',
  showPreviousButton: true,
  showNextButton: true,
};
