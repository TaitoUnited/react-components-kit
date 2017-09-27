/* eslint-disable max-len */
export const buttonProperties = [
  {
    name: 'primary',
    type: 'bool',
    defaultVal: 'false',
    description: 'Button with primary color',
  },
  {
    name: 'secondary',
    type: 'bool',
    defaultVal: 'false',
    description: 'Button with secondary color',
  },
  {
    name: 'danger',
    type: 'bool',
    defaultVal: 'false',
    description: 'Button with error / danger color',
  },
  {
    name: 'flat',
    type: 'bool',
    defaultVal: 'false',
    description: 'Removes button shadows - makes it flat',
  },
  {
    name: 'disabled',
    type: 'bool',
    defaultVal: 'false',
    description: 'Makes button disabled',
  },
  {
    name: 'outline',
    type: 'bool',
    defaultVal: 'false',
    description: 'Removes button background',
  },
  {
    name: 'clear',
    type: 'bool',
    defaultVal: 'false',
    description: 'Removes button background and border',
  }
];

export const tooltipProperties = [
  {
    name: 'bg',
    type: 'string',
    defaultVal: '#333',
    description: 'Tooltip background color',
  },
  {
    name: 'bottom',
    type: 'bool',
    description: 'Show tooltip on the bottom',
  },
  {
    name: 'color',
    type: 'string',
    defaultVal: '#fff',
    description: 'Tooltip text color',
  },
  {
    name: 'content',
    type: 'any',
    defaultVal: 'Tooltip default content',
    description: 'Tooltip content can be a string or a React component etc',
  },
  {
    name: 'elevation',
    type: 'number',
    defaultVal: '99',
    description: 'Sets the z-index of the tooltip bubble',
  },
  {
    name: 'top',
    type: 'bool',
    defaultVal: 'true',
    description: 'Show tooltip on the top (default behaviour)',
  },
];

export const spinnerProperties = [
  {
    name: 'sm',
    type: 'bool',
    description: 'Make spinner small (16px) - note that default is 32px',
  },
  {
    name: 'md',
    type: 'bool',
    description: 'Make spinner medium sized (64px)',
  },
  {
    name: 'lg',
    type: 'bool',
    description: 'Make spinner large (96px)',
  },
  {
    name: 'color',
    type: 'string',
    defaultVal: '#333',
    description: 'Color of the spinner',
  },
];

export const circleProgressProperties = [
  {
    name: 'progress',
    type: 'number',
    defaultVal: '0',
    description: 'Progress between 0 and 100',
  },
  {
    name: 'color',
    type: 'string',
    defaultVal: 'blue',
    description: 'Color of the progress circle',
  },
  {
    name: 'size',
    type: 'string',
    defaultVal: '100px',
    description: 'Adjust circle size',
  },
];

export const gutterProperties = [
  {
    name: 'horizontal',
    type: 'bool',
    defaultVal: 'true',
    description: 'Add gutter space horizontally',
  },
  {
    name: 'vertical',
    type: 'bool',
    description: 'Add gutter space vertically',
  },
  {
    name: 'amount',
    type: 'string',
    defaultVal: '16px',
    description: 'Size of gutter space',
  },
];

export const layoutProperties = [
  {
    name: 'align',
    type: 'string',
    description: 'Center items perpendicular to flex axis',
  },
  {
    name: 'justify',
    type: 'string',
    description: 'Center items parallel to flex axis',
  },
  {
    name: 'column',
    type: 'bool',
    description: 'Stack items in a column',
  },
  {
    name: 'row',
    type: 'bool',
    defaultVal: 'true',
    description: 'Place items next to each other in a row',
  },
  {
    name: 'center',
    type: 'bool',
    description: 'Align items center center',
  },
  {
    name: 'centerSelf',
    type: 'bool',
    description: 'Center the Layout component itself horizontally',
  },
  {
    name: 'xs / sm / md / lg',
    type: 'string',
    description: 'Overwrite the flex direction for different screen sizes',
  },
];

export const layoutBoxProperties = [
  {
    name: 'flex',
    type: 'string | number',
    defaultVal: 'none',
    description: 'How much the box should flex',
  },
];

export const headingProperties = [
  {
    name: 'color',
    type: 'string',
    defaultVal: '#222',
    description: 'Heading text color',
  },
  {
    name: 'h1 / h2 / h3 / h4 / h5',
    type: 'bool',
    defaultVal: 'h1',
    description: 'What type of heading to render',
  },
  {
    name: 'size',
    type: 'string',
    description: 'Overwrite font size for the heading',
  },
  {
    name: 'sub',
    type: 'bool',
    description: 'Make the component a sub-heading',
  },
];

export const textProperties = [
  {
    name: 'align',
    type: 'string',
    defaultVal: 'left',
    description: 'Align the text (left / right / center)',
  },
  {
    name: 'color',
    type: 'string',
    defaultVal: '#222',
    description: 'Text color',
  },
  {
    name: 'lineh',
    type: 'string',
    defaultVal: '1.6',
    description: 'Adjust the text line-height',
  },
  {
    name: 'size',
    type: 'string',
    defaultVal: '16px',
    description: 'Font size of the text',
  },
  {
    name: 'p / i / bold / thin',
    type: 'bool',
    defaultVal: 'span',
    description: 'Make the component a paragraph / italic / bold / thin',
  },
];

export const iconProperties = [
  {
    name: 'name *',
    type: 'string',
    description: 'Name of the icon. Remember to remove the ion / fa prefix.',
  },
  {
    name: 'type',
    type: 'string',
    defaultVal: 'ion',
    description: 'Either `ion` for ionicons or `fa` for font-awesome',
  },
  {
    name: 'size',
    type: 'string',
    defaultVal: '18px',
    description: 'Size of the icon',
  },
  {
    name: 'color',
    type: 'string',
    defaultVal: '#222',
    description: 'Color of the icon',
  },
];

export const cardProperties = [
  {
    name: 'depth',
    type: 'number',
    defaultVal: '1',
    description: 'Controls the elevation of the card component (1 - 3)',
  },
];

export const cardAnimatedProperties = [
  {
    name: 'animDir',
    type: 'string',
    defaultVal: 'top',
    description: 'From which direction the component animates in.',
  },
];

export const badgeProperties = [
  {
    name: 'primary',
    type: 'bool',
    description: 'Badge with primary colors',
  },
  {
    name: 'secondary',
    type: 'bool',
    description: 'Badge with secondary colors',
  },
  {
    name: 'error',
    type: 'bool',
    description: 'Badge with error / danger colors',
  },
  {
    name: 'success',
    type: 'bool',
    description: 'Badge with error / danger colors',
  },
];

export const placeholderProperties = [
  {
    name: 'rows',
    type: 'number',
    defaultVal: '6',
    description: 'Number of rows to render',
  },
];

export const outsideReactorProperties = [
  {
    name: 'onClickedOutside *',
    type: 'func',
    description: 'Handler function that is called upon every click outside of the component',
  }
];

export const withRippleProperties = [
  {
    name: 'wrapperStyles',
    type: 'object',
    description: 'Styles object that is applied to the ripple wrapper component',
  }
];

export const toggleSwitchProperties = [
  {
    name: 'onToggle *',
    type: 'func',
    description: 'Function that is called when the switch is toggled',
  },
  {
    name: 'isToggled *',
    type: 'bool',
    defaultVal: 'false',
    description: 'Boolean indicating whether the switch is toggled or not',
  },
  {
    name: 'innerLeft / innerRight',
    type: 'any',
    description: 'Element that is rendered inside the switch component',
  },
  {
    name: 'borderColor',
    type: 'string',
    defaultVal: '#ccc',
    description: 'Border color for the switch component',
  },
  {
    name: 'bg',
    type: 'string',
    defaultVal: '#f5f5f5',
    description: 'Background color for the switch component',
  },
  {
    name: 'bgToggled',
    type: 'string',
    defaultVal: '#22e222',
    description: 'Background color for the TOGGLED switch component',
  },
];

export const dividerProperties = [
  {
    name: 'vertical',
    type: 'bool',
    description: 'Make the divider vertical',
  },
  {
    name: 'amount',
    type: 'string',
    defaultVal: '16px',
    description: 'How much space should be on both sides of the line',
  },
  {
    name: 'len',
    type: 'string',
    defaultVal: 'auto / 100%',
    description: 'How long should the line be - `auto` for height and `100%` for width',
  },
  {
    name: 'color',
    type: 'string',
    description: 'Color of the line',
  },
];

export const textFieldProperties = [
  {
    name: 'onChange *',
    type: 'func',
    description: 'Function that is called when the input value changes',
  },
  {
    name: 'value *',
    type: 'string',
    description: 'Value for the input',
  },
  {
    name: 'label *',
    type: 'string',
    description: 'Label for the input',
  },
  {
    name: 'validationMessage',
    type: 'string',
    description: 'Validation message for invalid input',
  },
  {
    name: 'validator',
    type: 'func',
    description: 'A function that returns true / false for the input value',
  },
  {
    name: 'cacheValue',
    type: 'string',
    description: 'Cache the input value inside components own state',
  },
  {
    name: 'stackedLabel',
    type: 'string',
    description: 'Keep the label on top (no float animation)',
  },
  {
    name: 'containerStyles',
    type: 'string',
    description: 'Custom styles object for the wrapper element',
  },
  {
    name: 'inputStyles',
    type: 'string',
    description: 'Custom styles object for the input element',
  },
  {
    name: 'labelStyles',
    type: 'string',
    description: 'Custom styles object for the label element',
  },
];

export const drawerProperties = [
  {
    name: 'isOpen *',
    type: 'bool',
    defaultVal: 'false',
    description: 'Is the drawer open or not',
  },
  {
    name: 'toggleDrawer *',
    type: 'func',
    description: 'Open / close the drawer',
  },
  {
    name: 'children',
    type: 'any',
    description: 'Inner menu content of the drawer',
  },
  {
    name: 'bg',
    type: 'string',
    defaultVal: '#fff',
    description: 'background color of the drawer',
  },
  {
    name: 'useGradient',
    type: 'bool',
    defaultVal: 'false',
    description: 'Use a sligth gradient for the background color',
  },
  {
    name: 'side',
    type: 'string',
    defaultVal: 'left',
    description: 'Determines whether drawer is on the left or right side',
  },
];

export const dropmenuProperties = [
  {
    name: 'trigger *',
    type: 'any',
    description: 'A valid React component that triggers showing the menu on click',
  },
  {
    name: 'children *',
    type: 'any',
    description: 'Menu content (note that you can use Dropmenu.Item here)',
  },
];

export const modalProperties = [
  {
    name: 'visible *',
    type: 'bool',
    description: 'Determines whether modal is visible or not',
  },
  {
    name: 'hide *',
    type: 'func',
    description: 'Function that is called when modal should be hid',
  },
  {
    name: 'animateFromBottom',
    type: 'bool',
    description: 'Changes the modal to appear from bottom instead of top',
  },
  {
    name: 'disableBackdropAction',
    type: 'bool',
    description: 'Dont hide modal when backdrop is clicked',
  },
  {
    name: 'contentStyles',
    type: 'object',
    description: 'Custom styles for the modal (white box)',
  },
  {
    name: 'backdropBg',
    type: 'string',
    description: 'Color value for the backdrop',
  },
];

/* eslint-enable max-len */
