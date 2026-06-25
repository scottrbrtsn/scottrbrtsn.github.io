How do we decompose a system into modules? Does is apply to decomposing organizations into teams?

In my experience, I've seen four approaches to this.

1. Ignore David Parnas completely or refuse to know he exists, And don't try to decompose anything.  
2. Naive decomposition is functional decomposition.  
3. iDesign Leverages David Parnas's paper and expands upon it with The Method, focusing on volatility based decomposition.
4. Residuality theory approaches all of this from a completely different angle.


Maybe it's okay to not even try to think about decomposing a problem.  If you're all by yourself and revenue and the user base is nonexistant, Why even take the time to establish an architecture if your product isn't really doing any good for anybody? 

But then the solution you're building starts to exceed a level of complication you're comfortable with and you want to structure it.  The most common way to decompose a problem is functional based decomposition.  A new data type? Let's add a service and a function for it.  Repeat N number of times.  Service three hundred and 45 needs data from service 2.  And now we start did the braid that leads to the spaghetti monster we all fear.  At Netflix, the Primeagen has described this very clearly: it takes months to get any real thing done because of the number of teams that have to coordinate, collaborate, and communicate to understand how to solve any particular problem.  

How might this manifest into your team?  I interviewed a company once. They described how they create their teams and organize around their microservices.  Two Pizza Teams Bezos said.  So when the features and the functions get large enough, more people are needed, the teams divide mitotically. Trend would lead to exactly what it sounds like.  Like a common carcinoma, Teams just keep expanding and generating and expanding and generating.  What happens when Team 35 needs something from Team 3?  And the organizational spaghetti monster reveals its head in a different way.

For the record, I don't eat much pizza, it's pretty terrible for anyone, and an insulting food group to offer anyone.  But when I did, I ate a whole pizza... Let's just say this is not a real approach for a high performing team.

Enter Juval Lowy and his iDesign Methodology.  Like finding Plato's essence, He explains how if you can slice from a different way. By focusing on business volatilities and not just simple functions, you can reduce the number of things, which then would reduce the number of interactions, which would reduce the number of developers required, which would reduce total cost of ownership.  

Out of the similar Microsoft architect community, A former design architect himself, Barry O'Reilly has discovered and approach what he calls residuality theory. Many iDesign architects explain how 80% of their work has been with brownfield projects.  This is precisely Barry's critique.  And I realize now my struggle with the eye design methodology.  When starting fresh with greenfield projects, there's little known about the solution space.  Software is, as many have argued, a wicked problem.  If you don't know what you're dealing with, Barry argues residuality is the only way to properly find a modular decomposition that will achieve criticality and not extreme cost overrun.  Many, as he argues, like myself, Come to the realization that we all practice this way of thinking behind the scenes.

When you've experienced enough uncertainty in your life.  When you've met enough people to hear boastful, confident, opinionated expertise, which exists on either side of the aisle, the only conclusion is "it depends."  The statement "it depends" always follows with "what happens when?"


What happens when [Developer 2](https://scottrbrtsn.github.io/2026/06/25/developer-2.html) is added to your team? 

What happens when your brilliant new hire turns out to be a [Brilliant Hole](https://scottrbrtsn.github.io/2026/02/09/brilliant-holes.html)?

What happens when you realize there are better [Leadership Styles](https://scottrbrtsn.github.io/2025/12/15/leadership-styles.html) than your default personality? 
