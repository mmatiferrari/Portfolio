import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Box maxW="md" mx="auto" mt="8">
      <form action="https://formsubmit.co/matiasferrari96@gmail.com" method="POST">
        <FormControl id="name">
          <FormLabel>Nombre completo</FormLabel>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Escribe tu nombre aquí"
            required
          />
        </FormControl>

        <FormControl id="email" mt="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Escribe tu correo aquí"
            required
          />
        </FormControl>

        <FormControl id="message" mt="4">
          <FormLabel>Mensaje</FormLabel>
          <Textarea
            value={message}
            name="comments"
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Escribe tu mensaje aquí"
            required
          />
        </FormControl>

        <Button type="submit" colorScheme="blue" mt="4">
          Enviar
        </Button>
      </form>
    </Box>
  );
}

export default ContactForm;
