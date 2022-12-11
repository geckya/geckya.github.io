---
title: "SMART Data Ops"
description: "What makes a good data quality check?"
date: 2022-12-12T00:00:01-00:00
featured_image: "/images/bad-egg.png"
tags: ["data quality", "data ops"]
draft: false
---

Data quality checks are a critical tool in the data pro's toolbox to ensure SLAs are maintained, but poorly designed checks can lead to a life of on-call misery, a constant flow of "why is this data wrong?" inquiries, or (worst of all) unecessarily Bad Data. But what makes a good data quality check?

**Specific** - Willy Wonka's egg checker returned two possible values - "good" and "bad" - but data quality checks don't (and shouldn't!) work that way. A data quality check should be set up to flag datapoints that fail a specific test addressing a [dimension of data quality](posts/data-quality-dimensions); an expected field or record may be missing or a value may be outside an acceptable range; there may be inconsistent indications of what a value should be, coming from different sources - and so on. 

**Maximum Signal-to-Noise Ratio** - Aim for the right weighting between true vs. false positives. Remember the story of the boy who called "wolf"? A check that triggers too often for false positives train the on-call person to "ack" and ignore. These noisy checks are annoying at best, and eventually become dangerous. That said, if it's crucial that no true positives will slip through your check without triggering it, you may need to cast a wider net on inception, then tune over time.

**Actionable** - A check triggers. Now what? Actionability requires both an owner and an expected response. If there's no clear action to be taken, the most correct response is to quarantine (and eventually eliminate) the check. It shouldn't disrupt someone's work, and definitely shouldn't disturb them outside work hours. Having a would-be "check" run in log-only mode can be a useful means of producing data for data quality _analysis_, but that's a different kettle of fish. Let's call that "reporting" or "monitoring" rather than considering it a true "quality check."

**Relevant** - Hopefully, you've been through the process of defining SLAs for your data product. Every check you introduce to production should help you meet one or more of those SLAs. If not, is it because the check doesn't really contribute to maintaining your quality needs, or because you're missing an SLA?

**Timely** - It's important to remember that "timely" doesn't necessarily mean "as soon as possible." Timeliness, here, has two parts - timing and positioning of the check. What times, and how often, should a check run? Should a failure block population of the suspect data point(s), be treated as more of a warning (to be reviewed and addressed by the on-call person), or stop the presses entirely? Good checks flag issues on a cadence that makes sense for the use case. That means thinking critically about whether a quality issue that surfaces at 2AM demands an immediate response from an on-call person, and whether a single bad datapoint should affect the population of unrelated data.
