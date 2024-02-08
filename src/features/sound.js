/**
 * @typedef Sound
 * @type {Object}
 * @property {String} id
 * @property {String} src 
 * @property {String} className - HTML class name of the sound
 * @property {String} key - Key pressed to activate sound
 */
export default class Sound {
  /**
    * @param {String} id - HTML ID of the sound
    * @param {String} src - src attribute for <audio>
    * @param {String} className - HTML class name of the sound
    * @param {String} key - Key pressed to activate sound
    */
  constructor(id, src, className, key) {
    this.id = id;
    this.src = src;
    this.className = className;
    this.key = key;
  }
}
