export const libUsageExample = `
import { Button } from 'react-components-kit';

// or import directly for code splitting

import Button from 'react-components-kit/dist/Button';

// ...later in render

const Example = () => (
  <Button primary>Primary button</Button>
);
`;

export const buttonsExample = `
import { Button } from 'react-components-kit';

const Example = () => (
  <div>
    <Button>Primary button</Button>
    <Button primary>Primary button</Button>
    <Button secondary outline>Primary button</Button>
    <Button danger clear>Primary button</Button>
    <Button flat>Primary button</Button>
  </div>
);
`;

export const tooltipExample = `
import { Tooltip } from 'react-components-kit';

const Example = () => (
  <div>
    <Tooltip
      content='Content for the bubble'
      color='tomato'
      bg='papayawhip'
      elevation={999999}
      bottom
    >
      // Component to wrap goes here.
      // Hovering this component triggers the tooltip.
    </Tooltip>
  </div>
);
`;

export const spinnerExample = `
import { Spinner } from 'react-components-kit';

const Example = () => (
  <div>
    <Spinner />
    <Spinner sm />
    <Spinner md color='tomato' />
    <Spinner lg color='papayawhip'/>
  </div>
);
`;

export const circleProgressExample = `
import { CircleProgress } from 'react-components-kit';

const Example = () => (
  <div>
    <CircleProgress
      size='200px'
      progress={this.state.progress}
      color='#22f985'
    >
      // Inner content here that is centered inside the circle.
    </CircleProgress>
  </div>
);
`;

export const layoutExample = `
import { Layout } from 'react-components-kit';

const Example = () => (
  <div>
    <Layout align='center'>
      <Layout.Box>
        // Stuff here
      </Layout.Box>
      <Layout.Box>
        // Stuff here
      </Layout.Box>
    </Layout>

    <Layout column>
      <Layout.Box>
        // Stuff here
      </Layout.Box>
      // ...
    </Layout>

    <Layout row xs='column' >
      // ...
    </Layout>
  </div>
);
`;

export const gutterExample = `
import { Gutter } from 'react-components-kit';

const Example = () => (
  <div>
    <Gutter />
    <Gutter horizontal amount='32px' />
    <Gutter amount='32px' /> // same as above
    <Gutter vertical />
    <Gutter vertical amount='24px' />
  </div>
);
`;

export const headingExample = `
import { Heading } from 'react-components-kit';

const Example = () => (
  <div>
    <Heading color='tomato'>Heading 1</Heading>
    <Heading h2 color='slategrey'>Heading 2</Heading>
    <Heading h3 sub>Subheading</Heading>
    <Heading h4 size='10px'>Really small heading</Heading>
  </div>
);
`;

export const textExample = `
import { Text } from 'react-components-kit';

const Example = () => (
  <div>
    <Text color='tomato'>Colored span</Text>
    <Text color='slategrey' bold size='12px'>Bold smaller</Text>
  </div>
);
`;

export const iconExample = `
import { Icon } from 'react-components-kit';

const Example = () => (
  <div>
    <Icon name='ionic' />
    <Icon type='fa' name='cubes' />
    <Icon type='ion' name='coffee' size='32px' color='rebeccapurple' />
    <Icon type='fa' name='bug' size='32px' color='blue' />  
  </div>
);
`;

export const cardExample = `
import { Card } from 'react-components-kit';

const Example = () => (
  <div>
    <Card depth={1}>Depth 1</Card>
    <Card depth={2}>Depth 2</Card>
    <Card.Animated depth={2}>Top</Card.Animated>
    <Card.Animated animDir='left' depth={2}>Left</Card.Animated>
  </div>
);
`;

export const badgeExample = `
import { Badge } from 'react-components-kit';

const Example = () => (
  <div>
    <Badge>Badge default</Badge>
    <Badge primary>Badge primary</Badge>
    <Badge secondary>Badge secondary</Badge>
    <Badge error>Badge error</Badge>
    <Badge success>Badge success</Badge>
  </div>
);
`;

export const outsideReactorExample = `
import { OutsideReactor } from 'react-components-kit';

const Example = () => (
  <div>
    <OutsideReactor onClickedOutside={this.handleClickOutside}>
      // content goes here
    </OutsideReactor>
  </div>
);
`;

export const placeholderExample = `
import { PlaceholderRows } from 'react-components-kit';

const Example = () => (
  <div>
    <PlaceholderRows rows={6} />
  </div>
);
`;

export const withRippleExample = `
import { withRipple } from 'react-components-kit';

const Block = styled.div\`
  width: 100px;
  height: 100px;
  background-color: tomato;
\`;

const RippleBlock = withRipple(Block);

const Example = () => (
  <div>
    <RippleBlock />
    <RippleBlock wrapperStyles={{ color: 'red' }}>
      Foo
    </RippleBlock>
  </div>
);
`;

export const createThemeExample = `
import { createTheme } from 'react-components-kit';

const defaultTheme = createTheme();

const theme = {
  ...defaultTheme,
  // Theme overwrites
  dividerSpaceHorizontal: '32px',
  dividerSpaceVertical: '24px',
}

const Example = () => (
  <ThemeProvider theme={theme}>
    // ...
  </ThemeProvider>
);
`;

export const toggleSwitchExample = `
import { ToggleSwitch } from 'react-components-kit';

const Example = () => (
  <div>
    <ToggleSwitch
      onToggle={this.toggle}
      isToggled={this.state.toggled}
    />
    <ToggleSwitch
      onToggle={this.toggle}
      isToggled={this.state.toggled}
      innerLeft={<Icon className='ion ion-ios-checkmark-empty' />}
      innerRight={<Icon className='ion ion-ios-close-empty' />}
      bgToggled='#ff04c9'
    />
  </div>
);
`;

export const textFieldExample = `
import { TextField } from 'react-components-kit';

const Example = () => (
  <div>
    <TextField
      name='textfield'
      label='Basic textfield'
      onChange={this.handleInputChange}
      value={this.state.textfield}
    />

    <TextField
      name='textfieldvalidation'
      label='With validation (number) and custom styles'
      onChange={this.handleInputChange}
      value={this.state.textfieldvalidation}
      containerStyles={{ width: 400 }}
      inputStyles={{ color: 'orange' }}
      labelStyles={{ color: 'blue' }}
      validator={isNumeric}
      validationMessage='You must type a number'
    />

    <TextField
      name='textfieldstacked'
      label='With stacked label (fixed to top)'
      onChange={this.handleInputChange}
      value={this.state.textfieldstacked}
      stackedLabel
    />


    <TextField
      name='textfielddisabled'
      label='Disabled textfield'
      onChange={this.handleInputChange}
      value={this.state.textfielddisabled}
      disabled
    />
  </div>
);
`;

export const dividerExample = `
import { Divider } from 'react-components-kit';

const Example = () => (
  <div>
    <Divider />
    <Divider vertical />
    <Divider len='300px' amount='24px' color='red' />
  </div>
);
`;

export const mediaExample = `
import { media } from 'react-components-kit';

/*

giant: 1170px
desktop: 992px
tablet: 768px
phone: 420px

*/

const ExampleComponent = styled.div\`
  font-size: 16px;

  $\{media.phone\`
    font-size: 14px;
  \`}

  $\{media.tablet\`
    font-size: 18px;
  \`}

  $\{media.desktop\`
    font-size: 20px;
  \`}

  $\{media.giant\`
    font-size: 24px;
  \`}
\`;
`;

export const drawerExample = `
import { Drawer } from 'react-components-kit';

const Example = () => (
  <div>
    <Drawer
      isOpen={this.state.drawerOpen}
      toggleDrawer={this.toggleDrawer}
      side={this.state.drawerSide}
      bg='rebeccapurple'
      useGradient
    >
      // ... menu component goes here
    </Drawer>
  </div>
);
`;

export const dropmenuExample = `
import { Dropmenu } from 'react-components-kit';

const Example = () => (
  <div>
    <Dropmenu
      trigger={
        <Icon
          name='grid'
          size='32px'
          color='rebeccapurple'
          touchable
        />
      }
    >
      <Dropmenu.Item>Foo</Dropmenu.Item>
      <Dropmenu.Item>Bar</Dropmenu.Item>
      <Dropmenu.Item>Baz</Dropmenu.Item>
      <Divider amount='0px' />
      <Dropmenu.Item>Baz</Dropmenu.Item>
    </Dropmenu>
  </div>
);
`;

export const modalExample = `
import { Modal } from 'react-components-kit';

class Example extends Component {
  state = {
    modalVisible: false,
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  render() {
    return (
      <div>
        <Button onClick={this.showModal}>
          Show modal
        </Button>

        <Modal
          visible={this.state.modalVisible}
          hide={this.hideModal}
          backdropBg='rgba(0, 0, 255, 0.5)'
        >
          <Modal.Body>
            <h1 style={{ margin: 0 }}>Modal</h1>
            <p>
              You have full control of the modal content and state!
            </p>
            <p>
              But you can also use Modal's internal static components
              to compose your modal content.
            </p>
            <Modal.Footer>
              <Button flat onClick={this.hideModal}>Cancel</Button>
              <Gutter />
              <Button flat onClick={this.confirmModal}>Confirm</Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
`;
