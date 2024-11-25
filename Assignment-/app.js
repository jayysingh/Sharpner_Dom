function add(value,callback){
    setTimeout(()=>{
      const newValue = value+3;
      console.log("Added 3");
      callback(newValue);
    },2000);
    
  }
  function multiply(value){
    setTimeout(()=>{
      const newValue = value*2;
      console.log("Multiplied by 2");
      callback(newValue);
      
    },1000);
    
  }
  const initialvalue = 2;
  
  add(initialvalue,()=>{
    multiply(newValue,()=>{
      console.log("Final result :" newValue);
    });
  });
  
  