import { Component, Inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/Services/UserService/user.service';
import { DatashareService } from 'src/app/Services/datashare/datashare.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent {

  selectedFile: File | null = null;
  imageUrl: any;
  show: boolean = false;
  imagefile = new FormData();
  getImg:boolean = false;
  getImgUrl:any

  @ViewChild('fileInput') fileInput: any;
  cropImgPreview: any;
  imgChangeEvt: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddProfileComponent>,
    private userService: UserService, private dataService: DatashareService) { }

  ngOnInit() {
    if(localStorage.getItem('imageUrl') != null){
      this.getImg=true;
      this.getImgUrl=this.data+localStorage.getItem('imageUrl')
      this.dataService.sendUrl(this.getImgUrl)
      console.log('data',this.data+localStorage.getItem('imageUrl'));
    }
  }

  save() {
    let reqData = {
      imageUrl:this.imagefile
    }
    this.userService.uploadProfilePic(this.imagefile).subscribe((res: any) => {
      localStorage.setItem('imageUrl',res.status.imageUrl)
     console.log('after upload',res);
     console.log(this.data);

    })
  }

  uploadFile() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.imagefile.append('file',this.selectedFile);
      console.log(this.selectedFile)
      // Display the image preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
        this.show = !this.show;
      };
      reader.readAsDataURL(file);
      // You can also retrieve the file contents here if needed
      const contents = reader;
      console.log(contents);
    }
  }

  close() {
    this.dialogRef.close();
  }
  


}
