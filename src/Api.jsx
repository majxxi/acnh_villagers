import axios from "axios";

const BASE_URL = "https://acnhapi.com/v1a";

class AcnhApi {

  // static async request(endpoint, params = {}, method = 'get') {
  //   console.debug('API Call:', endpoint, params, method);

  //   const url = `${BASE_URL}/${endpoint}`

  //   try {
  //     return (await axios({ url, method, params })).data;
  //   } catch (err) {
  //     console.error('API Error:', err.response);
  //     let message = err.response.data.error.message;
  //     throw Array.isArray(message) ? message : [message];
  //   }
  // }

  static async getVillager(search) {

    const response = await axios.get(`https://acnhapi.com/v1a/villagers/`);
    let villagers = response.data;

    let result = {};

    for(let villager in villagers){
      if(villagers[villager].name){
        let vilName = villagers[villager].name["name-USen"];

        if(vilName.toLowerCase().includes(search)){

          let data = {
            "name" : villagers[villager].name["name-USen"],
            "personality" : villagers[villager].personality,
            "birthday" : villagers[villager]["birthday-string"],
            "color" : villagers[villager]["bubble-color"],
            "icon" : villagers[villager]["icon_uri"],
            "species" : villagers[villager]["species"],
            "image" : villagers[villager]["image_uri"]
          }

          list[vilName] = data;
        }
        // if(vilName.localeCompare(search, undefined, { sensitivity: "accent"}) === 0){
        //     return villagers[villager];
        // };
      };
    };

    return result;
  };

}

export default AcnhApi;