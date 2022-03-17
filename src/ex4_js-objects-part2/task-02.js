function createObjectNoProto() {
  const objNoProto = Object.create(null);

  return objNoProto;
}

module.exports = createObjectNoProto;
