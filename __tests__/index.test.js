import logger from '../src';

describe('Tests', () => {
  test('should output an INFO message', () => {
    logger.info('info');
    expect(logger.info).toHaveBeenCalledTimes(1);
    expect(logger.info).toHaveBeenCalledWith('info');
  });

  test('should output a WARN message', () => {
    logger.warn('warn');
    expect(logger.warn).toHaveBeenCalledTimes(1);
    expect(logger.warn).toHaveBeenCalledWith('warn');
  });

  test('should output an ERROR message', () => {
    logger.error('error');
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith('error');
  });
});
