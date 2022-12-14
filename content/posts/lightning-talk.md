---
title: "Minimizing the Cost Function in Data Projects (or, Keep it Simple, Stupid)"
description: "My NormConf Lightning Talk - the transcript"
date: 2022-12-05T00:00:01-00:00
featured_image: "/images/lightning-talk-title-slide.png"
tags: ["NormConf"]
draft: false
---

{{< youtube Z-xnFdtCL0o >}}

I've been working in data and computational science in various capacities in geophysics, finance, civic tech, social good, business analytics, and numerous hobbies for nearly 20 years. In that time, one universal truth I've found is that data work can get complicated fast. Even the so-called easy things like counting, time, measurements, and naming things aren't always easy, but sometimes we make them harder than they need to be. It's a constant battle to remember that a complicated solution might be fun to build, but it's better to start simple and only add complexity where it's merited.

{{< figure src="/images/doingtoomuch.png" >}}
One of the quickest ways we make our work harder for ourselves is by setting out with stars in our eyes and an overly vague plan. Having only a hand-wavy sense of direction instead of a clearly defined roadmap, it's easy to underestimate the time and effort it's going to take to fulfill what seems like a simple request.

{{< figure src="/images/iceberghiddenrequest.png" >}}
Before we can do effective planning, it's important to understand what kind of pitfalls await. I like to think of product and project design as an optimization problem. By doing that, we can imagine there's a cost function capturing the variables that will bite us if we don't set out to mitigate them. There's no shortage of sources - ill-posed problem statements, data quality issues, unexposed use cases that are almost (but not quite) covered by the planned solution, and good old fashioned scope creep. While a lot of these are broadly universal, they present differently, so it's worth doing a bit of exploratory work to get a sense of what flavor they're taking on in each new situation.

{{< figure src="/images/overwhelmed.png" >}}
Hidden complexities lead to complications when there are subtle variations in terminology or when teams don't have the same expectations (much less an equal understanding of data in general or the nuances of your particular data). A lot of the requests data teams receive come from outside the data org, and it's not always clear what the underlying problem statement is that's driving the ticket that lands in the backlog. Plain language requests can be conceptually trivial, but operationally complex. Overloaded terms (especially across partner teams, but also in field names from multiple sources that sound like they're the same thing, but are nuanced in ways that make them not interchangeable) can give the illusion that everyone's on the same page - until you start coding.

{{< figure src="/images/padme-anakin-new-project.png" >}}
A lot of issues can be headed off at the pass by planning intentionally. This isn't something that should be done in isolation, but who's brought to the planning table, how, and when, matters. For smaller, well-posed requests, it might be sufficient to get started with a short written spec and have only a quick catchup or comment exchange to flesh out the answers to a few clarifying questions. For larger, foundational, and more complex initiatives, spending a bit of time and effort in a collaborative planning workshop that's rooted in data quality and data operations can pay serious dividends. After some initial level-setting and exploratory data work, gather a well-curated group of representatives from data, downstream user teams, and other impacted parties for a moderated session to define the data product or project. **Don't be afraid to ask what feel like stupid questions, but remember that asking vague questions is going to net imprecise answers.** We want to move the plan from being an ill-posed problem with too many degrees of freedom to a well-posed one, by agreeing which variables to fix. This is a useful approach in planning, building, and improving the data product, executing a project, defining ownership, responsibilities, and SLAs, and designing quality checks to enforce them. To keep the planning session focused and reduce the friction to asking basic but critical questions, it can be incredibly valuable to have an experienced operations- and/or product-minded member of the data team who's _not_ deeply involved with the project at hand act as moderator.

{{< figure src="/images/simplicityinexecution.png" >}}
**Creating a simple plan doesn't mean making a vague one.** It's not uncommon to find that setting yourself up for simplicity in execution requires complexity in definition. Strive to find the simplest solution that meets the basic need. Once everyone's confident - or at least reasonably assured - that the foundational product is robust, it can comfortably be built upon by data or downstream teams. Functionality and complexity can be added, and modeling and decision-making can occur.

{{< figure src="/images/tapthesign.png" >}}
