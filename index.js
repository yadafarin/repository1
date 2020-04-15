var AdmZip = require('adm-zip'), zip = new AdmZip("./zip.zip");
zip.extractAllTo("./", true);
