import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary.jsx';

function TestComponent() {
    throw new Error('I crashed!');
}

describe('ErrorBoundary component', () => {
    it('should render', () => {
        const component = shallow(
            <ErrorBoundary>
                <p>component</p>
            </ErrorBoundary>
        );
        const element = component.find('p');
        expect(element).toBeTruthy();
        expect(element.text()).toEqual('component');
        expect(component.state('hasError')).toBeFalsy();
    });
    xit('should render error', () => {
        const component = shallow(
            <ErrorBoundary>
                
            </ErrorBoundary>
        );
        const element = component.find('ErrorComponent');
        console.log(component.debug());
        
        expect(element).toBeTruthy();
        // expect(component.state('hasError')).toBeTruthy();
    });
})