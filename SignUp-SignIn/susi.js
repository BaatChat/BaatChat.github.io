var dc = document;

function bdy()
{
	//alert("Hi");
}

function gebi(a, b)
{
	if(b == undefined)
		return dc.getElementById(a);
	if(b == 0)
		return dc.getElementById(a);
	if(b == 1)
		return dc.getElementById(a).innerHTML;
}

function gebc(a, b)
{
	if(b == undefined)
		return dc.getElementByClass(a);
	if(b == 0)
		return dc.getElementByClass(a);
	if(b == 1)
		return dc.getElementByClass(a).innerHTML;
}