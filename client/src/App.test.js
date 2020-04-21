import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { response } from 'express';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("the  data", async() => {
  const thisData = await fetch(`http://localhost:5000/api/players`);
  expect(thisData).toBeTruthy();
   
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetch(`http://localhost:5000/api/players`);
  } catch (e) {
    expect(e).toMatch("error");
}
})