
/*quill js*/
/*quill js editor*/
var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [ 'link', 'image', 'video', 'formula' ],          // add's image support
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    ['clean']                                         // remove formatting button
];

var quill = new Quill('#editor', {
  modules: {
    toolbar: toolbarOptions
  },
  theme: 'snow'
});

/*form submit*/
$('#form_message').submit(function(e){
	e.preventDefault();

	var formData = new FormData(this);
        formData.append('content', quill.root.innerHTML);

	var object = JSON.stringify(Object.fromEntries(formData));

	$.ajax({
        type    : 'POST',
        url     : '/sendMail',
        data    : object,
        processData : false,
		contentType : 'application/json',
        success : function(data){
            if (data.status == 200 ){
                var message_box = document.querySelector('.message-box');
                    message_box.classList.remove('hidden');
                    document.querySelector('#message_content').innerHTML = data.values;

                    setTimeout(function(){
                        message_box.classList.add('hidden');
                        var message_form = document.querySelector('.message-form');
                        message_form.classList.add('hidden');
                    }, 5000);
            }
        }

    });
});