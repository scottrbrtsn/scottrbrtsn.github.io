# Intro
At the time of opening this, I received the following article: https://www.bloomberg.com/news/articles/2026-11-02/goldman-restricts-traders-and-bankers-from-using-some-ai-tools

It's just so interesting to me a lot of the lessons, if not all of them, are things that were true about software and software teams and even the organization of distributed systems. We tried to go full spec up front with waterfall and that didn't work. We tried to go full tilt agile and that didn't work. We're tried to go full tilt vibe coding and that doesn't work.  Spec-driven development?  Or do we expect to arrive at some Agile Big Design Up Front where the SDLC is so fast we can change the big design and rewrite the entire system in short order?  

This is a brief collection of layers I think about when thinking of Agentic Software Development.

1. Tiers of agent tooling
1. The Spectrum of Agent-Driven-Development
1. Principles I held before LLMs, I believe still hold true today.

## Tiers of agent tooling
These tiers can be combined within a single SDLC organization depending on the context (i.e. they are not mutually exclusive and an individual could span across all of them in a single day).

### Full access to foundation models, unlimited budget. 

### Full access to foundation models, capped token budget. 

### No access to foundation models, but access to open models with a proper compute resource. 
These environments might be sensitive in nature, and therefore even with private foundation accounts, the data is not allowed out of the org's network.  

### No access to LLMs. 
This is typical for extremely sensitive environments, where compute for LLMs is not in the budget, or for projects known to require bleeding edge understanding that LLMs cannot be successful.  

## The Spectrum of Agent-Driven-Development 
I can see justification for all of these depending on the context.

1. No agents are allowed to touch my code.  My field is too bleeding edge, or too sensitive/risky. 
1. We only allow agents for POC work, and then we scrap the POC, leveraging what we can, replacing most of it and applying structure.
1. Agents are allowed, but a human should be able to read, review, and navigate the codebase -> "A developer must be able to wake up at 3 am and troubleshoot emergencies by hand if necessary"
1. We don't read the code.  Our skill and spec is so good that we don't really suffer problems.
1. We don't read the code.  We suffer problems, but our domain/project yields it is ok if things aren't working perfectly.
1. All vibes, baby...


## [Principles](https://scottrbrtsn.github.io/2025/11/10/principles.html) I held before LLMs, I believe still hold true today.
So then what's the spec for the spec? 

### A shift left mindset
Constraints make us better, shifting left catches things earlier.  

- Some just write code.  Some spec the code. Some can spec the spec.
- Some dev and test in the cloud.  Some dev locally then test in the cloud.  Some can dev and test all locally.   

### Tighten the cycle (opt for the surgical approach)
- Task isolation limits complexity and allows for faster feedback loops.
- This can lead to a "less is more" solution.

### Metrics
- Self-reflection, measurement, and data driven processes lead to more optimal solutions. 
- Avoid the measure becoming the target though... 

### Reduce complexity and cognitive load
- We are all, after all, still human
