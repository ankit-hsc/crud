import { Injectable } from '@angular/core';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import{Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ReportService {
  private baseUrl:string='http://localhost:8085/tensor';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions();

  constructor(private _http:Http) { }
 
  upload(fileList:FileList){
    if(fileList.length>0){
      let file:File=fileList[0];
      console.log(file.name)
      let formData:FormData= new FormData();
      formData.append('file',file,file.name);
      return this._http.post(this.baseUrl+'/videoProcessing',formData).map((response:Response)=>response.text()
       ).catch(this.errorHandler);
    }
  }
report(token:string,ml:string){
  
  return this._http.get(this.baseUrl+'/videoReport?token='+token+'&ml='+ml).map((response:Response)=>response.json()
       ).catch(this.errorHandler);
}

  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
 }

}
