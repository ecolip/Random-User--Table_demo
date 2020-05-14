$.ajax({
	url: 'https://randomuser.me/api/',
	data:{results: 100},
	dataType: 'json',
	success: function(data) {
  //     console.log(typeof(data));
  //     console.log(data);
	  
	  var result = data.results;
	//   console.log(result);
	  $.each(result, function(index, user){
		var name = user.name.title+' '+user.name.first+' '+user.name.last;
		var age = user.dob.age;
		var phone = user.phone;
		var email = user.email;
		
		
		var trTag = $('<tr>');
		
		var numTag = $('<th scope="row">');
		numTag.text(index+1);
		
		var nameTag = $('<td class="name">');
		nameTag.text(name);
		
		var ageTag = $('<td class="age">');
		ageTag.text(age);
		
		var phoneTag = $('<td class="phone">');
		phoneTag.text(phone);

		var emailTag = $('<td class="email">');
		emailTag.text(email);
		
		$('tbody').append(trTag);
		$('tbody tr').eq(index).append(numTag).append(nameTag).append(ageTag).append(phoneTag).append(emailTag);
	  });
	  
	}
  });