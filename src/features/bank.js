import DrumPad from "./drum-pad";
import Sound from "./sound";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import heater1 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
// import heater2 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
// import heater3 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
// import heater4 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
// import clap from "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
// import openhh from "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
// import kicknhat from "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
// import kick from "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
// import closedhh from "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"


/**
 * @type {Array<Sound>}
 */
const sounds = [
  new Sound(
    "heater-1",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "heater-1",
    "Q"
  ),
  new Sound(
    "heater-2",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    "heater-2",
    "W"
  ),
  new Sound(
    "heater-3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    "heater-3",
    "E"
  ),
  new Sound(
    "heater-4",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "heater-4",
    "A"
  ),
  new Sound(
    "clap",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "clap",
    "S"
  ),
  new Sound(
    "open-hh",
    "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    "clap",
    "D"
  ),
  new Sound(
    "kick-n-hat",
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "kick-n-hat",
    "Z"
  ),
  new Sound(
    "kick",
    "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "kick",
    "X"
  ),
  new Sound(
    "closed-hh",
    "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    "closed-hh",
    "C"
  )

]

export default function Bank() {

  return (
    <Container>
      <Row>
        <Col><DrumPad sound={sounds.at(0)} /></Col>
        <Col><DrumPad sound={sounds.at(1)} /></Col>
        <Col><DrumPad sound={sounds.at(2)} /></Col>
      </Row>
      <Row>
        <Col><DrumPad sound={sounds.at(3)} /></Col>
        <Col><DrumPad sound={sounds.at(4)} /></Col>
        <Col><DrumPad sound={sounds.at(5)} /></Col>
      </Row>
      <Row>
        <Col><DrumPad sound={sounds.at(6)} /></Col>
        <Col><DrumPad sound={sounds.at(7)} /></Col>
        <Col><DrumPad sound={sounds.at(8)} /></Col>
      </Row>
    </Container>
  )
}
