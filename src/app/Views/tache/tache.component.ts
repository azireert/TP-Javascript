import { Component, OnInit } from '@angular/core';
import {Tache} from '../../shared/models/tache.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

const TACHES: Tache[] = [
  { id: 1, titre: 'faire le ménage', description: 'Mr. Nice', dateDebut: new Date(), dateFin: new Date() },
  { id: 2, titre: 'faire le ménage', description: 'Narco', dateDebut: new Date(), dateFin: new Date()  },
  { id: 3, titre: 'faire le ménage', description: 'Bombasto', dateDebut: new Date(), dateFin: new Date()  },
  { id: 4, titre: 'faire le ménage', description: 'Celeritas', dateDebut: new Date(), dateFin: new Date()  },
  { id: 5, titre: 'faire le ménage', description: 'Magneta', dateDebut: new Date(), dateFin: new Date()  },
  { id: 6, titre: 'faire le ménage', description: 'RubberMan', dateDebut: new Date(), dateFin: new Date()  },
  { id: 7, titre: 'faire le ménage', description: 'Dynama', dateDebut: new Date(), dateFin: new Date()  },
  { id: 8, titre: 'faire le ménage', description: 'Dr IQ' , dateDebut: new Date(), dateFin: new Date() },
  { id: 9, titre: 'faire le ménage', description: 'Magma', dateDebut: new Date(), dateFin: new Date()  },
  { id: 10, titre: 'faire le ménage', description: 'Tornado', dateDebut: new Date(), dateFin: new Date()  }
];

@Component({
  selector: 'app-home',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})

export class TacheComponent implements OnInit {
  ListTache = TACHES;
  isModifier = false;
  TacheAModifier = 0;
  constructor() { }
  ngOnInit() {
  }

  AjouterTache() {
    if (this.checkForm()) {

      const titreText = (document.getElementById('titre') as HTMLInputElement).value;
      const descriptionText = (document.getElementById('description') as HTMLInputElement).value;
      const dateDebut = (document.getElementById('dateDebut') as HTMLInputElement).value;
      const dateFin = (document.getElementById('dateFin') as HTMLInputElement).value;
      this.ListTache.push({
        id: this.ListTache.length + 1,
        titre: titreText,
        description: descriptionText,
        dateDebut: new Date(dateDebut),
        dateFin: new Date(dateFin)
      });
      const form = document.getElementById('TacheForm');
      (form as HTMLFormElement).reset();
    }
  }
  SupprimerTache(id) {
    if (window.confirm('Etes-vous sur de supprimer petit paresseux ?')) {
      this.ListTache.splice(this.FindIndexUser(id), 1);
    }
  }
  ModifierTache1(id) {
    const NumTache = this.FindIndexUser(id);
    const titreText = (document.getElementById('titre') as HTMLInputElement);
    const descriptionText = (document.getElementById('description')as HTMLInputElement);
    const dateDebut = (document.getElementById('dateDebut') as HTMLInputElement);
    const dateFin = (document.getElementById('dateFin') as HTMLInputElement);
    titreText.value = this.ListTache[NumTache].titre;
    descriptionText.value = this.ListTache[NumTache].description;
    dateDebut.value = this.ListTache[NumTache].dateDebut.toLocaleDateString();
    dateFin.value = this.ListTache[NumTache].dateFin.toLocaleDateString();
    this.isModifier = true;
    this.TacheAModifier = id;
  }
  ModifierTache2() {
    if (this.checkForm()) {
      const titreText = (document.getElementById('titre') as HTMLInputElement).value;
      const descriptionText = (document.getElementById('description') as HTMLInputElement).value;
      const dateDebut = (document.getElementById('dateDebut') as HTMLInputElement).value;
      const dateFin = (document.getElementById('dateFin') as HTMLInputElement).value;
      this.ListTache[this.FindIndexUser(this.TacheAModifier)] = {
        id: this.TacheAModifier,
        titre: titreText,
        description: descriptionText,
        dateDebut: new Date(dateDebut),
        dateFin: new Date(dateFin)
      };
      this.isModifier = false;
      const form = document.getElementById('TacheForm');
      (form as HTMLFormElement).reset();
    }

  }
  checkForm() {
    const titreText = (document.getElementById('titre') as HTMLInputElement).value;
    const descriptionText = (document.getElementById('description')as HTMLInputElement).value;
    if (titreText.length > 100) {
      return false;
    }
    if (descriptionText.length > 200) {
      return false;
    }
    return true;
  }


  FindIndexUser(id) {
    for (let i = 0; i < this.ListTache.length; i++) {
      if (this.ListTache[i].id === id) {
        return i;
      }
    }
  }


}
