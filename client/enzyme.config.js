/* eslint-disable import/no-extraneous-dependencies */

/** Used in jest.config.js */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jQuery from 'jquery';

configure({ adapter: new Adapter() });

window.jQuery = jQuery;
window.matchMedia =
    window.matchMedia ||
    function () {
        return {
            matches: false,
            addListener: function () { },
            removeListener: function () { }
        };
    };

window.requestAnimationFrame =
    window.requestAnimationFrame ||
    function (callback) {
        setTimeout(callback, 0);
    };