#!/usr/bin/env node

// const yargs = require("yargs");

// const { argv } = yargs(process.argv);

const inquirer = require("inquirer");

const printFiveMoves = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  const responseJson = await response.json();
  const moves = responseJson.moves.map(({ move }) => move.name);
  console.log(moves.slice(0, 5));
};

const prompt = inquirer.createPromptModule();
prompt([
  {
    type: "input",
    name: "pokemon",
    message: 'Enter the pokemon name for getting it"s five moves',
  },
]).then((data) => {
  printFiveMoves(data.pokemon);
});

// printFiveMoves(argv.pokemon);
