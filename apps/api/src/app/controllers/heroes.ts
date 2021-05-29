import * as express from "express";
import {HeroRepository} from '../repositories/hero-repository';
const heroRepo = new HeroRepository();

export const heroes = (app: any, heroRepo) => {
  app.get('/api/heroes', (req, res)=>{
    const heroesList = heroRepo.getAllHeroes().then((list) => {
      res.json(list);
    });
  })
  app.post('/api/heroes/add', (req, res)=>{
    heroRepo.addHero(req.body).then((v)=>{
      if(v==true){
        res.sendStatus(200)
      }
    })
  })
}
