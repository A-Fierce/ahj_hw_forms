/**
 * @jest-environment jsdom
 */

import Widget from '../widget';
import Popover from '../popover';

test('whether class can actually show popup', () => {
  new Widget();
  new Popover();

  setTimeout(() => {
    const button = document.querySelector('.widget-button');
    const event = new Event('click');
    button.dispatchEvent(event);
    const hintContent = document.querySelector('.widget-hint-content');
    expect(hintContent.textContent).toBe("And here's some amazing content. It's very engaging. Right?");
  }, 1000);
});
