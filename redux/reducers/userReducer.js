let userReducer = function(users=[], action) {
  switch (action.type) {
    case "CREATE_USER_ID":
      return users.map((user) => {
        return user.id == action.id ?
        Object.assign({}, user, { id: parseInt(Math.random()*100 )}) : user
      })
    default:
      return users;
  }
}

export default userReducer
