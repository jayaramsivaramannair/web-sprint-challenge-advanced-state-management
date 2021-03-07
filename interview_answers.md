# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
`Context API was created to avoid "Prop Drilling" in React. Prop Drilling occurs when a specific component (say a grandchild) needs access to a piece of state. Before Context API, the component gained access to that piece of state via props when the said prop was passed down through each intermediate component( such as parent, children) in order to finally pass it down to the grandchild component. It is worth nothing that alternate solutions to Context API exist such as Redux in conjunction with React-Redux libraries.`



2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
`Action in Redux is an object which tells the reducer how to change or update the state. Action object must contain a type property. It may or may contain the payload property`

`A reducer is a function which actually returns some state data after changing or updating it based on the type of action`

`Store is an object which holds the application level state.`

`Store is known as the single source of truth because the entire application state is represented and managed by a single object.`



3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
`Redux-Thunk is used when asynchronous code is required in our application such as fetching data from an external API. Usually action creators would return an action object with a type and payload property. However, Redux Thunk is a middleware which is used to call the action creators which in-turn return a function instead of an action object. The function returned by the action-creators accept a dispatch argument which is then used to dispatch regular synchronous actions once the asynchronous part (such as fetching data from an API) is completed.`

`As mentioned above, redux-thunk makes the action-creators return a function instead of an action object`

4. What is your favorite state management system you've learned and this sprint? Please explain why!

`Context API and Redux are the two prevailing solutions for state management in React and they help us successfully tackle the problem of prop drilling.`

`I do not have a favorite state management system. Currently, my mental model for picking a state management system is size of the project and opinion of the team members. Thus, if its a small project, I might fall back on Context to manage the state for me whereas if its an industrial-grade larger project, then I will use Redux. It is worth stating that context is much simpler to use as it does not involve a huge initial set up but I also enjoy the philosophy behind Redux. Currently, I will continue to use both Context and Redux in my projects and develop my preference for them over a period of time.`