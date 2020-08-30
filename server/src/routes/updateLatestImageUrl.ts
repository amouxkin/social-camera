import { RequestHandler } from 'express';
import { User } from 'src/database/models/user';

const updateLatestUrl: RequestHandler = (request, response) => {
  // TODO: Check needed ?.
  if (response.locals.id) {
    User.findOne({ where: { id: response.locals.id } })
      .then(async (user) => {
        if (user !== null) {
          user.latestImage = request.body.latestImage;
          await user.save();
        }
      })
      .catch((error) => {
        response.status(412).send(error);
      });
  }

  response.status(401).send();
};

export default updateLatestUrl;
