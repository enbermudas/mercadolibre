import { validationResult } from 'express-validator';
import http from './config/http';

export default {
  items: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).send({
        errors: errors.array()
      });
    }

    try {
      const { data } = await http.get('/sites/MLA/search', {
        params: { q: req.query.q }
      });

      let items = [];
      let categories = [];

      if (data.results.length !== 0) {
        items = data.results.map((item) => ({
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.installments.amount,
            decimals: 2
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          address: item.address.state_name
        }));
      }

      if (data.filters.length !== 0) {
        categories = data.filters
          .find((filter) => filter.id === 'category')
          .values[0].path_from_root.map((crumb) => crumb.name);
      }

      return res.status(200).send({ items, categories });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  },

  item: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).send({
        errors: errors.array()
      });
    }
    return res.status(200).send({});
  }
};
