import { newSpecPage } from '@stencil/core/testing';
import { ApieUglyForm } from '../apie-ugly-form';

describe('apie-ugly-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApieUglyForm],
      html: `<apie-ugly-form></apie-ugly-form>`,
    });
    expect(page.root).toEqualHtml(`
      <apie-ugly-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </apie-ugly-form>
    `);
  });
});
