import DrumPad from "./drum-pad";
import Sound from "./sound";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/**
 * @type {Array<Sound>}
 */
const sounds = [
  new Sound(
    "heater-1",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "Heater #1",
    "Q"
  ),
  new Sound(
    "heater-2",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    "Heater #2",
    "W"
  ),
  new Sound(
    "heater-3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    "Heater #3",
    "E"
  ),
  new Sound(
    "heater-4",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "Heater #4",
    "A"
  ),
  new Sound(
    "clap",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "Clap",
    "S"
  ),
  new Sound(
    "open-hh",
    "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    "Open Hi-hat",
    "D"
  ),
  new Sound(
    "kick-n-hat",
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "Kick & hi-hat",
    "Z"
  ),
  new Sound(
    "kick",
    "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "Kick",
    "X"
  ),
  new Sound(
    "closed-hh",
    "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    "Closed hi-hat",
    "C"
  )

]

export default function Bank() {

  return (
    <Container id='bank'>
      <Row className="g-3">
        {sounds.map(
          sound => (<Col xs={4}><DrumPad sound={sound} key={sound.id} /></Col>)
        )}
      </Row>
    </Container>
  )
}
