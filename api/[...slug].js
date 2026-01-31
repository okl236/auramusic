const { app } = require('../server');

module.exports = (req, res) => {
  const slug = req.query.slug;

  if (Array.isArray(slug) && slug.length > 0) {
    req.url = `/api/${slug.join('/')}${req.url.includes('?') ? '?' + req.url.split('?')[1] : ''}`;
  } else {
    req.url = '/api';
  }

  return app(req, res);
};
