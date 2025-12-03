### Theory

Ordinary Differential Equations (ODEs) describe how a quantity changes with respect to another variable, typically time. Many real-world systems such as population growth, chemical reactions, heat transfer, and motion of objects can be modeled using ODEs. However, not all ODEs can be solved analytically using standard calculus methods, especially when equations become complex or non-linear.  

Numerical methods provide an effective way to approximate the solutions of first-order ODEs by computing the value of the dependent variable step-by-step over a defined interval.

In this experiment, two widely used numerical techniques are explored:

1. **Euler’s Method**  
   Euler’s Method is a simple and straightforward numerical technique that estimates the solution by taking small steps along the curve. It uses the current slope to predict the next point. Although easy to implement, the method may accumulate error due to its basic linear approximation.

2. **4th Order Runge-Kutta Method (RK4)**  
   The RK4 method improves accuracy significantly by evaluating slopes at multiple points within each step. It combines these slopes in a weighted manner to produce a more precise estimate of the next value. RK4 is commonly preferred in scientific and engineering applications due to its balance of accuracy and computational efficiency.

By using these two techniques, the experiment helps understand:
- How step size affects accuracy
- How numerical solutions approximate true behavior of dynamic systems
- The comparative performance of a basic and an advanced numerical solver

This experiment demonstrates the importance of numerical ODE solving in situations where analytical solutions are difficult, time-consuming, or impossible to obtain.
