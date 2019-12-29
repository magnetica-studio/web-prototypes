/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
import {
  LitElement, html, customElement, property, css
} from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
@customElement('preview-box')
export class PreviewBox extends LitElement {

  /**
   * Create an observed property. Triggers update on change.
   */
  @property()
  src: string
  title: string

  styles: any

  static get styles() {
    return css`
      :host {
        display: block;
        position: relative;



        /* background: grey; */
        width: 320px;
        height: 240px;
        /* height: 180px; */

        transform: scale(1.0);
        transition: all .6s ease-in-out;
        opacity: 0.5;
      }

      :host :hover {
        transform: scale(1.2);
        transition: all .6s ease-in-out;
        opacity: 1.0;
      }


      ::slotted(*) {
        background: blue;
      }

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* opacity: 0.7; */

        border: none;
      }

      #details {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* width: 100%;
        height: 100%; */
      }

      a {
        display: block;
        height: 100%;
      }
    `
  }

  render(){
    return html`
      <a href=${this.src} target="_blank">
        ${this.frame}
        ${this.details}
      </a>
    `;
  }
  
  get frame() {
    return html`
      <iframe src=${this.src}></iframe>
    `
  }

  get details() {
    return html`
      <div id="details">
        <span>${this.title}</span>
        <slot></slot>
      </div>
    `
  }
}
