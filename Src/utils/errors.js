const errors = (val, mas) => {
  return [
    {
      value: val,
      message: mas,
    },
  ];
};

module.exports = {
  errors,
};
