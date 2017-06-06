import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NativeAudio} from 'ionic-native';
import { ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {Shake} from 'ionic-native';
import {Vibration } from 'ionic-native';
import {TextToSpeech} from 'ionic-native';
import {Sounds} from "../../providers/sounds";

/*
  Generated class for the AlphaB page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alpha-b',
  templateUrl: 'alpha-b.html'
})
export class AlphaBPage {
    count:any = 0;
    alphaSounds: any;
    status="false";
    playStatus="false";
    name: string = "";
       alphab=0;

    public alphaarr =[];
   //public alphaarr2 =["A","B","C","D","E","F","G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R","S", "T", "U", "V", "W", "X", "Y", "Z"];
  constructor(public navCtrl: NavController,  private newProvider:Sounds, public modalCtrl: ModalController) {
      //var file = new MediaPlugin('GuitarChord-A_64kb.m3u');

  }

    ngAfterViewInit(){
        this.newProvider.load().then((data) =>{
            this.alphaSounds = data.alphaSounds;
            console.log("This"+ data.alphaSounds,data.alphaSounds)
        });
    }


  ionViewDidLoad() {
    console.log('Hello AlphaBPage Page');
  }

    dummy():void{

    }

    public reg:any;
    clearName():void {

        let nameArray = this.name.split('');
        for(let i = 0 ; i < nameArray.length; i++){
            this.reg =document.getElementById(nameArray[i]);
            console.log( "The array value" + nameArray[i]);
            this.reg.style.backgroundColor = "transparent";
            console.log("The element is" + this.reg);
        }



        this.name = "";

    }


    sounding(nameArray,i){
        //NativeAudio.preloadSimple(nameArray[i], "assets/soundFiles/" + nameArray[i] + ".wav");
        //NativeAudio.preloadSimple('uniqueId1', 'Test.mp3');
        //NativeAudio.play(nameArray[i], () =>{ continue});
    }
    soundName(){

        let nameArray = this.name.split('');
        if(this.count>=nameArray.length){
            this.count=0;
            return;
          }

        NativeAudio.preloadSimple(nameArray[this.count], "assets/soundFiles/" + nameArray[this.count] + ".wav");
        NativeAudio.play(nameArray[this.count], () => this.soundName());
        this.count++;

       /*
        for(let i = 0 ; i < nameArray.length; i++) {
            NativeAudio.preloadSimple(nameArray[i], "assets/soundFiles/" + nameArray[i] + ".wav");
            NativeAudio.play(nameArray[i], () => this.soundName());
            //setInterval(() =>{this.sounding(nameArray,i)},2000);

            //this.count+=1000;
        }
         */


    }

    playName(){
        TextToSpeech.speak(this.name + ',sounds like')
            .then(() => this.soundName())
            .catch((reason: any) => console.log(reason));

        /*
        let nameArray = this.name.split('');
        for(let i = 0 ; i < nameArray.length; i++){
            NativeAudio.preloadSimple(nameArray[i],"assets/soundFiles/" + nameArray[i] + ".wav");
            //NativeAudio.preloadSimple('uniqueId1', 'Test.mp3');
            NativeAudio.play(nameArray[i],() => console.log('uniqueId1 is done playing'));
            //NativeAudio.play(nameArray[i],"assets/soundFiles/" + nameArray[i] + ".wav");
        }
        */

    }






    select_click(letter,event): void
   {

       this.name = this.name + letter;
       NativeAudio.preloadSimple(letter, "assets/soundFiles/" + letter + ".wav")
       NativeAudio.play(letter, () => console.log('uniqueId1 is done playing'));
       //debugger;
       event.currentTarget.style.backgroundColor = "#f5f443";
       this.status="true";

       Vibration.vibrate(50);




       //watch.unsubscribe();
     // TextToSpeech.speak(letter)
          // .then(() => console.log('Success'))
          // .catch((reason: any) => console.log(reason));


       NativeAudio.preloadSimple("Tpaper", "assets/soundFiles/Tpaper.wav");
       let watch = Shake.startWatch(40).subscribe(() => {
           this.clearName();

           NativeAudio.play("Tpaper", () => console.log('uniqueId1 is done playing'));

      });


     // var element =document.getElementById(clicked);
      //var inputBox =document.getElementById("inputBox");
     /* var allinput =" ";
          event.currentTarget.style.backgroundColor = "#f5f443";
          this.alphaarr[this.alphab] = letter;
          this.alphab++;
       for( var x=0; x<this.alphaarr.length; x++ ) {
           allinput = allinput + this.alphaarr[x];
       }
          //inputBox.innerHTML = allinput;
*/

   }


}
