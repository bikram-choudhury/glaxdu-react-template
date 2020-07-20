const fs = require('fs');
const path = require('path');
const [source, destination] = process.argv.slice(2);

copyFolderRecursiveSync(source, destination);

function copyFolderRecursiveSync(source, target) {
    // basname: return the folder name
    const targetFolder = path.join(target, path.basename(source));
    // check if target folder exists. If doesn't exist then create
    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder, { recursive: true });
    }

    // copy folder content
    if (fs.lstatSync(source).isDirectory()) {
        const files = fs.readdirSync(source);
        files.forEach(file => {
            const currentFilePath = path.join(source, file);

            if (fs.lstatSync(currentFilePath).isDirectory()) {
                copyFolderRecursiveSync(currentFilePath, targetFolder)
            } else {
                copyFileSync(currentFilePath, targetFolder);
            }
        });
        // remove the directory
        fs.rmdirSync(source, { recursive: true });
    } else {
        copyFileSync(source, targetFolder);
        fs.unlinkSync(source);
    }

}

function copyFileSync(sourceFile, targetFolder) {
    if (fs.existsSync(targetFolder) && fs.lstatSync(targetFolder).isDirectory()) {
        const newFilePath = path.join(targetFolder, path.basename(sourceFile));
        fs.writeFileSync(newFilePath, fs.readFileSync(sourceFile));
    }
}