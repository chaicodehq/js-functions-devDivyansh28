/**
 * 🚂 Dabbawala Delivery Tracker - Closures
 *
 * Mumbai ke famous dabbawala system ka tracker bana! Yahan closure ka
 * use hoga — ek function ke andar private state rakhna hai jo bahar se
 * directly access nahi ho sakta. Sirf returned methods se access hoga.
 *
 * Function: createDabbawala(name, area)
 *
 * Returns an object with these methods (sab ek hi private state share karte hain):
 *
 *   - addDelivery(from, to)
 *     Adds a new delivery. Returns auto-incremented id (starting from 1).
 *     Each delivery: { id, from, to, status: "pending" }
 *     Agar from ya to empty/missing, return -1
 *
 *   - completeDelivery(id)
 *     Marks delivery as "completed". Returns true if found and was pending.
 *     Returns false if not found or already completed.
 *
 *   - getActiveDeliveries()
 *     Returns array of deliveries with status "pending" (copies, not references)
 *
 *   - getStats()
 *     Returns: { name, area, total, completed, pending, successRate }
 *     successRate = completed/total as percentage string "85.00%" (toFixed(2) + "%")
 *     Agar total is 0, successRate = "0.00%"
 *
 *   - reset()
 *     Clears all deliveries, resets id counter to 0. Returns true.
 *
 * IMPORTANT: Private state (deliveries array, nextId counter) should NOT
 *   be accessible as properties on the returned object.
 *   Two instances created with createDabbawala should be completely independent.
 *
 * Hint: Use closure to keep variables private. The returned object's methods
 *   form a closure over those variables.
 *
 * @param {string} name - Dabbawala's name
 * @param {string} area - Delivery area
 * @returns {object} Object with delivery management methods
 *
 * @example
 *   const ram = createDabbawala("Ram", "Dadar");
 *   ram.addDelivery("Andheri", "Churchgate"); // => 1
 *   ram.addDelivery("Bandra", "CST");         // => 2
 *   ram.completeDelivery(1);                   // => true
 *   ram.getStats();
 *   // => { name: "Ram", area: "Dadar", total: 2, completed: 1, pending: 1, successRate: "50.00%" }
 */
export function createDabbawala(name, area) {
  let id = 0;
  let deliveries =[];
  return {
     addDelivery : (from , to) => {
      id = id +1;
      if(from===undefined || to===undefined || from.length===0 || to.length===0) return -1;
      deliveries.push({ id : id, from : from, to : to, status: "pending" });
      return id;
    },
    completeDelivery : (id) => {
      for(const order of deliveries){
        if(order.id===id && order.status==="pending"){
          order.status="completed";
          return true;
        }
      }
      return false;
     },

     getActiveDeliveries : () => {
      const activeDelivery = [];
      for(const order of deliveries){
        if(order.status==="pending") activeDelivery.push(order);
      }
      return activeDelivery;
     }
     ,
     getStats : () => {
      let total = 0;
      let completed = 0;
      let pending = 0;
      let successRate;
    
      for(const order of deliveries){
          total+=1;
          if(order.status==="completed") completed+=1;
          if(order.status==="pending")  pending+=1;
      }
      if(total===0){
        successRate = "0.00%";
      }else{

        successRate = ((completed/total)*100).toFixed(2) + '%';
      }
      return {name : name , area : area , total : total , completed : completed, pending : pending , successRate : successRate};
     },

     reset : () =>{
      deliveries.splice(0);
      id = 0;
      return true;
     }

  }
}
