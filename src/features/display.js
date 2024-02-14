import Container from "react-bootstrap/Container"
import { useSelector } from "react-redux"

export default function Display() {
  const soundLastUsed = useSelector((state) => state.display.value);
  return (
    <Container id='display' className="text-center">
      {soundLastUsed}
    </Container>
  )
}
