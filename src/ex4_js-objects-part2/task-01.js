function getProtoProp(prop, objWithProto) {
  const proto = Object.getPrototypeOf(objWithProto);
  return proto[prop];
}

module.exports = getProtoProp;
