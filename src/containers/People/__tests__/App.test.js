import Root from '../../../Root';
import App from '../';

import Shelf from '../../Shelf';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('shows a shelf', () => {
  expect(wrapped.find(Shelf).length).toEqual(1);
});
