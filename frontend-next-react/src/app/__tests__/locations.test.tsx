import { fetchLocations } from '@services/locationService';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

describe('fetchLocations', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch locations successfully', async () => {
    await expect(fetchLocations()).resolves.not.toThrow();
  });

});