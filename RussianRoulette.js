import fs from 'fs';
import path from 'path';

const pathTumbal = path.join('YOUR-PATH-DIRECTORY'); // Don't use System Folder or your valuable data!
const file = fs.readdirSync(pathTumbal);

if (file.length === 0) {
  console.log('Gk ada isinya bang');
  process.exit;
} else {
  const Roulette = () => {
    console.log('Sedang Menggacha...');

    let count = 0;
    const counting = setInterval(() => {
      const spin = Math.floor(Math.random() * 3) + 1;
      process.stdout.write(`\rSpin Drum : ${spin}`);

      count++;

      if (count === 10) {
        clearInterval(counting);

        const drumRevolver = Math.floor(Math.random() * 3);
        const lost = 0;

        if (drumRevolver === lost) {
          const tumbal = file[Math.floor(Math.random() * file.length)];
          const pathFile = path.join(pathTumbal, tumbal);

          const type = fs.statSync(pathFile);

          if (type.isDirectory()) {
            fs.rmSync(pathFile, { recursive: true, force: true });
            console.log(`\nDorrrr ${tumbal}`);
          } else {
            fs.unlinkSync(pathFile);
            console.log(`\nDorrrr ${tumbal}`);
          }
        } else {
          console.log('\nAyo lagi!');
        }
      }
    }, 1000);
  };

  Roulette();
  console.log('Selamat bermain Russian Roullete, Semoga beruntung');
}
