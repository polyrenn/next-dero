import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import Stat from '../components/stat';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';
import Kilogram from '../components/kilogram';
import Test from '../components/test';
import Add from '../components/addbutton';
import axios from 'axios';


export default () => (
  <div>
    <Head title="Home" />
    <Nav />
    <div className="hero">
    <Button width='200px' colorScheme='messenger'>Button</Button>
    <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
  <Stack spacing={[1, 5]} direction={['column', 'row']}>
    <Checkbox value='1'>Naruto</Checkbox>
    <Checkbox value='2'>Sasuke</Checkbox>
    <Checkbox value='3'>Kakashi</Checkbox>
  </Stack>
</CheckboxGroup>
<Box margin={2} display="flex" direction="column">
<Stat type="Balance Stock" />
<Stat type="Sales" />
<Stat type="Sales" />
<Stat type="Sales" />
</Box>
<Box>
  <h1>Gey</h1>
</Box>

<Kilogram />
<Flex>

</Flex>

<Test />
<Add />


      <h1 className="title">Welcome Derogas (Create Next.js App building tools)</h1>
      <p className="description">To get started, edit <code>pages/index.js</code> and save to reload.</p>
      <div className="row">
        <Link href="//nextjs.org/docs/">
          <a className="card">
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Next.js on official website</p>
          </a>
        </Link>
        <Link href="//github.com/create-next-app/create-next-app">
          <a className="card">
            <h3>Dero Gas&rarr;</h3>
            <p>Was this tools helpful?</p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        padding-bottom: 12px;
        line-height: 1.15;
        font-size: 37px;
      }
      .title, .description {
        text-align: center;
      }
      .row {
        max-width: 587px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9B9B9B;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);
