//import React from "react";
import CartWidget from "./CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Spacer,
  Box,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavBar = () => {
  return (
    <div>
      <Flex p="5" w="100vw">
        <Box>
          <Image
            borderRadius="full"
            boxSize="50px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <h1>LoboSimulador</h1>
        </Box>
        <Spacer />
        <Button>
          <h2>Inicio</h2>
        </Button>
        <Spacer />
        <Box>
          <h2>Guias</h2>
        </Box>
        <Spacer />

        <Menu>
          <MenuButton rightIcon={<MdKeyboardArrowDown />}>
            Simuladores
          </MenuButton>
          <MenuList>
            <MenuItem>Área de Ingeniería y ciencias exactas</MenuItem>
            <MenuItem>Área de Ciencias naturales y de la salud</MenuItem>
            <MenuItem>Área de Económico-administrativas</MenuItem>
            <MenuItem>Área de Ciencias sociales y humanidades</MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Box>
          <CartWidget />
        </Box>

        <Spacer />

        <ButtonGroup gap="2">
          <Button colorScheme="teal">Sign Up</Button>
          <Button colorScheme="teal">Log in</Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
};

export default NavBar;
