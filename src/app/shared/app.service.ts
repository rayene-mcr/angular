import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { buyer } from '../model/buyer';
import { cars } from '../model/Cars';
import { infos } from '../model/infos';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  httpOptions={
    headers : new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  urlCars : string="http://localhost:3000/cars"
  urlUsers : string="http://localhost:3000/users"
  urlBuyers : string="http://localhost:3000/buyers"

  constructor(private http : HttpClient) { }
  getCarsJson():Observable<cars[]>{
    
    return this.http.get<cars[]>(this.urlCars);
        }
  
        addCar(Car : cars,FileToUpload :File):Observable<cars>{
          Car.url=FileToUpload.name;
          return this.http.post<cars>(this.urlCars,Car);
        }
        deleteCar(c : cars | number):Observable<cars> {
          const id=typeof c ==='number' ? c : c.id;
          const url=this.urlCars+'/'+id;
          return this.http.delete<cars>(url);
          }
  
          getCarByIdJson(id: number): Observable<cars>
          {
            return this.http.get<cars>(this.urlCars +'/'+ id);
          }
            
            updateCar(id:number,car:cars){
              return this.http.put<cars>(this.urlCars+'/'+id,car,this.httpOptions);
            }
            addUser(Infos : infos,FileToUpload :File):Observable<infos>{
              Infos.url=FileToUpload.name;
              return this.http.post<infos>(this.urlUsers,Infos);
            }

            getUersJson():Observable<infos[]>{
    
              return this.http.get<infos[]>(this.urlUsers);
                  }
                  checkusernameandpassword(uname:string,pwd:string){
                    if(uname =="admin" && pwd=="admin123"){
                      localStorage.setItem('username',"admin");
                      return true;
                    }
                    else {
                      return false;
                    }
                  }

                  checkothernameandpassword(uname:string,pwd:string){
                    if(uname =="user" && pwd=="user123"){
                      localStorage.setItem('username',"user");
                      return true;
                    }
                    else {
                      return false;
                    }
                  }
                  deleteUser(i : infos | number):Observable<infos> {
                    const id=typeof i ==='number' ? i : i.id;
                    const url=this.urlUsers+'/'+id;
                    return this.http.delete<infos>(url);
                    }

                   /* addUser(Infos : infos,FileToUpload :File):Observable<infos>{
                      Infos.url=FileToUpload.name;
                      return this.http.post<infos>(this.urlUsers,Infos);
                    }
        
                    getUersJson():Observable<infos[]>{
            
                      return this.http.get<infos[]>(this.urlUsers);
                          }*/
                          addBuyer(Buyer : buyer):Observable<buyer>{
                            return this.http.post<buyer>(this.urlBuyers,Buyer);
                          }
                          getBuyersJson():Observable<buyer[]>{
                            return this.http.get<buyer[]>(this.urlBuyers);
                          }
                  
}
