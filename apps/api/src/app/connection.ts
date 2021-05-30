import * as mysql from 'mysql';

export const connection = mysql.createPool({
  host: 'eu-cdbr-west-01.cleardb.com',
  user: 'bbf5b736339750',
  password: '177cdb77',
  database: 'heroku_8690b9ccacdac8b',
});
