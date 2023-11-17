// import chakraTheme from '@chakra-ui/theme'
// import { ChakraProvider,Center, Flex, Box, Text,Button, Spacer, Link ,extendTheme } from '@chakra-ui/react';
// import React from 'react';
// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbSeparator,
//   } from '@chakra-ui/react'

// const Navbar = () => {
//     const breakpoints = {
//         base: "0px",
//         sm: "320px",
//         md: "768px",
//         lg: "960px",
//         xl: "1200px",
//         "2xl": "1536px",
//       };

//       const theme = extendTheme({ breakpoints });

//     return (
//         <>
//        <Center bg='white' p='2' h='30px' color='black'>
//        Allow location access for local store menu and promos
//        <Button bg='black' color='white'>location</Button>
//        </Center>
// <br/>
// <hr/>
//       <Flex p="3" bg="white" align="center" >
//         {/* KFC logo */}
      
//         {/* Navbar links */}
//         <Box ml="4">
//           <Link fontSize="2xl" fontWeight="bold" color="red.500" href="#" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
//             KFC
//           </Link>
//           <Link color="black" href="#" ml="4" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
//             Menu
//           </Link>
//           <Link color="black" href="#" ml="4" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
//             Deals
//           </Link>
//         </Box>
  
//         {/* Spacer to push links to the right */}
//         <Spacer />
  
  //       {/* User authentication or additional links */}
  //       <Box>
  //         <Link color="black" href="#" ml="4" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
  //           SignIn
  //         </Link>
  //         </Box>
  //       <Breadcrumb fontWeight='medium' fontSize='sm'>
  //       <BreadcrumbLink >
  //         <BreadcrumbLink  color="black" ml="4" href="#" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
  //           Rs0.00
  //         </BreadcrumbLink >
  //       </BreadcrumbLink>
  //       </Breadcrumb>
        
  //     </Flex>
  //     </>
  //   );
    
  // };
  

  // export default Navbar