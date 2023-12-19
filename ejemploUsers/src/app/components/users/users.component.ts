import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  constructor(public userService: UserService) {}

  usuarios: any = [];
  mensaje: string = '';
  ngOnInit(): void {
    this.list();
  }

  //Listado de usuarios
  list() {
    this.userService.getUsers().subscribe((res) => {
      console.log('Respuesta del GET', res);
      this.usuarios = res.data;
    });
  }

  //Nuevo usuario
  create(form: NgForm) {
    if (form.value.id != -1) {
      //actualizo
      this.userService.updateUser(form.value).subscribe((res) => {
        console.log('Respuesta del UPDATE ' + res);
        this.mensaje = 'Usuario actualizado correctamente'
        this.resetForm(form)
        this.list();
      });
    }
    if (!form.valid) {
      console.log('Formulario Invalido');
      return;
    } else {
      const usu = {
        name: form.value.name,
        job: form.value.job,
      };
      this.userService.createUsers(usu).subscribe((res) => {
        console.log(res);
        this.mensaje = 'Usuario creado correctamente'
        this.resetForm(form)
        this.list();
      });
    }
    // this.userService.createUsers(form.value).subscribe(
    //   (res) => {
    //     console.log(res)
    //   }
    // )
  }
  deleteUser(id: any) {
    let confirmacion = confirm('Desea eliminar usuario ' + id + '?');
    if (confirmacion) {
      this.userService.deleteUser(id).subscribe((res) => {
        console.log('Respuesta de eliminar ' + res);
        this.list();
      });
    }
  }
  updateUser(usuario: any) {
    console.log(usuario);
    this.userService.updateUser(usuario);
    this.userService.datosUsuario = {
      name: usuario.first_name,
      job: 'Fisico',
      id: usuario.id,
    };
  }
  resetForm(form: NgForm) {
    form.reset();
    this.userService.datosUsuario.id = -1;
    setTimeout(() => {
      this.mensaje = ''
    },2500)
  }
}
