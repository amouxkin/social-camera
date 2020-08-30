import { RequestHandler } from 'express';
import { User } from 'src/database/models/user';
import { createHashedPassword, sendToken } from 'src/utility/authentication';

const login: RequestHandler = (request, response) => {
  const { email, password } = request.body;

  User.findOne({
    where: {
      email,
      hashedPassword: createHashedPassword(password)
    }
  })
    .then((user) => {
      if (user === null) throw new Error('User not found');
      sendToken(user, response);
    })
    .catch((error) => response.status(409).send(error));
  response.status(200).send('Login Route is working.');
};

export default login;
