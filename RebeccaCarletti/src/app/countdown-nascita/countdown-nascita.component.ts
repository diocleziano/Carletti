import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-nascita',
  templateUrl: './countdown-nascita.component.html',
  styleUrls: ['./countdown-nascita.component.css']
})
export class CountdownNascitaComponent implements OnInit {


  public _days: number = 0;
  public _hours: number = 0;
  public _minutes: number = 0;
  public _seconds: number = 0;
  public show: boolean = false;
  constructor() { }


  ngOnInit(): void {

    this.calcolaMinutiRimanenti();
  }

  calcolaMinutiRimanenti() {
    var myfunc = setInterval(() => {
      var dataPresunta = new Date(2022, 6, 16).getTime();
      var now = new Date().getTime();
      var timeleft = dataPresunta - now;
      this.show = true;
      this._days = Math.abs(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
      this._hours = Math.abs(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this._minutes = Math.abs(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
      this._seconds = Math.abs(Math.floor((timeleft % (1000 * 60)) / 1000));
    }, 1000);

  }

}
