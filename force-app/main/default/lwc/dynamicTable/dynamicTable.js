import { LightningElement, api, wire } from 'lwc';
import getFieldSets from '@salesforce/apex/GetFieldSetsForObject.getFieldSets';

export default class DynamicTable extends LightningElement {

    @api objectName;

    @wire(getFieldSets, {objectName : this.objectName})
    fieldSets; 

    

}