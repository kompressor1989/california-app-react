
function Alert() {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    
    const alert = (message, type) => {
      if(document.querySelector('.alert')) {
        document.querySelector('.alert').remove()
      }
      
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Закрыть"></button>',
        '</div>'
      ].join('')
    
      alertPlaceholder.append(wrapper)
    }
    
    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
      alertTrigger.addEventListener('click', () => {
        alert('Thank you for signing up!', 'success')
      })
    }

    return (
		window.addEventListener('load', function() {
            Alert();}
	));
}

export default Alert