import { newE2EPage } from '@stencil/core/testing';

describe('apie-ugly-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<apie-ugly-test></apie-ugly-test>');

    const element = await page.find('apie-ugly-test');
    expect(element).toHaveClass('hydrated');
  });
});
