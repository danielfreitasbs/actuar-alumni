import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumniService } from 'src/app/services/alumni.service';
import { Alumni } from 'src/app/interface/alumni.interface';

@Component({
  selector: 'app-alumni-edit',
  templateUrl: './alumni-edit.component.html',
  styleUrls: ['./alumni-edit.component.css']
})
export class AlumniEditComponent implements OnInit {


  form: FormGroup;

  alumni: Alumni;

  constructor(
    private alumniService: AlumniService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.initFormEdit();
    this.getRouteParam();
  }

  private initFormEdit(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      birthDate: [null, Validators.required],
      gender: [1, [Validators.required]]
    });
  }

  private getRouteParam(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.alumni = this.alumniService.read(Number.parseInt(param.get('id'), 10));
      this.patchForm();
    });
  }

  patchForm(): void {
    const formattedBirthDate = `${this.alumni.DataNascimento.split('-')[2]}-${this.alumni.DataNascimento.split('-')[1]}-${this.alumni.DataNascimento.split('-')[0]}`;
    this.form.patchValue({
      name: this.alumni.Nome,
      email: this.alumni.Email,
      birthDate: formattedBirthDate,
      gender: this.alumni.Sexo.toLocaleLowerCase().localeCompare('masculino') ? 2 : 1
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      // const formattedBirthDate = `${this.alumni.DataNascimento.split('-')[2]}-${this.alumni.DataNascimento.split('-')[1]}-${this.alumni.DataNascimento.split('-')[0]}`;
      const alumni: Alumni = {
        Nome: this.form.get('name').value,
        DataNascimento: this.form.get('birthDate').value,
        Email: this.form.get('email').value,
        Sexo: this.form.get('gender').value === 1 ? 'Masculino' : 'Feminino',
        id: this.alumni.id
      };
      this.alumniService.update(alumni);
      this.toastr.success('Dados alterados com sucesso', 'SUCESSO', { timeOut: 3000, progressBar: true, }).onHidden.subscribe(success => {
        this.router.navigateByUrl('/alumni');
      });
    }
  }

}
