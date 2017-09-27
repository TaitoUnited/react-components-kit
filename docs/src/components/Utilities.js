import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Layout,
  Gutter,
  Heading,
  Spinner,
  Divider,
  Badge,
  Tooltip,
  Text,
  Button,
  CircleProgress,
  PlaceholderRows,
  OutsideReactor,
  Modal,
} from 'react-components-kit';

import Properties from './common/Properties';
import CodeBlock from './common/CodeBlock';

import {
  tooltipExample,
  spinnerExample,
  circleProgressExample,
  badgeExample,
  outsideReactorExample,
  placeholderExample,
  modalExample,
} from './codeSnippets';

import {
  tooltipProperties,
  spinnerProperties,
  circleProgressProperties,
  badgeProperties,
  placeholderProperties,
  outsideReactorProperties,
  modalProperties,
} from './compProperties';

class Utilities extends Component {
  state = {
    clickedOutside: false,
    progress: 30,
    modalVisible: false,
  };

  handleClickOutside = () => {
    this.setState({ clickedOutside: true });

    // Reset state after some time
    setTimeout(() => {
      this.setState({ clickedOutside: false });
    }, 2000);
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  confirmModal = () => {
    console.log('Modal confirmed!');
    this.hideModal();
  };

  render() {
    const { clickedOutside, modalVisible } = this.state;

    return (
      <div>
        <Heading>Utilities</Heading>
    
        <Heading h2 id='badge'>Badge</Heading>
    
        <Layout align='center'>
          <Badge>Badge default</Badge>
          <Gutter />
          <Badge primary>Badge primary</Badge>
          <Gutter />
          <Badge secondary>Badge secondary</Badge>
          <Gutter />
          <Badge error>Badge error</Badge>
          <Gutter />
          <Badge success>Badge success</Badge>
        </Layout>

        <Gutter vertical />
    
        <Layout>
          <CodeBlock code={badgeExample} />
        </Layout>

        <Layout>
          <Properties properties={badgeProperties} />
        </Layout>
    
        <Divider />
    
        <Heading h2>CircleProgress</Heading>

        <Text p>
          The children components that are provided to CircleProgress
          are centered inside the circle. Also note that the progress value is
          clamped between 0 and 100.
        </Text>

        <Gutter vertical amount='32px' />

        <Layout column>
          <CircleProgress
            size='200px'
            progress={this.state.progress}
            color='#22f985'
          >
            <Text size='24px' color='#22f985'>{this.state.progress}%</Text>
          </CircleProgress>
          <Gutter vertical />
          <Layout align='center'>
            <Text>Update the progress:</Text>
            <Gutter />
            <Layout.Box flex='1'>
              <input
                type='range' 
                min='0'
                max='100' 
                value={this.state.progress} 
                onChange={({ target }) => this.setState({ progress: target.value})}
                step='1'
              />
            </Layout.Box>
          </Layout>
        </Layout>

        <Layout>
          <CodeBlock code={circleProgressExample} />
        </Layout>

        <Layout>
          <Properties properties={circleProgressProperties} />
        </Layout>
    
        <Divider />
    
        <Heading h2 id='modal'>
          Modal
        </Heading>

        <Button onClick={this.showModal}>
          Show modal
        </Button>

        <p>
          PS: don't freak about the backdrop background color,
          it's not the default color ;)
        </p>

        <Modal
          visible={modalVisible}
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

        <Layout>
          <CodeBlock code={modalExample} />
        </Layout>

        <Layout>
          <Properties properties={modalProperties} />
        </Layout>

        <Divider />
    
        <Heading h2 id='outsidereactor'>
          OutsideReactor
        </Heading>

        <Text p>
          You can wrap OutsideReactor to a component that needs to know when the
          user clicks outside of it. A good use case for this component would
          be an autocomplete / dropdown component that should dissapear when
          you click outside of it.
        </Text>

        <Gutter vertical amount='32px' />
    
        <OutsideReactor
          onClickedOutside={this.handleClickOutside}
          style={{ display: 'inline-block' }}
        >
          <DontClickMe>
            {clickedOutside
              ? 'You clicked outside, yey!'
              : 'Click outside of me, plz.'
            }
          </DontClickMe>
        </OutsideReactor>

        <Gutter vertical />

        <Layout>
          <CodeBlock code={outsideReactorExample} />
        </Layout>

        <Layout>
          <Properties properties={outsideReactorProperties} />
        </Layout>
    
        <Divider />
    
        <Heading h2>PlaceholderRows</Heading>

        <Text p>
          PlaceholderRows renders rows with random width to indicate that
          some content will be shown soon. The component could be used instead
          of a loading spinner.
        </Text>

        <Gutter vertical amount='32px' />

        <Layout>
          <PlaceholderRows rows={6} />
        </Layout>

        <Layout>
          <CodeBlock code={placeholderExample} />
        </Layout>

        <Layout>
          <Properties properties={placeholderProperties} />
        </Layout>
    
        <Divider />
    
        <Heading h2 id='spinner'>
          Spinner
        </Heading>
    
        <Layout align='center'>
          <Spinner />
          <Gutter horizontal amount='32px' />
          <Spinner sm />
          <Gutter horizontal amount='32px' />
          <Spinner md color='tomato'/>
          <Gutter horizontal amount='32px' />
          <Spinner lg color='papayawhip'/>
        </Layout>

        <Layout>
          <CodeBlock code={spinnerExample} />
        </Layout>

        <Layout>
          <Properties properties={spinnerProperties} />
        </Layout>
    
        <Divider />
    
        <Heading h2>Tooltip</Heading>
        <Layout>
          <Layout.Box>
            <Tooltip content='Hovering yey!'>
              <Text>Hover over me</Text>
            </Tooltip>
          </Layout.Box>
          <Gutter horizontal amount='32px' />
          <Layout.Box>
            <Tooltip
              content='Down here! I also have more text content, yey!'
              color='tomato'
              bg='papayawhip'
              elevation={999999}
              bottom
            >
              <Button secondary>
                Hover over me too
              </Button>
            </Tooltip>
          </Layout.Box>
          <Gutter horizontal amount='32px' />
          <Layout.Box>
            <Tooltip
              color='rebeccapurple'
              bg='white'
              content={
                <Layout align='center'>
                  <Spinner color='tomato' sm />
                  <Gutter horizontal amount='8px' />
                  <Text color='tomato' p>
                    Custom content works too!
                  </Text>
                </Layout>
              }
            >
              <Button danger>Don't you dare hover over me!</Button>
            </Tooltip>
          </Layout.Box>
        </Layout>

        <Layout>
          <CodeBlock code={tooltipExample} />
        </Layout>

        <Layout>
          <Properties properties={tooltipProperties} />
        </Layout>
      </div>
    );
  }
}

const DontClickMe = styled.div`
  width: 200px;
  height: 200px;
  padding: 24px;
  background-color: rebeccapurple;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
`;

export default Utilities;
