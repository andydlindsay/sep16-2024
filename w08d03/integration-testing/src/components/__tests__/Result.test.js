import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Result from '../Result';

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('it can show the results of an api call', () => {
  // render the Result component
  const {getByTestId, findByText} = render(<Result status="Waiting" />);

  // find the fetch results button by testid
  const highScoreButton = getByTestId('high-scores');

  // click on the button
  fireEvent.click(highScoreButton);

  // find one of our hardcoded values in the DOM
  return findByText('Alice', { exact: false });
})
