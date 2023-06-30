import React from "react";
import { Box, Center, Image, Heading, Input, FormControl, VStack, Icon, Button, Checkbox, Text, HStack, WarningOutlineIcon, Slider, Switch, useColorMode } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
function SignIn() {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Center height="full" _dark={{bg:"black"}}
        _light={{bg:"white"}}
        >
            <Image size={150} source={{ uri : 'https://github.com/macdev14.png'}} alt=""/>
            <VStack width={"full"} p="5"> 
            <Box width="full" >
                <Heading color={"coolGray.700"} 
                _dark={{color: "white"}}
                _light={{color: "black"}}
                >
                    Entrar
                </Heading>
               
                    <FormControl isInvalid>
                        <FormControl.Label>E-mail</FormControl.Label>
                        <Input placeholder="seu@email.com"
                       
                        InputLeftElement={
                            <Icon as={<MaterialIcons name="person"/>}
                            size={5}
                            ml={2}
                            color="muted.400"
                            />
                        }
                         /> <FormControl.ErrorMessage 
                         leftIcon={<WarningOutlineIcon size="xs"/>} 
                         >
                         E-mail inválido
                     </FormControl.ErrorMessage>
                     </FormControl>
                     <FormControl>
                           <FormControl.Label>Senha</FormControl.Label>
                        <Input placeholder="sua senha"
                        
                         InputLeftElement={
                            <Icon as={<MaterialIcons name="lock"/>}
                            size={5}
                            ml={2}
                            color="muted.400"
                            />
                        }
                        
                        />
                        <FormControl.ErrorMessage>
                           Senha inválido
                        </FormControl.ErrorMessage>
                    </FormControl>

                        <Button mt={12} colorScheme={"purple"}>Entrar</Button>

            </Box>
            <HStack mt={5}>
            <Checkbox value={"agree"}>
                
                <Text ml={3}>Concordo com a politica de segurança.
                 </Text> </Checkbox>
            </HStack>
           
                </VStack>
                <Box alignItems="center" w="100%">
      <Slider w="3/4" maxW="300" defaultValue={70} minValue={0} maxValue={100} accessibilityLabel="hello world" step={10}>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Box>
    <HStack alignItems="center" space={4}>
      <Text>Dark</Text>
      <Switch isChecked={colorMode === 'light'}
      onToggle={toggleColorMode}
      aria-label={
        colorMode === 'light' ? 'troque para o tema escuro' : 'troque para o tema claro'
      }
      />
      <Text>Light</Text>
      
    </HStack>

        </Center>)
}

export default SignIn;
