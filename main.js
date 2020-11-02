function fin()
{
	var label = document.getElementById('label');
	label.style.opacity = '0';
}

function fout()
{
	var search = document.getElementById('search');
	var label = document.getElementById('label');

	if(!(search.value == ''))
		label.style.opacity = '0';
	else
		label.style.opacity = '1';

}