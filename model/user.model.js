import { UserModel } from './schemas/index.js';
import { userDto, userUpdateDto } from '../dto/user.dto.js';

class UserRepository {
  async getUserById(id) {
    const user = await UserModel.findById({ _id: id });
    return user;
  };
  async getUserByName(username) {
    const user = await UserModel.findOne({ username });
    return user;
  };

  async create(dto) {
    const userData = userDto(dto);
    const userModel = new UserModel(userData);

    userModel.setPassword(dto.password);

    const user = await userModel.save();
    return user;
  };

  async update(id, dto) {
    const {surName,
    firstName,
    middleName,
    password,
    image} = userUpdateDto(dto);   

    const user = await UserModel.findById({ _id: id });

    const userUpdated = await UserModel.findOneAndUpdate({_id: id},{
      surName: surName[0],
      firstName: firstName[0],
      middleName: middleName[0],
      password: '',
      image: image[0]
    });

    await user.setPassword(password[0]);

    return userUpdated;
  }

  async delete(id) {
    const userDelete = await UserModel.deleteOne({_id: id});

    return userDelete;
  }

  async getAll() {
    const users = await UserModel.find({});
    const newUsers = [];

    users.forEach(element => {
      const user = userDto(element);
      newUsers.push(user)
    });

    return newUsers;
  }

  async permissionChange(dto, id) {
    const result = await UserModel.findOneAndUpdate({_id: id}, {
      permission: dto.permission
    });

    return result;
  }
};



export const userRepository = new UserRepository();