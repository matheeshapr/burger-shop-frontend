import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ItemService } from '../../service/items/item'; 
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit{
  
  itemForm: FormGroup;
  itemList: any[] = [];

  constructor(
    private itemService: ItemService,
    private fb: FormBuilder
  ){
    this.itemForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      imageUrl: ['']

    })
  }

   ngOnInit(): void {
    this.loadItems();
  }

  loadItems(){
    this.itemService.getItems().subscribe({
      next: (data) => {
        this.itemList = data;
        console.log(data);
      }
    })
  }
}