import { Alumni } from './../interface/alumni.interface';
import { environment } from './../../environments/environment';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AlumniService implements OnDestroy {

  private readonly API = `${environment.api}/alunos`;

  unsubscriber: Subscription = new Subscription();
  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService,
  ) {
  }

  getAlumnis(): void {
    this.unsubscriber.add(
      this.httpClient.get<Alumni[]>(this.API).subscribe(
        (response: Alumni[]) => {
          let id = 1;
          response.map(alumni => {
            alumni.id = id;
            id++;
          });
          this.localStorage.store('alumniList', response);
        }
      )
    );
  }

  list(): Alumni[] {
    return this.localStorage.retrieve('alumniList');
  }

  create(alumni: Alumni): void {
    const alumniArr = this.localStorage.retrieve('alumniList');

    const newAlumni: Alumni = {
      id: alumniArr.length + 1,
      DataNascimento: this.formatBirthDate(alumni.DataNascimento),
      Email: alumni.Email,
      Nome: alumni.Nome,
      Sexo: alumni.Sexo
    };

    alumniArr.push(newAlumni);
    this.localStorage.store('alumniList', alumniArr);
  }

  async remove(alumni: Alumni): Promise<void> {
    const newAlumniArr = this.localStorage.retrieve('alumniList').filter(alum => alum.id !== alumni.id);
    this.localStorage.store('alumniList', newAlumniArr);
  }

  update(alumni: Alumni): void {
    const alumnis = this.localStorage.retrieve('alumniList').filter(alum => alum.id !== alumni.id);
    alumni.DataNascimento = this.formatBirthDate(alumni.DataNascimento);
    alumnis.push(alumni);

    this.localStorage.store('alumniList', alumnis);
  }

  read(id: number): Alumni {
    return this.localStorage.retrieve('alumniList').filter((alumni: Alumni) => alumni.id === id)[0];
  }

  formatBirthDate(birthDate: string): string {
    return `${birthDate.split('-')[2]}-${birthDate.split('-')[1]}-${birthDate.split('-')[0]}`;
  }

  ngOnDestroy(): void {
    this.unsubscriber.unsubscribe();
  }
}
