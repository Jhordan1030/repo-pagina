window.onload = function() {
    // Obtener los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const nombre = params.get('nombre');
    const apellido = params.get('apellido');
    const saldo = params.get('saldo') ? parseFloat(params.get('saldo')) : 0;

    // Verificar si los parámetros existen antes de usarlos
    document.getElementById('nombre','apellido').innerText = nombre ? `Propietario: ${nombre} ${apellido}` : 'Nombre no proporcionado';
    document.getElementById('saldo').innerText = saldo.toFixed(2);

    document.getElementById('btnDepositar').onclick = function(){
        const montoDeposito = parseFloat(document.getElementById('deposito').value);
        if(!isNaN(montoDeposito) && montoDeposito > 0){
            const saldoActual = parseFloat(document.getElementById('saldo').innerText);
            const  nuevoSaldo = saldoActual + montoDeposito;
            document.getElementById('saldo').innerText = nuevoSaldo.toFixed(2);
            document.getElementById('deposito').value = '';        
        }else{
            alert('Ingrese un monto válido para depositar.')
        }
    }

    document.getElementById('btnRetirar').onclick = function(){
        const montoRetiro = parseFloat(document.getElementById('retiro').value);
        if(!isNaN(montoRetiro) && montoRetiro > 0){
            const saldoActual = parseFloat(document.getElementById('saldo').innerText);
            if(montoRetiro <= saldoActual){
                const  nuevoSaldo = saldoActual - montoRetiro;
                document.getElementById('saldo').innerText = nuevoSaldo.toFixed(2);
                document.getElementById('retiro').value = '';  
            }else{
                alert('Saldo insuficiente.')  
            }    
        }else{
            alert('Ingrese un monto válido para retirar.')
        }
        
    };
};
