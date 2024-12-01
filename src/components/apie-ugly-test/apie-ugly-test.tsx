import { Component, Host, h } from '@stencil/core';
import { UglyFormRender } from '../../utils/UglyFormRender';

@Component({
  tag: 'apie-ugly-test',
  styleUrl: 'apie-ugly-test.css',
  shadow: true,
})
export class ApieUglyTest {
  private renderInfo = new UglyFormRender();
  render() {
    return (
      <Host>
        <apie-test-input renderInfo={this.renderInfo}></apie-test-input>
      </Host>
    );
  }
}
