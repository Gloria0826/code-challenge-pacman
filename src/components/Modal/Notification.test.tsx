import React from 'react';
import { cleanup, render } from 'react-testing-library';
import { Notification } from './Notification';

afterEach(cleanup);

const msg = {
  title: 'title',
  subtitle: 'subtitle',
  kind: 'info',
};

describe('Notification rendered correctly', () => {
  it('rendered notification', () => {
    const { getByText } = render(<Notification msg={msg} />);
    getByText('title');
    getByText('subtitle');
  });
});
