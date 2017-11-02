import {
  isDebugEnabled,
  injectDebugAttributes,
} from './index';

test('injectDebugAttributes returns correct attributes', () => {
  const actual = injectDebugAttributes('myKey', 1234)
  const expected = {
    'data-nflx-key': 1234,
    'data-nflx-key-label': 'myKey',
  };

  expect(actual).toMatchObject(expected);
});
