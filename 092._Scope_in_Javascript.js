	// 	গ্লোবাল স্কোপ (Global Scope): 
   var globalVariable = "I am a global variable";
	
	function globalFunction() {
	  console.log(globalVariable);
	}
	
	globalFunction();
   // লোকাল স্কোপ (Local Scope): 
   function localScopeExample() {
      var localVariable = "I am a local variable";
      console.log(localVariable);
    }
    
    localScopeExample(); // আউটপুট: I am a local variable
    
    console.log(localVariable); // এক্সেপশন: localVariable ডিফাইন্ড নেই
     