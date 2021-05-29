import * as express from 'express';


export const views = (app: any, heroRepo) => {
  app.get('/pug/index', (req, res) => {
    const heroesList = heroRepo.getAllHeroes().then((list) => {
      res.render('index', { heroesList: list });
    });
  });

  app.post('/pug/heroes/add', (req, res)=>{
    heroRepo.addHero(req.body).then((v)=>{
      if(v==true){

        res.redirect('/pug/index');
      }
    })
  })
};
