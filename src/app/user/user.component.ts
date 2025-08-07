import { Component , Input , input , computed , Output, EventEmitter, output} from '@angular/core';
import { type User} from './user.model';
import { CardComponent } from "../shared/card/card.component";

// type User = {
//     id: string;
//     avatar: string;
//     name:string;
// }


@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  // avatar = input.required<string>();
  // name = input.required<string>();
  @Output() select = new EventEmitter();
  // select = output<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });
  get imagePath() {
    return 'assets/users/' + this.user.avatar ;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
