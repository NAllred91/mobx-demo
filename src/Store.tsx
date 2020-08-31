import {observable, computed, autorun, when} from 'mobx';

class Store {
    @observable
    stringObservable = '';

    @observable
    firstNumber = 1;

    @observable
    secondNumber = 1;

    @computed
    get bothNumbersEven() {
        return this.firstNumber % 2 === 0 && this.secondNumber % 2 === 0
    }

    constructor() {
        autorun(() => {
            // Everytime firstNumber changes, it will get logged.
            console.log('first number is: ' + this.firstNumber);
        })

        // When firstNumber is greater than 5, the alert will be displayed.
        when(
            () => this.firstNumber > 5,
            () => alert('First number is greater than 5!')
        )
    }
}

export default new Store();