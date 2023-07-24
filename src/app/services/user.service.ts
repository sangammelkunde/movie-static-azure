import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //add user
  public register(user : any){
      return this.http.post('https://springmoviebookingraveena.azurewebsites.net/api/v1.0/moviebooking/register',user)
  }
  //forgot password
  public forgot(user:any){
    return this.http.put('https://springmoviebookingraveena.azurewebsites.net/api/v1.0/moviebooking/'+user.loginId+'/forgot',user,{responseType: 'text'})
  }
  public allMovies(){
    return this.http.get('https://springmoviebookingraveena.azurewebsites.net/api/v1.0/moviebooking/all');
  }
  public serachMovie(movieName:any){
    return this.http.get('https://springmoviebookingraveena.azurewebsites.net/api/v1.0/moviebooking/movies/search/'+movieName)
  }
  public updateTicketStatus(movieName:any,id:any){
    return this.http.put('https://springmoviebookingraveena.azurewebsites.net/api/v1.0/moviebooking/'+movieName+'/update/'+id,movieName,{responseType: 'text'});
  }
  public deleteMovie(movieName:any){
    return this.http.delete('https://springmoviebookingraveena.azurewebsites.net/api/v1.0/moviebooking/'+movieName+'/delete',{responseType: 'text'});
  }
  public bookTicket(user:any){
    return this.http.post('https://springmoviebookingraveena.azurewebsites.net/api/v1.0/moviebooking/'+user.movieName+'/add',user,{responseType: 'text'});
  }
  public getallbookedtickets(movieName : any){
    return this.http.get('https://springmoviebookingraveena.azurewebsites.net/api/v1.0/moviebooking/getallbookedtickets/'+movieName);
  }
}
