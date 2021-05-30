import { HeroRepository } from '../repositories/hero-repository';

export const heroes = (app: any) => {
  const heroRepository = new HeroRepository();

  app.get('/api/heroes', (req, res) => {
    heroRepository.getAllHeroes().then((list) => {
      res.json(list);
    });
  });

  app.get('/api/hero/:id', (req, res) => {
    heroRepository.getHero(req.params.id).catch(error=>{
      res.status(400);
    }).then((hero)=>{
      res.json(hero);
    });
  });

  app.post('/api/heroes/add', (req, res) => {
    heroRepository.addHero(req.body).then((v) => {
      if (v == true) {
        res.sendStatus(200);
      }
    });
  });

  app.post('/api/hero/:id/edit', (req, res) => {
    heroRepository.editHero(req.params.id, req.body).then((v) => {
      if (v == true) {
        res.sendStatus(200);
      }
    });
  });
};
