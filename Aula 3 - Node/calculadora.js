const validate=require("validate.js");
const calculadoraConstraint=require("./validate")
const Calculadora = {

    soma(num1,num2){
        const validaOperacao=validate({num1:num1,num2:num2},calculadoraConstraint.calculadoraConstraint);
        console.log("Valida Operação: ",validaOperacao);
        if(validaOperacao!==undefined){
            return 'Error';
        }
        else{
            return num1+num2;
        }

        
    },

    divisao(num1,num2){
        
        const validaOperacao=validate({num1:num1,num2:num2},calculadoraConstraint.calculadoraConstraint);
        console.log("Valida Operação div: ",validaOperacao);
        if(validaOperacao!==undefined){
            return 'Error';
        }else if(num2===0){
            return 'Impossível realizar divisão por 0';
        }

        return num1/num2;
    },

    multiplicacao(num1,num2){
        const validaOperacao=validate({num1:num1,num2:num2},calculadoraConstraint.calculadoraConstraint);
        if(validaOperacao!==undefined){
            return 'Error';
        }
        return num1*num2;
    },

    subtracao(num1,num2){
        const validaOperacao=validate({num1:num1,num2:num2},calculadoraConstraint.calculadoraConstraint);
        if(validaOperacao!==undefined){
            return 'Error';
        }
        let sub=0;

        return num1-num2;
    }

};

module.exports=Calculadora;