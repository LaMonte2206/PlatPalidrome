import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import CheckViewControl from '../check/check.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        
        userInput: '',
        error: ''
    };
    enter() {
        let word = this.context.userInptu.trim(),
        wordLowercase = word.toLowerCase()
        if ( this.utils.isEmpty(word)) {
          this.context.error = "Please enter a word";
          return;  
        }
        this.navigator.navigate(CheckViewControl, {
            parameters: {
                word: wordLowercase
            
            }
        }
        )}
}

register.viewControl('home-vc', HomeViewControl);
