import { RequestHandler } from 'express';
import { User } from 'src/database/models/user';
import { createHashedPassword, sendToken } from 'src/utility/authentication';

const signup: RequestHandler = (request, response) => {
  const { name, email, password } = request.body;

  const missing = [
    !name && 'name',
    !email && 'email',
    !password && 'password'
  ].filter((value) => value !== false);

  if (missing.length > 0) {
    return response
      .status(422)
      .send({ error: `Missing fields: ${missing.join(', ')}` });
  }

  User.create({
    name,
    email,
    hashedPassword: password
  })
    .then((user) => sendToken(user, response))
    .catch((error) => response.status(409).send(error));
};

export default signup;
