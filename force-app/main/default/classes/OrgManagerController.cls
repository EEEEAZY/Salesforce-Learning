global without sharing class OrgManagerController {
  @AuraEnabled(cacheable=true)
  public static List<Org__c> getOrgsList() {
    return [
      SELECT Id, Name, Domain__c, (SELECT Name FROM OrgUsers__r)
      FROM Org__c
      ORDER BY Id
    ];
  }
}
