/**
 * 🍱 Mumbai Tiffin Service - Plan Builder
 *
 * Mumbai ki famous tiffin delivery service hai. Customer ka plan banana hai
 * using destructuring parameters aur rest/spread operators.
 *
 * Functions:
 *
 *   1. createTiffinPlan({ name, mealType = "veg", days = 30 })
 *      - Destructured parameter with defaults!
 *      - Meal prices per day: veg=80, nonveg=120, jain=90
 *      - Agar mealType unknown hai, return null
 *      - Agar name missing/empty, return null
 *      - Return: { name, mealType, days, dailyRate, totalCost }
 *
 *   2. combinePlans(...plans)
 *      - Rest parameter! Takes any number of plan objects
 *      - Each plan: { name, mealType, days, dailyRate, totalCost }
 *      - Return: { totalCustomers, totalRevenue, mealBreakdown }
 *      - mealBreakdown: { veg: count, nonveg: count, ... }
 *      - Agar koi plans nahi diye, return null
 *
 *   3. applyAddons(plan, ...addons)
 *      - plan: { name, mealType, days, dailyRate, totalCost }
 *      - Each addon: { name: "raita", price: 15 }
 *      - Add each addon price to dailyRate
 *      - Recalculate totalCost = new dailyRate * days
 *      - Return NEW plan object (don't modify original)
 *      - addonNames: array of addon names added
 *      - Agar plan null hai, return null
 *
 * Hint: Use { destructuring } in params, ...rest for variable args,
 *   spread operator for creating new objects
 *
 * @example
 *   createTiffinPlan({ name: "Rahul" })
 *   // => { name: "Rahul", mealType: "veg", days: 30, dailyRate: 80, totalCost: 2400 }
 *
 *   combinePlans(plan1, plan2, plan3)
 *   // => { totalCustomers: 3, totalRevenue: 7200, mealBreakdown: { veg: 2, nonveg: 1 } }
 */
export function createTiffinPlan({ name, mealType = "veg", days = 30 } = {}) {

  const mealtypes = ["veg", "nonveg" , "jain"];
 if( !mealtypes.includes(mealType) || !name || name.length===0) return null;

 let dailyRate = null;
 if(mealType==="veg") dailyRate = 80;
 if(mealType==="nonveg") dailyRate = 120;
 if(mealType==="jain") dailyRate = 90;

 return {name: name , mealType : mealType , days :days , dailyRate: dailyRate , totalCost : dailyRate * days};
  
  
}

export function combinePlans(...plans) {

  let totalRevenue = null;
  let totalCustomer = null;
  let mealBreakdown = {};
  if (plans.length===0) return null;
  for(const plan of plans){
       totalRevenue += plan.totalCost;
       totalCustomer +=1;
       if(mealBreakdown[plan.mealType]){
         mealBreakdown[plan.mealType] +=1;
       }
       else{
        mealBreakdown[plan.mealType] = 1;
       }
  }

  return {totalCustomers :totalCustomer , totalRevenue :totalRevenue , mealBreakdown : mealBreakdown};

}


export function applyAddons(plan, ...addons) {
  if(plan===null) return null;

  
  let addonPrice = 0;
  let addonNames = [];

  for(const addon of addons){
    if (addon===null || addon.price ===undefined) return null;
    addonPrice += addon.price;
    addonNames.push(addon.name);
  }

  const newPlan = {...plan};
  newPlan.dailyRate += addonPrice;
  newPlan.totalCost = newPlan.dailyRate * newPlan.days;
  newPlan.addonNames = addonNames;

  return newPlan;

}
