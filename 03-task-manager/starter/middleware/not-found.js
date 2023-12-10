const notFound = (req, res) => res.status(404).send('Route doen not exist')

module.exports = notFound;