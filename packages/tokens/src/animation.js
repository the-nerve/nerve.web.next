module.exports = {
  transition: {
    // Easing style values should be valid names in the `postcss-easings` plugin
    // Ref: https://github.com/postcss/postcss-easings
    style: {
      default: {
        value: 'easeInOutSine',
      },
      expressive: {
        value: 'easeInOutBack',
      },
    },
    duration: {
      default: {
        value: 200,
      },
      medium: {
        value: 400,
      },
      long: {
        value: 500,
      },
    },
  },
};
