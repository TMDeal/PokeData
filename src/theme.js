import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'


const theme = {
  "palette": {
    "primary1Color": Colors.grey800,
    "primary2Color": Colors.grey700,
    "primary3Color": Colors.grey900,
    "accent1Color": Colors.yellow400,
    "accent2Color": Colors.yellow300,
    "accent3Color": Colors.yellow500,
    "borderColor": Colors.blueGrey600,
    "disabledColor": Colors.blueGrey700,
    "shadowColor": fade(Colors.faintBlack, 0.12)
  },
  "appBar": {
    "textColor": fade(Colors.lightWhite, 0.54)
  },
  "tabs": {
    "textColor": fade(Colors.lightWhite, 0.54),
    "selectedTextColor": Colors.yellow400
  },
  "tableHeaderColumn": {
    "textColor": Colors.white
  },
  "tableRow": {
    "hoverColor": Colors.blueGrey600,
    "selectedColor": Colors.grey800,
    "textColor": Colors.white,
    "borderColor": fade(Colors.lightWhite, 0.54)
  },
  "tableFooter": {
    "textColor": Colors.white
  },
  "timePicker": {
    "textColor": Colors.yellow500,
    "accentColor": Colors.green400
  },
  "snackbar": {
    "actionColor": Colors.blueGrey600
  },
  "radioButton": {
    "checkedColor": Colors.yellow400
  },
  "checkbox": {
    "checkedColor": Colors.yellow400
  },
  "slider": {
    "trackColor": Colors.blueGrey600,
    "trackColorSelected": Colors.grey900
  },
  "datePicker": {
    "calendarYearBackgroundColor": Colors.yellow500,
    "selectTextColor": Colors.green500,
    "selectColor": Colors.blueGrey700
  },
  "chip": {
    "deleteIconColor": Colors.blueGrey500
  },
  "floatingActionButton": {
    "iconColor": Colors.blueGrey500,
    "disabledTextColor": Colors.grey700
  },
  "bottomNavigation": {
    "selectedColor": Colors.yellow600,
    "unselectedColor": Colors.blueGrey500
  },
  "badge": {
    "primaryTextColor": fade(Colors.darkWhite, 0.87)
  },
  "raisedButton": {
    "primaryTextColor": fade(Colors.lightWhite, 0.54)
  },
  "flatButton": {
    "primaryTextColor": Colors.grey400
  },
  "toggle": {
    "trackOnColor": Colors.yellow300,
    "trackOffColor": fade(Colors.grey800, 0.5),
    "thumbOnColor": Colors.yellow400,
    "thumbOffColor": Colors.grey700
  }
};

export default getMuiTheme(baseTheme, theme);
