function validar() {

    const nome = formuser.nome.value;
    const telefone = formuser.telefone.value;
    const email = formuser.email.value;
    
    const regexHasNumber = /\d/;

    if(regexHasNumber.test(nome)) {
        alert("O campo nome não pode conter números!");
        formuser.nome.focus();
        return false;   
    }

    if(nome == "") {
        alert("O campo nome não pode ser vazio.");
        formuser.nome.focus();
        return false;
    }

    if(telefone == "") {
        alert("O campo telefone não pode ser vazio.");
        formuser.telefone.focus();
        return false;
    }

    if(telefone.length < 14) {
        alert("O campo telefone deve ter pelo menos 10 dígitos. (DDD + número)");
        formuser.telefone.focus();
        return false;
    }

    if(email.indexOf("@") == -1) {
        alert("Preencha o campo email corretamente.");
        formuser.email.focus();
        return false;
    }

    if(email == "") {
        alert("O campo email não pode ser vazio.");
        formuser.email.focus();
        return false;
    }

    alert("Formulário enviado com sucesso!");

}

function fMasc(objeto, mascara) {
        obj = objeto;
        masc = mascara;
        setTimeout("fMascEx()", 1);
}
function fMascEx() {
    obj.value = masc(obj.value)
}

function maskTel(tel) {
        tel = tel.replace(/\D+/g, '');
        tel = tel.replace(/(\d{2})(\d)/, '($1) $2');
        tel = tel.replace(/(\d{4})(\d)/, '$1-$2');
        tel = tel.replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3');
        tel = tel.replace(/(-\d{4})\d+?$/, '$1');
        
        return tel;
}
