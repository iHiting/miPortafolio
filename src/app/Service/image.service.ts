import { Injectable } from '@angular/core';
import {Storage, ref, uploadBytes, list, getDownloadURL} from '@angular/fire/storage'
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = ""
  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const files = $event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imgRef = ref(this.storage, `imagen/` + name);
        uploadBytes(imgRef, file)
          .then(response => {
            return this.getImages(name);
          })
          .then(() => {
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaa")
            resolve();
          })
          .catch(error => reject(error));
      }
    });
  }




  
  public getImages(name: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const imagesRef = ref(this.storage, 'imagen');
      list(imagesRef)
        .then(async response => {
          for (let item of response.items) {
            if (item.name == name) {
              this.url = await getDownloadURL(item);
              resolve();
            }
          }
        })
        .catch(error => reject(error));
    });
  }
}
