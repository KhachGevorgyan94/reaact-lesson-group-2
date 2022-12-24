import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  toDoList: [],
  userData: {
    fistName: '',
    lastName: '',
    address: {
      city: '',
      country: '',
      location: {
        lat: '',
        lng: ''
      },
    }
  }
}

const TodoSlice = createSlice({
  name: 'TodoSlice',
  initialState, // initialState = initialState
  reducers: {
    createToDo(state, action) {
      state.toDoList = [...state.toDoList, action.payload]
    },
    removeItem(state, action) {
      state.toDoList = state.toDoList.filter((item, i) => i !== action.payload)
      state.userData.address.location.lat = 234324234324
    }
  }

})
// Action creators are generated for each case reducer function
export const {createToDo,removeItem} = TodoSlice.actions
export default TodoSlice.reducer