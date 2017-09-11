import React from 'react';

import {
  Layout,
  Gutter,
  Heading,
  Text,
  Divider,
  Icon,
} from 'react-components-kit';

import Properties from './common/Properties';
import CodeBlock from './common/CodeBlock';

import { headingExample, textExample, iconExample } from './codeSnippets';
import {
  headingProperties,
  textProperties,
  iconProperties,
} from './compProperties';

const Typography = () => (
  <div>
    <Heading>Typography</Heading>

    <Heading h2>Headings</Heading>

    <Text p>
      Heading uses the global font sizes for the h1 / h2 / h3 / h4 elements
      so if you want to use your own sizes you should define them globally.
      It's also possible to overwrite the font size for each component with the
      `size` property.
    </Text>

    <Layout align='center'>
      <Heading color='tomato'>
        Heading 1
      </Heading>
      <Gutter amount='32px' />
      <Heading h2 color='slategrey'>
        Heading 2
      </Heading>
      <Gutter amount='32px' />
      <Heading h3>
        Heading 3
      </Heading>
      <Gutter amount='32px' />
      <Heading h4 color='rebeccapurple'>
        Heading 4
      </Heading>
    </Layout>

    <Layout align='center'>
      <Heading sub color='primaryColor'>
        Sub heading 1
      </Heading>
      <Gutter amount='32px' />
      <Heading sub h2 color='primaryColorLight'>
        Sub heading 2
      </Heading>
      <Gutter amount='32px' />
      <Heading sub h3>
        Sub heading 3
      </Heading>
      <Gutter amount='32px' />
      <Heading sub h4 color='secondaryColorDark'>
        Sub heading 4
      </Heading>
    </Layout>

    <Layout>
      <CodeBlock code={headingExample} />
    </Layout>

    <Layout>
      <Properties properties={headingProperties} />
    </Layout>

    <Divider  />

    <Heading h2>Text</Heading>

    <Layout align='center'>
      <Text color='tomato'>
        Colored span
      </Text>
      <Gutter amount='32px' />
      <Text color='slategrey' i size='12px'>
        Italic smaller
      </Text>
      <Gutter amount='32px' />
      <Text p>
        Paragraph
      </Text>
      <Gutter amount='32px' />
      <Text color='rebeccapurple' bold size='18px'>
        Strong text
      </Text>
    </Layout>

    <Layout>
      <CodeBlock code={textExample} />
    </Layout>

    <Layout>
      <Properties properties={textProperties} />
    </Layout>

    <Divider />

    <Heading h2>Icon</Heading>

    <Text p>
      If you are using Ionicons of FontAwesome font sets you can easily use them
      with the Icon component. Note that you have to include the font css files
      yourself!
    </Text>

    <Gutter vertical />

    <Layout align='center'>
      <Icon name='ionic' />
      <Gutter />
      <Icon type='fa' name='cubes' />
      <Gutter />
      <Icon type='ion' name='coffee' size='32px' color='rebeccapurple' />
      <Gutter />
      <Icon type='fa' name='bug' size='32px' color='blue' />  
    </Layout>

    <Layout>
      <CodeBlock code={iconExample} />
    </Layout>

    <Layout>
      <Properties properties={iconProperties} />
    </Layout>
  </div>
);

export default Typography;
