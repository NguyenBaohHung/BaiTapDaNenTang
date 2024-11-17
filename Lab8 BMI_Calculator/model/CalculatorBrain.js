class CalculatorBrain {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
        this.bmi = null;
    }

    calculateBMI() {
        this.bmi = Number(this.weight) / Math.pow(Number(this.height) / 100, 2);
        return this.bmi.toFixed(1);
    }

    getResult(){
        if(this.bmi >= 25){
            return 'Overweight';
        }else if(this.bmi > 18.5){
            return 'Normal';
        }else{
            return 'Underweight';
        }
    }

    getInterpretation(){
        if(this.bmi >= 25){
            return 'You have a higher than normal body weight. Try to exercise more.';
        }else if(this.bmi >= 18.5){
            return 'You have a normal body weight. Good job!';
        }else{
            return 'You have a lower than normal body weight. You can eat a bit more.';
        }
    }

};






export default CalculatorBrain;