import { Component,inject ,Output} from '@angular/core';
import { NgFor } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@Component({
    selector:'app-toptracks',
    standalone:true,
    imports:[NgFor],
    template: `
    <section class="flex flex-col items-center w-[100%] h-[100%]">
        <h2 class="text-5xl font-bold border-b-2 border-b-black w-[100%]">TopTracks</h2>
        <ol class="list-decimal w-[80%]">
            <li class="text-xl w-[100%] bg-black/5 m-2 p-1" *ngFor="let artist of tracks.items">
                {{artist.name}}
            </li>
        </ol>
    </section>
    `,
})
export class TopTracksComponent{
    public tracks = inject(DashboardComponent).tracks

}

