const crypto = require("crypto");
// crypto.pbkdf2; //password based key derivation function 2, for hashing password

const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash : ", Date.now() - start);

const MAX_CALLS = 5;
process.env.UV_THREADPOOL_SIZE = 5;
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash ${i + 1} : `, Date.now() - start);
  });
}
