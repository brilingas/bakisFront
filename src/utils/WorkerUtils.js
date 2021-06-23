
export const isWorkerEmpty = (worker) => {
    return(!Object.values(worker).every(val => val));
  }
export const updateField=(event, worker,setWorker)=>{
    const newWorker = {...worker };
    newWorker[event.target.id] = event.target.value;
    setWorker(newWorker);
  }    
