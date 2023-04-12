import View from './view.js';
import icons from 'url:../../img/icons/icon-sheet.svg';
import { TOAST_TTL, CLOSE_TOAST_DURATION } from '../configs/index.js';
import { sleep } from '../helper.js';

export default class Toast extends View {
  constructor (type, message) {
    const prevAsideToast = document.querySelector('.aside__toast');
    const parent = typeof prevAsideToast === 'undefined'
      ? document.body
      : prevAsideToast;

    super(parent, true, TOAST_TTL + CLOSE_TOAST_DURATION);

    this._type = type;
    this._message = message;

    document.querySelector('.span__toast-fechar')
      .addEventListener('click', () => {
        this._closeToast();
      });
    document.querySelector('.div__toast').classList.add('ativo');
    document.querySelector('.div__progresso-toast')
      .classList.add('ativo');

    sleep(TOAST_TTL).then(() => {
      this._closeToast();
    });
  }

  _closeToast () {
    document.querySelector('.div__toast').classList.remove('ativo');

    sleep(CLOSE_TOAST_DURATION).then(
      document.querySelector('.div__progresso-toast')
        .classList.remove('ativo'));
  }

  _generateMarkup () {
    let markup = `
    <div class="div__toast div__toast--${this._type}">
      <div class="div__toast-conteudo">
      <span class="span__toast-icon
        span__toast-icon--${this._type}">
      <svg>
        <use href="${icons}#${this._type}"></use>
      </svg>
      </span>
      <div class="div__message-toast">
        <span class="span__text-message-toast 
          span__text-message-toast--title">
          ${this._type}
        </span>
          <span class="span__texto-submensagem-toast 
            span__texto-submensagem-toast--${this._type}">
            ${this._message}
          </span>
      </div>
      </div>
      <span class="span__toast-fechar"></span>
      <div class="div__progresso-toast
        div__progresso-toast--${this._type}"></div>
    </div>
    `;

    if (typeof document
      .querySelector('.aside__toast') === 'undefined') {
      markup = '<aside class="aside__toast">' +
        markup + '</aside>';
    }

    return markup;
  }
}
