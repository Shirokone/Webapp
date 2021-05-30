import { HeroRepository } from '../repositories/hero-repository';

export const views = (app: any) => {
  const heroRepository = new HeroRepository();

  app.get('/pug/index', (req, res) => {
    heroRepository.getAllHeroes().then((list) => {
      res.render('index', { heroesList: list });
    });
  });



  app.get('/pug/heroes/:id', (req, res) => {
    heroRepository.getHero(req.params.id).then((hero)=>{
      res.render('edit_hero', {hero: hero});
    })
  });

  app.post('/pug/heroes', (req, res) => {
    heroRepository.addHero(req.body).then((v) => {
      if (v == true) {
        res.redirect('/pug/index');
      }
    });
  });

  app.post('/pug/heroes/:id', (req, res) => {
    heroRepository.editHero(req.params.id, req.body).then((v) => {
      if (v == true) {
        res.redirect('/pug/index');
      }
    });
  });

  app.get('/pug/hero/:id/delete', (req, res) => {
    heroRepository.deleteHero(req.params.id).then((v) => {
      if (v == true) {
        res.redirect('/pug/index');
      }
    });
  });
};
