import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'E:/Kuliah/web/belajar_angular/project-kedua/src/app/sharedRenita/ingredientRenita.model';

@Component({
  selector: 'app-shopping-editRenita',
  templateUrl: './shopping-editRenita.component.html',
  styleUrls: ['./shopping-editRenita.component.css']
})
export class ShoppingEditRenitaComponent implements OnInit {



  @ViewChild('nameInput') nameRef:ElementRef;
  @ViewChild('amountInput') amountRef:ElementRef;
  @Output() ingredientAdded= new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName=this.nameRef.nativeElement.value;
    const ingAmount=this.amountRef.nativeElement.value;
    const newIngredient= new Ingredient(ingName,ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
