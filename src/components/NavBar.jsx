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
      <Flex className="NabVar">
        <Box>
          <Image
            className="logo"
            borderRadius="full"
            src="../src/assets/logo1.png"
            alt="GENIUM"
          />
          <h1 className="NameTitle"></h1>
        </Box>
        <Spacer />
        <Button className="Btn">Inicio</Button>
        <Spacer />
        <Button className="Btn">Guias</Button>

        <Spacer />

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<MdKeyboardArrowDown />}
            className="Btn"
          >
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
          <Button className="Btn">Sign Up/Log in</Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
};

export default NavBar;
