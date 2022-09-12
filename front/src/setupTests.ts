import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

afterEach(() => {
  (console.error as any).mockClear();
});

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation((e) => {
    throw new Error(e);
  });
});
