function getId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let reducer = function(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return Object.assign({}, state, {
        todos: [{
          text: action.text,
          completed: false,
          id: getId(state)
        }, ...state.todos ]
      })
    case "COMPLETE_TODO":
      return Object.assign({}, state,{
        todos: state.todos.map((todo) => {
          return todo.id === action.id ?
          Object.assign({}, todo, {completed: !todo.completed}) : todo
        })
      })
    case "DELETE_TODO":
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) =>{
          return todo.id !== action.id
        })
      })
    case "CREATE_USER_ID":
      return Object.assign({}, state, {
        users: state.users.map((user) => {
          return user.id == action.id ?
          Object.assign({}, user, { id: parseInt(Math.random()*100 )}) : user
        })
      })
    default:
      return state;
  }
}

export default reducer
