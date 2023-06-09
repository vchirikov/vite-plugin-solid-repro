
import { describe, expect, it } from 'vitest';
import { render } from '@solidjs/testing-library';
import { createSignal, type Component } from 'solid-js';


export const themes = ['dark', 'light', 'custom'] as const;
export type Theme = typeof themes[number];
const [theme, setTheme] = createSignal<Theme>(true ? 'dark' : 'light');

const Root: Component<{ name: string; }> = (props) => {
  return (<button class={theme() === 'dark' ? 'btn-active btn' : 'btn-ghost btn'}>${props.name}</button>);
};


function rootFactory(name: string): Component {
  const component: Component = () => {
    return (
      <div>
        <label>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M11.334 14c.584 2.239 2.001 2.547 2.001 4.02 0 1.094-.896 1.98-2.001 1.98-1.104 0-2.015-.887-2.015-1.98 0-1.473 1.432-1.781 2.015-4.02zm12.666-2c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5.205-7.316l-2.641 2.316h2.791l1.085-.935c-.37-.498-.782-.96-1.235-1.381zm3.205 7.316c0-1.527-.354-2.969-.969-4.265l-4.486 3.902c-1.402 1.226-2.126.041-3.911 1.091-.237.141-.486.185-.71.158-.566-.07-1.018-.594-.941-1.216.024-.205.113-.419.267-.633 1.128-1.571.183-2.49 1.553-3.68l4.435-3.86c-1.527-.943-3.317-1.497-5.238-1.497-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10z" />
          </svg>
        </label>
        <div>
          <Root name={name} />
        </div>
      </div>
    );
  };
  return component;
}

describe('Render', () => {
  it('should work', () => {
    const { container, unmount } = render(() => <>{rootFactory('Foo')}</>);
    expect(container).toBeTruthy();
  });
});;