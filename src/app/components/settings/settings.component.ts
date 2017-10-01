import { Component, OnInit } from '@angular/core';
import { FlashMessagesService} from 'angular2-flash-messages';
import {Router   } from '@angular/router';
import { SettingsService } from '../../services/settings.service';
import { Settings } from '../../Settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {


settings: Settings;

  constructor(
    public router:Router,
    public flashMessagesService:FlashMessagesService,
    public settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }

  mySubmit(){
    this.settingsService.changeSettings(this.settings);
    this.flashMessagesService.show( "Saved successfully",{cssClass:'alert-success',timeout:3000});
    this.router.navigate(['/settings']);
  }

}
