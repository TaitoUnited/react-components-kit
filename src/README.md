# Component Docs

## Theming
Use [ThemeProvider](https://github.com/styled-components/styled-components#theming)
from styled-components to change the default theme. You may create the theme manually,
or use `createTheme` to automatically create all the shades from base colors.

```javascript
import { ThemeProvider } from 'styled-components';
import { Button, createTheme } from 'react-components-kit';

// override primary and secondary colors, use defaults for the rest
const theme = createTheme({
  primary: '#7b9cff',
  secondary: '#2490ec',
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button primary>New colors yey!</Button>
    </ThemeProvider>
  );
}
```

The components-kit uses these base colors:
* **primaryColor**
* **secondaryColor**
* **errorColor**
* **warnColor**
* **successColor**
* **grey**

With these suffixes: `Light`, `Lighter`, `Lightest`, `Dark`, `Darker`, `Darkest`.

And also these colors (without suffixes):
* **infoColor**
* **textColorDark**
* **textColorLight**

For example: `primaryColorLight`, `secondaryColorDarkest`.

`createTheme` can be used to swap out any of the base colors. The different shades
will be created automatically based on the base color. Note that createTheme expects
the color names to be without "Color" in them, for example `primary: #0f0` instead of
`primaryColor: #0f0`

Check out the default color values in [createTheme.js](components/createTheme.js).

You may also add any other colors to the theme. The components will not use them
automatically, but you may use these colornames in any props that you give to components.
For example, if the theme has the color `chargingColor`, it can be used like this:

```javascript
<Icon className='ion-battery-charging' color='chargingColor' />
```

## Badge

The default color is `grey`.

props:
* **mleft**, **mright** specify margin
* **primary** use primaryColor
* **secondary** use secondaryColor
* **error** use errorColor
* **success** use successColor

## Button

A button

Props:
* **align** align to `center`, `right`, or `left`
* **disabled** prevents clicking the button
* **w** specify the width. Default to `auto`
* **small, large** control padding and font-size. The default is between these two
* **primary** use primaryColor (this is the default)
* **secondary** use secondaryColor
* **danger** use errorColor
* **success** use successColor
* **outline** transparent background with colored border. The background is colored, when the button is clicked
* **clear** no background or border, even when clicked.

## Card

props:
* **depth** specify the size of box-shadow. One of `1`, `2`, or `3`

## CardAnimated

A card with an animation. When the page is loaded, the animated card will fade in and move slightly into position from a direction specified by `animDir`

props:
* **animDir** specifies which direction the card will appear from. One of `top`, `bottom`, `left`, `right`.

## CircleProgress

## DateSelect

Select a date from a calendar. The DateSelect will use the primary color.

props:
* **onSelect** function that is called with the date selected by the user
* **defaultDate** the default selected date. If this is not given, the calendar will be open
* **locale** the locale for the monthname shown in the calendar, and the format of the selected date shown to the user
* **w** width of the component when the date is selected (note: not the width of the calendar)

## FormControl

A utility component for forms. Useful when creating labeled inputs.

props:
* **label** the label of the input
* **icon** the classname of an icon which is placed before the label
* **horizontal** position the label and input horizontally
* **mb** specify the bottom margin, default to `40px`

## Heading

## Layout

A container for a row or column of elements.

props:
* **column** place children vertically
* **row** place children horizontally
* **w** width
* **center** center the children
* **maxW**  max width
* **align** choose alignment
* **justify** choose justify
* **flex** flex, default to `none`

## LineSeparator

A  line for separating different UI elements. If neither `vertical` nor `horizontal` prop is given, LineSeparator defaults to <hr />

props:

* **horizontal** choose a horizontal separator
* **vertical** choose a vertical separator
* **separation** size of the margin, default to `16px` for vertical, and `32px`  for horizontal
* **len** the length of the line, default to `auto` for vertical, and `100%` for horizontal

## LoadingOverlay

## Padder

A component for padding between elements.

props:
* **horiz** specify horizontal padding. Default to `16px`
* **vert** specify vertical padding.


## PlaceholderRows

A placeholder for for example, a list that is being loaded.

props:
* **rows** number of rows in the placeholder

## RadioButton

## Spinner

A loading spinner

## SquareLoader

## Text

## ToggleSwitch

## Tooltip

## withRipple

A HOC for adding a ripple-effect to components
