import { AlumniService } from './../../../services/alumni.service';
import { Alumni } from './../../../interface/alumni.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { RemoveDialogComponent } from 'src/app/components/dialogs/remove-dialog/remove-dialog.component';

@Component({
  selector: 'app-alumni-list',
  templateUrl: './alumni-list.component.html',
  styleUrls: ['./alumni-list.component.css']
})
export class AlumniListComponent implements OnInit {

  alumnis: Alumni[] = [];

  displayedColumns: string[] = ['name', 'email', 'birthDate', 'gender', 'actions'];
  unsubscriber: Subscription = new Subscription();
  constructor(
    private alumniService: AlumniService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.listAlumnis();
  }


  listAlumnis(): void {
    this.alumnis = this.alumniService.list();
  }

  openRemoveConfirm(alumni: Alumni): void {
    const dialogRef = this.dialog.open(RemoveDialogComponent);

    dialogRef.afterClosed().subscribe(async response => {
      if (response) {
        await this.alumniService.remove(alumni);
        this.listAlumnis();
      }
    });
  }

}
