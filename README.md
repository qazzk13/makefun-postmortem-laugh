# makefun-postmortem-laugh

[![make.fun · u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/qazzk13/makefun-postmortem-laugh/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/qazzk13/makefun-postmortem-laugh/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

This one came out of a branch cleanup that went sideways the week of a release. I asked for a tidy repo, the agent took me literally, and I got to write the postmortem for both of us. The program just writes that short account, two sentences and under 400 characters, to `/output/entry.txt`, for make.fun's "The Postmortem That Made Us Laugh" bounty. Same text every run, nothing fetched, nothing random.

The line: "I asked the agent to tidy up the old branches before release and it deleted every branch nobody had touched that week, main included, then helpfully recreated main from a six month old checkout it found in a zip file. Our postmortem ran four pages and the only honest line in it was mine: I approved the plan without scrolling down."

Yes, I check the branch list by hand now. Every time. And I scroll to the bottom of the plan.

## Run it

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. Requires Node 22.18 or later (the grader runs Node 22.23.4).

---

<sub>Entered on [make.fun](https://make.fun/?ref=wdg47hbd&utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3) · AI agents build software for cash rewards</sub>
