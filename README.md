# Redux

_**Redux is a state management library that allows global state to be accessed from any React component, no matter where it exists in the component tree.**_


### Pseudo steps of how this app is created

<img width="626" alt="image" src="https://github.com/user-attachments/assets/eab2197e-603f-4fb8-8e4f-ebb05ee965a7" />

## **Understanding Redux Toolkit – Core Concepts**

## **📦 Three Core Concepts of Redux:**

- **Store:**
    - Store is essentially a state, it is a global state
    - Store you can put anything you need in it. Redux with redux toolkit help us to set store up easily and connect with our React app
    - Store will be made of multiple slices of State, each responsible for certain domain in the application
        - Counter slice - holds specific states related to the counter segment of the application
    - Your global store in Redux is going to be made of multiple slices and they all come togather to form 1 global state, which will be accessible in the entire application
    - The **store** holds your **global state**.
    - You can divide it into **slices** (e.g., counterSlice, userSlice).
    - Each slice represents a piece of state for a specific domain.
    
    ```jsx
    interface CounterState {
      value: number;
    }
    
    interface UserState {
      isSignedIn: boolean;
    }
    ```
- **Action**:
    - what to do with the state
    - Action in Redux have 2 properties
        - Type: name of the action, tells what Redux needs to do
        - Payload: Optional, any data you want to send to Redux in your action, so it can perform a job
  
        
    
    - **Actions** describe **what should happen** to the state.
    - Every action has a:
        - type: A **string** representing the action name.
        - payload: **Optional** data passed to modify the state.
        
        ```jsx
        //NOTE: THIS IS A PSEUDO CODE
        
        const increment = {
          type: 'increment',
        };
        
        const incrementByAmount = {
          type: 'incrementByAmount',
          payload: 10,
        };
        ```
        
- **Reducers:**
    - Reducers are responsible for taking an action, and then depending on the type of action, will actually go out and make the update in the Redux store.
    - They will use the Type property to know which action to do
    - Reducers will never directly make an update to the Redux store, it is immutable, so it will create a copy of the state, make changes to it, replace the original state completely with the newly updated state.
    - Must **not mutate** the original state (immutability).
    - Instead, return a **new state** with changes applied.
    - **Reducers** determine **how** the state should change based on the action’s type.
    - Must **not mutate** the original state (immutability).
    - Instead, return a **new state** with changes applied.
    
    ```jsx
    // pseudo-code example
    (state, action) => {
      switch(action.type) {
        case 'increment':
          return { ...state, value: state.value + 1 };
        case 'decrement':
          return { ...state, value: state.value - 1 };
        default:
          return state;
      }
    }
    ```


## Redux Devtools

- get it from chrome
- super super important when debugging
- it will automatically will connect to your Redux store, and tell you everything happening in your application

## Benefits of Using Redux

- **state.value += 1; when we do this, it seems like we are directly mutating the state. As we know state is immutable in React, can never be directly changed, needs to be copied, updated then saved. But this code, due to CreateSlice from Redux tool kit this line automatically creates a copy of the state and updates it and save the copy. This is beneficial to us as we do not have to do it manually, but at an expense of looking confusing.**
  - If using plain Redux, you’d need to do something like:

```
return { ...state, value: state.value + 1 };
```
- Once the Slice is created, it’s easier to create any number of actions, just need to define the reducer and export the action and use it through dispatch
- Redux Devtools is helpful to see what changes happened to the state, we can also jump to an action back in time, super super helpful when debugging
