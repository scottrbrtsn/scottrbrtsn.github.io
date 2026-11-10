# Intro
At the time of opening this, I received the following [article](https://www.bloomberg.com/news/articles/2026-11-02/goldman-restricts-traders-and-bankers-from-using-some-ai-tools)

It's just so interesting to me a lot of the lessons, if not all of them, are things that were true about software and software teams and even the organization of distributed systems. We tried to go full spec up front with waterfall and that didn't work. We tried to go full tilt agile and that didn't work. We're tried to go full tilt vibe coding and that doesn't work.  Spec-driven development?  Or do we expect to arrive at some Agile Big Design Up Front where the SDLC is so fast we can change the big design and rewrite the entire system in short order?  

This is a brief collection of layers I think about when thinking of Agentic Software Development.

1. Tiers of agent tooling
1. The Spectrum of Agent-Driven-Development
1. Principles I held before LLMs, I believe still hold true today.

## Tiers of agent tooling
These tiers can be combined within a single SDLC organization depending on the context (i.e. they are not mutually exclusive and an individual could span across all of them in a single day).

### 1. Full access to foundation models, unlimited budget. 
I am thinking of the dude that burned $1.5 million, tokenmaxxing to the extreme.  But like, I do not see reports of positive ROI...🤔

### Full access to foundation models, capped token budget. 
I currently have this, and it's nice enough for the business problems we solve.  A majority of information is public, so writing robust documentation has never been easier.  I have found a sweet spot for developing isolated modules for the problems we have to solve.  But I'd be very concerned with a capped budget of $30/month for big projects.  I know folks working on big projects, and they don't use Agents because the agents get lost.  This applies mostly to legacy codebases.  But like, reports show agents accelerate the path towards a legacy codebase.  How do you avoid the bloated "Big Ball of Mud."

### No access to foundation models, but access to open models with a proper compute resource. 
These environments might be sensitive in nature, and therefore even with private foundation accounts, the data is not allowed out of the org's network. Before I received my token budget, I used Brave AI.  I tried spinning up my own agents by my video card doesn't not allow for very big models.  30B seems to be nice but I could see being extremely effective with a maxed out Gemma or Qwen.  This would flatten the token budget to enable unlimited budget in sensitive environments.   

### No access to LLMs. 
This is typical for extremely sensitive environments, where compute for LLMs is not in the budget, or for projects known to require bleeding edge understanding that LLMs cannot be successful.  

I believe I will always be able to operate in these types of environments.  I am not confident today's junior engineers can say the same.  

## The Spectrum of Agent-Driven-Development 
I can see justification for all of these depending on the context.

1. No agents are allowed to touch my code.  My field is too bleeding edge, or too sensitive/risky. 
1. We only allow agents for POC work, and then we scrap the POC, leveraging what we can, replacing most of it and applying structure.
1. Agents are allowed, but a human should be able to read, review, and navigate the codebase -> "A developer must be able to wake up at 3 am and troubleshoot emergencies by hand if necessary"
1. We don't read the code.  Our skill and spec is so good that we don't really suffer problems.
1. We don't read the code.  We suffer problems, but our domain/project yields it is ok if things aren't working perfectly.
1. All vibes, baby...

## [Principles](https://scottrbrtsn.github.io/2025/11/10/principles.html) I held before LLMs, I believe still hold true today.
The [DORA Report](https://cloud.google.com/resources/content/dora-roi-of-ai-assisted-software-development) has a lot to say about this.  

One major takeaway I recall went something like, "AI only exaggerates the maturity level already present in the team."

Just today Laura Tacho (former CTO at DevEx) posted: 
>"Hear me out: AI is quickly exposing that we actually don't know what we should be building after all...Alignment is SO HARD."

While this has also always been true, we are forced to face the hard truth:  Building the right thing, is hardest of all.  

Engineers used to be hesitant to build the wrong thing, because building the wrong thing correctly is a giant waste of everyone's time and investment.

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

## A confirming Framework: Local First Development
I won't redundantly belabor ideas that are not my own.  But the idea of placing constraints on our software, can be done, and lead to autonomy, greater control, and better technical solutions. 

[https://local-first.com/articles/local-first-paradigm/](https://local-first.com/articles/local-first-paradigm/)


