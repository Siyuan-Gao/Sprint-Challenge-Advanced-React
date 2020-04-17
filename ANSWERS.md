- [ ] Why would you use class component over function components (removing hooks from the question)?
A class component has state, lifecycle methods and React creates an instance of a class component every time React renders it. that will make your component more managable. 

- [ ] Name three lifecycle methods and their purposes.
  There are three phases of lifecycle methods: 
  1, mounting phase : we can receive props and place them on our component as state, then render is invoked and JSX are transform into DOM elements.  componentDidMount will get triggered.

   2, updateing phase : any new props received from a parent will trigger updates to the child. setState calls a render by default. componentDidUpdate will get triggered. 
    3,unmounting phase

- [ ] What is the purpose of a custom hook?
  a cumstom hook is a function that we can use to share or apply stateful logic to the components. 
    the purposes being usually for stateful logic mostly, it also can do other things. 

- [ ] Why is it important to test our apps?
  it's important to test your apps because you will discover the bugs faster, make us more confident in our code and reduce the risk of regressions. 