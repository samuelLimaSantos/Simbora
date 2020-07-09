const ideas = [];
const db = require("../modelos/database/dataBase");

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
    db.all(`SELECT * FROM ideas`, (err, rows) => {
      if (err) {
        return console.log(err);
      }

      const dados = rows;

      return res.json(dados);
    });
  },

  showIdeaPerID(req, res) {
    const { id } = req.params;

    db.all(`SELECT * FROM ideas WHERE id = ${id}`, (err, row) => {
      if (err) {
        return console.log(err);
      }

      return res.json(row);
    });
  },

  showIdeaPerCategory(req, res) {
    const { category } = req.params;

    db.all(
      `SELECT * FROM ideas WHERE category LIKE '%${category}%' `,
      (err, rows) => {
        if (err) {
          return console.log(err);
        }

        return res.json(rows);
      }
    );
  },

  createIdea(req, res) {
    const { author } = req.body;
    const { title } = req.body;
    const { description } = req.body;
    const { linkImg } = req.body;
    const { optionalLink } = req;
    const { Category } = req.body;

    const idea = [author, title, description, linkImg, optionalLink, Category];

    const query = `
      INSERT INTO ideas (
        author,
        title,
        description,
        linkImg,
        linkMoreDetails,
        category
      ) VALUES (?,?,?,?,?,?);
    `;

    function afterInsertData(err) {
      if (err) {
        return console.log(err);
      }

      console.log("Cadastrado com sucesso");
      return res.json(this);
    }

    db.run(query, idea, afterInsertData);
  },

  deleteIdea(req, res) {
    const { id } = req.params;

    db.run(`DELETE FROM ideas WHERE id = ${Number(id)}`, (err) => {
      if (err) {
        return console.log(err);
      }

      return res.send("Ideia deletada com sucesso!");
    });
  },
};
