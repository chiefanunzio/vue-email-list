function mail() {


    $.ajax({

        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        method: 'GET',
        success: function (data) {

            const res = data.response;
            $('ul').append(`<li>`+ res + `</li>`)
        },
        error: function () {

            alert('errore bro');
        }

    });
};

function generateMail() {
    
    let i = 0 ;
    while(i<10){
        setTimeout(function () { 
            mail();
            
        }, 1000 * i);
        i++
        }
   

};

function init() {
    const btn = $('button');
    btn.click(generateMail);
    
};

$(init);