<table><tr><td>
This is a fork of <a href="https://github.com/gpbl/react-day-picker">react-day-picker</a> with theme support provided by <a href="https://github.com/alexkuz/react-base16-styling">react-base16-styling</a>. Below is the description from original fork.</td></tr></table>

<p align="center">
<img width="359"  style="margin: 0 auto" alt="title" src="https://cloud.githubusercontent.com/assets/120693/17276843/94ad5b62-5734-11e6-9f25-454f50f81122.png">
</p>
<p align="center">
<img width="297" style="margin: 0 auto"  alt="screen shot" src="https://cloud.githubusercontent.com/assets/120693/12312069/74c136d6-ba5c-11e5-8eae-680ecd200f95.png">
</p>

react-day-picker is a flexible date picker component for [React](https://facebook.github.io/react/).

* no external dependencies
* select [days](http://www.gpbl.org/react-day-picker/examples?selectable), [ranges](http://www.gpbl.org/react-day-picker/examples?range), whatever using CSS modifiers
* ready for i18n, with [moment.js](http://www.gpbl.org/react-day-picker/examples?localized) or [any other library](http://www.gpbl.org/react-day-picker/examples?localizedCustom)
* customizable [style](https://github.com/gpbl/react-day-picker/blob/master/src/style.css)
* navigable via keyboard, ARIA support

Check out the [examples](http://gpbl.org/react-day-picker/examples) to see its features.

[![npm version](https://img.shields.io/npm/v/react-day-picker.svg?style=flat-square)](https://www.npmjs.com/package/react-day-picker)
[![Bower](https://img.shields.io/bower/v/react-day-picker.svg?style=flat-square)](http://bower.io/search/?q=react-day-picker)
[![build status](https://img.shields.io/travis/gpbl/react-day-picker/master.svg?style=flat-square)](https://travis-ci.org/gpbl/react-day-picker)
[![coveralls](https://img.shields.io/coveralls/gpbl/react-day-picker.svg?style=flat-square)](https://coveralls.io/r/gpbl/react-day-picker?branch=master)
[![Code Climate](https://img.shields.io/codeclimate/github/kabisaict/flow.svg?style=flat-square)](https://codeclimate.com/github/gpbl/react-day-picker)
[![npm downloads](https://img.shields.io/npm/dm/react-day-picker.svg?style=flat-square)](http://npm-stat.com/charts.html?package=react-day-picker)



## Quick start

**Install via npm**

```
npm install react-day-picker --save
```

**Install via Bower**

```
bower install react-day-picker --save
```

The bower package exposes a global `DayPicker` variable.

### Example

```js
import React from 'react';
import DayPicker, { DateUtils } from "react-day-picker";

function sunday(day) {
  return day.getDay() === 0;
}

class MyComponent extends React.Component {
  state = {
    selectedDay: new Date(),
  }
  handleDayClick(e, day, { selected, disabled }) {
    if (disabled) {
      return;
    }
    if (selected) {
      this.setState({ selectedDay: null })
    } else {
      this.setState({ selectedDay: day });
    }
  },
  render() {
    return (
      <DayPicker
        initialMonth={ new Date(2016, 1) }
        disabledDays={ sunday }
        selectedDays={ day => DateUtils.isSameDay(this.state.selectedDay, day) }
        onDayClick={ this.handleDayClick.bind(this) }
    />);
  }
}
```

See [Basic usage](http://www.gpbl.org/react-day-picker/docs/Basic.html) for a deeper explanation of the example above.

### Docs and examples

* [Examples with code](http://gpbl.org/react-day-picker/examples)
* [Documentation](http://gpbl.org/react-day-picker)
    * [Basic usage](http://gpbl.org/react-day-picker/docs/Basic.html)
    * [Use of modifiers](http://gpbl.org/react-day-picker/docs/Modifiers.html)
    * [API](http://www.gpbl.org/react-day-picker/docs/API.html)
    * [Styling](http://www.gpbl.org/react-day-picker/docs/Styling.html)
    * [Localization](http://www.gpbl.org/react-day-picker/docs/Localization.html)
    * [Tips](http://www.gpbl.org/react-day-picker/docs/Tips.html)
    * [Utilities](http://www.gpbl.org/react-day-picker/docs/Utilities.html)
* [Changelog](https://github.com/gpbl/react-day-picker/blob/master/CHANGELOG.md)

### Get support

* Tag with `react-day-picker` your questions on [Stackoverflow](http://stackoverflow.com/questions/tagged/react-day-picker?sort=newest)
* Join the [Gitter room](https://gitter.im/gpbl/react-day-picker) for immediate help

### Contribute

* File bugs and feature requests in the [issues page](https://github.com/gpbl/react-day-picker/issues)
* Check out the source code on [Github](https://github.com/gpbl/react-day-picker)
* Pull requests are welcome! If you are planning a pull request with lot of changes, please add an issue to discuss your idea first
  * See how to start the project locally [here](http://www.gpbl.org/react-day-picker/docs/Contributing.html)
