import _ from 'lodash';
import toml from './data/data.toml';
import yaml from './data/data.yaml';
import json from './data/data.json5';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // Json files data output
    console.log(toml.title);
    console.log(toml.owner.name);

    console.log(yaml.title);
    console.log(yaml.owner.name);

    console.log(json.title);
    console.log(json.owner.name);

    return element;
}
  document.body.appendChild(component());