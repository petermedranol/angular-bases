import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
 // This is the input that we are going to receive from the parent component
@Component({
  selector: 'dbz-list',
  templateUrl: 'list.component.html'
})

export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number) {
  //   this.onDelete.emit(index);
  // }

  onDeleteCharacterById(id?: string) {
    if(!id) return;
    this.onDelete.emit(id);
  }

}
