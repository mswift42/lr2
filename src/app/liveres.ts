import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdButton} from '@angular2-material/button';
import {ResumeCat} from './resume-cat/resume-cat';
import {SidenavCategory, SidenavService} from './sidenavservice/sidenavservice';
import {Resume, ResService, Contact} from './res-service/res-service';
import {ContactComponent} from './contact-component/contact-component';
import {AboutMe} from './about-me-component/about-me-component';
import {ProjectsComponent} from './projects-component/projects-component';
import {EducationsComponent} from './educations-component/educations-component';
import {EmploymentList} from './employment-list/employment-list';
import {SkillsList} from './skills-list/skills-list';
import {LanguageList} from './language-list/language-list';
import {AwardList} from './award-list/award-list';
import {SliderComponent} from './slider-component/slider-component';
import {SliderService} from './slider-service/slider-service';

@Component({
    selector: 'liveres-app',
    providers: [ROUTER_PROVIDERS, SidenavService, ResService, SliderService],
    templateUrl: 'app/liveres.html',
    directives: [ROUTER_DIRECTIVES, MdToolbar, MD_SIDENAV_DIRECTIVES,
                 MD_LIST_DIRECTIVES, MdButton, ResumeCat, ContactComponent,
                 AboutMe, ProjectsComponent, EducationsComponent,
                 EmploymentList, SkillsList, LanguageList,
                 AwardList, SliderComponent],
    styleUrls: ['app/liveres.css'],
    pipes: []
})
@RouteConfig([
])
export class LiveresApp {
    cats: SidenavCategory[];
    sampleres: Resume;
    contact: Contact;
    constructor(sidenavservice: SidenavService, resservice: ResService) {
        this.cats = sidenavservice.getCategories();
        this.contact = resservice.getSampleResume().contact;
    }
}
