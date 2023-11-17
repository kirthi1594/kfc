import React from 'react'
import {Heading, Card, Flex, CardHeader, HStack, CardBody, CardFooter,Image, Stack, Text, Button, Divider, ButtonGroup } from '@chakra-ui/react'
import periperi from "../assets/image/periperi.jpg"
import snacker from "../assets/image/snacker.jpg"
import roll from "../assets/image/roll.jpg"
import burger from "../assets/image/burger.jpg"
import briyani from "../assets/image/briyani.jpg"
import bucket from "../assets/image/bucket.jpg"

const card = () => {
  return (
    <>
    <Heading mt='15px'>BROWSE CATEGORIES</Heading>
    <div className='cardWrapper'>
        <Card w='auto' bg='white'>
          <Flex>
  <CardBody>
    <Image w='150px'
      src={periperi}
      alt='periperi'
      borderRadius='sm'
    />
    <Stack mt='3' spacing='2'>
      <Heading size='sm'textAlign={'center'} >PERI PERI CHICKEN</Heading>
    </Stack>
    </CardBody>
    
    <CardBody>
    <Image w='150px'
    src={snacker}
      alt='snacker'
      borderRadius='sm'
    />
    <Stack mt='3' spacing='2'>
      <Heading size='sm'textAlign={'center'} >VALUE SNACKERS</Heading>
    </Stack>
    </CardBody>
    
    <CardBody>
    <Image w='150px'
    src={roll}
      alt='roll'
      borderRadius='lg'
    />
    <Stack mt='3' spacing='2'>
      <Heading size='sm'textAlign={'center'} >CHICKEN ROLLS</Heading>
    </Stack>
    </CardBody>
    </Flex>
    <Flex>
  <CardBody>
    <Image w='150px'
src={bucket}  
    alt='bucket'
      borderRadius='sm'
    />
    <Stack mt='3' spacing='2'>
      <Heading size='sm'textAlign={'center'} >CHICKEN BUCKETS</Heading>
    </Stack>
    </CardBody>
    
    <CardBody>
    <Image w='150px'
      src={burger}
      alt='burger'
      borderRadius='sm'
    />
    <Stack mt='3' spacing='2'>
      <Heading size='sm'textAlign={'center'} >BURGERS</Heading>
    </Stack>
    </CardBody>
    
    <CardBody>
    <Image w='150px'
    src={briyani}
      alt='briyani'
      borderRadius='lg'
    />
    <Stack mt='3' spacing='2'>
      <Heading size='sm'textAlign={'center'} >BRIYANI</Heading>
    </Stack>
    </CardBody>
    </Flex>
</Card>
    </div>
    </>
  )
}

export default card