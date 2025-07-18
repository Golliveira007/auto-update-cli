import { execSync } from 'child_process';
import path from 'path';
import chalk from 'chalk';
import fs from 'fs';


export function appBuild(appRepoDir){
    try{

        console.log(chalk.blue('📦 Instalando dependências com yarn...'));

        execSync('yarn', {cwd: appRepoDir, stdio: 'inherit'});

        const androidPath = path.join(appRepoDir, 'android');

        if(fs.existsSync(androidPath)){

            console.log(chalk.green("Abrindo android studio (Pasta Android)..."));
            // Comando para abrir o android studio
            execSync(`open -a "Android Studio" "${androidPath}"`, { stdio: 'inherit' });

        } else{
            console.log(chalk.red("❌ Erro pasta android não encontrada"));
        };

        const iosPath = path.join(appRepoDir, 'ios');

        if(!fs.existsSync(iosPath)){

            console.log(chalk.red('❌ Pasta "ios" não encontrada no repositório do app.'));
            return;

        }else if(fs.existsSync(iosPath)){

            console.log(chalk.green('🔧 Executando pod install...'));
            execSync('pod install', {cwd: iosPath, stdio: 'inherit'});

            console.log(chalk.green('📂 Abrindo Xcode...'));
            execSync('xed .', {cwd: iosPath, stdio: 'inherit'});
        };

    }catch(error){
        console.log(chalk.red('Erro ao executar a instalação das dependências'));
        console.error(error.message || error);
    }
}