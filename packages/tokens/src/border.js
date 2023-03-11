module.exports = {
  border: {
    radius: {
      NONE: {
        value: '0',
      },
      DEFAULT: {
        value: '16px',
      },
      sm: {
        value: '16px',
      },
      md: {
        value: '20px',
      },
      lg: {
        value: '32px',
      },
      xl: {
        value: '40px',
      },
      xxl: {
        value: '48px',
      },
      full: {
        value: '9999px',
      },
    },
    width: {
      NONE: {
        value: '0',
        attributes: {
          category: 'size',
        },
      },
      DEFAULT: {
        value: '{border.width.01.value}',
        attributes: {
          category: 'size',
        },
      },
      '01': {
        value: '{spacing.01.value}',
        attributes: {
          category: 'size',
        },
      },
      '02': {
        value: '{spacing.02.value}',
        attributes: {
          category: 'size',
        },
      },
      '03': {
        value: '{spacing.03.value}',
        attributes: {
          category: 'size',
        },
      },
      '04': {
        value: '{spacing.04.value}',
        attributes: {
          category: 'size',
        },
      },
    },
  },
};
