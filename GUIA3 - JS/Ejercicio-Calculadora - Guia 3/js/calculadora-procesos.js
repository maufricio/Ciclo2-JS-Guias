(function(){
    if(window.addEventListener){
        window.addEventListener("load", iniciar, false);
    }else{
        window.attachEvent("onload", iniciar);
    }
    function iniciar(){
      
        const screen = document.getElementById("pantallaResultado");
        screen.placeholder = 0;
        var sumaPartes = 0, restaPartes = 0, multPartes = 1, divPartes = 1, divPartes2, residuoPartes = 1, residuoPartes2, raizPartes, powPartes;
        var numeroStringSuma, stringSplittedSuma, contadorBtnOperacion = 0;
        var numeroStringResta, stringSplittedResta;
        var numeroStringMult, stringSplittedMult;
        var numeroStringDiv, stringSplittedDiv;
        var numeroStringResiduo, stringSplittedResiduo;
        var numeroStringRaiz, stringSplittedRaiz;
        var numeroStringPow, stringSplittedPow;
        var sumaRes, restaRes, multRes, divRes, residuoRes,  inversaRes, raizRes, powRes;
        var contadorBtnEqual = 0;
        var tag = "";
        const object = {
            boton0:document.getElementById('button0').value,
            boton1:document.getElementById('button1').value,
            boton2:document.getElementById('button2').value,
            boton3:document.getElementById('button3').value,
            boton4:document.getElementById('button4').value,
            boton5:document.getElementById('button5').value,
            boton6:document.getElementById('button6').value,
            boton7:document.getElementById('button7').value,
            boton8:document.getElementById('button8').value,
            boton9:document.getElementById('button9').value,
            btnSuma: document.getElementById('btnPlus').value,
            btnResta: document.getElementById('btnLess').value, 
            btnDivide: document.getElementById('btnDivide').value, 
            btnMult: document.getElementById('btnMult').value, 
            btnResiduo: document.getElementById('btnResidue').value, 
            btnInversa: document.getElementById('btnInverse').value, 
            btnRaiz: document.getElementById('btnSqrt').value, 
            btnPotenciar: document.getElementById('btnPow').value
        }
        const numbers = [];

       var boton0 = document.getElementById('button0');
        if(boton0.addEventListener){
            boton0.addEventListener('click', function (){
                var numero = 'boton0';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }, false);    
        }else if(boton0.attachEvent){
            boton0.addEventListener('onclick', function (){
                var numero = 'boton0';
                screen.value = object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }); 
        }

        var boton1 = document.getElementById('button1');
        if(boton1.addEventListener){
            boton1.addEventListener('click', function (){
                var numero = 'boton1';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }, false);    
        }else if(boton1.attachEvent){
            boton1.addEventListener('onclick', function (){
                var numero = 'boton1';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }); 
        }

        var boton2 = document.getElementById('button2');
        if(boton2.addEventListener){
            boton2.addEventListener('click', function (){
                var numero = 'boton2';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }, false);    
        }else if(boton2.attachEvent){
            boton2.addEventListener('onclick', function (){
                var numero = 'boton2';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }); 
        }

        var boton3 = document.getElementById('button3');
        if(boton3.addEventListener){
            boton3.addEventListener('click', function (){
                var numero = 'boton3';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }, false);    
        }else if(boton3.attachEvent){
            boton3.addEventListener('onclick', function (){
                var numero = 'boton3';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }); 
        }

        var boton4 = document.getElementById('button4');
        if(boton4.addEventListener){
            boton4.addEventListener('click', function (){
                var numero = 'boton4';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }, false);    
        }else if(boton4.attachEvent){
            boton4.addEventListener('onclick', function (){
                var numero = 'boton4';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }); 
        }

        var boton5 = document.getElementById('button5');
        if(boton5.addEventListener){
            boton5.addEventListener('click', function (){
                var numero = 'boton5';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }, false);    
        }else if(boton5.attachEvent){
            boton5.addEventListener('onclick', function (){
                var numero = 'boton5';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }); 
        }

        var boton6 = document.getElementById('button6');
        if(boton6.addEventListener){
            boton6.addEventListener('click', function (){
                var numero = 'boton6';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }, false);    
        }else if(boton6.attachEvent){
            boton6.addEventListener('onclick', function (){
                var numero = 'boton6';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }); 
        }

        var boton7 = document.getElementById('button7');
        if(boton7.addEventListener){
            boton7.addEventListener('click', function (){
                var numero = 'boton7';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }, false);    
        }else if(boton7.attachEvent){
            boton7.addEventListener('onclick', function (){
                var numero = 'boton7';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }); 
        }

        var boton8 = document.getElementById('button8');
        if(boton8.addEventListener){
            boton8.addEventListener('click', function (){
                var numero = 'boton8';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }, false);    
        }else if(boton8.attachEvent){
            boton8.addEventListener('onclick', function (){
                var numero = 'boton8';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }); 
        }

        var boton9 = document.getElementById('button9');
        if(boton9.addEventListener){
            boton9.addEventListener('click', function (){
                var numero = 'boton9';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }, false);    
        }else if(boton9.attachEvent){
            boton9.addEventListener('onclick', function (){
                var numero = 'boton9';
                screen.value += object[numero];
                numbers.push(this.value);
                contadorBtnOperacion = 0;
            }); 
        }


        //Signos de operaciones

        var btnSuma = document.getElementById('btnPlus');
        if(btnSuma.addEventListener){
            btnSuma.addEventListener('click', function (){
                var signo = 'btnSuma';
                screen.value = object[signo];
                numbers.push(this.value);
                sumaPartes = 0;
                contadorBtnOperacion++;
                console.log(contadorBtnOperacion);
            }, false);    
        }else if(btnSuma.attachEvent){
            btnSuma.addEventListener('onclick', function (){
                var signo = 'btnSuma';
                screen.value = object[signo];
                numbers.push(this.value);
                sumaPartes = 0;
                contadorBtnOperacion++;
            }); 
        }
        var btnLess = document.getElementById('btnLess');
        if(btnLess.addEventListener){
            btnLess.addEventListener('click', function (){
                var signo = 'btnResta';
                screen.value = object[signo];
                numbers.push(this.value);
                contadorBtnOperacion++;
            }, false);    
        }else if(btnLess.attachEvent){
            btnLess.addEventListener('onclick', function (){
                var signo = 'btnResta';
                screen.value = object[signo];
                numbers.push(this.value);
                contadorBtnOperacion++;
            }); 
        }

        var btnDivide = document.getElementById('btnDivide');
        if(btnDivide.addEventListener){
            btnDivide.addEventListener('click', function (){
                var signo = 'btnDivide';
                screen.value = object[signo];
                numbers.push(this.value);
                contadorBtnOperacion++;
            }, false);    
        }else if(btnDivide.attachEvent){
            btnDivide.addEventListener('onclick', function (){
                var signo = 'btnDivide';
                screen.value = object[signo];
                numbers.push(this.value);
                contadorBtnOperacion++;
            }); 
        }

        var btnMult = document.getElementById('btnMult');
        if(btnMult.addEventListener){
            btnMult.addEventListener('click', function (){
                var signo = 'btnMult';
                screen.value = object[signo];
                numbers.push(this.value);
                contadorBtnOperacion++;
            }, false);    
        }else if(btnMult.attachEvent){
            btnMult.addEventListener('onclick', function (){
                var signo = 'btnMult';
                screen.value = object[signo];
                numbers.push(this.value);
                contadorBtnOperacion++;
            }); 
        }

        var btnResiduo = document.getElementById('btnResidue');
        if(btnResiduo.addEventListener){
            btnResiduo.addEventListener('click', function (){
                var signo = 'btnResiduo';
                screen.value = "("+object[signo]+") ";
                numbers.push(this.value);
                contadorBtnOperacion++;
            }, false);    
        }else if(btnResiduo.attachEvent){
            btnResiduo.addEventListener('onclick', function (){
                var signo = 'btnResiduo';
                screen.value = "("+object[signo]+") ";
                numbers.push(this.value);
                contadorBtnOperacion++;
            }); 
        }

        var btnInversa = document.getElementById('btnInverse');
        if(btnInversa.addEventListener){
            btnInversa.addEventListener('click', function (){
                var signo = 'btnInversa';
                screen.value = "("+object[signo]+") ";
                numbers.push(this.value);
                
            }, false);    
        }else if(btnInversa.attachEvent){
            btnInversa.addEventListener('onclick', function (){
                var signo = 'btnInversa';
                screen.value = "("+object[signo]+") ";
                numbers.push(this.value);
            }); 
        }

        var btnPotenciar = document.getElementById('btnPow');
        if(btnPotenciar.addEventListener){
            btnPotenciar.addEventListener('click', function (){
                var signo = 'btnPotenciar';
                screen.value = "("+object[signo]+") ";
                numbers.push(this.value);
            }, false);    
        }else if(btnPotenciar.attachEvent){
            btnPotenciar.addEventListener('onclick', function (){
                var signo = 'btnPotenciar';
                screen.value = "("+object[signo]+") ";
                numbers.push(this.value);
            }); 
        }

        var btnRaiz = document.getElementById('btnSqrt');
        if(btnRaiz.addEventListener){
            btnRaiz.addEventListener('click', function (){
                var signo = 'btnRaiz';
                screen.value = "("+object[signo]+") ";
                numbers.push(this.value);
            }, false);    
        }else if(btnRaiz.attachEvent){
            btnRaiz.addEventListener('onclick', function (){
                var signo = 'btnRaiz';
                screen.value = "("+object[signo]+") ";
                numbers.push(this.value);
            }); 
        }

        var btnReset = document.getElementById('btnReset');
        if(btnReset.addEventListener){
            btnReset.addEventListener('click', function(){
                numbers.splice(0, numbers.length);
            }, false);
        }

        
        //Signo de igual, donde se efectuarán las operaciones
        var btnEqual = document.getElementById('btnEqual');
        var historial = document.getElementById('historial-container');
        var btnResiduo = document.getElementById('btnResidue');
        btnEqual.addEventListener('click', function (){
                if(numbers.includes(btnSuma.value)){
                    if(contadorBtnOperacion < 2){
                        numeroStringSuma = numbers.join('');
                        stringSplittedSuma = numeroStringSuma.split('+');
                        for(let r = 0; r < stringSplittedSuma.length; r++){
                            sumaPartes = sumaPartes + parseInt(stringSplittedSuma[r], 10);
                        }
                        sumaRes = numeroStringSuma +" = "+ sumaPartes;
                        
                        screen.value =" ";
                        screen.value = sumaRes;
                        
                    }else{
                        contadorBtnOperacion = 0;
                        screen.value = "Operación indefinida";
                    }
                    contadorBtnEqual++;
                    tag += '<h4>'+contadorBtnEqual+'. Suma</h4>';
                    tag += '<input type="text" name="historialResultado" id="historialResultado" value="'+sumaRes+'" readonly>';
                } else if(numbers.includes(btnLess.value)){
                    
                    if(contadorBtnOperacion < 2){
                        numeroStringResta = numbers.join('');
                        stringSplittedResta = numeroStringResta.split('-');
                        for(let r = 0; r < stringSplittedResta.length; r++){
                            restaPartes =  - (restaPartes) - parseInt(stringSplittedResta[r], 10) ;
                        }
                        restaRes = numeroStringResta +" = "+ restaPartes;
                        screen.value =" ";
                        screen.value = restaRes;
                       
                    }else{
                        contadorBtnOperacion = 0;
                        screen.value = "Operación indefinida";
                    }
                    contadorBtnEqual++;
                    tag += '<h4>'+contadorBtnEqual+'. Resta</h4>';
                    tag += '<input type="text" name="historialResultado" id="historialResultado" value="'+restaRes+'" readonly>';
                }else if(numbers.includes(btnMult.value)){
                    if(contadorBtnOperacion < 2){
                        numeroStringMult = numbers.join('');
                        stringSplittedMult = numeroStringMult.split('x');

                        for(let r = 0; r < stringSplittedMult.length; r++){
                            multPartes = multPartes * parseInt(stringSplittedMult[r], 10);
                        }

                        multRes = numeroStringMult +" = "+ multPartes;
                        screen.value =" ";
                        screen.value = multRes;
                        
                    }else{
                        contadorBtnOperacion = 0;
                        screen.value = "Operación indefinida";
                    }
                    contadorBtnEqual++; 
                    tag += '<h4>'+contadorBtnEqual+'. Multiplicación</h4>';
                    tag += '<input type="text" name="historialResultado" id="historialResultado" value="'+multRes+'" readonly>';
                   
                }else if(numbers.includes(btnDivide.value)){
                    if(contadorBtnOperacion < 2){
                        numeroStringDiv = numbers.join('');
                        stringSplittedDiv = numeroStringDiv.split('/');

                        for(let r = 0; r < stringSplittedDiv.length; r++){
                            divPartes2 = (divPartes) * parseInt(stringSplittedDiv[r], 10) / divPartes; 
                        }
                        for(let p = 0; p < stringSplittedDiv.length-1; p++){
                            divPartes = parseInt(stringSplittedDiv[p], 10) / divPartes2;
                        }
                        /*for(let r = 0; r < stringSplittedDiv.length; r++){
                            divPartes = parseInt(stringSplittedDiv[r], 10) / divPartes; 
                        }*/

                        divRes = numeroStringDiv +" = "+ divPartes;
                        screen.value =" ";
                        screen.value = divRes;
                       
                    }else{
                        contadorBtnOperacion = 0;
                        screen.value = "Operación indefinida";
                    }   
                    contadorBtnEqual++;
                    tag += '<h4>'+contadorBtnEqual+'. División</h4>';
                    tag += '<input type="text" name="historialResultado" id="historialResultado" value="'+divRes+'" readonly>';
                  
                }else if(numbers.includes(btnResiduo.value)){
                    if(contadorBtnOperacion < 2){
                        numeroStringResiduo = numbers.join('');
                        stringSplittedResiduo = numeroStringResiduo.split('%');

                        for(let r = 0; r < stringSplittedResiduo.length; r++){
                            residuoPartes2 = (residuoPartes) * parseInt(stringSplittedResiduo[r], 10) / residuoPartes; 
                        }
                        for(let p = 0; p < stringSplittedResiduo.length-1; p++){
                            residuoPartes = parseInt(stringSplittedResiduo[p], 10) % residuoPartes2;
                        }
                        /*for(let r = 0; r < stringSplittedDiv.length; r++){
                            divPartes = parseInt(stringSplittedDiv[r], 10) / divPartes; 
                        }*/

                        residuoRes = numeroStringResiduo +" = "+ residuoPartes;
                        screen.value =" ";
                        screen.value = residuoRes;
                        
                    }else{
                        contadorBtnOperacion = 0;
                        screen.value = "Operación indefinida";
                    }   
                    contadorBtnEqual++;
                    tag += '<h4>'+contadorBtnEqual+'. Residuo</h4>';
                    tag += '<input type="text" name="historialResultado" class ="'+contadorBtnEqual+'" id="historialResultado" value="'+residuoRes+'" readonly>';
                }else if(numbers.includes(btnInversa.value)){
                    if(contadorBtnOperacion < 2){
                        if(residuoRes !== null){
                            inversaRes = "(INVRS) =  1/" + ( residuoPartes);
                            screen.value = " ";
                            screen.value = inversaRes;
                            tag += '<h4>'+contadorBtnEqual+'. Inversa</h4>';
                            tag += '<input type="text" name="historialResultado" id="historialResultado" value="'+inversaRes+'" readonly>';
                        }else if(divRes !== null){
                            inversaRes = "(INVRS) =  1/" + ( divPartes);
                            screen.value = " ";
                            screen.value = inversaRes;
                            tag += '<h4>'+contadorBtnEqual+'. Inversa</h4>';
                            tag += '<input type="text" name="historialResultado" id="historialResultado" value="'+inversaRes+'" readonly>';
                        }
                    }else{
                        contadorBtnOperacion = 0;
                        screen.value = " ";
                    }   
                    contadorBtnEqual++;
                }else if(numbers.includes(btnRaiz.value)){
                    if(contadorBtnOperacion < 2){
                        numeroStringRaiz = numbers.join('');
                        stringSplittedRaiz = numeroStringRaiz.split('√');

                        for(let r = 0; r < stringSplittedRaiz.length; r++){
                            raizPartes = parseInt(stringSplittedRaiz[r], 10);
                        }
                        raizPartes = Math.sqrt(raizPartes);
                        var raizRedondeada = Math.round(raizPartes*100)/100;
                        raizRes = numeroStringRaiz +" = " + raizRedondeada;
                        screen.value =" ";
                        screen.value = raizRes;
                        
                    }else{
                        contadorBtnOperacion = 0;
                        screen.value = "Operación indefinida";
                    }
                    contadorBtnEqual++; 
                    tag += '<h4>'+contadorBtnEqual+'. Raíz</h4>';
                    tag += '<input type="text" name="historialResultado" id="historialResultado" value="'+raizRes+'" readonly>';
                }else if(numbers.includes(btnPotenciar.value)){
                    if(contadorBtnOperacion < 2){
                        numeroStringPow = numbers.join('');
                        stringSplittedPow = numeroStringPow.split('x^2');

                        for(let r = 0; r < stringSplittedPow.length; r++){
                            powPartes = Math.pow(parseInt(stringSplittedPow[r], 10), 2);
                        }
                        powRes = "(x^2)" + stringSplittedPow +" = " + powPartes;
                        screen.value =" ";
                        screen.value = powRes;
                        
                    }else{
                        contadorBtnOperacion = 0;
                        screen.value = "Operación indefinida";
                    }
                    contadorBtnEqual++; 
                    tag += '<h4>'+contadorBtnEqual+'. Raíz</h4>';
                    tag += '<input type="text" name="historialResultado" id="historialResultado" value="'+powRes+'" readonly>';
                }
                
                console.log(contadorBtnEqual); 
                historial.innerHTML = tag;
        }, false);   
        function isNumber(num){
             return typeof num === 'number' && isFinite(num);
        }
    }
})();