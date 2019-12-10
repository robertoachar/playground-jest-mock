const winston = {
  format: {
    simple: jest.fn()
  },
  transports: {
    Console: jest.fn()
  },
  createLogger: jest.fn().mockImplementation(() => {
    return {
      info: jest.fn(),
      warn: jest.fn(),
      error: jest.fn()
    };
  })
};

export default winston;
