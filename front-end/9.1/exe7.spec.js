const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Testando uppercase', (done) => {
  uppercase('black um', (callback) => {
    try{
      expect(callback).toBe('BLACK UM');
      done()
    } catch(error) {
      done(error);
    }
  })
}) 