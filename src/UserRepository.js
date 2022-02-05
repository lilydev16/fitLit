import userData from './data/users'

class UserRepository {
  constructor(data){
    this.data = data;
  }

  findUserById(id) {
    const user = this.data.find(user => user.id === id)
    return user
  }
}

export default UserRepository;
