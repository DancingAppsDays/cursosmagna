import { environment } from '../environments/environment';

export class Constants {

    //public static URL =  "https://scho.dancingapps.org/api/";
    
     public static URL =  environment.databaseURL ;// "http://localhost:8000/api/"
 
     public static usertype= "empty";
     public static session= false;
     public static userId=0; //para alumnos y maestros al hacer auth
 }
 