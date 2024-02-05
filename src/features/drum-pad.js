import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Sound from "./sound";
import useSound from "use-sound";

/**
 * @param {{sound: Sound}} props
 */
export default function DrumPad(props) {
  const soundURL = props.sound.src;
  const [playSound] = useSound(soundURL);
  return (
    <Button className="drum-pad" id={props.sound.id} onClick={playSound}>
      {props.sound.key}
    </Button>
  )
}
