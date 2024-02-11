/**
 * @typedef Sound
 * @type {Object}
 * @property {String} id - HTML ID of the sound
 * @property {String} src - src attribute for <audio>
 * @property {String} displayName - Sound name displayed on screen when played
 * @property {String} key - Key pressed to activate sound
 */
export default class Sound {
  /**
    * @param {String} id - HTML ID of the sound
    * @param {String} src - src attribute for <audio>
    * @param {String} displayName - Sound name displayed on screen when played
    * @param {String} key - Key pressed to activate sound
    */
  constructor(id, src, displayName, key) {
    this.id = id;
    this.src = src;
    this.displayName = displayName;
    this.key = key;
  }
}
