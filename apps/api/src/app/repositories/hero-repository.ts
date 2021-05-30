import { connection } from '../connection';
export class HeroRepository {
  getAllHeroes() {
    const heroesList = [];
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM heroes', (err, rows, fields) => {
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

  getHero(id) {
    return new Promise((resolve, reject) => {
      if (!isNaN(id)) {
        connection.query(
          'SELECT * FROM heroes WHERE id=' + id,
          (err, [hero], fields) => {
            if (err) {
              reject(err);
            } else {
              resolve(hero);
            }
          }
        );
      } else {
        reject({err: "Id is NaN"});
      }
    });
  }

  addHero(data) {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO heroes (name) VALUES ('" + data.name + "')", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }

  editHero(id, data){
    return new Promise((resolve, reject) => {
      connection.query("UPDATE heroes SET name = '" + data.name + "' WHERE id="+id, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      })
    })
  }
}
