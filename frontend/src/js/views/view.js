import { sleep } from '../helper.js';
const ABSTRACT_ERROR_MSG = 'Base class must not be instantiated.';
const MANDATORY_METHOD = 'Concrete class must implement method.';

export default class View {
  constructor (parent = document.body, pop = false, timeToLive = 0) {
    if (this.constructor === View) {
      throw new Error(ABSTRACT_ERROR_MSG);
    }
    if (typeof this._generateMarkup === 'undefined') {
      throw new Error(MANDATORY_METHOD);
    }
    this._parentElement = parent;
    if (pop) {
      this.append();
      sleep(timeToLive).then(this._destroy());
    }
  }

  /**
   * Render object to the DOM
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Andrey Schoier
   */
  render (render = true) {
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  append () {
    const markup = this._generateMarkup();

    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  update (rangeStart = undefined) {
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange();
    if (rangeStart !== undefined) {
      newDOM.setStartAfter(rangeStart, 0);
    }
    newDOM.createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // Updates changed TEXT
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      // Updates changed ATTRIBUES
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  _clear () {
    this._parentElement.innerHTML = '';
  }

  _destroy () {
    this._parentElement.removeChild(this.markup);
    delete this;
  }

  renderSpinner () {
    const markup = `
      <div class="ppg-ufrgs-wp-component__loader" id="ppg-ufrgs-wp-component__loader">
          <svg class="ppg-ufrgs-wp-component__loader__icon" version="1.1" id="L6" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100"
            enable-background="new 0 0 100 100" xml:space="preserve">
            <use href="src/icons/icon-sheet.svg#chama" class="ppg-ufrgs-wp-component__loader__chama" />
            <rect fill="none" stroke="#fff" stroke-width="4" x="25" y="25" width="50" height="50">
              <animateTransform attributeName="transform" dur="0.5s" from="0 50 50" to="180 50 50" type="rotate"
                id="strokeBox" attributeType="XML" begin="rectBox.end"></animateTransform>
            </rect>
            <rect x="27" y="27" fill="#fff" width="46" height="50">
              <animate attributeName="height" dur="1.3s" attributeType="XML" from="50" to="0" id="rectBox" fill="freeze"
                begin="0s;strokeBox.end"></animate>
            </rect>
          </svg>
        </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
