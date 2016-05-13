import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class CheckViewControl extends BaseViewControl {
    templateString: string = require('./check.vc.html');

    context: {
        userInput: string,
        userInputReverse: string,
        result: string
    };
    
    navigatedTo(parameter: {word:string}) {
        let word = parameter.word;
        this.context.userInput = word;
        this.context.userInputReverse = this.reverseString(word);
        console.log(this.context.userInputReverse);
        if (this.context.userInput === this.context.userInputReverse) {
            this.context.result = "You've got it!!!"
        } else {
            this.context.result = "Nope. Not this time..."
        }
    }
reverseString(str:string) {
    var temp ='';
    var i = str.length;
    
    while (i > 0) {
        temp += str.substring(i -1, i);
        i--;
    }
    
    return temp;
}

}

register.viewControl('check-vc', CheckViewControl);
