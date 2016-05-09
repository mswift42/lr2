import {Injectable} from '@angular/core';


export class SliderImage {
  constructor(public  url: String, public title: String, public detail: String) {}
}


@Injectable()
export class SliderService {


  constructor() {}
  getSampleImages(): SliderImage[] {
    return [
      new SliderImage('/images/silkworm-nvim.png', 'Silkworm'
      , 'vim theme with a light background'),
      new SliderImage('/images/atomsoftcharcoalclojure.png', 'Soft-Charcoal',
      'Atom Theme with a dark background.')
    ];
  }

}
