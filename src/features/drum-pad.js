import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Sound from "./sound";
import useSound from "use-sound";
import { useEffect } from "react";

/**
 * @param {{sound: Sound}} props
 */
export default function DrumPad(props) {
  const soundURL = props.sound.src;
  const [playSound] = useSound(soundURL);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key.toUpperCase() == props.sound.key) playSound();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }
  )
  return (
    <Button className="drum-pad" id={props.sound.id} onClick={playSound}>
      {props.sound.key}
    </Button>
  )
}
