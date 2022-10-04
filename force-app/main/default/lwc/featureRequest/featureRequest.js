import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';
import REASON_FIELD from '@salesforce/schema/Case.Reason';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';

export default class FeatureRequest extends LightningElement {

    fields = [REASON_FIELD, PRIORITY_FIELD, SUBJECT_FIELD, DESCRIPTION_FIELD];
    
    async handleSuccess() {
        await LightningAlert.open({
            message: 'Your Feature Request Has Been Submitted.',
            theme: 'success', 
            label: 'Success!',
        });
        let readonly = this.template.querySelector('[data-id="feature-request"]');
        readonly.mode = 'readonly';
    }

}