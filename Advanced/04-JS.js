var t=0, m=10;
var res = fParent(t,m);
console.log(res);

function fParent(a, b) {
	var vParent = "parent";

	function fChild (c) {
		var vChild = "child";
		return c+vChild;
	}
	return a+b+vParent+fChild(a);
}

// "10parent0child"
