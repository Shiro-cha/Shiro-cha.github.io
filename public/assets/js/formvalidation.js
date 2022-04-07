$(function(){
    $("#contactForm").on("submit",function(evt){
        evt.preventDefault();
		var data =  $("#contactForm").serialize();
        $.ajax({
            url: "/validation",
            method:"POST",
            data:data,
            success:function(reponse){
				let data = JSON.parse(reponse);
				$("#errornom").html(data.errornom);
				$("#erroremail").html(data.erroremail);
				$("#errorphone").html(data.errorphone);
				$("#errormessage").html(data.errormessage);
				if(data.success){
					$("#success").html(data.successString);
				}
            }
        });
    });
});
