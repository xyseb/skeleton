const world = 'world';

function hello(who: string = world): void {
  const h1:HTMLElement = document.createElement('H1');
  h1.innerHTML = `Hello ${who}!`;
  document.querySelector('body')?.appendChild(h1);
}

hello();