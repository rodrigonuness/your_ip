require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    var ip = add;
    console.log(ip);
const fs = require("fs");
fs.writeFile(`./ip.js`, `var ip = "${ip}";\n`,
        function (erro) {
            if (erro) {
                throw erro;
            }
            console.log("File saved successfully!!");
        });
    })
