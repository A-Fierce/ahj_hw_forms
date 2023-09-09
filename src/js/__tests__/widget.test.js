/**
 * @jest-environment jsdom
 */

import Widget from '../widget';

test('whether class can actually create widget', () => {
  new Widget();
  const widgetWindow = document.querySelector('.widget-window');
  expect(widgetWindow).toBeTruthy();
});
