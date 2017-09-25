import express from 'express';
import bodyParser from 'body-parser';
import User from './User';

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

const handleResult = (res, errorMessage, overideResultToSend) => (err, result) => {
  console.log(err);
  if (err) return res.status(500).send(errorMessage);

  return res.status(200).send(overideResultToSend || result);
};

router.post('/', (req, res) => {
  const { name, email, password } = req.body;

  const newUser = { name, email, password };
  const errorMessage = 'There was a problem adding the information to the database.';

  User.create(newUser, handleResult(res, errorMessage));
});

router.get('/', (req, res) => {
  const errorMessage = 'There was a problem finding users.';

  User.find({}, handleResult(res, errorMessage));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const errorMessage = `There was a problem finding a user with id: ${id}.`;

  User.findById(id, handleResult(res, errorMessage));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const errorMessage = `There was a problem deleting user with id: ${id}.`;

  const resultMessage = `User with id: ${id}, was deleted.`;

  User.findByIdAndRemove(id, handleResult(res, errorMessage, resultMessage));
});

router.patch('/:id', (req, res) => {
  const { params, body } = req;
  const { id } = params;
  const errorMessage = `There was a problem updating user with id: ${id}.`;

  User.findByIdAndUpdate(id, body, { new: true }, handleResult(res, errorMessage));
});

export default router;
