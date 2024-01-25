import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ApiResultFormatModel} from "../../api-service/model/common/ApiResultFormatModel";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  constructor(private http: HttpClient) {}

  public getCustomerList(): Observable<ApiResultFormatModel> {
    return this.http.get<ApiResultFormatModel>('assets/JSON/customerList.json').pipe(
      map((res: ApiResultFormatModel) => {
        return res;
      })
    );
  }
}
