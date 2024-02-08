import Container from "react-bootstrap/Container"
import { setDisplay } from "./store/displaySlice.js"
import { useSelector } from "react-redux"

export default function Display() {
  const soundLastUsed = useSelector((state) => state.display.value);
  return (
    <Container id='display'>
      {soundLastUsed}
    </Container>
  )
}
