import { newSpecPage } from '@stencil/core/testing';
import { ApieUglyTest } from '../apie-ugly-test';

describe('apie-ugly-test', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApieUglyTest],
      html: `<apie-ugly-test></apie-ugly-test>`,
    });
    expect(page.root).toEqualHtml(`
      <apie-ugly-test>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </apie-ugly-test>
    `);
  });
});
