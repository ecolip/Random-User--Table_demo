$.ajax({
	url: 'https://randomuser.me/api/',
	data:{results: 30},
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
		
		
		var trDom = $('<tr>');
		
		var numDom = $('<th scope="row">');
		numDom.text(index+1);
		
		var nameDom = $('<td class="name">');
		nameDom.text(name);
		
		var ageDom = $('<td class="age">');
		ageDom.text(age);
		
		var phoneDom = $('<td class="phone">');
		phoneDom.text(phone);

		var emailDom = $('<td class="email">');
		emailDom.text(email);
		
		$('tbody').append(trDom);
		$('tbody tr').eq(index).append(numDom).append(nameDom).append(ageDom).append(phoneDom).append(emailDom);
	  });
	  
	}
  });