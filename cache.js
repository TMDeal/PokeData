let fs = require('fs');
let async = require('async');
let limit = require('simple-rate-limiter');
let request = limit(require('request')).to(16).per(60000);

const cacheDir = './src/assets';
const limit = 10000;

if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir);
}

let requestsCompleted = 0;
let totalRequests = 0;

const results = {
  move: {},
  ability: {},
  pokemon: {},
  nature: {},
  item: {},
  type: {}
};

const failed = [];

const data = {
  'move': ['damage_class', 'type'],
  'ability': ['effect_entries', 'flavor_text_entries'],
  'pokemon': ['sprites'],
  'nature': ['decreased_stat', 'increased_stat', 'hates_flavor', 'likes_flavor'],
  'item': ['flavor_text_entries', 'sprites'],
  'type': ['damage_relations'],
};

const requests = [];

const endpoints = {};

function createInitialRequest(name, callback) {
  return request(
    { url: `http://www.pokeapi.co/api/v2/${name}?limit=${limit}`, json: true },
    (err, res, body) => {
      if (err) {
        return callback(err);
      }
      results[name].count = body.count;
      totalRequests += body.count;
      endpoints[name] = body.results;
      console.log(`Initial request for endpoint ${name} completed!`);
      return callback();
    });
}

function createRequests(name, data) {
  let reqs = [];

  if (!data['id']) {
    data.push('id');
  }

  for (let i = 0; i < results[name].count; i++) {
    let req = (count, callback) =>{
      const max = 5;
      let timeout = 5000;
      return request(
        { url: endpoints[name][i].url, json: true },
        (err, res, body) => {
          if(err || res.statusCode !== 200) {
            count++;
            if(count <= max) {
              console.log(`Failed to get resource ${name} ${endpoints[name][i].name}! retries made: ${count}`);
              return setTimeout(() => {
                return req(count, callback);
              }, timeout);
            }

            console.log(`Failed to get resource ${name} {endpoints[name][i].name}! No more retries`);

            let message = "";
            if (err) {
              message = `${name} {endpoints[name][i].name}\nError: ${err.message}`;
            } else {
              message = `${name} {endpoints[name][i].name}\nError: HTTP ${res.statusCode}`;
            }

            failed.push(message);
            return callback();
          }

          results[name][body.name] = data.reduce((result, item) =>{
            result[item] = body[item];
            return result;
          }, {});

          requestsCompleted++;
          console.log(`Request ${requestsCompleted}/${totalRequests} for Data completed: ${name} ${endpoints[name][i].name}`);

          return callback();
        });
    };

    reqs.push(async.apply(req, 0));
  }

  return reqs;
}

function makeInitialRequests(callback) {
  let requests = [
    async.apply(createInitialRequest, 'move'),
    async.apply(createInitialRequest, 'ability'),
    async.apply(createInitialRequest, 'pokemon'),
    async.apply(createInitialRequest, 'nature'),
    async.apply(createInitialRequest, 'item'),
    async.apply(createInitialRequest, 'type'),
  ];
  async.parallel(requests, function(err) {
    if(err) {
      return callback(err);
    }
    return callback();
  });
};

function makeRequests(callback) {
  let requests = []
    .concat(createRequests('move', data['move']))
    .concat(createRequests('ability', data['ability']))
    .concat(createRequests('pokemon', data['pokemon']))
    .concat(createRequests('nature', data['nature']))
    .concat(createRequests('item', data['item']))
    .concat(createRequests('type', data['type']));

  console.log("\nRequesting data from all requested endpoints");
  console.log(`Number of requests: ${totalRequests}\n`);

  async.parallel(requests, function(err) {
    if(err) {
      return callback(err);
    }
    return callback();
  });

};

function makeFiles(callback) {
  const requests = [];

  for(let key in results) {
    requests.push(async.apply(fs.writeFile, `${cacheDir}/${key}.json`, JSON.stringify(results[key], null, 2)));
  }

  async.parallel(requests, function(err) {
    if(err) {
      return callback(err);
    }
    console.log("Wrote to files successfully!\n");
    return callback();
  });
};

requests.push(async.apply(makeInitialRequests));
requests.push(async.apply(makeRequests));
requests.push(async.apply(makeFiles));

async.series(requests, function(err) {
  if (err) {
    return console.log(err.message);
  }
  console.log("DONE");

  if (failed.length !== 0) {
    console.log("\nFailed to retrieve the following resources!");
    for (let failure of failed) {
      console.log(failure);
    }
  }
});
