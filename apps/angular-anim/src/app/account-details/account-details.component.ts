import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'libs/shared/services/src/lib/account';
import { AccountService } from 'libs/shared/services/src/lib/account.service';

@Component({
  selector: 'angular-anim-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent implements OnInit {

  dataLoaded = false;
  accounts: Account[]=[];

  constructor(private route: ActivatedRoute, private accountService: AccountService){}
    currAccount: Account;
    
  ngOnInit(){

    this.accountService.getAccounts().subscribe((accounts: Account[]) => {
      this.accounts = accounts;
      this.currAccount = accounts.filter(acc => acc.id == this.route.snapshot.params['id'])[0];
      console.log(this.currAccount);
    });
  }
}
