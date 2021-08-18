const { readFileSync, writeFileSync} = require('fs')

// lire un fichier1
const contenu1 = readFileSync('./content/file1.txt', 'utf8')

// Ecrire dans le fichier 2
const contenu2 = 'contenue 2 a écrire dans le fichier 3333'
writeFileSync('./content/subContent/file.txt', contenu2 + '\n', {flag:"a"})


console.log(contenu1)
