import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Sound from "./sound";
import useSound from "use-sound";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDisplay } from "./store/displaySlice";

/**
 * @param {{sound: Sound}} props
 */
export default function DrumPad(props) {
  const soundURL = props.sound.src;
  const [playSound] = useSound(soundURL);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key.toUpperCase() == props.sound.key) {
        dispatchSoundAction();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }
  )
  return (
    <Button className="drum-pad w-100" id={props.sound.id} onClick={dispatchSoundAction}
      style={{ aspectRatio: 1 / 1 }}
    >
      {props.sound.key}
    </Button>
  )

  function dispatchSoundAction() {
    playSound();
    dispatch(setDisplay(props.sound.className));
  }
}
