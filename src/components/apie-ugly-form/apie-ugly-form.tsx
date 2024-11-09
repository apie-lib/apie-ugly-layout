import { Component, Element, Prop, h } from '@stencil/core';
import { UglyFormRender } from '../../utils/UglyFormRender';
import type{ NestedRecord, Primitive, SubmitField } from 'apie-form-elements/dist/types/components';
import { clone } from 'apie-form-elements';

@Component({
  tag: 'apie-ugly-form',
  styleUrl: 'apie-ugly-form.css',
  shadow: false,
})
export class ApieUglyForm {
  @Element() el: HTMLElement;

  @Prop({reflect: true, mutable: true}) value: NestedRecord<SubmitField> = {};
  @Prop({reflect: true, mutable: true}) initialValue?: NestedRecord<SubmitField>;
  @Prop({reflect: true, mutable: true}) internalState: NestedRecord<Primitive> = {};
  @Prop({reflect: true, mutable: true}) validationErrors: NestedRecord<string> = {};
  @Prop({reflect: true}) polymorphicFormDefinition?: Record<string, string> = undefined;

  render() {
    const attributes = Array.from(this.el.attributes).reduce((acc, attr) => {
      acc[attr.name] = attr.value;
      return acc;
    }, {});
    const renderInfo = new UglyFormRender();

    return <div>
        <apie-form
          value={this.value}
          initialValue={this.initialValue ?? clone(this.value)}
          internalState={this.internalState}
          validationErrors={this.validationErrors}
          renderInfo={renderInfo} 
          polymorphicFormDefinition={this.polymorphicFormDefinition}
          {...attributes}><slot></slot></apie-form>
      </div>;
  }
}
