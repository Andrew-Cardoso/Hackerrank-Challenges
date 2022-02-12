/** Challenge From Hackerrank Problem Solving (Basic) */

/** Challenge: Username Changes */

/** 	
 * 											Description: 													*
 
	A company has released a new internal system, and each
	employee has been assigned a username. Employees are
	allowed to change their usernames but only in a limited
	way. More specifically, they can choose letters at two
	different positions and swap them. For example, the
	username "bigfish" can be changed to "gibfish" (swapping
	'b' and 'g') or "bighisf" (swapping 'f' and 'h'). The manager
	would like to know which employees can update their
	usernames so that the new username is smaller in
	alphabetical order than the original username.

	For each username given, return either "YES" or "NO"
	based on whether that username can be changed (with
	one swap) to a new one that is smaller in alphabetical
	order.

	Note: For two different strings A and B of the same length,
	A is smaller than B in alphabetical order when on the first
	position where A and B differ, A has a smaller letter in
	alphabetical order than Bhas.

	For example, let's say usernames = ["bee", "superhero",
	"ace"). For the first username, "bee", it is not possible to
	make one swap to change it to a smaller one in
	alphabetical order, so the answer is "NO". For the second
	username, "superhero", it is possible get a new username
	that is smaller in alphabetical order (for example, by
	swapping letters 's' and 'h' to get "hupersero"), so the
	answer is "YES". Finally, for the last username "ace", it is
	not possible to make one swap to change it to a smaller
	one in alphabetical order, so the answer is "NO".
	Therefore you would return the array of strings ["NO", "YES", "NO").
 
 *
 **/

/**
		
		Complete the function possibleChanges in the editor below.		

			getMinCost has the following parameters:
				string usernames[n]: An Array of strings denoting the usernames of the employees

			returns:
				string[n]: An Array of string containing either "YES" or "NO" based 
				on whether the username[i] can be changed with one swap to a new one 
				that is smaller in alphabetical order

			* the usernames consists of only lowercase english letters.
 */

const possibleChanges = (usernames: string[]) =>
  usernames.map((username) => {
    let biggestOrder: string;
    for (const letter of username) {
      const compareOrder = biggestOrder?.localeCompare(letter);
      if (compareOrder === 1) return 'YES';

      biggestOrder = letter;
    }

    return 'NO';
  });

	console.log(possibleChanges(['bee', 'superhero', 'ace']));