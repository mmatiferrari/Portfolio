import { Button, useColorMode } from "@chakra-ui/react"
import { FiSun, FiMoon } from "react-icons/fi"

const ToggleColorMode = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    return(
        <Button onClick={()=> toggleColorMode()} pos="absolute" top="0" right="0" m="1rem">{colorMode === "dark" ? <FiSun/> : <FiMoon/>}</Button>
    )
}

export default ToggleColorMode