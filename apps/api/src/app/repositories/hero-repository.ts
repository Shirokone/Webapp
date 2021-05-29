import * as mysql from 'mysql';

export class HeroRepository {
  connection = this.getMySQLConnection();

  constructor() {
    this.connection.connect();

    setInterval(() => {
      this.connection.query('SELECT 1');
    }, 5000);
  }

  getMySQLConnection() {
    return mysql.createConnection({
      host: 'eu-cdbr-west-01.cleardb.com',
      user: 'bbf5b736339750',
      password: '177cdb77',
      database: 'heroku_8690b9ccacdac8b',
    });
  }

  getAllHeroes() {
    const heroesList = [];
    return new Promise((resolve, reject) => {
      this.connection.query('SELECT * FROM heroes', (err, rows, fields) => {
        if (err) {
          reject(err);
        } else {
          for (let i = 0; i < rows.length; i++) {
            const hero = {
              id: rows[i].id,
              name: rows[i].name,
            };

            heroesList.push(hero);
          }
          resolve(heroesList);
        }
      });
    });
  }

  addHero(data) {
    const sql = "INSERT INTO heroes (name) VALUES ('" + data.name + "')";
    return new Promise((resolve, reject) => {
      this.connection.query(sql, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }
}
