## Theory

### Introduction to Ordinary Differential Equations
An Ordinary Differential Equation (ODE) is an equation that involves an unknown function and its derivatives with respect to a single independent variable, usually time. ODEs are widely used to model real-world phenomena such as population growth, motion of objects, electrical circuits, heat transfer, and chemical reactions.
Numerical methods provide an effective way to approximate the solutions of first-order ODEs by computing the value of the dependent variable step-by-step over a defined interval.

A general first-order ODE can be written as:

<img width="149" height="71" alt="image" src="https://github.com/user-attachments/assets/1c752219-8bee-4366-9325-c8b3992a912a" />

where 𝑦 is the dependent variable and 𝑥 is the independent variable.

In many practical problems, obtaining an exact analytical solution to an ODE is difficult or impossible, particularly for nonlinear equations. In such cases, numerical methods are employed to approximate the solution over a specified interval.

### Principle of Numerical Solution of ODEs
Numerical methods solve ODEs by starting from a known initial condition and computing successive values of the dependent variable using a chosen step size. Given an initial value problem of the form:

<img width="292" height="61" alt="image" src="https://github.com/user-attachments/assets/af794c89-7a2a-4ded-9841-e11f834e4c7b" />

the solution is approximated at discrete points 𝑥1,𝑥2,… using iterative formulas.
The accuracy of the numerical solution depends on the step size and the method used.

### Euler’s Method
Euler’s Method is the simplest numerical technique for solving first-order ODEs. It uses the slope at the current point to estimate the value of the function at the next point.

The numerical approximation is given by:

<img width="259" height="48" alt="image" src="https://github.com/user-attachments/assets/cd2105bd-d836-4f14-88af-3c1bb7a418bf" />

where:
- ℎ is the step size
- (X𝑛,Y𝑛) is the current point

Euler’s Method is easy to implement but may produce significant errors if the step size is large, as it relies on a linear approximation of the solution curve.

### Fourth-Order Runge–Kutta (RK4) Method
The Fourth-Order Runge–Kutta method (RK4) is a more accurate and widely used numerical technique for solving ODEs. Instead of using a single slope, RK4 evaluates slopes at multiple points within each step and combines them to obtain a better approximation.

The RK4 update formula is:
<img width="401" height="268" alt="image" src="https://github.com/user-attachments/assets/1b53a4a3-572e-4cc2-86a7-32195ebbeac2" />

This method provides significantly better accuracy compared to Euler’s Method while maintaining reasonable computational efficiency.

### Comparison of Euler and Runge–Kutta Methods
Euler’s Method is simple and computationally inexpensive but less accurate, especially for larger step sizes. In contrast, the RK4 method produces more accurate results by considering the behavior of the solution within each step. As a result, RK4 is widely used in scientific and engineering simulations where accuracy is important.

### Importance and Applications
Numerical solutions of ODEs are essential in situations where analytical solutions are unavailable or impractical. These methods are extensively used in physics, engineering, biology, economics, and environmental modeling to simulate dynamic systems and predict system behavior over time.

