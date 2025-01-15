self.onmessage = (event) => {
    let experience = event.data;
   const stop = setInterval(()=>{
     if(experience <= 0){
       clearInterval(stop);
       self.postMessage(experience)
     }else{
        experience = experience - 1000;
       self.postMessage(experience)
     }
    },1000)
    
 };