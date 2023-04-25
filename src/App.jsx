import React from 'react'
import ContactForm from './Form'
import StarRating from './components/Stars.jsx'
import {
  Wrap,
  Box,
  Grid,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  Link,
  Text,
  Button,
  Flex,
  Image,
  Icon,
  Stack,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  GridItem,
} from '@chakra-ui/react'
import {
  BsDownload,
  BsFillChatLeftDotsFill,
  BsLinkedin,
  BsGithub,
  BsWhatsapp,
  BsInstagram,
} from 'react-icons/bs'
import { AiFillHtml5 } from 'react-icons/ai'
import { BiCodeAlt } from 'react-icons/bi'
import { BsDatabaseFillCheck } from 'react-icons/bs'
import { GrReactjs } from 'react-icons/gr'
import { TbBrandReactNative } from 'react-icons/tb'
import {
  SiSequelize,
  SiPostgresql,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiChakraui,
  SiTailwindcss,
} from 'react-icons/si'
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import { useDisclosure } from '@chakra-ui/react'
import ToggleColorMode from './components/ToggleColorMode'

function App() {
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  return (
    <Container
      minW="100%"
      minH="100%"
      marginTop={['70px', '20px']}
      padding={['10px', '20px', '40px']}
    >
      <Box position="fixed" top="4" right="4" width="50px" zIndex="999">
        <ToggleColorMode />
      </Box>
      <Flex
        flexDir={['column', 'column', 'row']}
        justifyContent="center"
        alignItems={['center', 'center', 'stretch']}
        h={['auto', '100vh']}
        paddingTop={['10vh', '25vh']}
      >
        <Container
          textAlign={['center', 'center', 'left']}
          margin={['auto', 'auto', '0']}
          marginRight={['0', '0', '10']}
        >
          <Text fontSize={['2xl', '3xl']} fontWeight="bold">
            Hola!! 👋🏻 soy
          </Text>
          <Text
            fontSize={['4xl', '6xl']}
            fontWeight="bold"
            letterSpacing="-.04em"
            margin="0 0 10px"
            bgGradient="linear-gradient(to right, #00AFFF, #008000)"
            bgClip="text"
          >
            Matias Ferrari.
          </Text>
          <Text marginBottom="2em" fontSize={['md', '2xl']} fontWeight="bold">
            Desarrollador Full Stack que ama el Frontend.
          </Text>
          <StarRating />
          <Flex
            flexDir={['column', 'column', 'row']}
            justifyContent={['center', 'center', 'flex-start']}
            alignItems={['center', 'center', 'stretch']}
          >
            <Box margin={['10px', '10px', '0']}>
              <Button
                mr={[0, 0, 4]}
                mb={['4', '4', 0]}
                leftIcon={<BsFillChatLeftDotsFill />}
                onClick={() => {
                  setOverlay(<OverlayOne />)
                  onOpen()
                }}
                _hover={{
                  backgroundImage:
                    'linear-gradient(to right, #00AFFF, #00fFFF)',
                }}
              >
                Contacto
              </Button>
            </Box>

            <Box margin={['10px', '10px', '0']}>
              <a
                href="../src/assets/CV_MatiasFerrari_Full-Stack-Developer_2023.pdf"
                download
              >
                <Button
                  leftIcon={<BsDownload />}
                  _hover={{
                    backgroundImage:
                      'linear-gradient(to right, #00AFFF, #00fFFF)',
                  }}
                >
                  Descargar CV
                </Button>
              </a>
            </Box>
          </Flex>
        </Container>

        <Flex
          flexDir="column"
          alignItems={['center', 'center', 'flex-start']}
          margin={['20px', '20px', '0']}
          marginTop={['8vh', '8vh', '0']}
        >
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
              <ModalHeader>Contactame</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <ContactForm />
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>

        <Flex
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          margin={['10px', '10px', '0']}
        >
          <Box w="50px" m="2">
            <Link
              href="https://www.linkedin.com/in/matias-emanuel-ferrari/"
              isExternal
            >
              <Button
                fontSize={['xl', '3xl']}
                backgroundColor="transparent"
                leftIcon={<BsLinkedin />}
              />
            </Link>
          </Box>
          <Box w="50px" m="2">
            <Link href="https://www.instagram.com/mmatiferrari/" isExternal>
              <Button
                fontSize={['xl', '3xl']}
                backgroundColor="transparent"
                leftIcon={<BsInstagram />}
              />
            </Link>
          </Box>
          <Box w="50px" m="2">
            <Link href="https://github.com/mmatiferrari" isExternal>
              <Button
                fontSize="3xl"
                backgroundColor="transparent"
                leftIcon={<BsGithub />}
              />
            </Link>
          </Box>
          <Box w="50px" m="2">
            <Link href="https://wa.link/777ip3" isExternal>
              <Button
                fontSize="3xl"
                backgroundColor="transparent"
                leftIcon={<BsWhatsapp />}
              />
            </Link>
          </Box>
        </Flex>
      </Flex>
      <Grid
  templateAreas={{
    base: `
      "image"
      "text"
    `,
    md: `
      "image text"
    `,
  }}
  templateColumns={{
    base: '1fr',
    md: '1fr 3fr',
  }}
  gap={4}
  justifyItems="center" // Centra la imagen en el sector izquierdo
>
  <GridItem gridArea="image">
    <Image
      borderRadius="full"
      boxSize="280px"
      src="https://media.licdn.com/dms/image/C4D03AQFnBCYjWkaYUQ/profile-displayphoto-shrink_400_400/0/1659938180693?e=1687996800&v=beta&t=wHZI2HA2rJIAKW2vDRpeuyRk4VP1TlfkEwNpoPv3uFs"
      alt="Dan Abramov"
    />
  </GridItem>
  <GridItem gridArea="text" textAlign={{base: 'center', md: 'left'}} maxW="95%">
    <Text fontWeight="bold" fontSize="4xl" m="1vh">
      Sobre mí
    </Text>
    <Text fontWeight="bold" fontSize="1xl">
      Transformo desafíos en oportunidades a través de mi creatividad y
      habilidades técnicas, brindando soluciones innovadoras y efectivas
      para mis trabajos.
    </Text>
    <Text fontWeight="bold" fontSize="1xl">
      Mi enfoque estratégico y orientado a resultados, sumado a mi pasión
      por aprender y mejorar continuamente, me permiten colaborar
      efectivamente en equipos multidisciplinarios y alcanzar objetivos de
      manera eficiente y eficaz. Si busca a alguien apasionado,
      comprometido y con una mentalidad proactiva, estaré encantado de ser
      parte de su equipo.
    </Text>
    <Text fontWeight="bold" fontSize="1xl">
      No dude en contactarse conmigo si tiene alguna pregunta, siempre
      encantado.
    </Text>
  </GridItem>
</Grid>

      <Box display="flex" flexDirection={{ base: 'column', md: 'row' }}>
      <Box flex={{ base: '1', md: '1' }} margin={{ base: 'auto', md: '15vh' }} textAlign="center">
        <Box maxWidth={{ base: '80%', md: 'sm' }} mx={{ base: 'auto', md: '4' }}>
          <Icon
            as={BiCodeAlt}
            w={{ base: '80px', md: '200px' }}
            h={{ base: '80px', md: '200px' }}
            margin="0 auto"
          />
          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="bold"
            marginTop={{ base: '2', md: '4' }}
            marginBottom={{ base: '4', md: '6' }}
          >
            Frontend
          </Text>
          <Wrap justify="center">
            <Icon
              as={AiFillHtml5}
              w={{ base: '6', md: '8' }}
              h={{ base: '6', md: '8' }}
            />
            <Icon
              as={IoLogoCss3}
              w={{ base: '6', md: '8' }}
              h={{ base: '6', md: '8' }}
            />
            <Icon
              as={IoLogoJavascript}
              w={{ base: '6', md: '8' }}
              h={{ base: '6', md: '8' }}
            />
            <Icon
              as={GrReactjs}
              w={{ base: '6', md: '8' }}
              h={{ base: '6', md: '8' }}
            />
            <Icon
              as={SiTailwindcss}
              w={{ base: '6', md: '8' }}
              h={{ base: '6', md: '8' }}
            />
            <Icon
              as={SiChakraui}
              w={{ base: '6', md: '8' }}
              h={{ base: '6', md: '8' }}
            />
            <Icon
              as={SiRedux}
              w={{ base: '6', md: '8' }}
              h={{ base: '6', md: '8' }}
            />
            <Icon
              as={TbBrandReactNative}
              w={{ base: '6', md: '8' }}
              h={{ base: '6', md: '8' }}
            />
          </Wrap>
          </Box>
        </Box>
        <Box flex={{ base: '1', md: '1' }} margin={{ base: 'auto', md: '15vh' }} textAlign="center">
        <Box maxWidth={{ base: '80%', md: 'sm' }} mx={{ base: 'auto', md: '4' }}>
          <Icon
            as={BsDatabaseFillCheck}
            w={{ base: '100px', md: '200px' }}
            h={{ base: '100px', md: '200px' }}
            margin="0 auto"
          />
          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="bold"
            marginTop={{ base: '2', md: '4' }}
            marginBottom={{ base: '4', md: '6' }}
          >
            Backend
          </Text>
          <Wrap justify="center">
          <Icon
              as={SiPostgresql}
              w={{ base: '6', md: '8' }}
              h={{ base: '6', md: '8' }}
            />
            <Icon
              as={SiSequelize}
              w={{ base: '6', md: '8' }}
              h={{ base: '6', md: '8' }}
            />
            <Icon
              as={SiNodedotjs}
              w={{ base: '6', md: '8' }}
              h={{ base: '6', md: '8' }}
            />
            <Icon
              as={SiExpress}
              w={{ base: '6', md: '8' }}
              h={{ base: '6', md: '8' }}
            />
            <Icon
              as={SiMongodb}
              w={{ base: '6', md: '8' }}
              h={{ base: '6', md: '8' }}
            />
          </Wrap>
        </Box>
        </Box>
      </Box>
      <Flex
        w="100%"
        align="center"
        justifyContent="center"
        flexDirection="column"
        marginTop="5vh"
      >
        <Text fontSize="5xl" fontWeight="bold" alignContent="center">
          Mis proyectos
        </Text>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(5, 1fr)',
          }}
          gap={6}
          width="90%"
          justifyContent="center"
          justifyItems="center"
          margin="10vh"
        >
          <GridItem>
            <Card>
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  maxW="400px"
                />
                <Stack mt={6} spacing={3}>
                  <Heading size="md">Living room Sofa</Heading>
                  <Text fontWeight="bold">
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing={2}>
                  <Button fontWeight="bold">Deploy</Button>
                  <Button fontWeight="bold">Repositorio</Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem>
            <Card>
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  maxW="400px"
                />
                <Stack mt={6} spacing={3}>
                  <Heading size="md">Living room Sofa</Heading>
                  <Text fontWeight="bold">
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing={2}>
                  <Button fontWeight="bold">Deploy</Button>
                  <Button fontWeight="bold">Repositorio</Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem>
            <Card>
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  maxW="400px"
                />
                <Stack mt={6} spacing={3}>
                  <Heading size="md">Living room Sofa</Heading>
                  <Text fontWeight="bold">
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing={2}>
                  <Button fontWeight="bold">Deploy</Button>
                  <Button fontWeight="bold">Repositorio</Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
      </Flex>
    </Container>
  )
}

export default App
