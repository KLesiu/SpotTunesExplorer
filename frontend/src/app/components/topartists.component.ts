import { Component,inject ,Output} from '@angular/core';
import { DashboardComponent } from './dashboard.component';

@Component({
    selector:'app-topartists',
    standalone:true,
    imports:[],
    template: `
    <section>
        TopArtists
    </section>
    `,
})
export class TopArtistsComponent{
    private artists = inject(DashboardComponent).artists
    ngOnInit(){
        console.log(this.artists)
    }
}
