module.exports = {
  shadow: {
    elevation: {
      // Used for creating standard CSS box-shadow definitions
      box: {
        '01': {
          value: '0px 12px 32px rgba(0, 0, 0, 0.1), 0px 8px 8px -8px rgba(0, 0, 0, 0.2)',
        },
        '02': {
          value: '0px 4px 8px rgba(0, 0, 0, 0.2), 0px 16px 24px -8px rgba(0, 0, 0, 0.1)',
        },
      },
      // Used for creating drop-shadow definitions for CSS filters
      drop: {
        '01': {
          value: ['0px 12px 32px rgba(0, 0, 0, 0.1)', '0px 8px 8px rgba(0, 0, 0, 0.2)'],
        },
        '02': {
          value: ['0px 4px 8px rgba(0, 0, 0, 0.2)', '0px 16px 24px rgba(0, 0, 0, 0.1)'],
        },
      },
    },
  },
};
