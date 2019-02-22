import * as React from 'react';
import {shallow} from 'enzyme';
import Button from '../index';

describe('<Button />', () => {
  it('renders without an error', () => {
    const subject = shallow(<Button />);
    expect(subject.length).toEqual(1);
  })
})
