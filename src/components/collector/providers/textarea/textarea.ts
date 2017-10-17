import * as Tripetto from '@tripetto/forms-collector';
import { Component, Input } from '@angular/core';
import { ITextarea } from 'tripetto-forms-textarea';

const SELECTOR = 'tripetto-forms-textarea';

interface IProps {
    name: string;
    description: string;
    explanation: string;
    placeholder: string;
    data: Tripetto.Data<string>;
}

@Component({
    selector: SELECTOR,
    templateUrl: './textarea.html',
    styleUrls: ['./textarea.css']
})
class TextareaComponent {
    @Input() props: IProps;
}

@Tripetto.node(SELECTOR)
export class TextareaProvider extends Tripetto.NodeProvider<IProps, ITextarea> {
    static Component = TextareaComponent;

    public OnRender(instance: Tripetto.Instance, action: Tripetto.Await): IProps {
        return {
            name: this.Node.Props.NameVisible && this.Node.Props.Name,
            description: this.Node.Props.Description,
            explanation: this.Node.Props.Explanation,
            placeholder: this.Node.Props.Placeholder,
            data: this.DataAssert<string>(instance, 'value')
        };
    }

    public OnValidate(instance: Tripetto.Instance): boolean {
        const value = this.DataAssert<string>(instance, 'value');

        return !value.Slot.Required || value.Value !== '';
    }
}

