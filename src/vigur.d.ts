// Type definitions for node_modules/vigur/src/vigur.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * Vigur
 * 
 * A two-dimensional vector library written with clarity and ease of use in
 * mind. Leverages on new ES6 features and syntax.
 */
declare module "vigur" {
	class Vector {
		x: number;
		y: number;
		/**
		 * 
		 * @param x 
		 * @param y 
		 * @return  
		 */
		constructor (x : number, y : number);
			
		/**
		 * Magnitude (or length) of the vector.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).magnitude;
		 *     // => 3.605551275463989
		 * 
		 * @return {Number} Magnitude (or length) of the vector.
		 */
		magnitude : number;
			
		/**
		 * Alias for Vector#magnitude.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).length;
		 *     // => 3.605551275463989
		 * 
		 * @return {Number} Magnitude (or length) of the vector.
		 */
		length : number;
			
		/**
		 * Check if the vector is the zero vector.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).isZero;
		 *     // => false
		 * 
		 * @return {Boolean}
		 */
		isZero : boolean;
			
		/**
		 * The horizontal angle of the vector.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).horizontalAngle;
		 *     // => 0.982793723247329
		 * 
		 * @return {Number} The angle in radians.
		 */
		horizontalAngle : number;
			
		/**
		 * The vertical angle of the vector.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).verticalAngle;
		 *     // => 0.5880026035475675
		 * 
		 * @return {Number} The angle in radians.
		 */
		verticalAngle : number;
			
		/**
		 * The direction of the vector (alias for Vector#horizontalAngle).
		 * 
		 * ### Example:
		 *     new Vector(2, 3).direction;
		 *     // => 0.982793723247329
		 * 
		 * @return {Number} The direction in radians.
		 */
		direction : number;
			
		/**
		 * Get the normalized vector without affecting the current instance.
		 * 
		 * ### Example:
		 *     let vector = new Vector(2, 3);
		 *     vector.normalized;
		 *     // => Vector {x: 0.5547001962252291, y: 0.8320502943378437}
		 *     vector;
		 *     // => Vector {x: 2, y: 3}
		 * 
		 * @return {Vector} A new instance of Vector.
		 */
		normalized : Vector;
			
		/**
		 * Normalize the vector.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).normalize();
		 *     // => Vector {x: 0.5547001962252291, y: 0.8320502943378437}
		 * 
		 * @return {Vector} The vector instance.
		 * @return  
		 */
		normalize(): /* !this */ any;
			
		/**
		 * Invert the vector.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).invert();
		 *     // => Vector {x: -2, y: -3}
		 * 
		 * @return {Vector} The vector instance.
		 * @return  
		 */
		invert(): /* !this */ any;
			
		/**
		 * Round the values of both axes to their nearest integers.
		 * 
		 * ### Example:
		 *     new Vector(2.3, 3.5).round();
		 *     // => Vector {x: 2, y: 4}
		 * 
		 * @return {Vector} The vector instance.
		 * @return  
		 */
		round(): /* !this */ any;
			
		/**
		 * Make the vector the zero vector.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).zero();
		 *     // => Vector {x: 0, y: 0}
		 * 
		 * @return {Vector} The vector instance.
		 * @return  
		 */
		zero(): /* !this */ any;
			
		/**
		 * Return a new instance of the same vector.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).clone();
		 *     // => Vector {x: 2, y: 3}
		 * 
		 * @return {Vector} A new instance of Vector.
		 * @return  
		 */
		clone(): Vector;
			
		/**
		 * Convert the Vector instance to an array.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).toArray();
		 *     // => [2, 3]
		 * 
		 * @return {Array} The vector as an array.
		 * @return  
		 */
		toArray(): Array<number>;
			
		/**
		 * Convert the Vector instance to an object.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).toObject();
		 *     // => {x: 2, y: 3}
		 * 
		 * @return {Object} The vector as an object.
		 * @return  
		 */
		toObject(): any;
			
		/**
		 * Add a value or another vector to the vector.
		 * 
		 * ### Example
		 *     new Vector(2, 3).add(2);
		 *     // => Vector {x: 4, y: 5}
		 *     new Vector(2, 3).add(new Vector(2, 5));
		 *     // => Vector {x: 4, y: 8}
		 * 
		 * @param {Number|Vector} value The value or vector to add.
		 * @return {Vector} The vector instance.
		 * @param value 
		 * @return  
		 */
		add(value : number | Vector): /* !this */ any;
			
		/**
		 * Subtract a value or another vector from the vector.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).subtract(2);
		 *     // => Vector {x: 0, y: 1}
		 *     new Vector(2, 3).subtract(new Vector(2, 5));
		 *     // => Vector {x: 0, y: -2}
		 * 
		 * @param {Number|Vector} value The value or vector to add.
		 * @return {Vector} The vector instance.
		 * @param value 
		 * @return  
		 */
		subtract(value : number | Vector): /* !this */ any;
			
		/**
		 * Multiply the vector with a value or another vector.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).multiply(2);
		 *     // => Vector {x: 4, y: 6}
		 *     new Vector(2, 3).multiply(new Vector(2, 5));
		 *     // => Vector {x: 4, y: 15}
		 * 
		 * @param {Number|Vector} value The value or vector with which to multiply.
		 * @return {Vector} The vector instance.
		 * @param value 
		 * @return  
		 */
		multiply(value : number | Vector): /* !this */ any;
			
		/**
		 * Divide the vector with a value or another vector.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).divide(2);
		 *     // => Vector {x: 1, y: 0.5}
		 *     new Vector(2, 3).divide(new Vector(2, 5));
		 *     // => Vector {x: 1, y: 0.6}
		 * 
		 * @param {Number|Vector} value The value or vector with which to divide.
		 * @return {Vector} The vector instance.
		 * @param value 
		 * @return  
		 */
		divide(value : number | Vector): /* !this */ any;
			
		/**
		 * Rotate the vector by an angle.
		 * 
		 * ### Example:
		 *     new Vector(1, 0).rotate(Math.PI / 2).rounded;
		 *     // => Vector {x: 0, y: 1}
		 * 
		 * @param {Number} angle The angle in radians.
		 * @return {Vector} The vector instance.
		 * @param angle 
		 * @return  
		 */
		rotate(angle : number): /* !this */ any;
			
		/**
		 * The dot product with another vector.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).dot(new Vector(2, 5));
		 *     // => 19
		 * 
		 * @param {Vector} other The other vector with which to calculate.
		 * @return {Number} The dot product.
		 * @param other 
		 * @return  
		 */
		dot(other : Vector): number;
			
		/**
		 * The cross product with another vector.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).cross(new Vector(2, 5));
		 *     // => 4
		 * 
		 * @param {Vector} other The other vector with which to calculate.
		 * @return {Number} The cross product.
		 * @param other 
		 * @return  
		 */
		cross(other : Vector): number;
			
		/**
		 * Check if the vector is equal to another vector.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).isEqual(new Vector(2, 5));
		 *     // => false
		 * 
		 * @param {Vector} other Another vector instance to compare.
		 * @return {Boolean}
		 * @param other 
		 * @return  
		 */
		isEqual(other : Vector): boolean;
			
		/**
		 * The Euclidean distance of another vector.
		 * 
		 * ### Example:
		 *     new Vector(2, 3).distance(new Vector(2, 5));
		 *     // => 2
		 * 
		 * @param {Vector} other The other vector with which to calculate.
		 * @return {Number} The distance between the two vectors.
		 * @param other 
		 * @return  
		 */
		distance(other : Vector): number;
			
		/**
		 * 
		 */
		inverted : Vector;
			
		/**
		 * 
		 */
		rounded : Vector;
			
		/**
		 * 
		 * @param degrees 
		 * @return  
		 */
		degreesToRadians(degrees : number): number;
			
		/**
		 * 
		 * @param radians 
		 * @return  
		 */
		radiansToDegrees(radians : number): number;
	}

	export default Vector;
}