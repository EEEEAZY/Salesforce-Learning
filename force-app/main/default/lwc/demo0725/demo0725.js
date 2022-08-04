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

    // connectedCallback(){
    //     getOrgsList().then((res)=>{
    //         console.log(res);
    //         let res1 = JSON.parse(JSON.stringify(res))
    //         res1.forEach(element => {
    //             if (element.OrgUsers__r==null){
    //                 element.hasUser=false

    //             }else{
    //                 element.hasUser=true
    //                 element.firstUserName = element.OrgUsers__r[0].Name
    //             }

    //         });
    //         this.orgs=res1;
    //     }).catch(err=>{
    //         console.log(err);
    //     })
    // }

    connectedCallback(){
        getOrgsList().then((res)=>{
            console.log(res);
            let res1 = JSON.parse(JSON.stringify(res))
            res1.forEach(element => {
                if (element.OrgUsers__r){
                    element.hasUser=true
                    element.firstUserName = element.OrgUsers__r[0].Name
                }else{
                    element.hasUser=false
                }
            });
            this.orgs=res1;
        }).catch(err=>{
            console.log(err);
        })
    }
}