import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
  listings: Observable<Listings[]>;
  constructor(private db: AngularFirestore) { }

  getListings1(){
   this.listings =this.db.collection('/listing').valueChanges() as Observable<Listings[]>;
   return this.listings;
  }
}


interface Listings{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
}