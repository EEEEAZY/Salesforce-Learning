import { LightningElement } from 'lwc';
import getOrgsList from '@salesforce/apex/OrgManagerController.getOrgsList';


export default class Demo0725 extends LightningElement {
    // orgs = [
    //     {
    //         Id: 1,
    //         name: 'huawei',
    //         domain: 'www.huawei.com',
    //     },
    //     {
    //         Id: 2,
    //         name: 'baidu',
    //         domain: 'www.baidu.com',
    //     },
    //     {
    //         Id: 3,
    //         name: 'tencent',
    //         domain: 'www.tencent.com',
    //     },
    // ];

    orgs=[];

    connectedCallback(){
        getOrgsList().then((res)=>{
            console.log(res);
            this.orgs=res;
        }).catch(err=>{
            console.log(err);
        })
    }
}