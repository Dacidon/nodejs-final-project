import { userDto } from '../dto/user.dto.js'
import { userRepository} from '../model/index.js'
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

class UserService {
    async profile(id) {
        const user = await userRepository.getUserById(id)

        if (!user) {
            throw new Error(`Пользователь не авторизован!`)
        }

        return userDto(user)
    }
    async update(id, data) {
        
        const newForm = formidable({});
        const upload = path.join('./', 'upload');

        if (!fs.existsSync(upload)) {
            fs.mkdirSync(upload)
        }

        newForm.uploadDir = path.join(process.cwd(), upload);

        newForm.parse(data, function (err, fields, files) {
            if (err) {
                return err;
            }

            const photoValid = validation(fields);

            if (!photoValid) {
                const fileName = path.join(upload, files.avatar[0].originalFilename);
        
                fs.rename(files.avatar[0].filepath, fileName, function (err) {
                    if (err) {
                        return err;
                    }
                });

                const newData = fields;

                newData.avatar = files.avatar[0]
            }

            const user = userRepository.update(id, fields);

            return user;
        });
        
    }

    async delete(id) {
        const confirmation = userRepository.delete(id);

        return confirmation;
    }
}

const validation = (fields) => {
    if (fields.avatar) {
      return true;
    }
    return false;
};

export const userService = new UserService()