---
title: "Dimensions of Data Quality"
description: "completeness, consistency, correctness, timeliness, validity"
date: 2022-12-11T00:00:01-00:00
featured_image: "/images/bad-egg.png"
tags: ["data quality", "data ops"]
draft: false
---

Everyone wants "good" data. Almost as universal is the sense that the data you're working with is...not good. Being able to objectively measure data quality is important for ensuring downstream modeling and decision making is built on reliable data, but it can be hard to measure and report on data quality without a framework for identifying what features of the data are good/bad.

Data features with expectations that can be defined and measured against are _dimensions_ of data quality. Depending on who's counting, there are somewhere between 5-10 generally accepted dimensions. I like to keep the list shorter, both because it's easier for me to remember, but also because it starts getting really confusing when there's too much room for overlap between dimensions.

**Completeness**
For our data to be complete, there should be no nulls where nulls are not allowed - that may mean a record exists but a non-nullable field is blank, or an expected record could be missing entirely. Uniqueness is sometimes included in lists of data quality dimensions; I prefer to think of it as an element of completeness - "overcompleteness," in a sense.

**Consistency**
When we have multiple sources providing values for a datapoint that are describing the same thing, or the same datapoint that's included in multiple places within our data pipeline, we can measure consistency by checking whether things that should be the same _are_ (or within some tolerance). If they are different, we've got a follow-up question - which of them is correct - but that's another quality dimension. Spike or outlier checks would also fall under the consistency umbrella (looking for consistency over time), as would correlation checks between variables whose relationship you expect to be governed by a fixed formula (eg, if you have someone's date of birth, age, and date of record, you could check whether they've answered the age and DOB questions _consistently_).

**Correctness**
Accuracy, or correctness, is exactly what it sounds like - is the data _right_? Seems simple - but it can be surprisingly difficult to measure this one! There's a lot of overlap between consistency and correctness. Correctness requires the establishment of a source of truth. That could take the form of a "more trusted source" over other data sources, or it could be calculated from more reliable, related datapoints.

**Timeliness**
This may not be an important consideration for all types of data, but if there's a time component to a dataset, we usually expect that data to be available by some fixed point in order to be available downstream. The "timeliness" dimension of data quality measures whether or not data population occurs by the time it's needed.

**Validity**
If we have clear expectations for whether a datapoint is the correct type, format, and/or within an accepted set or range, we can assess its validity. This could be as simple as making sure date fields contain dates, _int_'s contain integers, and so on. We often have low-level checks built in that will catch or block population of the most egregious instances of invalid data, so explicit checks that need to be added tend to focus on more nuanced definitions of what is a valid entry for a field - correlations will be limited to the range -1 to 1, age will not be negative, call direction is either "inbound" or "outbound" (but what about "Inbound" or "in bound"?)

Spending the time during data product (and/or project) planning to map out data quality dimension expectations is a useful exercise that can help guide data model and SLA definitions, as well as the creation of quality checks to ensure maintenance of high quality data. 
