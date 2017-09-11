import React, { Component } from 'react';
import {
  Layout,
  Gutter,
  Heading,
  Drawer,
  Button,
  ToggleSwitch,
  Text,
} from 'react-components-kit';

import Properties from './common/Properties';
import CodeBlock from './common/CodeBlock';
import { drawerExample } from './codeSnippets';
import { drawerProperties } from './compProperties';

class Navigation extends Component {
  state = {
    drawerOpen: false,
    drawerSide: 'left',
  };

  toggleDrawer = () => {
    this.setState(prev => ({ drawerOpen: !prev.drawerOpen }));
  };

  toggleMenuSide = () => {
    this.setState(prev => ({
      drawerSide: prev.drawerSide === 'left' ? 'right' : 'left',
    }));
  };

  render() {
    const { drawerOpen, drawerSide } = this.state;

    return (
      <div>
        <Heading>Navigation</Heading>
    
        <Heading h2>Drawer</Heading>

        <Text p>
          You need to provide the menu content yourself as children
          of the Drawer component.
        </Text>

        <Gutter vertical />

        <Layout column>
          <Button primary flat onClick={this.toggleDrawer}>
            Open drawer
          </Button>
          <Gutter vertical />
          <Layout align='center'>
            <Text>Menu on right:</Text>
            <Gutter />
            <ToggleSwitch
              isToggled={drawerSide === 'right'}
              onToggle={this.toggleMenuSide}
            />
          </Layout>
        </Layout>

        <Drawer
          isOpen={drawerOpen}
          toggleDrawer={this.toggleDrawer}
          side={drawerSide}
          bg='#08ffb4'
          useGradient
        >
          <Layout column style={{ padding: 32 }}>
            <Layout.Box>
              Foo
            </Layout.Box>
            <Layout.Box>
              Bar
            </Layout.Box>
            <Layout.Box>
              Baz
            </Layout.Box>
          </Layout>
        </Drawer>
    
        <Gutter vertical />
    
        <Layout>
          <CodeBlock code={drawerExample} />
        </Layout>
    
        <Layout>
          <Properties properties={drawerProperties} />
        </Layout>
      </div>
    );
  }
}

export default Navigation;
