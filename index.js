jQuery(document).ready(function($){

    $("#contact-form").submit(function(){

         $(".succes_msg").html('').hide();
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        email_val = $("input[name=email]").val();
        name_val = $("input[name=name]").val();
        subject_val = $("input[name=subject]").val();
        // message_val = $("input[name=message]").val();
        // const message_val = document.getElementById('message');
        message_val = $("#message").val()
        errors = "";
        $(".email-error").html(' Tavo paštas i kuri tikrai negausi spam').show();
        $(".name-error").html('Tavo vardas').show();
        $(".subject-error").html('Subject').show();
        $(".message-error").html('Tavo nematomas pranešimas').show();
        $(".succes_msg").html('').show();

        if(!email_val.match(mailformat))
        {
            errors = errors + "email";
        $(".email-error").html(' Tavo paštas i kuri tikrai negausi spam <div class="text-danger">Jis būtinas</div>').show();
        }

        if(name_val == "")
        {
            errors = errors + "name";
            $(".name-error").html('Tavo vardas <div class="text-danger">Jis būtinas</div>').show();
        }
        if(subject_val == "")
        {
            errors = errors + "subject";
            $(".subject-error").html('Subject <div class="text-danger">Jis būtinas</div>').show();
        }
        if(message_val == "")
        {
            errors = errors + "message";
            $(".message-error").html('Tavo nematomas pranešimas <div class="text-danger">Jis būtinas</div>').show();
        }

         if(errors == "")
         {
            $(".succes_msg").html('Žinutė sėkmingai išsisiuntė').show();
         }
        return false;
    })
});
