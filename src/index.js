import fs from "fs";
import { AbrigoAnimais } from "./abrigo-animais.js";

const input = fs.readFileSync('input.txt', 'utf-8').split('\n')

const abrigo = new AbrigoAnimais();
abrigo.encontraPessoas(input[0], input[1], input[2]);
