import React from 'react';
import ReactDOM from 'react-dom'; 
import App from '../App';

import { render, prettyDOM, fireEvent } from '@testing-library/react';

it('renders without crashing', () => { 
  const div = document.createElement('div'); 
  ReactDOM.render(<App />, div); 
  ReactDOM.unmountComponentAtNode(div); 
});

test('toggle the isCheating boolean by clicking on the robot head icon', () => {
  // render the App component
  const { container, debug, getByTestId } = render(<App />);
  // console.log(returnVal);

  // console.log(prettyDOM(container));
  // debug();

  // find the robot head icon in the DOM
  const robotHeadIcon = getByTestId('robot-head-icon');

  // click on the robot head icon
  fireEvent.click(robotHeadIcon);
  
  // check to see if the class of "cheating" has been applied
  expect(robotHeadIcon).toHaveClass('cheating');
  
  // click on the robot head icon again
  fireEvent.click(robotHeadIcon);
  
  // check to see that the class "cheating" is not applied
  expect(robotHeadIcon).not.toHaveClass('cheating');
});
