const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


let currentActive = 1

// Function to increment the index of our current active
// index. If the index is at the end and the user tries to
// increment again it will keep it at the end
next.addEventListener('click', () => {
	currentActive++
	
	if(currentActive > circles.length){
		currentActive = circles.length
	}

	update()
})

// Function to decrement the index of our current active
// index. If the index is at the begining and the user tries to
// decrement again, set index at 1
prev.addEventListener('click', () => {
	currentActive--
	
	if(currentActive < 1){
		currentActive = 1
	}

	update()
	
})

// Update the circles to either have the active class or not have the atcive class
// based upon their index.
function update() {
	circles.forEach((circle, idx) =>{
		if(idx < currentActive){
			circle.classList.add('active')
		}
		else{
			circle.classList.remove('active')
		}
	})

	const actives = document.querySelectorAll('.active')

	progress.style.width = ((actives.length -1) / (circles.length-1)) * 100 + '%'

	if(currentActive === 1) {
		prev.disabled = true
	}
	else if(currentActive === circles.length) {
		next.disabled = true
	}
	else{
		prev.disabled = false
		next.disabled = false
	}

}