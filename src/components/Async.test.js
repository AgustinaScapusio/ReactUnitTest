import { render,screen } from '@testing-library/react';
import Async from './Async';

describe('Async test', () => {
    //not ideal to test this way and that's why we use mock server
    test('renders posts if request is successful', async () => {
        // Arrange
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post' }],
        });
        render(<Async />);
        //Act
        //... nothing
        // Assert
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});