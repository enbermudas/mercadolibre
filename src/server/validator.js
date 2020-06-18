import { query } from 'express-validator';

export default {
  items: [query('q').not().isEmpty().withMessage('Query must be defined.')]
};
