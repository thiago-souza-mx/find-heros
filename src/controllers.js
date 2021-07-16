const axios = require('axios').default;
const Base = 'https://akabab.github.io/superhero-api/api';

const state = {}

/*-------------------------------------
 * Controllers 
--------------------------------------*/

module.exports = {
  search: async (req,res)=>{

    if(!req.query.q || req.query.q.length < 3)

      res.status(400).send()

    else{

      if(!state.result)
        await getApi();

      let list = findAll( req.query.q );

      if(list.length){
        res.status(200).json(list);

      }else
        res.status(204).send()
        
    }
  },

  hero: async (req,res)=>{

    const {slug} = req.params;
    if( slug ){

      if(!state.result)
        await getApi();
      
      let item = findSlug( slug );

      if(item.length)
        res.status(200).json(item);
  
    }

    res.status(404).send()
  }

}

/*-------------------------------------
 * Função para o Request da API
--------------------------------------*/

const getApi = async ()=>{
  try {

    let resp = await axios.get(`${Base}/all.json`);

    state.result = resp.data;

    return;

  } catch (error) { return error; }
}

/*-------------------------------------
 * Busca Herói pelo Slug 
--------------------------------------*/

const findSlug = (slug)=>{
  let resp = [];
  state.result.forEach(item => {

    if(item.slug.toLowerCase() == slug){ 

      return resp.push(item);
    }
  });

  return resp;

}

/*-------------------------------------
 * Busca uma lista de Heróis
--------------------------------------*/

const findAll = (query)=>{

  let list = [];

  state.result.forEach(item => {

    let attr = [
      item.name,
      item.appearance.gender,
      item.appearance.race,
      item.appearance.eyeColor,
      item.appearance.hairColor,      
      item.biography.fullName,
      ...item.biography.aliases,
      item.biography.alterEgos,
      item.biographyplaceOfBirth,
      item.biographyfirstAppearance,
      item.biographypublisher,
      item.biographyalignment,
      item.work.occupation,
      item.work.base
    ];

    for(let i = 0; i < attr.length; i++) {

      if(typeof attr[i] == 'string' && attr[i].toLowerCase().indexOf(query)>-1){

        list.push(item);
        return;

      }  
    } 

  });

  return list;
}