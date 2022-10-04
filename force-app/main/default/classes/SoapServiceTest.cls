global without sharing class SoapServiceTest {
    
    webservice static String createContact() {
        Account a = [
            SELECT
                Id
            FROM Account
            LIMIT 1
        ];
        String firstName = 'John';
        String lastName = 'Jacob';
        Contact c = new Contact(FirstName = firstName, LastName = lastName, AccountId = a.Id);
        insert c;

        return String.valueOf('Contact created with ID: ' + c.Id);
    }

}
