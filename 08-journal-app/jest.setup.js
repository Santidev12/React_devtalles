/* eslint-disable no-undef */
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import 'setimmediate';

require('dotenv').config({
    path: '.env.test'
});

jest.mock('./src/helpers', () => ({
    getEnvironments: () => ({ ...process.env })
}));
