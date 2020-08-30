import { RequestHandler } from 'express';
import { User } from 'src/database/models/user';
import {
  createHashedPassword,
  sendToken,
  checkHashedPassword
} from 'src/utility/authentication';

const login: RequestHandler = (request, response) => {
  const { email, password } = request.body;

  User.findOne({
    where: {
      email
    }
  })
    .then((user) => {
      if (user === null) throw new Error('User not found');

      if (checkHashedPassword(password, user.hashedPassword))
        sendToken(user, response);
      else response.status(401).send();
    })
    .catch((error) => response.status(409).send(error));
};

export default login;
