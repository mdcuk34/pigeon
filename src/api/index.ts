import {Configuration, DefaultApiFp} from './generated';

const configuration = new Configuration({
  accessToken: 'sk_test_4eC39HqLyjWDarjtT1zdp7dc',
});

export const api = DefaultApiFp(configuration);
