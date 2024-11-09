import { newE2EPage } from '@stencil/core/testing';

describe('apie-ugly-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<apie-ugly-form></apie-ugly-form>');

    const element = await page.find('apie-ugly-form');
    expect(element).toHaveClass('hydrated');
  });
});
