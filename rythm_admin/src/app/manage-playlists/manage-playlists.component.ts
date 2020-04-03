import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {  FileUploader} from 'ng2-file-upload';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
const UploadURL = 'http://localhost:8080/api/upload';

@Component({
  selector: 'deletes-modal-content',
  template: `
              <div class="modal-header">
                <h4 class="modal-title">Please Confirm...!</h4>
                <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form (submit)=removePlaylist($event)>
                <div class="modal-body">
                  Do you really want to delete? {{plname}}
                  <table hidden="true">
                    <tr>
                      <td>Do you really want to delete?</td>
                    </tr>
                    <tr>
                      <td><input type="text" id="pname" name="pname" class="form-control" value="{{plname}}"/></td>
                      <td><input type="text" id="fname" name="fname" class="form-control" value="{{fplname}}"/></td>
                      
                    </tr>
                  </table>
                  
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" (click)="activeModal.close(false)">Close</button>
                  <input type="submit" class="btn btn-primary" value="Ok"/>
                </div>
              </form>
            `
})

export class DeletesModalContent{
  songs
  playlists
  constructor(public http:Http,public router:Router,public cookie:CookieService,private modalService: NgbModal,private activeModal: NgbActiveModal) { }
  ngOnInit() {
    if(!(this.cookie.check("Adminuname") && this.cookie.check("Adminuid")))
      this.router.navigate([''])
    else
    {
      this.http.get("http://localhost:8080/loadPlaylists").subscribe((data) => this.loadPlaylist(data));
      this.http.get("http://localhost:8080/loadSongs").subscribe((data) => this.loadSongs(data));
    } 
  }
  loadPlaylist(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.playlists=arr;
    //console.log(arr);
  }
  loadSongs(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.songs=arr;
    //console.log(arr);
  }
  removePlaylist(event){
    event.preventDefault()
    const target = event.target;
    const cname = target.querySelector('#pname').value.trim();
    const cname1 = target.querySelector('#fname').value.trim();
      this.http.get("http://localhost:8080/removePlaylist?name="+cname+"&fname="+cname1).subscribe((data) => this.removedSong(data));
  }
  removedSong(data){
    var y = Array.of(data._body);
    var arr=JSON.parse(<any>y);
    if(arr.n==1){
      alert("Playlist is removed Successfully!!!");
      location.reload();
    }
  } 
}


@Component({
  selector: 'app-manage-playlists',
  templateUrl: './manage-playlists.component.html',
  styleUrls: ['./manage-playlists.component.css']
})
export class ManagePlaylistsComponent implements OnInit {
  plname
  fplname
  playlists
  rename
  selectedsongs=[]
  selectedpl
  selectedIds=[]
  plSongsId=[]
  plSongs=[]
  succate
  sname;
  songs
  imgurl:String= null;
  fileToUpload:File=null;
  filestatus:number;
  fToDelete:String;
  public isCollapsed = true;
  audioname:String;
  public popoverTitle:string="Delete Playlist?";
  public popoverMessage:string="Are you sure want to delete this playlist?";
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;

  public uploader: FileUploader = new FileUploader({url: UploadURL, itemAlias: 'Song'});

  constructor(public http:Http,public router:Router,public cookie:CookieService,private modalService: NgbModal) { }


  ngOnInit() {
    if(!(this.cookie.check("Adminuname") && this.cookie.check("Adminuid")))
      this.router.navigate([''])
    else
    {
      this.http.get("http://localhost:8080/loadPlaylists").subscribe((data) => this.loadPlaylist(data));
      this.http.get("http://localhost:8080/loadSongs").subscribe((data) => this.loadSongs(data));
    }
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
       //console.log('FileUpload:uploaded:', item, status, response);
       this.filestatus=status;
       //console.log("file status",this.filestatus)
    };
  }

  

  onFileChange(event){
    const file = (event.target as HTMLInputElement).files[0];
    this.audioname=file.name;
    this.sname=file.name;
    //this.sname=this.sname.slice(0,-4);
  }

  loadPlaylist(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.playlists=arr;
    //console.log(arr);
  }


  loadSongs(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.songs=arr;
    //console.log(arr);
  }
  
  
  AddSongUP(value)
  {
    var f=0;
    for(var i of this.plSongs)
    {
      if(i==value)
      {  
        f=0;
        break;
      }
      else
        f=1;
    }
    if(f==1){
      f=1;
      this.plSongs.unshift(value);
    }
  }
  
  
  RemoveSongUP(value)
  {
    const index = this.plSongs.indexOf(value, 0);
    if (index > -1) {
      this.plSongs.splice(index, 1);
    }
  }
  
  
  AddSong(value)
  {
    var f=0;
    if(this.selectedsongs.length==0)
    {
      f=1;
    }
    for(var i of this.selectedsongs)
    {
      if(i==value)
      {  
        f=0;
        break;
      }
      else
        f=1;
    }
    if(f==1){
      f=1;
      this.selectedsongs.unshift(value);
    }
    //console.log(this.selectedsongs);
  }
  
  
  RemoveSong(value)
  {
    const index = this.selectedsongs.indexOf(value, 0);
    if (index > -1) {
      this.selectedsongs.splice(index, 1);
    }
  }
  
  selectChangeHandler (event: any) {
    this.plSongsId=[]
    this.plSongs=[]
    var t=event.target.value;
    if(t!="-select-")
    {
      this.rename=t;
      this.selectedpl=t;
      for(var i of this.playlists)
      {
        if(i.name==t)
        {
            this.plSongsId=i.songs
            this.fToDelete = i.filename;
        }
      }
    }
    else
      this.rename="";
    
    //console.log("Ids: "+this.plSongsId)
    
    for(var i of this.plSongsId)
    {
      for(var j of this.songs)
      {
        if(i==j._id)
        {
          this.plSongs.push(j.name)
        }
      }
    }
    //console.log("Songs: "+this.plSongs)
  }
  delete(){
    const modalRef = this.modalService.open(DeletesModalContent);
     modalRef.componentInstance.plname = this.rename;
     modalRef.componentInstance.fplname = this.fToDelete;
  }
 
  updatePlaylist(event)
  {
    event.preventDefault()
    const target = event.target;
    const cname = target.querySelector('#rename').value.trim();
    if(cname == undefined || cname.length ==0)
    {
      alert("Please enter playlist name.")
      location.reload();
    }
    console.log("hl")
    this.plSongsId=[]
    for(var i of this.plSongs)
    {
        for(var j of this.songs)
        {
          if(j.name==i)
            this.plSongsId.push(j._id)
        }
    }

    if(cname!=this.selectedpl)
    {
      console.log("hello");
      this.http.get("http://localhost:8080/checkPlaylist?cname="+cname).subscribe((data) => this.checkPlaylistUP(data,cname));
    }
    else if(this.plSongs.length > 0)
    {
      const obj={
        name:cname,
        songs:this.plSongsId
      }
      const mainobj={
        plobj:obj,
        oldnm:this.rename
      }
      this.http.post(`http://localhost:8080/updatePlaylist`,mainobj).subscribe((data) => this.displayDataUP(data));
    }else{
      alert("you can not make playlist empty 'try again'!")
      location.reload();
    }
    
  }
  
  
  checkPlaylistUP(data,cname)
  {
    //console.log("Updating: "+this.plSongsId);
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    const obj={
      name:cname,
      songs:this.plSongsId
    }
    const mainobj={
      plobj:obj,
      oldnm:this.rename
    }
    console.log("asdsdsddsadsad");
    if(arr.length==0 && this.plSongs.length > 0)
    {
      this.http.post(`http://localhost:8080/updatePlaylist`,mainobj).subscribe((data) => this.displayDataUP(data));
      //this.http.get("http://localhost:8080/addPlaylist?cname="+cname).subscribe((data) => this.displayData(data));
      
    }else if(this.plSongs.length == 0)
    {
      alert("There should be atlest one song in the playlist.");
      location.reload();
      
    }
    else
      this.succate="Playlist '"+cname+"' exists!!! Please, try with differnt name"
      //alert("Catagory of '"+cname+"' exists!!! Please, try with differnt name");
  }
  
  
  handleFileInput(file:FileList){
    this.fileToUpload = file.item(0)
    var reader = new FileReader()
    reader.onload = (event: any) => {
      this.imgurl = event.target.result;
      //console.log(this.imgurl)
    }
    reader.readAsDataURL(this.fileToUpload);

  }
  
  
  addPlaylist(plname)
  {
    // event.preventDefault()
    // const target = event.target;
    // const cname = target.querySelector('#plname').value.trim();
    
    if(plname == undefined)
    {
      alert("playlist name must be there");
      location.reload();
    }else{
      const cname = plname;
    this.http.get("http://localhost:8080/checkPlaylist?cname="+cname).subscribe((data) => this.checkPlaylist(data,cname));
    }
    
  }
  
  
  checkPlaylist(data,cname)
  {
    for(var i of this.selectedsongs)
    {
        for(var j of this.songs)
        {
          if(j.name==i)
            this.selectedIds.push(j._id)
        }
    }
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    const obj={
      name:cname,
      filename:this.sname,
      songs:this.selectedIds
    }
    if(arr.length==0 && this.selectedsongs.length > 0)
    {
      const fobj={
        name:this.audioname
      }
     
      this.http.post("http://localhost:8080/song/addaudio",fobj).pipe(map(res => res));
      this.http.post(`http://localhost:8080/addPlaylist`,obj).subscribe((data) => this.displayData(data));
      //this.http.get("http://localhost:8080/addPlaylist?cname="+cname).subscribe((data) => this.displayData(data));
    }else if(this.selectedsongs.length == 0)
    {
      alert("You can not create empty playlists.");
      location.reload();
    }
    else
      this.succate="Playlist '"+cname+"' exists!!! Please, try with differnt name"
      //alert("Catagory of '"+cname+"' exists!!! Please, try with differnt name");
  }
  
  
  displayData(data){
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    if(arr.length==0)
      alert("Some Problem Occured!! Please Try Leter!!!");
    else{
      alert("Successfully added new Playlist");
      location.reload();
    }
  }
  
  
  displayDataUP(data){
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    if(arr.length==0)
      alert("Some Problem Occured!! Please Try Leter!!!");
    else{
      alert("Successfully updated Playlist");
      location.reload();
    }
  }
  
  
  removePlaylist(){
    if(this.rename==undefined || this.fToDelete==undefined) 
      console.log('select playlist');
    else
      this.http.get("http://localhost:8080/removePlaylist?name="+this.rename+"&fname="+this.fToDelete).subscribe((data) => this.removedSong(data));
  }
  
  
  removedSong(data){
    var y = Array.of(data._body);
    var arr=JSON.parse(<any>y);
    if(arr.n==1){
      alert("Playlist is removed Successfully!!!");
      location.reload();
    }
  
  }
}
