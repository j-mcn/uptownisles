global without sharing class GetFieldSetsForObject extends VisualEditor.DynamicPickList {

    @AuraEnabled
    public static String getFieldSets(String objectName){
        try {
            Map<String, Schema.FieldSet> fsMap = Schema.SObjectType.objectName.fieldSets.getMap();
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    global override VisualEditor.DataRow getDefaultValue() {
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow('None', 'None');
        return defaultValue;
    }

    global override VisualEditor.DynamicPickListRows getValues() {

    }
}
