import Renderer from '../../src/Renderer.js';

test('renders element into container', () => {
  document.body.innerHTML = '<div id="root"></div>';
  const root = document.getElementById('root');
  Renderer.render('<h1>Hello, World!</h1>', root);
  expect(root.innerHTML).toBe('<h1>Hello, World!</h1>');
});
