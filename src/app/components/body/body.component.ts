import { Component } from "@angular/core";

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    mostrar = false;
    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker'
    };

    personales: string[] = ['Spiderman', 'Venon', 'Dr. Octopus', 'Duende verde', 'Mary Jane', 'Gwen Stacy'];

    personajes2: string[] = ['Capitan America', 'Iron man', 'Thro', 'Loki', 'Doctor Strange'];

}