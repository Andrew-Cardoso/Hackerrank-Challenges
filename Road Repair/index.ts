/** Challenge From Hackerrank Problem Solving (Basic) */

/** Challenge: Road Repair */

/** 	
 * 											Description: 													*
 
	A number of points along the highway are in need of
	repair. An equal number of crews are available, stationed
	at various points along the highway. They must move
	along the highway to reach an assigned point. Given that 
	one crew must be assigned to each Job, what is the 
	minimum total amount of distance traveled by all crews 
	before they can begin work? 

	For example, given crews at points (1,3,5) and required repairs at (3,5,7), 
	one possible minimum assignment would be (1 => 3, 3 => 5, 5 => 7) for a total of 6 units traveled	
 
 *
 **/

/**
		
		Complete the function getMinCost In the editor below. The 
		function should return the minimum possible total 
		distance traveled as an integer. 


		getMinCost has the following parameters:

		* crew_id: a vector of integers
		* job_id: a vector of integers

 */

const getMinCost = (crew_id: number[], job_id: number[]) => {
  const orderAsc = (a: number, b: number) => a - b;
  crew_id.sort(orderAsc);
  job_id.sort(orderAsc);
	
  const calculateDistance = (i: number) => {
    const job = job_id[i];
    const crew = crew_id[i];
    return job > crew ? job - crew : crew - job;
  };

  let minAssigment = 0;

  for (let i = 0; i < crew_id.length; i++) minAssigment += calculateDistance(i);

  return minAssigment;
};

console.log(getMinCost([1, 3, 5], [5, 1, 7]));
