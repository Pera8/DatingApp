import { Component, inject } from '@angular/core';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {
  memberService = inject(MembersService);
   

  ngOnInit(): void{
    if (this.memberService.members().length === 0) this.loadMembers();
  }

  loadMembers(){
    this.memberService.getMembers()
  }

}
