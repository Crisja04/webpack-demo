import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data/data.xml';
import Notes from './data/data.csv';
import toml from './data/data.toml';
import yaml from './data/data.yaml';
import json from './data/data.json5';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    // Data output
    console.log(Data);
    console.log(Notes);

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