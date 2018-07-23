# The Shakespeare and Monkey Problem
Evolutionary Computing - Genetic Algorithm
![Monkeys](https://blogs.illinois.edu/files/25/14943/268.jpg)
## Why this algorithm is necessary?

If you had a monkey typing at a typewriter randomly for an inifinity amount of time, eventually in some moment of the time this monkey would type out the completes works of Shakespeare.

Okay, simplifing the problem, let's say the only thing we want from the monkey is  

### **to be or not to be**

let's imagine a keyboard only with a-z and spacebar character.

**likelihood of typing a "t" randomly is 1/27**

**likelihood of typing a "to" randomly is 1/27 * 1/27**

likelihood of typing the entire phrase: (1/27) ^ 18

1 in
**58,149,737,003,040,059,690,390,168**

A computer simulation with 100.000 phrases per second would take:

~ 18,439,160,642,770 years

Don't forget that the age of universe is 13,750,000,000 years (estimated).

So that way is unworkable.

## Solution

One way to solve this is with an algorithm that:
1. Starts to generate phrases randomly. 
2. After every generation, it autoevolves based in the accurary of phrases giving each phrase a fitness. 
3. Select the best ones and mix then based in some rule eg.: as half of one phrase and half of other. 
4. After that, we repeat the steps until we get to the target phrase.

That concept that we call **Genetic Algorithm**

![Solution](https://media.giphy.com/media/L07I25uEUqkTvVoBe7/giphy.gif)

Have some fun and spread the word =P
Any questions? josebezerraneto@outlook.com
