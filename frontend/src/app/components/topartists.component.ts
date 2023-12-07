import { Component,inject ,Output} from '@angular/core';
import { NgFor } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@Component({
    selector:'app-topartists',
    standalone:true,
    imports:[NgFor],
    template: `
    <section class="flex flex-col items-center w-[100%] h-[100%]">
        <h2 class="text-5xl font-bold border-b-2 border-b-black">TopArtists</h2>
        <ol class="list-decimal w-[80%]">
            <li class="text-xl w-[100%] bg-black/5 m-2 p-1" *ngFor="let artist of artists.items">
                {{artist.name}}
            </li>
        </ol>
    </section>
    `,
})
export class TopArtistsComponent{
    public artists = inject(DashboardComponent).artists
    ngOnInit(){
        console.log(this.artists)
    }
}
