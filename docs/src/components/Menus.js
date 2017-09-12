import React, { Component } from 'react';
import {
  Layout,
  Gutter,
  Heading,
  Drawer,
  Button,
  ToggleSwitch,
  Text,
  Divider,
  Dropmenu,
  Icon,
} from 'react-components-kit';

import Properties from './common/Properties';
import CodeBlock from './common/CodeBlock';
import { drawerExample, dropmenuExample } from './codeSnippets';
import { drawerProperties, dropmenuProperties } from './compProperties';

class Menus extends Component {
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
        <Heading>Menus</Heading>
    
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

        <Divider />

        <Heading h2>Dropmenu</Heading>

        <Gutter vertical amount='16px' />

        <Layout justify='space-around' align='center'>
          <Dropmenu
            trigger={
              <Button primary>
                Open menu&nbsp;
                <Icon
                  name='android-more-vertical'
                  color='#fff'
                  style={{ padding: 6 }}
                />
              </Button>
            }
          >
            <Dropmenu.Item>Foo</Dropmenu.Item>
            <Dropmenu.Item>Bar</Dropmenu.Item>
            <Dropmenu.Item>Baz</Dropmenu.Item>
            <Divider amount='0px' />
            <Dropmenu.Item>Baz</Dropmenu.Item>
          </Dropmenu>

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
        </Layout>

        <Gutter vertical amount='16px' />

        <Layout>
          <CodeBlock code={dropmenuExample} />
        </Layout>
    
        <Layout>
          <Properties properties={dropmenuProperties} />
        </Layout>
      </div>
    );
  }
}

export default Menus;
