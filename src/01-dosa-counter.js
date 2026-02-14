/**
 * 🍳 Dosa Counter - Order Calculator
 *
 * Raju ka South Indian dosa counter hai Bangalore mein. Customer aata hai,
 * dosa ka type bolta hai, kitne chahiye bolta hai, aur spicy chahiye ya nahi.
 * Tujhe order calculate karke bill banana hai. 
 *
 * Rules:
 *   - Dosa prices: plain=40, masala=60, onion=50, butter=70, paper=90, cheese=80
 *   - quantity ka default value 1 hai (agar nahi diya toh 1 maano)
 *   - isSpicy ka default value false hai
 *   - Agar isSpicy true hai, toh har dosa pe Rs 10 extra lagao
 *   - pricePerDosa = base price + (10 if spicy)
 *   - total = pricePerDosa * quantity
 *   - Return: { type, quantity, pricePerDosa, total }
 *   - Hint: Use default parameters, object return
 *
 * Validation:
 *   - Agar type string nahi hai ya unknown type hai, return null
 *   - Agar quantity positive number nahi hai (<=0 ya NaN), return null
 *
 * @param {string} type - Dosa type
 * @param {number} [quantity=1] - Number of dosas
 * @param {boolean} [isSpicy=false] - Add spicy for Rs 10 extra
 * @returns {{ type: string, quantity: number, pricePerDosa: number, total: number } | null}
 *
 * @example
 *   calculateDosaOrder("masala", 2, true)
 *   // => { type: "masala", quantity: 2, pricePerDosa: 70, total: 140 }
 *
 *   calculateDosaOrder("plain")
 *   // => { type: "plain", quantity: 1, pricePerDosa: 40, total: 40 }
 */
export function calculateDosaOrder(type, quantity = 1, isSpicy = false) {
  
  if(typeof(type)!='string') return null;

  if(quantity<=0 || typeof(quantity)!='number' || Number.isNaN(quantity)) return null;
  let pricePerDosa = 0;
  let total = 0;

  switch (type){
    case "plain":
      if(isSpicy){
        pricePerDosa = 40 + 10;
      }else{
        pricePerDosa = 40;
      }

      total = pricePerDosa * quantity ;
       return {type : type , quantity : quantity , pricePerDosa : pricePerDosa , total : total};
    case "masala":
      if(isSpicy){
        pricePerDosa = 60 + 10;
      }else{
        pricePerDosa = 60;
      }

      total = pricePerDosa * quantity ;
       return {type : type , quantity : quantity , pricePerDosa : pricePerDosa , total : total};
      
    case "onion":
        if(isSpicy){
        pricePerDosa = 50 + 10;
      }else{
        pricePerDosa = 50;
      }

      total = pricePerDosa * quantity ;
       return {type : type , quantity : quantity , pricePerDosa : pricePerDosa , total : total};
    case "butter":
      if(isSpicy){
        pricePerDosa = 70 + 10;
      }else{
        pricePerDosa = 70;
      }

      total = pricePerDosa * quantity ;
       return {type : type , quantity : quantity , pricePerDosa : pricePerDosa , total : total};
    case "paper":
      if(isSpicy){
        pricePerDosa = 90 + 10;
      }else{
        pricePerDosa = 90;
      }

      total = pricePerDosa * quantity ;
       return {type : type , quantity : quantity , pricePerDosa : pricePerDosa , total : total};
    case "cheese":
      if(isSpicy){
        pricePerDosa = 80 + 10;
      }else{
        pricePerDosa = 80;
      }

      total = pricePerDosa * quantity ;
       return {type : type , quantity : quantity , pricePerDosa : pricePerDosa , total : total};
    default :
         return null;
  }

}
