// import Link from 'next/link';
// import { Menu, MenuButton, MenuList, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
// import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
// import { BsSearch } from 'react-icons/bs';
// import { FiKey } from 'react-icons/fi';
import React from "react";
import {Link,Text, Button, Stack, Flex, Box } from "@chakra-ui/react";

// import { ReactComponent as Logo } from "../crown.svg";
const NavBar = (props) => {
  // <Flex p='2' borderBottom='1px' borderColor='gray.100'>
  //   <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
  //     <Link href='/' paddingLeft='2'>Realtex</Link>
  //   </Box>
  //   <Spacer />
  //   <Box>
  //     <Menu>
  //       <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
  //       <MenuList>
  //         <Link href='/' passHref>
  //           <MenuItem icon={<FcHome />}>Home</MenuItem>
  //         </Link>
  //         <Link href='/search' passHref>
  //           <MenuItem icon={<BsSearch />}>Search</MenuItem>
  //         </Link>
  //         <Link href='/search?purpose=for-sale' passHref>
  //           <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
  //         </Link>
  //         <Link href='/search?purpose=for-rent' passHref>
  //           <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
  //         </Link>
  //       </MenuList>
  //     </Menu>
  //   </Box>
  // 
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
  <Flex p='2' borderBottom='1px' borderColor='gray.100' bgColor="#1E5F74" height="75">
     <Box fontSize='3xl' color='white' fontWeight='bold' paddingTop="2">
         <Link href='/' paddingLeft='2'>Realtex</Link>
    </Box>
    <NavBarContainer {...props}>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
    </Flex>
  );
};
const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
      // <Flex p='2' borderBottom='1px' borderColor='gray.100'>
  //   <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
  //     <Link href='/' paddingLeft='2'>Realtex</Link>
  //   </Box>
  //   <Spacer />
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      
      <Stack
        spacing={15}
        align="center"
        // alignItems="right"
        color="white"
        justify="flex-end"
        // justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[0 ,0, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/search"> Search Property </MenuItem>
        <MenuItem to="/search?purpose=for-sale"> BUY </MenuItem>
        <MenuItem to="/search?purpose=for-rent"> RENT </MenuItem>
        {/* <MenuItem to="/signup" isLast>
          <Button
            size="sm"
            rounded="md"
            color={["primary.500", "primary.500", "black", "black"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
            }}
          >
            Sair
          </Button>
        </MenuItem> */}
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      // align="right"
      alignItems="right"
      justify="flex-end"
      wrap="wrap"
      w="100%"
      mb={8}
      p={3}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "black", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;

