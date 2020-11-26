import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumniService } from 'src/app/services/alumni.service';
import { Alumni } from './../../../interface/alumni.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alumni-create',
  templateUrl: './alumni-create.component.html',
  styleUrls: ['./alumni-create.component.css']
})
export class AlumniCreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    private alumniService: AlumniService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      birthDate: [null, Validators.required],
      gender: [1, [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const alumni: Alumni = {
        Nome: this.form.get('name').value,
        DataNascimento: this.form.get('birthDate').value,
        Email: this.form.get('email').value,
        Sexo: this.form.get('gender').value === 1 ? 'Masculino' : 'Feminino'
      };
      this.alumniService.create(alumni);
      this.toastr.success('Aluno adicionado com sucesso', 'SUCESSO', { timeOut: 3000, progressBar: true, }).onHidden.subscribe(success => {
        this.router.navigateByUrl('/alumni');
      });
    }
  }


}
