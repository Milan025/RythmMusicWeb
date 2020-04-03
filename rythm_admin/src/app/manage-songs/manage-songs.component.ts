import { Component, OnInit,Input } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {  FileUploader} from 'ng2-file-upload';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
const UploadURL = 'http://localhost:8080/api/upload';


@Component({
  selector: 'delete-modal-content',
  template: `
              <div class="modal-header">
                <h4 class="modal-title">Please Confirm...!</h4>
                <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form (submit)=onDelete($event)>
                <div class="modal-body">
                Do you really want to delete?
                  <table hidden="true">
                    
                    <tr>
                      <td>Song Name</td>
                      <td><input type="text" id="name" name="name" class="form-control" value="{{name}}"/></td>
                    </tr>
                    <tr>
                      <td>Song Link</td>
                      <td><input type="text" id="link" name="link" class="form-control" value="{{link}}"/></td>
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

export class DeleteModalContent{

  songs

  constructor(public activeModal: NgbActiveModal,private http:Http,private router:Router,private cookie:CookieService) {}
  ngOnInit() {
    if(!(this.cookie.check("Adminuname") && this.cookie.check("Adminuid")))
      this.router.navigate([''])
    else{
      // this.http.get("http://localhost:8080/loadPlaylists").subscribe((data) => this.loadPlaylist(data));
      this.http.get("http://localhost:8080/loadSongs").subscribe((data) => this.loadSongs(data));
    }
  }
  
  loadSongs(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.songs=arr;
  }
  onDelete(event)
  {
    event.preventDefault()
    const target = event.target;
    const cname = target.querySelector('#name').value.trim();
    const cname1 = target.querySelector('#link').value.trim();
    this.http.get("http://localhost:8080/removeSong?sname="+cname+"&fname="+cname1).subscribe((data) => this.deleteSongFinal(data));
  }
  deleteSongFinal(data)
  {
    if(data.ok)
      alert("Successfully deleted Song!!!")
      location.reload();
  }
  
}

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Songs Details</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <form (submit)=onEdit($event)>
      <div class="modal-body">
        <table>
          <tr>
            <td>Song Name</td>
            <td><input type="text" id="rename" name="rename" class="form-control" value="{{name}}"/></td>
          </tr>
          <tr>
            <td>Film Name</td>
            <td><input type="text" id="refilname" class="form-control" value="{{filmname}}"/></td>
          </tr>
          <tr>
            <td>Release Date</td>
            <td><input  type="text" id="releasedate" class="form-control" value="{{releasedate}}"/></td>
          </tr>
          <tr>
            <td>Artist Name</td>
            <td><input  type="text" id="reartists" class="form-control" value="{{artist}}"/></td>
          </tr>
          <tr hidden="true">
            <td>Song Link</td>
            <td><input  type="text" id="relink" class="form-control" value="{{link}}"/></td>
          </tr>
          <tr>
            <td>Catagory</td>
            <td>
              <select class="form-control" id="recat" (change)="selectChangeHandler($event)">
                <option value="{{cat}}">{{cat}}</option>
                <option *ngFor="let i of catagories" value="{{i.Catagory}}">{{i.Catagory}}</option>
              </select>
            </td>
          </tr>
        </table> 
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-primary" value="Update Changes"/>
      </div>
    </form>
  `
})
export class NgbdModalContent {
  name;
  filmname;
  releasedate;
  artist
  cat
  link

  refilmname;
  rereleasedate;
  reartist
  recat
  relink

  songs;
  playlists
  plSongsId
  plSongs
  rename
  selectedpl
  succate
  ournew
  catagories
  constructor(public activeModal: NgbActiveModal,private http:Http,private router:Router,private cookie:CookieService) {}
  ngOnInit() {
    if(!(this.cookie.check("Adminuname") && this.cookie.check("Adminuid")))
      this.router.navigate([''])
    else{
      // this.http.get("http://localhost:8080/loadPlaylists").subscribe((data) => this.loadPlaylist(data));
      this.http.get("http://localhost:8080/loadSongs").subscribe((data) => this.loadSongs(data));
      this.http.get("http://localhost:8080/loadCata").subscribe((data) => this.loadCatag(data));
    }
  }
  
  loadSongs(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.songs=arr;
  }
  loadCatag(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.catagories=arr;
  }
  selectChangeHandler (event: any) {
    var t=event.target.value;
    if(t!="-select-")
      this.ournew=t;
    else
      this.ournew="";

  }
  removeSong(value,value1)
  {
    this.http.get("http://localhost:8080/removeSong?sname="+value+"&fname="+value1).subscribe((data) => this.deleteSongFinal(data));
  }
  deleteSongFinal(data)
  {
    if(data.ok)
      alert("Successfully deleted Song!!!")
      location.reload();
  }
  onEdit(event)
  {
    event.preventDefault()
    const target = event.target;
    const obj={
        name:target.querySelector('#rename').value.trim(),
        filmname : target.querySelector('#refilname').value.trim(),
        artists : target.querySelector('#reartists').value.trim(),
        releasedate : target.querySelector('#releasedate').value.trim(),
        catagory : this.ournew
      }
    const mainobj={
        plobj:obj,
        oldnm:this.rename
      }
      console.log(obj.catagory)
      console.log(mainobj.oldnm)
      console.log(obj)
    this.http.post(`http://localhost:8080/updateSongs`,mainobj).subscribe((data) => this.displayDataUP(data));
  }
  displayDataUP(data){
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    if(arr.length==0)
      alert("Some Problem Occured!! Please Try Leter!!!");
    else{
      alert("Successfully updated Song");
      location.reload();
    }
  }
}

@Component({
  selector: 'app-manage-songs',
  templateUrl: './manage-songs.component.html',
  styleUrls: ['./manage-songs.component.css']
})

//  -------------------------------------------
//  -------------------------------------------
//  -------------------------------------------
//  -------------------------------------------
//  -------------------------------------------
export class ManageSongsComponent implements OnInit {

  constructor(private http:Http,private router:Router,private cookie:CookieService,private modalService: NgbModal) { }



  open(value,value1,value2,value3,value4,value5) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = value;
    modalRef.componentInstance.filmname = value1;
    modalRef.componentInstance.releasedate = value2;
    modalRef.componentInstance.artist = value3;
    modalRef.componentInstance.cat = value4;
    modalRef.componentInstance.link = value5;


    modalRef.componentInstance.refilmname = value1.trim();
    modalRef.componentInstance.rereleasedate = value2.trim();
    modalRef.componentInstance.reartist = value3.trim();
    modalRef.componentInstance.rename = value.trim();
    modalRef.componentInstance.relink = value5.trim();
    modalRef.componentInstance.recat = value4.trim();
  }

  delete(value1,value2){
    const modalRef = this.modalService.open(DeleteModalContent);
    modalRef.componentInstance.name = value1;
    modalRef.componentInstance.link = value2;
  }

  public uploader: FileUploader = new FileUploader({url: UploadURL, itemAlias: 'Song'});
  catagories
  playlists
  searchText;
  selectedPls=[]
  imgurl:String= null;
  fileToUpload:File=null;
  songs;
  rename=""
  sname
  songId
  filestatus:number;
  public isCollapsed = true;
  audioname:String;
  public popoverTitle:string="Delete Song?";
  public popoverMessage:string="Are you sure want to delete this song?";
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;

  ngOnInit() {
    if(!(this.cookie.check("Adminuname") && this.cookie.check("Adminuid")))
      this.router.navigate([''])
    else{
      this.http.get("http://localhost:8080/loadPlaylists").subscribe((data) => this.loadPlaylist(data));
      this.http.get("http://localhost:8080/loadCata").subscribe((data) => this.loadCatag(data));
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
    this.sname=this.sname.slice(0,-4);
  }
  selectChangeHandler (event: any) {
    var t=event.target.value;
    if(t!="-select-")
      this.rename=t;
    else
      this.rename="";

  }
  addSong(obj:any)
  {
    //console.log("asdsadjkshdjhsdjhsahdjhsajdhjs")
    if(obj.name == undefined || obj.artists == undefined || obj.filmname == undefined || obj.releasedate == undefined || this.rename.length ==0 )
    {
      alert("some field is missing ")
      location.reload();
    }
    obj.name=obj.name.trim();
    obj.filmname=obj.filmname.trim();
    obj.catagory=this.rename;
    obj.link=this.audioname;
    
    const fobj={
      name:this.audioname
    }
    //console.log(obj.name)
    this.http.post("http://localhost:8080/song/addaudio",fobj).pipe(map(res => res));
    this.http.post(`http://localhost:8080/song/add`,obj).subscribe((data) => this.displayAddSong(data));
    
    
  }
  displayAddSong(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.songId=arr[0]._id
    //alert("Successfully added new Song!!!")
    const obj=
    {
      sid:this.songId,
      plarr:this.selectedPls
    }
    this.http.post(`http://localhost:8080/songAddToPls`,obj).subscribe((data) => this.addSongFinal(data));
  }
  addSongFinal(data)
  {
    if(data.ok)
      alert("Successfully added new Song!!!")
      location.reload();
  }
  PlSelec(value)
  {
    this.selectedPls.push(value)
  }
  loadSongs(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.songs=arr;
  }
  loadPlaylist(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.playlists=arr;
  }
  loadCatag(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.catagories=arr;
  }

  removeSong(value,value1)
  {
    this.http.get("http://localhost:8080/removeSong?sname="+value+"&fname="+value1).subscribe((data) => this.deleteSongFinal(data));
  }
  deleteSongFinal(data)
  {
    if(data.ok)
      alert("Successfully deleted Song!!!")
      location.reload();
  }

  playSong(value)
  {
      console.log("Play==== "+value);
  }

  editSong(value)
  {
      console.log("Edit==== "+value);
  }
}
