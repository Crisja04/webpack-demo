import _ from 'lodash';
import toml from './data/data.toml';
import yaml from './data/data.yaml';
import json from './data/data.json5';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
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