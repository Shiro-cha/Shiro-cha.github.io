module.exports ={
	verify_email : function(email){
		console.log(email.search("@"));
		if(email.search("@") != -1){
			return true;
		}else{
			return false;
		}
    },
    verify_phone : function(phone){
		
        if(Number(phone)){
			
			return true;
		}else{
			return false;
		}
    }
}
