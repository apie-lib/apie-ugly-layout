/*import { h, VNode }  from '@stencil/core';*/
/*import { InputState, FallbackRenderInfo, RenderInfo, toString, toArray, toFileList, toEmptyFileList, FormGroupState, FormListRowState, FormListRowAddState, SubmitButtonState, createErrorMessage } from 'apie-form-elements';*/
import { RenderInfo, FallbackRenderInfo } from 'apie-form-elements';

export class UglyFormRender extends RenderInfo
{
    constructor(
    ) {
        super(new FallbackRenderInfo());
        this.singleInputRenderers = {
        };
    }

    public createFieldWrapper()
    {
        return this.parent.createFieldWrapper();
    }
}