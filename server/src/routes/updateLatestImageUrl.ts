import { RequestHandler } from 'express';
import { User } from 'src/database/models/user';

const updateLatestUrl: RequestHandler = (request, response) => {
  // TODO: Check needed ?.
  if (!response.locals.id) return response.status(401).send();

  User.findOne({ where: { id: response.locals.id } })
    .then((user) => {
      if (user !== null) {
        user.update({ latestImage: request.body.latestImage }).then((user) => {
          return response.status(200).send();
        });
      } else {
        return response.status(400).send();
      }
    })
    .catch((error) => {
      return response.status(412).send();
    });
};

export default updateLatestUrl;
