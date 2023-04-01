exports.get = (n) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(require("./" + n));
    } catch (err) {
      reject(err);
    }
  });
};
