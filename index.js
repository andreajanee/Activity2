import generateStupidName from 'sillyname';
import {randomSuperhero} from 'superheroes';
import inquirer from 'inquirer';
import sillyName from 'sillyname';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([{
    message: 'What is your name?',
    name: "ughugh"
  }])
  .then((answers) => {
    var ss = generateStupidName();
    var sh = randomSuperhero();
    var qr_png = qr.image(answers.ughugh, {type: 'png'});
    var qr_png1 = qr.image(sh, {type: 'png'});
    var qr_png2 = qr.image(ss, {type: 'png'});

    const content = `${answers.ughugh} ${ss} ${sh}`;

    console.log("His her they them name is", answers.ughugh);
    console.log("Your villain name is", ss) ;
    console.log("Your silly name is", sh);

    qr_png.pipe(fs.createWriteStream("name.png"));
    qr_png1.pipe(fs.createWriteStream("superheroname.png"));
    qr_png2.pipe(fs.createWriteStream("sillyname.png"));

    fs.writeFile('myhero.txt', content, (err) => {
      if (err) {
          console.error('Error writing file:', err);
      } else {
          console.log('File has been written successfully');
      }
  });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
