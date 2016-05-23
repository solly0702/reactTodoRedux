let actions = {
  createTodo: function(text) {
    return {
      type: "CREATE_TODO",
      text: text
    }
  },
  completeTodo: function(id) {
    return {
      type: "COMPLETE_TODO",
      id: id
    }
  },
  deleteTodo: function(id) {
    return {
      type: "DELETE_TODO",
      id: id
    }
  },
  createNewUserId: function(id) {
    return {
      type: "CREATE_USER_ID",
      id: id
    }
  },
  createNewUserIdIfOdd: function() {
    return (dispatch, getState) => {
      const { users } = getState()
      users.map((user) => {
        if (user.id % 2 == 0) {
          return
        }
        dispatch(actions.createNewUserId(user.id))
      })
    }
  },
  createNewUserIdAsync: function() {
    return (dispatch, getState) => {
      // $.get("url", {
      //   success: (res) => {
      //     dispatch(actions.createNuewUserId(res.data)
      //   },
      //   error: function() {
      //     console.log("error");
      //   }
      // })
      const { users } = getState()
      setTimeout(() => {
        dispatch(actions.createNewUserId(users[0].id))
      }, 2500)
    }
  }
}

export default actions
