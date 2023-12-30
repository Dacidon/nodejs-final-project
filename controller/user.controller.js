import { userService } from "../services/index.js" 
class UserController {
    async profile(req, res){
        try {
            const { password, ...user } =  await userService.profile(req.user.id)

            res.json(user)
        } catch (error) {
            res.status(401).json({
                message: error.message
            })
        }
    }

    async update(req, res) {
        try {
            const user =  await userService.update(req.user.id, req)

            res.json(user)
        } catch (error) {
            res.status(401).json({
                message: error.message
            })
        }
    }

    async delete(req, res) {
        try {
            const confirm = await userService.delete(req.params.id);

            res.json(confirm);
        } catch (error) {
            res.status(401).json({
                message: error.message
            })
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await userService.getAll();

            res.json(users);
        } catch (error) {
            res.status(401).json({
                message: error.message
            })
        }
    }

    // async permissionChange(req, res) {
    //     console.log(req.body);


    // }
}

export const userController = new UserController()