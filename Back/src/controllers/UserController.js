const ideas = [];

module.exports = {
  checkOptionalLinkIsEmpty(req, res, next) {
    const { linkMoreDetails } = req.body;

    if (linkMoreDetails === "") {
      req.optionalLink = "Null";
      return next();
    }
    req.optionalLink = linkMoreDetails;

    return next();
  },

  showAll(req, res) {
    return res.json(ideas);
  },

  showOnlyOneIdea(req, res) {
    const { id } = req.params;

    const index = ideas.findIndex((item) => {
      return item.id === id;
    });

    return res.json(ideas[index]);
  },

  createIdea(req, res) {
    const { id } = req.body;
    const { author } = req.body;
    const { title } = req.body;
    const { description } = req.body;
    const { linkImg } = req.body;
    const { optionalLink } = req;
    const { Category } = req.body;

    const idea = {
      id,
      author,
      title,
      description,
      linkImg,
      optionalLink,
      Category,
    };
    ideas.push(idea);
    return res.json(ideas);
  },

  deleteIdea(req, res) {
    const { id } = req.params;

    const index = ideas.findIndex((item) => {
      return item.id === id;
    });

    ideas.splice(index, 1);

    return res.json(ideas);
  },

  updateIdea(req, res) {
    const { id } = req.params;
    const { author } = req.body;
    const { title } = req.body;
    const { description } = req.body;
    const { linkImg } = req.body;
    const { optionalLink } = req;
    const { Category } = req.body;
    const newIdea = {
      id,
      author,
      title,
      description,
      linkImg,
      optionalLink,
      Category,
    };

    const index = ideas.findIndex((item) => {
      return item.id === id;
    });

    ideas[index] = newIdea;

    return res.json(ideas);
  },
};
